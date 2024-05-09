import { togglePopup, storeData, showImage, resetForms, popupProfile, popupImage } from "./utils.js";
import Card from "./Card1.js";
import FormValidator from "./FormValidator1.js";

//NUEVOS BOTONES PARA CONTROLAR LOS POPUP

const popupForm = document.querySelector(".popup");
const buttonEdidProfile = document.querySelector(".buttons__item_index_profile");

const buttonAddCard = document.querySelector(".buttons__item_index_add-card");
const buttonImage = document.querySelector(".buttons__modal");

const allOverlay = document.querySelectorAll(".popup__overlay");
const allInput = document.querySelectorAll(".form__error");

const popupAddCard = document.querySelector(".popup_content-addcard");
const inputAddCard = document.querySelector("#place-input");
const inputUrl = document.querySelector("#url-input");

//BOTONES EDITAR PERFIL, AGREGAR TARJETA Y MOSTRAR IMAGEN
const buttonCloseProfile = popupProfile.querySelector(".popup__close-button");
const buttonCloseAddCard = popupAddCard.querySelector(".popup__close-button");
const buttonCloseImage = popupImage.querySelector(".popup__close-button");

//Botones CERRAR, ME GUSTA Y RECICLAJE
const buttonSave = document.querySelector(".form__submit");
const buttonLike = document.querySelector(".cards__element_item-imagen");
const buttonRecycle = document.querySelector(".cards__element_trast");

//Contenedor donde se almacenaran todas la tarjetas que se vayan creando
const cardsArea = document.querySelector(".cards");

//Selecciona todos los formularios que estén en el documento
const allForms = document.querySelectorAll(".form");

//Abrir formulario "Editar Perfil"
buttonEdidProfile.addEventListener("click", (event) => {
    togglePopup(popupProfile);
});

//Abrir Formulario "Nueva Tarjeta"
buttonAddCard.addEventListener("click", (event) => {
    togglePopup(popupAddCard);
});

//Abrir Imagen
buttonImage.addEventListener("click", (event) => {
    togglePopup(popupImage);
});

// Cerrar Formulario "Nueva Tarjeta"
buttonCloseAddCard.addEventListener("click", (event) => {
    togglePopup(popupAddCard);
    resetForms(allForms);
});

// Cerrar Formulario "Editar Perfil"
buttonCloseProfile.addEventListener("click", (event) => {
    togglePopup(popupProfile);
    resetForms(allForms);
});

//Cerrar Imagen
buttonCloseImage.addEventListener("click", (event) => {
    togglePopup(popupImage);
    resetForms(allForms);
});

const initialCards = [
    {
        name: "Valle de Yosemite",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
        alt: "Valle Yosemie Valley",
    },
    {
        name: "Lago Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
        alt: "Lago Lake Louise",
    },
    {
        name: "Montañas Calvas",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
        alt: "Bald Mountains",
    },
    {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
        alt: "Latemar",
    },
    {
        name: "Parque Nacional de la Vanoise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
        alt: "Vanoise National",
    },
    {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
        alt: "Lago di Braies",
    },
];

//Función para crear la 6 tarjetas principales que se cargaran por defecto
function createMainCards() {
    initialCards.forEach((item) => {
        const card = new Card(item.link, item.name);
        const generated = card.createNewCard()
        cardsArea.append(generated);
    });
}
//Carga las 6 Tarjetas principales al cargarse la página
window.addEventListener("load", createMainCards);

//Función para editar el perfil del usuario, el nombre y la actividad
buttonSave.addEventListener("click", storeData);

//Función que nos permite crear otra tarjeta tomando los datos ingresados en el formulario "Nueva Tarjeta"
popupAddCard.addEventListener("submit", function (event) {
    event.preventDefault();

    const link = inputUrl.value;
    const title = inputAddCard.value;

    const nuevoNodo = new Card(link, title);
    const generatedNewCard = nuevoNodo.createNewCard();
    cardsArea.prepend(generatedNewCard);
    togglePopup(popupAddCard, true);

    //luego cerrará el formulario suavemente
    resetForms(allForms);
});

//Esta función revisa si hay alguna ventana del documento con la clase popup_show y si la hay procede a cerrar y a restablecer todos los foumlarios
allOverlay.forEach((item) => {
    item.addEventListener("click", function () {
        const openPopup = document.querySelector(".popup_show");
        if (openPopup) {
            togglePopup(openPopup, true);
            resetForms(allForms);
        }
    });
});

//Esta función me permite cerrar la ventana emergente que se encuentre abierta precionando la tecla Escape
document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
        const openPopup = document.querySelector(".popup_show");
        if (openPopup) {
            togglePopup(openPopup);
            resetForms(allForms);
        }
    }
});


const Validation = new FormValidator(allForms);
Validation.enableValidation();