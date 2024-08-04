import Popup from "./Popup.js";

export default class PopupWithConfirmations extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this.submitCallback = submitCallback;
        this._form = document.querySelector(popupSelector).querySelector(".form");
    }

    open(submitCallback) {
        super.open();
        this.submitCallback = submitCallback;
    }

    _getInputValues() {
        //método para almacenar los valores de todos los campos de entrada
        const valuesImput = {}; //Objeto para almacenar todos los valores de los campos de entrada
        const allInput = this._form.querySelectorAll(".form__input");

        allInput.forEach((item) => {
            if (item.name) {
                valuesImput[item.name] = item.value;
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
            this.submitCallback();
        });
    }
}