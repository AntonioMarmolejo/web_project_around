//NUEVOS BOTONES PARA CONTROLAR LOS POPUP

const popupForm = document.querySelector(".popup");
const buttonEdidProfile = document.querySelector(
    ".buttons__item_index_profile"
);
// const allForms = document.querySelectorAll(".form");
const buttonAddCard = document.querySelector(".buttons__item_index_add-card");
const buttonImage = document.querySelector(".buttons__modal");

const popupProfile = document.querySelector(".popup_edit-profile");
const userName = document.querySelector(".buttons__name");
const userActivity = document.querySelector(".buttons__explorer");
const inputName = document.querySelector("#user-name");
const inputActivity = document.querySelector("#activity-input");
const allOverlay = document.querySelectorAll(".popup__overlay");

const popupAddCard = document.querySelector(".popup_content-addcard");
const inputAddCard = document.querySelector("#place-input");
const inputUrl = document.querySelector("#url-input");

const popupImage = document.querySelector(".popup_content-image");

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

//Función que nos Permite Mostrar o Cerrar las Ventanas Emergentes
function togglePopup(popup, closing = false) {
    if (closing) {
        resetForms(popup.querySelectorAll(".form"), true); //Restablecer los formularios sin eliminar clases de error
    }
    popup.classList.toggle("popup_show");
}

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
    togglePopup(popupAddCard, true);
});

// Cerrar Formulario "Editar Perfil"
buttonCloseProfile.addEventListener("click", (event) => {
    togglePopup(popupProfile, true);
});

//Cerrar Imagen
buttonCloseImage.addEventListener("click", (event) => {
    togglePopup(popupImage);
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
        const nuevoNodo = createNewCard(item.link, item.name);
        cardsArea.append(nuevoNodo);
    });
}

//Carga las 6 Tarjetas principales al cargarse la página
window.addEventListener("load", createMainCards);

//Función para editar el perfil del usuario, el nombre y la actividad
function storeData(event) {
    event.preventDefault();

    const userNew = inputName.value;
    const activitiNew = inputActivity.value;

    userName.textContent = userNew;
    userActivity.textContent = activitiNew;
    togglePopup(popupProfile);
    resetForms(allForms);
}
buttonSave.addEventListener("click", storeData);

//Utiliza la plantilla colocada en html para crear la nueva tarjeta ingresada por el usuario
function createNewCard(link, title) {
    //Seleccionamos el template donde vamos a crear la nueva tarjeta
    const newElement = document.querySelector("#newElement").content;

    //Clonamos el nodo de la tarjeta donde vamos a agregar el enlace
    const userElement = newElement
        .querySelector(".cards__element")
        .cloneNode("true");

    //Agregamos el enlace de la nueva imagen
    userElement.querySelector(".cards__element_image").src = link;
    userElement.querySelector(".cards__element_image").alt = title;

    //Agregamos el título de la nueva imagen
    userElement.querySelector(".cards__element_itemTitle").textContent = title;

    //A la tarjeta creada se le da el Evento Click que activa el boton de me gusta si el usuario lo selecciona
    userElement
        .querySelector(".cards__element_itemImage")
        .addEventListener("click", function (event) {
            event.target.classList.toggle("cards__like_active");
        });

    //A la tarjeta creada se le da el Evento click que nos permite eliminar la tarjeta seleccionada
    userElement
        .querySelector(".cards__element_trast")
        .addEventListener("click", function () {
            userElement.remove();
        });

    //A la tarjeta creada se le da el evento click que nos permite mostrar la tarjeta en la pantalla una vez que el usuario la seleccione
    userElement
        .querySelector(".cards__element_image")
        .addEventListener("click", function () {
            showImage(link, title);
        });

    return userElement;
}

//Función que nos permite crear otra tarjeta tomando los datos ingresados en el formulario "Nueva Tarjeta"
popupAddCard.addEventListener("submit", function (event) {
    event.preventDefault();

    const link = inputUrl.value;
    const title = inputAddCard.value;

    const nuevoNodo = createNewCard(link, title);

    cardsArea.prepend(nuevoNodo);
    togglePopup(popupAddCard, true);

    //luego cerrará el formulario suavemente
    resetForms(allForms);
});

//Función que nos pemite mostrar al frente la imagen que seleccionemos, y la resaltará para poder verla con mas detalles, ademas mostrará el nombre de la misma en el pié.
function showImage(src, alt) {
    const modalImage = document.querySelector("#popup__image");
    const nombreModal = document.querySelector(".popup__title");

    modalImage.src = src;
    modalImage.alt = alt;
    nombreModal.textContent = alt;
    togglePopup(popupImage);
}

// Función que nos permite resetear los formularios y también
function resetForms(forms, keepErrorClasses = false) {
    forms.forEach((form) => {
        // Resetea cada entrada de los formularios para eliminar los datos que quedan
        form.reset();
        if (!keepErrorClasses) {
            form.querySelectorAll(".form__input").forEach((input) => {
                input.classList.remove("invalid", "valid");
                input.nextElementSibling.textContent = "";
            });
        }
    });
}

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