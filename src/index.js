import "./styles/index.css";

import { resetForms } from "./utils/utils.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import PopupWithConfirmation from "./components/PopupWithConfirmation.js";
import { api } from "./components/Apis.js";
import {
    popupImage,
    allForms,
    cardTemplate,
    buttonAddCard,
    buttonEdidProfile,
    popupProfile,
    popupAddCard,
    propupDeleteCofirmation,
    popupEditAvatar,
    buttonEditAvatar,
    buttonRecycle,
    buttonPhotoProfile,
} from "./utils/constants.js";


document.addEventListener("DOMContentLoaded", async () => {

    const currentUser = await api.getUserInfo();

    //Clase encargada de mostrar la imagen seleccionada en la ventana emergente
    const poputImagen = new PopupWithImage(popupImage);
    poputImagen.setEventListeners();

    //Función para editar el perfil del
    const handleCardClick = (data) => { poputImagen.open(data.link, data.name) };


    //Función para crear una nueva tarjeta
    const createCards = (data) => {
        const cardsIntance = new Card({
            data, handleCardClick,
            handleDeleteClick: (carElement, callback) => {
                popupFormDeletedConfirmation.open(() => {
                    api.deleteCard(carElement)
                        .then(() => {
                            callback();
                            popupFormDeletedConfirmation.close();
                        })
                        .catch(error => {
                            console.error(error);
                        });
                });
            },
            handleAddLike: (cardId) => {
                return api.linkCard(cardId)
            },
            handleRemoveLike: cardId => {
                return api.deleteCardLink(cardId)
            }
        },
            cardTemplate, currentUser
        );
        return cardsIntance.createNewCard();
    };

    // fetch("https://around.nomoreparties.co/v1/web_es_11/cards", {
    //     method: "GET",
    //     headers: {
    //         Authorization: "678fbd92-e6e4-4044-b047-74ce334ffd4e"
    //     }
    // })
    //     .then((res) => res.json())
    //     .then((initialCards) => {

    //         const mySection = new Section(
    //             {
    //                 items: initialCards,
    //                 renderer: (item) => {
    //                     return createCards(item);
    //                 },
    //             },
    //             '.cards'
    //         );
    //         mySection.renderer();

    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });

    api.getInitialCard().then((initialCards) => {

        const mySection = new Section(
            {
                items: initialCards,
                renderer: (item) => {
                    return createCards(item);
                },
            },
            '.cards'
        );
        mySection.renderer();
    }).catch(error => {
        console.log(error);
    });


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
        api.addCard(formData.newplace, formData.enlace).then(card => {
            const newCard = createCards(card)
            document.querySelector(".cards").prepend(newCard);
            popupFormContentAddCard.close();
            //resetForms(allForms);
        })
    });
    popupFormContentAddCard.setEventListeners();

    //Codigo para abril el formulario de añadir tarjeta dando click en un boton de abrir el popup
    buttonAddCard.addEventListener("click", () => {
        popupFormContentAddCard.open();
    });

    const popupFormEditAvatar = new PopupWithForm(popupEditAvatar, () => { });
    popupFormEditAvatar.setEventListeners();
    buttonEditAvatar.addEventListener("click", () => {
        popupFormEditAvatar.open();
    });
    buttonPhotoProfile.addEventListener("click", () => {

    });

    const popupFormDeletedConfirmation = new PopupWithConfirmation(propupDeleteCofirmation);
    popupFormDeletedConfirmation.setEventListeners();
    buttonRecycle.forEach((item) => {
        item.addEventListener('click', () => {
            popupFormDeletedConfirmation.open();
        });
    })


    //Validación del formulario
    // const Validation = new FormValidator(allForms);
    //Validation.enableValidation();

})
