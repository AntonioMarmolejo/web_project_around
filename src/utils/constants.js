const allForms = document.querySelectorAll(".form");
const popupForm = document.querySelector(".popup");
const buttonEdidProfile = document.querySelector(".buttons__item_index_profile");
const buttonAddCard = document.querySelector(".buttons__item_index_add-card");
const allOverlay = document.querySelectorAll(".popup__overlay");
const allInput = document.querySelectorAll(".form__error");
const popupProfile = ".popup_edit-profile";
const popupAddCard = ".popup_content-addcard";
const popupImage = ".popup_content-image";
const propupDeleteCofirmation = ".popup_delete-card";
const popupEditAvatar = ".popup_avatar";
const buttonClose = document.querySelector(".popup__close-button");
const buttonLike = document.querySelector(".cards__element_item-imagen");
const buttonRecycle = document.querySelectorAll(".cards__element_trast");
const buttonEditAvatar = document.querySelector(".buttons__edit");
const avatarPhoto = document.querySelector(".buttons__image"); //Aquí en donde se va a guardar
// const avatarInput = document.querySelector("#avatar-input");//De este formulario obtendremos los datos
const cardTemplate = "#newElement";

// const initialCards = [
//     {
//         name: "Valle de Yosemite",
//         link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
//         alt: "Valle Yosemie Valley",
//     },
//     {
//         name: "Lago Louise",
//         link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
//         alt: "Lago Lake Louise",
//     },
//     {
//         name: "Montañas Calvas",
//         link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
//         alt: "Bald Mountains",
//     },
//     {
//         name: "Latemar",
//         link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
//         alt: "Latemar",
//     },
//     {
//         name: "Parque Nacional de la Vanoise",
//         link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
//         alt: "Vanoise National",
//     },
//     {
//         name: "Lago di Braies",
//         link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
//         alt: "Lago di Braies",
//     },
// ];
export {
    popupImage,
    popupProfile,
    allForms,
    popupForm,
    buttonEdidProfile,
    buttonAddCard,
    allOverlay,
    allInput,
    popupAddCard,
    buttonClose,
    buttonLike,
    buttonRecycle,
    cardTemplate,
    propupDeleteCofirmation,
    popupEditAvatar,
    buttonEditAvatar,
    avatarPhoto,
};
