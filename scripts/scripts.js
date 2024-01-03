//Se selecciona el bloque donde donde va la foto de perfil, el nombre, la actividad y el boton de editar perfil
const botonPincelEditar = document.querySelector(".profile__editButton");
const botonAgregarImagen = document.querySelector(".profile__addButton");

//Se selecciona el elemento de la X para cerrar el formulario
const inconoCerrarFomulario = document.querySelector(".editForm__icono");
const iconCerrarFormularioTarjetas = document.querySelector(".popup__icono");

//Se selecciona el bloque donde está todo el formulario incluyendo el boton X de cerrar
const todoElformulario = document.querySelector(".editForm");
const formularioTarjetas = document.querySelector(".popup");

//Se selecciona el bloque donde va el nombre del usuario
const nombreUsuario = document.querySelector(".profile__intro_name");

//Se selecciona el bloque dode va la actividad que realiza la el usuario
const actividadUsuario = document.querySelector(".profile__intro_explorer");

//Se selecciona el identificador del formulario que es el input donde el usuario ingresara su nombre
const entradaNombre = document.querySelector("#primer-nombre");
const entradaTitulo = document.querySelector("#titulo");

//Se selecciona el identificado del formulario que es el input donde el usuario ingresará su actividad
const entradaActividad = document.querySelector("#actividad");
const entradaEnlace = document.querySelector("#enlace_imagen");

//Se selecciona el bloque que nos permite resaltar el formulario oscureciendo el fondo
const overlayVentana = document.querySelector(".overlay");

//Se selecciona el botón que guardará nuestros datos y pondrá los datos ingresado en los bloques correspondientes
const botonGuadar = document.querySelector(".form__submi");
const botonCrear = document.querySelector(".popup__submi");
const botonDeMegusta = document.querySelector(".cards__element_itemImagen");
const botonReciclaje = document.querySelector(".cards__element_trast");

const cardsArea = document.querySelector(".cards");

const formAddCard = document.querySelector(".popup__form");

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
//Función para cerrar el formulario y desactivar el overlay para esclarecer la página
//al darle click en el boton cerrar que aparece en el formulario
function cerrarFormulario() {
  todoElformulario.classList.toggle("show");
  overlayVentana.style.display = "none";
  todoElformulario.classList.add("hideform");
  todoElformulario.style.display = "none";
}
inconoCerrarFomulario.addEventListener("click", cerrarFormulario);

//Función para mostrar el formulario y activar el overlay para resaltar el formulario
//al darle click en el boton de lapiz que se encuentra en el perfil de usuario
function abrirFormulario() {
  todoElformulario.style.display = "flex";
  overlayVentana.style.display = "grid";
  todoElformulario.classList.add("show");
}
botonPincelEditar.addEventListener("click", abrirFormulario);

//Función para crear la 6 tarjetas principales que se cargaran por defecto
function tarjetasPrincipales() {
  initialCards.forEach((item) => {
    const nuevoNodo = agregarNuevaTarjeta(item.link, item.name);
    cardsArea.append(nuevoNodo);
  });
}

//Crear las tarjetas cuando se cargue la página
window.addEventListener("load", tarjetasPrincipales);

//Función para almacenar los datos ingresados por el usuario y remplazarlos por
//los que ya estan por defecto al momento de darle click al boton de guardar.
function almacenarDatos(event) {
  event.preventDefault();

  const nuevoUsuario = entradaNombre.value;
  const nuevaActividad = entradaActividad.value;

  nombreUsuario.textContent = nuevoUsuario;
  actividadUsuario.textContent = nuevaActividad;

  todoElformulario.style.display = "none";
  overlayVentana.style.display = "none";
}
botonGuadar.addEventListener("click", almacenarDatos);

//MOSTRAR EL FOMULARIO PARA AGREGAR TARJETA
function abrirAgregarImagen() {
  formularioTarjetas.style.display = "flex";
  overlayVentana.style.display = "grid";
  formularioTarjetas.classList.add("show");
}
botonAgregarImagen.addEventListener("click", abrirAgregarImagen);

//CERRAR EL FOMULARIO DE AGREGAR TARJETA
function cerrarAgregarTarjetas() {
  formularioTarjetas.classList.toggle("show");
  overlayVentana.style.display = "none";
  formularioTarjetas.classList.add("hidePopup");
  formularioTarjetas.style.display = "none";
}
iconCerrarFormularioTarjetas.addEventListener("click", cerrarAgregarTarjetas);

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

  userElement
    .querySelector(".cards__element_itemImage")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("cards__like_active");
    });

  userElement
    .querySelector(".cards__element_trast")
    .addEventListener("click", function () {
      userElement.remove();
    });

  userElement
    .querySelector(".cards__element_image")
    .addEventListener("click", function () {
      mostrarImagenModal(link, title);
    });
  return userElement;
}
formAddCard.addEventListener("submit", function (event) {
  event.preventDefault();
  const link = entradaEnlace.value;
  const title = entradaTitulo.value;
  const nuevoNodo = agregarNuevaTarjeta(link, title);

  //Se limpian las entradas para que el usuario no tenga que borrarlas
  const limpiarEntradaTitulo = (document.querySelector(".popup__imput").value =
    "");
  const limpiarEntradaEnlace = (document.querySelector("#enlace_imagen").value =
    "");
  cardsArea.prepend(nuevoNodo);
  //Esta nueva tarjeta se agregará al principio del bloque cards

  //luego cerrará el formulario suavemente
  formularioTarjetas.classList.toggle("show");
  overlayVentana.style.display = "none";
  formularioTarjetas.classList.add("hidePopup");
  formularioTarjetas.style.display = "none";
});

function mostrarImagenModal(src, alt) {
  const modal = document.querySelector(".modal");
  const modalImage = document.querySelector("#modalImage");
  const modalClose = document.querySelector(".modal-close");
  const nombreModal = document.querySelector(".nombreModal");

  modalImage.src = src;
  nombreModal.textContent = alt;
  modal.classList.add("show");
  //Mustra la ventana amergente
  modal.style.display = "grid";

  modalClose.addEventListener("click", () => {
    modal.classList.toggle("show");
    modal.classList.add("hide");
    modal.style.display = "none";
  });
}
