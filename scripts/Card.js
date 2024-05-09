import { showImage } from "./utils.js";

class Card {
    constructor(link, name, cardSelector) {
        this._link = link;
        this._name = name;
        this._cardSelector = cardSelector;
    }


    _getTemplate() {
        //Seleccionamos el template donde vamos a crear la nueva tarjeta //Clonamos el nodo de la tarjeta donde vamos a agregar el enlace
        const newElement = document.querySelector("#newElement").content.querySelector(".cards__element").cloneNode("true");
        return newElement;
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
            showImage(this._link, this._name);
        });
    }

    _setEventListeners() {
        this._handleLikeAndDislike();
        this._handleRemove();
        this._showCard();
    }
    //Utiliza la plantilla colocada en html para crear la nueva tarjeta ingresada por el usuario
    createNewCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        //Agregamos el enlace de la nueva imagen
        this._element.querySelector(".cards__element_image").src = this._link;
        this._element.querySelector(".cards__element_image").alt = this._name;

        //Agregamos el título de la nueva imagen
        this._element.querySelector(".cards__element_itemTitle").textContent = this._name;

        return this._element;
    }

}

export default Card;
