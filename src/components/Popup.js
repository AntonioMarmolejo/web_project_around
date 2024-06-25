export default class Popup {
    constructor(popupSelector) {
        //Recibe un selector popup
        this._popupSelector = popupSelector;
        this._popupElement = document.querySelector(this._popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    //Método público para abrir el popup o la imagen seleccionada
    open() {
        //Abrirá el popup
        this._popupElement.classList.add("popup_show");
        document.addEventListener("keydown", this._handleEscClose);
    }

    //Método público para cerrar el popup o la imagen seleccionada
    close() {
        //Cerrar el popup
        this._popupElement.classList.remove("popup_show");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    //Método privado para cerrar el popup al pulsar la tecla Esc
    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    };

    //Método público para agregar eventos de clic al icono cerrar y el área sombreada
    setEventListeners() {
        const closeButton = this._popupElement.querySelector(
            ".popup__close-button"
        );
        const allOverlay =
            this._popupElement.querySelectorAll(".popup__overlay");
        // const popupShow = document.querySelectorAll(this._popupSelector);

        closeButton.addEventListener("click", () => {
            this.close();
        });

        allOverlay.forEach((overlay) => {
            //Cerrar la imagen popup al dar clic en el Overlay
            overlay.addEventListener("click", () => {
                this.close();
            });
        });

        document.addEventListener("keydown", this._handleEscClose); //Cerrar al presionar la tecla Esc
    }
}
