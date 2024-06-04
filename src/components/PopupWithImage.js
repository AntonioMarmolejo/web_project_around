import Popup from "./Popup.js";
//Esta clase lo que nos permitirá es que al momento de darle click a una de las imágenes de nuestra página, este se mostrará en la ventana, y ademas tendrá un descripción corta en la parte inferior de la mistma.
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = document.querySelector("#popup__image");
        this._description = document.querySelector(".popup__title");
    }

    open(link, name) {
        this._image.src = link;
        this._description.alt = name;
        this._description.textContent = name;
        super.open();
    }
}
