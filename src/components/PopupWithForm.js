import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submiCallback) {
        super(popupSelector);
        this._submitButton = submiCallback;
        this._form = document.querySelector(popupSelector).querySelector(".form");
    }

    _getInputValues() { //método para almacenar los valores de todos los campos de entrada
        const valuesImput = {} //Objeto para almacenar todos los valores de los campos de entrada
        const allInput = this._form.querySelectorAll(".form__input");

        allInput.forEach((item) => {
            if (item.name) {
                valuesImput[item.name] = item.value
            }
        });
        return valuesImput;
    }
    close() {
        this._form.reset(); // Reiniciar el formulario al cerrar el popup
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            const formData = this._getInputValues();
            this._submitButton(formData);
            this.close();
        });

        const closeButton = this._form.querySelector(this._closeButonSelector);
        if (closeButton) {
            closeButton.addEventListener("click", (evt) => {
                evt.preventDefault();
                this.close();
            });
        }

    }

}