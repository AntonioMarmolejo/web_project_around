import "./styles/index.css";

import { resetForms } from "./utils/utils.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import {
    popupImage,
    initialCards,
    allForms,
    cardTemplate,
    buttonAddCard,
    buttonEdidProfile,
    popupProfile,
    popupAddCard,
} from "./utils/constants.js";

//Clase encargada de mostrar la imagen seleccionada en la ventana emergente
const poputImagen = new PopupWithImage(popupImage);
poputImagen.setEventListeners();

//Función para editar el perfil del
const handleCardClick = (data) => {
    poputImagen.open(data.link, data.name);
};

//Función para crear una nueva tarjeta
const createCards = (data) => {
    const cardsIntance = new Card({ data, handleCardClick }, cardTemplate);
    return cardsIntance.createNewCard();
};

//Instanciamos la clase para crear y renderizar las tarjetas del array
const mySection = new Section(
    {
        items: initialCards,
        renderer: (item) => {
            return createCards(item);
        },
    },
    ".cards"
);
//Carga las 6 Tarjetas principales al cargarse la página
window.addEventListener("load", () => mySection.renderer());

//Clase que alamcenará los datos del usuario
const userData = new UserInfo({
    nameSelector: ".buttons__name",
    jobSelector: ".buttons__explorer",
});

//Instanciamos todas las clases para los popup
const popupFormEditProfile = new PopupWithForm(popupProfile, (formData) => {
    userData.setUserInfo({ name: formData.name, job: formData.activity });
    popupFormEditProfile.close();
    resetForms(allForms);
});
popupFormEditProfile.setEventListeners();

//Código para brir el popup de editar perfil
buttonEdidProfile.addEventListener("click", () => {
    popupFormEditProfile.open();
});

//Instancia de popupWithForm para manejar el formulario de añadir la tarjeta
const popupFormContentAddCard = new PopupWithForm(popupAddCard, (formData) => {
    const newCard = createCards({
        name: formData.newplace,
        link: formData.enlace,
    });
    document.querySelector(".cards").prepend(newCard);
    popupFormContentAddCard.close();
    resetForms(allForms);
});
popupFormContentAddCard.setEventListeners();

//Codigo para abril el formulario de añadir tarjeta dando click en un boton de abrir el popup
buttonAddCard.addEventListener("click", () => {
    popupFormContentAddCard.open();
});

//Validación del formulario
const Validation = new FormValidator(allForms);
Validation.enableValidation();
