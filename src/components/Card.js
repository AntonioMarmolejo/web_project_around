import PopupWithImage from "./PopupWithImage.js";

class Card {
    constructor({ data, handleCardClick }, cardSelector) {
        this._link = data.link;
        this._name = data.name;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const newElemnt = document
            .querySelector(this._cardSelector)
            .content
            .querySelector(".cards__element")
            .cloneNode("true");

        return newElemnt;
    }

    _handleLikeAndDislike() {
        //A la tarjeta creada se le da el Evento Click que activa o desactiva el boton de me gusta si el usuario lo selecciona
        this._element.querySelector(".cards__element_itemImage").addEventListener("click", function (event) {
            event.target.classList.toggle("cards__like_active");
        });
    }

    _handleRemove() {
        //A la tarjeta creada se le da el Evento click que nos permite eliminar la tarjeta seleccionada
        this._element.querySelector(".cards__element_trast").addEventListener("click", () => {
            this._element.remove();
        });
    }

    _showCard() {
        //A la tarjeta creada se le da el evento click que nos permite mostrar la tarjeta en la pantalla una vez que el usuario la seleccione
        this._element.querySelector(".cards__element_image").addEventListener("click", () => {
            PopupWithImage.open(this._link, this._name);
        });
    }

    _setEventListeners() {
        this._handleLikeAndDislike();
        this._handleRemove();
        this._showCard();
        // this._element.addEventListener("click", () => {
        //     this._handleCardClick(this._data);
        // })

        this._imagenElement.addEventListener("click", () => {
            this._handleCardClick({ link: this._link, name: this._name });
        });
    }
    //Utiliza la plantilla colocada en html para crear la nueva tarjeta ingresada por el usuario
    createNewCard(link, name) {
        this._element = this._getTemplate();
        this._element.querySelector(".cards__element_itemTitle").textContent = name;
        this._imagenElement = this._element.querySelector(".cards__element_image");
        this._imagenElement.src = link;
        this._imagenElement.alt = name;
        this._setEventListeners();

        return this._element;
    }

}

export default Card;
