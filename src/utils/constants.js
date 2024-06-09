
const inputName = document.querySelector("#user-name");
const inputActivity = document.querySelector("#activity-input");
const userName = document.querySelector(".buttons__name");
const userActivity = document.querySelector(".buttons__explorer");
const allForms = document.querySelectorAll(".form");
const popupForm = document.querySelector(".popup"); //
const buttonEdidProfile = document.querySelector(".buttons__item_index_profile");
const buttonAddCard = document.querySelector(".buttons__item_index_add-card");
const allOverlay = document.querySelectorAll(".popup__overlay");
const allInput = document.querySelectorAll(".form__error");
const popupProfile = ".popup_edit-profile";
const popupAddCard = ".popup_content-addcard";
const popupImage = ".popup_content-image";
const inputAddCard = document.querySelector("#place-input");
const inputUrl = document.querySelector("#url-input");
const buttonClose = document.querySelector(".popup__close-button");
const buttonSave = document.querySelector(".popup_edit-profile .form__submit");
const buttonCreate = document.querySelector(".popup_content-addcard .form__submit");
const buttonLike = document.querySelector(".cards__element_item-imagen");
const buttonRecycle = document.querySelector(".cards__element_trast");
const cardTemplate = "#newElement";
const carElement = document.querySelector(".cards__element_image");
const carElementTitle = document.querySelector(".cards__element_itemTitle");
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
    allOverlay,
    allInput,
    popupAddCard,
    inputAddCard,
    inputUrl,
    buttonClose,
    buttonSave,
    buttonCreate,
    buttonLike,
    buttonRecycle,
    cardsArea,
    initialCards,
    cardTemplate,
    carElement,
    carElementTitle
};
