export default class Popup {
    constructor(popupSelector) { //Recibe un selector popup
        this._popupSelector = popupSelector;
        this._closeButton = ".popup__close-button";
    }

    //Método público para abrir el popup o la imagen seleccionada
    open() { //Abrirá el popup
        const popupShow = document.querySelector(this._popupSelector);
        popupShow.classList.add("popup_show");
        document.addEventListener("keydown", this._handleEscClose);

    }

    //Método público para cerrar el popup o la imagen seleccionada
    close() { //Cerrar el popup
        const popupShow = document.querySelector(this._popupSelector);
        popupShow.classList.remove("popup_show");
        document.removeEventListener("keydown", this._handleEscClose);

    }

    //Método privado para cerrar el popup al pulsar la tecla Esc
    _handleEscClose = (evt) => {
        const popupShow = document.querySelector(this._popupSelector);
        if (evt.key === "Escape") {
            popupShow.classList.remove("popup_show");
        }
    }

    //Método público para agregar eventos de clic al icono cerrar y el área sombreada
    setEventListeners() {
        const allOverlay = document.querySelectorAll("popup__overlay")
        const popupShow = document.querySelectorAll(this._popupSelector);
        if (!this._closeButton) {
            popupShow.addEventListener('click', () => {
                this.close()
            });
        }

        allOverlay.forEach((overlay) => { //Cerrar la imagen popup al dar clic en el Overlay
            overlay.addEventListener('click', () => {
                this.close()
            });
        });

        document.addEventListener("keydown", this._handleEscClose); //Cerrar al presionar la tecla Esc
    }

}
