import PopupWithImage from "./PopupWithImage.js";

class Card {
    constructor({ data, handleCardClick }, cardSelector) {
        this._link = data.link;
        this._name = data.name;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;

    }

    _getTemplate() {
        const newElemnt = document.querySelector(this._cardSelector).content.querySelector(".cards__element")
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
        const deleteConfirmation = document.querySelector(".popup_delete-card")
        const confirm = document.querySelector(".form__submit_confirmation");
        //A la tarjeta creada se le da el Evento click que nos permite eliminar la tarjeta seleccionada
        this._element.querySelector(".cards__element_trast").addEventListener("click", () => {

            deleteConfirmation.classList.toggle("popup_show");
            confirm.addEventListener("click", () => {
                this._element.remove();
                deleteConfirmation.classList.toggle("popup_show");
                console.log("¡La terjeta fue eliminada con Éxito!")
            });
        });
    }

    _showCard() {
        //A la tarjeta creada se le da el evento click que nos permite mostrar la tarjeta en la pantalla una vez que el usuario la seleccione
        this._element.querySelector(".cards__element_image").addEventListener("click", () => {
            this._handleCardClick({ link: this._link, name: this._name });
        });
    }


    _setEventListeners() {
        this._handleLikeAndDislike();
        this._handleRemove();
        this._showCard();
        this._imagenElement.addEventListener("click", () => {
            this._handleCardClick({ link: this._link, name: this._name });
        });
    }
    //Utiliza la plantilla colocada en html para crear la nueva tarjeta ingresada por el usuario
    createNewCard() {
        this._element = this._getTemplate();
        this._element.querySelector(".cards__element_itemTitle").textContent = this._name;
        this._imagenElement = this._element.querySelector(".cards__element_image");
        this._imagenElement.src = this._link;
        this._imagenElement.alt = this._name;
        this._setEventListeners();

        return this._element;
    }

}

export default Card;
