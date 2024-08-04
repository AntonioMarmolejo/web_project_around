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
    avatarPhoto,
} from "./utils/constants.js";


document.addEventListener("DOMContentLoaded", async () => {

    //Variable donde guardamos el resultado de una petición donde optenemos los datos del usuario.
    const currentUser = await api.getUserInfo();


    //Instancia de la clase PopupWithImage la cual nos sirve para mostrar una imagen seleccionada en una ventana emergente
    const poputImagen = new PopupWithImage(popupImage);
    poputImagen.setEventListeners();

    //Función para mostrar la imagen seleccionada en la ventan emergente utilizando la instancia popupImagen
    const handleCardClick = (data) => { poputImagen.open(data.link, data.name) };


    //Función para crear una nueva tarjeta con todas las funciones de show, borrar, like, dislike de los datos obtenidos del servidor
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
    }).catch(error => { console.log(error) });


    //Instancia de la clase UserInfo donde le pasamos las etiquetas para que la clase seleccione donde van a ir los nombre por defecto y los que actualicemos
    const userData = new UserInfo({ nameSelector: ".buttons__name", jobSelector: ".buttons__explorer", avatarSelector: ".buttons__image" });

    userData.setUserInfo({ name: currentUser.name, job: currentUser.about, avatar: currentUser.avatar }); //Antualiza los datos de usuario al cargar la página, nombre, actividad, avatar.



    //Instanciamos la clase PopupWithForm para editar los datos perfil del usuario
    const popupFormEditProfile = new PopupWithForm(popupProfile, (formData) => {
        return api.updateUser(formData.name, formData.activity)
            .then(() => {
                userData.setUserInfo({ name: formData.name, job: formData.activity, avatar: currentUser.avatar });
                popupFormEditProfile.close();
                resetForms(allForms);
            })
            .catch(err => { console.log(err) })
    });
    popupFormEditProfile.setEventListeners(); //Ejecuta todos los métodos de esta instancia y tenlos listos para usarlos

    //Código para brir el popup de editar perfil
    buttonEdidProfile.addEventListener("click", () => { popupFormEditProfile.open() });

    //Instancia de popupWithForm para manejar el formulario de añadir la tarjeta
    const popupFormContentAddCard = new PopupWithForm(popupAddCard, (formData) => {
        return api.addCard(formData.newplace, formData.enlace)
            .then(card => {
                const newCard = createCards(card)
                document.querySelector(".cards").prepend(newCard);
                popupFormContentAddCard.close();
                resetForms(allForms);
            })
            .catch(err => { console.log(err) })
    });
    popupFormContentAddCard.setEventListeners();

    //Codigo para abril el formulario de añadir tarjeta dando click en un boton de abrir el popup
    buttonAddCard.addEventListener("click", () => { popupFormContentAddCard.open() });


    //Intancia de PopupWhitForm para poder cargar la foto del avatar por defecto de los datos obtenidos del servidor
    const popupFormEditAvatar = new PopupWithForm(popupEditAvatar, (formData) => {
        return api.updateUserPhoto(formData.avatar)
            .then((resp) => {
                if (resp && resp.avatar) {
                    avatarPhoto.src = resp.avatar;
                } else {
                    console.log("La respueta a la API, no contine la propiedad avatar")
                }
            })
            .catch(err => {
                console.log("Error al actualizar la foto de perfil", err)
            })
    });
    popupFormEditAvatar.setEventListeners();


    //Codigo para abrir el Popup del formulario para editar la foto del perfil de usuario
    buttonEditAvatar.addEventListener("click", () => { popupFormEditAvatar.open() });


    //Instancia de PopupWithConfirmation para manejar el formuario de confirmar si deseas borrar una tarjeta tuya en el servicio.
    const popupFormDeletedConfirmation = new PopupWithConfirmation(propupDeleteCofirmation);
    popupFormDeletedConfirmation.setEventListeners();
    buttonRecycle.forEach((item) => {
        item.addEventListener('click', () => {
            popupFormDeletedConfirmation.open();
        });
    })



    //Validación del formulario
    const Validation = new FormValidator(allForms);
    Validation.enableValidation();

})
