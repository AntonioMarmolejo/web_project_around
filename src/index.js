import "./styles/index.css";

import {
    togglePopup,
    resetForms,
} from "./utils/utils.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Popup from "./components/Popup.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import {
    popupProfile,
    popupAddCard,
    popupImage,
    inputAddCard,
    inputUrl,
    buttonSave,
    initialCards,
    allForms,
    cardTemplate
} from "./utils/constants.js";

//Clase encargada de mostrar la imagen seleccionada en la ventana emergente
const poputImagen = new PopupWithImage("popup_content-image");
const handleCardClick = (data) => { poputImagen.open(data.link, data.name) };


//Intanciamos la calse card pasándole el array de datos, la funcion y la clase donde vamos a almacenar los datos
const createCards = (data) => {
    const cardsIntance = new Card({ data, handleCardClick }, cardTemplate);
    return cardsIntance.createNewCard(data.link, data.name);
}

//Instanciamos la clase para crear y renderizar las tarjetas del array
const mySection = new Section({
    items: initialCards,
    renderer: (item) => {
        return createCards(item);
    },
}, ".cards");
//Carga las 6 Tarjetas principales al cargarse la página
window.addEventListener("load", () => mySection.renderer());


// //Clase que alamcenará los datos del usuario
const UserData = new UserInfo({
    nameSelector: ".buttons__name",
    jobSelector: ".buttons__explorer"
});
//Función para editar el perfil del usuario, el nombre y la actividad
buttonSave.addEventListener("click", UserData.getUserInfo());

//Instanciamos algunas todas las clases para los popup
const popupFormEditProfile = new PopupWithForm(popupProfile, handleCardClick);
popupFormEditProfile.setEventListeners();

const popupFormContentAddCar = new PopupWithForm(popupAddCard, handleCardClick);
popupFormContentAddCar.setEventListeners();

const popupFormContentImage = new PopupWithForm(popupImage, handleCardClick);
popupFormContentImage.setEventListeners();

//Función que nos permite crear otra tarjeta tomando los datos ingresados en el formulario "Nueva Tarjeta"

const link = inputUrl.value;
const name = inputAddCard.value;

const newCards = new Card({ data: { link, name }, handleCardClick }, ".cards");
newCards.createNewCard();

const Validation = new FormValidator(allForms);
Validation.enableValidation();


