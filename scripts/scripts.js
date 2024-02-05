//NUEVOS BOTONES PARA CONTROLAR LOS POPUP
const buttonEdidProfile = document.querySelector(
  ".buttons__item_index_profile"
);
const buttonAddCard = document.querySelector(".buttons__item_index_add-card");
const buttonImagen = document.querySelector(".buttons__modal");

const popupProfile = document.querySelector(".popup--edit-Profile");
const userName = document.querySelector(".buttons__name");
const userActiviti = document.querySelector(".buttons__explorer");
const inputName = document.querySelector("#Nombre-usuario");
const inputActiviti = document.querySelector("#Actividad");

const popupAddCard = document.querySelector(".popup--content-addCard");
const inputAddCard = document.querySelector("#Nombre");
const inputUrl = document.querySelector("#Enlace");

const popupImage = document.querySelector(".popup--content-image");

//BOTONES EDITAR PERFIL, AGREGAR TARJETA Y MOSTRAR IMAGEN
const buttonCloseProfile = popupProfile.querySelector(".popup__close-button");
const buttonCloseAddCard = popupAddCard.querySelector(".popup__close-button");
const buttonCloseImage = popupImage.querySelector(".popup__close-button");

//Botones CERRAR, ME GUSTA Y RECICLAJE
const buttonSave = document.querySelector(".submit");
const buttonLike = document.querySelector(".cards__element_itemImagen");
const buttonRecycle = document.querySelector(".cards__element_trast");

//Contenedor donde se almacenaran todas la tarjetas que se vayan creando
const cardsArea = document.querySelector(".cards");

//Función que nos Permite Mostrar o Cerrar las Ventanas Emergentes
function togglePopup(popup) {
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
buttonImagen.addEventListener("click", (event) => {
  togglePopup(popupImage);
});

//Cerrar Formulario "Nueva Tarjeta"
buttonCloseAddCard.addEventListener("click", (event) => {
  togglePopup(popupAddCard);
});

//Cerrar Formulario "Editar Perfil"
buttonCloseProfile.addEventListener("click", (event) => {
  togglePopup(popupProfile);
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
function tarjetasPrincipales() {
  initialCards.forEach((item) => {
    const nuevoNodo = agregarNuevaTarjeta(item.link, item.name);
    cardsArea.append(nuevoNodo);
  });
}

//Carga las 6 Tarjetas principales al cargarse la página
window.addEventListener("load", tarjetasPrincipales);

//Función para editar el perfil del usuario, el nombre y la actividad
function almacenarDatos(event) {
  event.preventDefault();

  const userNew = inputName.value;
  const activitiNew = inputActiviti.value;

  userName.textContent = userNew;
  userActiviti.textContent = activitiNew;
  togglePopup(popupProfile);
}
buttonSave.addEventListener("click", almacenarDatos);

//AGREGAR LA NUEVA TARJETA QUE INGRESA EL USUARIO
function agregarNuevaTarjeta(link, title) {
  //Seleccionamos el template donde vamos a crear la nueva tarjeta
  const newElement = document.querySelector("#newElement").content;

  //Clonamos el nodo de la tarjeta donde vamos a agregar el enlace
  const userElement = newElement
    .querySelector(".cards__element")
    .cloneNode("true");

  //Agregamos el enlace de la nueva imagen
  userElement.querySelector(".cards__element_image").src = link;

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
      mostrarImagenModal(link, title);
    });
  return userElement;
}

//Función que nos permite crear otra tarjeta tomando los datos ingresados en el formulario "Nueva Tarjeta"
popupAddCard.addEventListener("submit", function (event) {
  event.preventDefault();
  const link = inputUrl.value;
  const title = inputAddCard.value;
  const nuevoNodo = agregarNuevaTarjeta(link, title);

  cardsArea.prepend(nuevoNodo);
  //Se limpian las entradas para que el usuario no tenga que borrarlas
  const limpiarEntradaTitulo = (document.querySelector("#Nombre").value = "");
  const limpiarEntradaEnlace = (document.querySelector("#Enlace").value = "");

  //luego cerrará el formulario suavemente
  togglePopup(popupAddCard);
});

//Función que nos pemite mostrar al frente la imagen que seleccionemos, y la resaltará para poder verla con mas detalles, ademas mostrará el nombre de la misma en el pié.
function mostrarImagenModal(src, alt) {
  const modalImage = document.querySelector("#popup__image");
  const nombreModal = document.querySelector(".popup__title");

  modalImage.src = src;
  nombreModal.textContent = alt;
  togglePopup(popupImage);
}
