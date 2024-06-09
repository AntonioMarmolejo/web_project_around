import Popup from "./Popup.js";
//Esta clase lo que nos permitirá es que al momento de darle click a una de las imágenes de nuestra página, este se mostrará en la ventana, y ademas tendrá un descripción corta en la parte inferior de la mistma.
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(link, name) {
        const popupElement = document.querySelector(this._popupSelector);
        this._image = popupElement.querySelector("#popup__image");
        this._description = popupElement.querySelector(".popup__title");

        if (this._image && this._description) {

            this._image.src = link;
            this._image.alt = name;
            this._description.textContent = name;
            super.open();
        } else {
            alert("Elemento de imagen o descripcion no encontradas")
        }

    }


}
