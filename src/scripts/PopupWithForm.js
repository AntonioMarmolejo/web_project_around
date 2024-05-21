class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._submitCallback = submitCallback;
    }

    _getInputValues() {
        // Recopilar datos de todos los campos de entrada del formulario
        // (por ejemplo, this._form.querySelector('.input-name').value)
        // ...
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = this._getInputValues();
            this._submitCallback(formData);
            this.close();
        });
    }

    close() {
        super.close();
        this._form.reset(); // Reiniciar el formulario al cerrar el popup
    }
}

// Ejemplo de uso:
const myFormPopup = new PopupWithForm('.popup-form', (formData) => {
    // Lógica para enviar el formulario con los datos en formData
    // ...
});
myFormPopup.setEventListeners();

/**
 En este ejemplo:

PopupWithForm hereda de Popup.
El método _getInputValues() recopila los datos de los campos de entrada del formulario.
El método setEventListeners() personaliza la lógica para enviar el formulario y cierra el popup después de enviarlo.
Asegúrate de reemplazar '.popup-form' con el selector CSS de tu ventana emergente (popup) para formularios.
Adaptar la lógica dentro del callback submitCallback según tus necesidades específicas.
Recuerda que puedes crear múltiples instancias de PopupWithForm para diferentes popups en tu aplicación. ¡Espero que te sea útil!
 */