class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popup.querySelector('.popup__image');
        this._caption = this._popup.querySelector('.popup__caption');
    }

    open(imageUrl, caption) {
        this._image.src = imageUrl;
        this._image.alt = caption;
        this._caption.textContent = caption;
        super.open();
    }
}

// Ejemplo de uso:
const myImagePopup = new PopupWithImage('.popup-image');
myImagePopup.setEventListeners();

// Luego, para abrir el popup con una imagen y leyenda:
myImagePopup.open('https://example.com/image.jpg', 'Una hermosa puesta de sol');