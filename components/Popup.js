class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    //Método público para abrir el popup
    open() {
        this._popup.classList.add("popup-open");
        document.addEventListener("keeydown", this._handleEscClose);
    }

    //Método público para cerrar el popup
    close() {
        this._popup.classList.remove("popup-opened");
        document.removeEventListener("keeydown", this._handleEscClose);
    }

    //Método privado para cerrar el popup al pulsar la tecla Esc
    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    //Método público para agregar eventos de clic al icono cerrar y el área sombreada
    setEventListeners() {
        const closeButton = this._popup.querySelector('.popup__close');
        closeButton.addEventListener('click', () => {
            this.close();
        });

        this._popup.addEventListener('click', (event) => {
            if (event.target === this._popup) {
                this.close();
            }
        });
    }

}

// // Ejemplo de uso:
// const myPopup = new Popup('.popup');
// myPopup.setEventListeners();


export default Popup