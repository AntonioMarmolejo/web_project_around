const userName = document.querySelector(".buttons__name");
const userActivity = document.querySelector(".buttons__explorer");
const inputName = document.querySelector("#user-name");
const inputActivity = document.querySelector("#activity-input");
const popupProfile = document.querySelector(".popup_edit-profile");
const allForms = document.querySelectorAll(".form");
const popupImage = document.querySelector(".popup_content-image");

//NUEVOS BOTONES PARA CONTROLAR LOS POPUP

const popupForm = document.querySelector(".popup"); //
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
const cardTemplate = "#newElement";
const cardsArea = document.querySelector(".cards");

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
export {
    userName,
    userActivity,
    inputName,
    inputActivity,
    popupImage,
    popupProfile,
    allForms,
    popupForm,
    buttonEdidProfile,
    buttonAddCard,
    buttonImage,
    allOverlay,
    allInput,
    popupAddCard,
    inputAddCard,
    inputUrl,
    buttonCloseProfile,
    buttonCloseAddCard,
    buttonCloseImage,
    buttonSave,
    buttonLike,
    buttonRecycle,
    cardsArea,
    initialCards,
    cardTemplate
};
