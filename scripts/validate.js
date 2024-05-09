
class FormValidator {
    constructor(allForms) {
        this._allForms = allForms;
        this.enableValidation()
    }

    //Función para mostrar el mensaje de error cuando el usuario introduce datos erroneos en los campos
    _showInputError = (inputElement, errorMessage) => {
        const errorElement = inputElement.parentElement.querySelector(`.form__error`);
        inputElement.classList.add("form__input_type_error");
        errorElement.textContent = errorMessage;
        errorElement.classList.add("form__input-error_active");
    };


    // Función para ocultar el mensaje de error cuando el usuario ponga todos los datos requeridos
    _hideInputError = (inputElement) => {
        const errorElement = inputElement.parentElement.querySelector(`.form__error`);
        inputElement.classList.remove("form__input_type_error");
        errorElement.classList.remove("form__input-error_active");
    };


    //Esta función revisa si el input es válido o no y dependiendo de esto activa o desactiva el boton guardar
    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };


    //Esta función devuelve true si almenos hay un input no válido en el array
    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    //Esta función nos verifica si alguno de los campos es válido y dependiendo de esto activa o desactiva el boton guardar
    _toggleButtonState = (inputList, buttonElement) => {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add("button_inactive");
        } else {
            buttonElement.classList.remove("button_inactive");
        }
    };

    //Esta función crea una lista de todos los inpus y de todos los botones. Luego itera sobre estos campos llamando a las funciones anteriores

    _setEventListeners(formElement) {

        const inputList = Array.from(formElement.querySelectorAll(".form__input"));
        const buttonElement = formElement.querySelector(".form__submit");
        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    }

    //Esta función llama a la anterior
    enableValidation = () => {
        this._allForms.forEach((formElement) => {
            formElement.addEventListener("submit", function (evt) {
                evt.preventDefault();
            });
            const fieldsetList = Array.from(document.forms);
            fieldsetList.forEach((fieldset) => {
                this._setEventListeners(fieldset);
            });
        });
    };
}


export default FormValidator;