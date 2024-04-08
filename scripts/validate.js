const allForms = document.querySelectorAll(".form");
const showInputError = (inputElement, errorMessage) => {
    const errorElement = inputElement.parentElement.querySelector(`.form__error`);
    inputElement.classList.add("form__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("form__input-error_active");
};

// Función para ocultar el mensaje de error cuando el usuario ponga todos los datos requeridos
const hideInputError = (inputElement) => {
    const errorElement = inputElement.parentElement.querySelector(`.form__error`);
    inputElement.classList.remove("form__input_type_error");
    errorElement.classList.remove("form__input-error_active");
    errorElement.textContent = "";
};

// Función que valida los datos de los formularios y llama a las funciones anteriores
const checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(inputElement, inputElement.validationMessage);
    } else {
        hideInputError(inputElement);
    }
};

//Esta función devuelve true si almenos hay un input no válido en el array
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

//Esta función nos verifica si alguno de los campos es válido y dependiendo de esto activa o desactiva el boton guardar
const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add("button_inactive");
    } else {
        buttonElement.classList.remove("button_inactive");
    }
};

//Esta función crea una lista de todos los inpus y de todos los botones. Luego itera sobre estos campos llamando a las funciones anteriores
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".form__input"));
    const buttonElement = formElement.querySelector(".form__submit");

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            checkInputValidity(inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

//Esta función llama a la anterior
const enableValidation = () => {
    allForms.forEach((formElement) => {
        formElement.addEventListener("submit", function (evt) {
            evt.preventDefault();
        });
        const fieldsetList = Array.from(document.forms);
        fieldsetList.forEach((fieldset) => {
            setEventListeners(fieldset);
        });
    });
};

enableValidation();
