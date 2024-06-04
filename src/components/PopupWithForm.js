import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submiCallback) {
        super(popupSelector);
        this._submitButton = submiCallback;
    }

    _getInputValues() { //método para almacenar los valores de todos los campos de entrada
        const valuesImput = {} //Objeto para almacenar todos los valores de los campos de entrada
        const allInput = document.querySelectorAll("form__input");

        allInput.forEach((item) => {
            if (item.type === "text" || item.type === "number" || item.url) {
                valuesImput[item.value] = item.value
            }
        })
        return valuesImput;
    }
    close() {
        super.close();
        this._form.reset(); // Reiniciar el formulario al cerrar el popup
    }

    setEventListeners() {
        const closeButton = document.createElement("popup__close-button");
        super.setEventListeners();
        this._submitButton.addEventListener("submit", (evt) => {
            evt.preventDefault();
            const formData = this._getInputValues();
            this._submitButton(formData);
            this.close();
        });

        closeButton.addEventListener("click", (evt) => {
            evt.preventDefault();
            this.close();
        })

    }

}