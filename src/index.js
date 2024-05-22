import {
    togglePopup,
    storeData,
    showImage,
    resetForms,
} from "../utils/utils.js";
import Card from "../components/Card.js";
import FormValidator from "../utils/FormValidator.js";
import {
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
    popupProfile,
    popupImage,
    allForms
} from "../utils/constants.js";

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

//Función para crear la 6 tarjetas principales que se cargaran por defecto
function createMainCards() {
    initialCards.forEach((item) => {
        const card = new Card(item.link, item.name);
        const generated = card.createNewCard();
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
