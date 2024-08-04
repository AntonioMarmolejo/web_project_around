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
const buttonRecycle = document.querySelectorAll(".cards__element_trast"); //Botón para darle click y se abra la ventana de confirmar si quiere eliminar o no
const buttonEditAvatar = document.querySelector(".buttons__edit"); //Botón para al darle click se abra el formulario para actualizar el avatar
const avatarPhoto = document.querySelector(".buttons__image"); //Aquí es donde se va a guardar la direccion del nuevo avatar
const cardTemplate = "#newElement";

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
