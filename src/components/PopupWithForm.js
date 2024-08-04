import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submiCallback) {
        super(popupSelector);
        this._submitButton = submiCallback;
        this._form = document.querySelector(popupSelector).querySelector(".form");
        this._submitButtons = document.querySelector(popupSelector).querySelector(".form__submit"); //Selector del boton submit
        this._initialSubmitButtonText = this._submitButtons.value; //Texto inicial del boton
    }

    //Método que nos retorna todos los valores de los campos de entrada de los formularios para poder trabajar con ellos.
    _getInputValues() {
        //método para almacenar los valores de todos los campos de entrada del formulario que se pasa
        const valuesImput = {}; //Objeto para almacenar todos los valores de los campos de entrada
        const allInput = this._form.querySelectorAll(".form__input"); //Selecciona todos los campos de entrada de el formulario

        allInput.forEach((item) => {
            if (item.name) { //Si esto es verdadero entonces
                valuesImput[item.name] = item.value; //Almacena en valuesImput de los índices item.name solo los valores de item.value
            }
        });
        return valuesImput; //Devuélveme todo los valores alamcenados en valuesImput
    }

    //Método para cerrar el formulario
    close() {
        this._form.reset(); // Reiniciar el formulario al cerrar el popup
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {//Al momento de presionar el boton de este formulario has los siguiente
            evt.preventDefault();//Evita el envio por defecto del formulario y a cambio de eso haz esto
            this._submitButtons.value = "Guardando..."; //Cambiar el texto del boton a guardando.
            const formData = this._getInputValues(); //Almacena en esta variable todos los valores que retorna esta función
            this._submitButton(formData).finally(() => { //Una vez finalizada la petición de datos
                this._submitButtons.value = this._initialSubmitButtonText //Buelve el boton a su estado normal.
            })
            this.close(); //Cierra el formulario
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
