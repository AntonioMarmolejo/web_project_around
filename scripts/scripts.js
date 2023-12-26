//Se selecciona el bloque donde donde va la foto de perfil, el nombre, la actividad y el boton de editar perfil
let botonPincelEditar = document.querySelector(".profile__intro_editButton");
let botonAgregarImagen = document.querySelector(".profile__addButton");

//Se selecciona el elemento de la X para cerrar el formulario
let inconoCerrarFomulario = document.querySelector(".editForm__icono");
let iconCerrarFormularioTarjetas = document.querySelector(".popup__icono");

//Se selecciona el bloque donde está todo el formulario incluyendo el boton X de cerrar
let todoElformulario = document.querySelector(".editForm");
let formularioTarjetas = document.querySelector(".popup");

//Se selecciona el bloque donde va el nombre del usuario
let nombreUsuario = document.querySelector(".profile__intro_name");

//Se selecciona el bloque dode va la actividad que realiza la el usuario
let actividadUsuario = document.querySelector(".profile__intro_explorer");

//Se selecciona el identificador del formulario que es el input donde el usuario ingresara su nombre
let entradaNombre = document.querySelector("#primer-nombre");
let entradaTitulo = document.querySelector("#titulo");

//Se selecciona el identificado del formulario que es el input donde el usuario ingresará su actividad
let entradaActividad = document.querySelector("#actividad");
let entradaEnlace = document.querySelector("#enlace_imagen");

//Se selecciona el bloque que nos permite resaltar el formulario oscureciendo el fondo
let overlayVentana = document.querySelector(".overlay");

//Se selecciona el botón que guardará nuestros datos y pondrá los datos ingresado en los bloques correspondientes
let botonGuadar = document.querySelector(".form__submi");
let botonCrear = document.querySelector(".popup__submi");
let botonDeMegusta = document.querySelector(".cards__element_itemImagen");
let botonReciclaje = document.querySelector(".cards__element_trast");

//Función para cerrar el formulario y desactivar el overlay para esclarecer la página
//al darle click en el boton cerrar que aparece en el formulario
function cerrarFormulario() {
  todoElformulario.classList.remove("show");
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

//ARRAY DE IMÁGNES QUE SE VAN A CARGAR EN LA PAGINA POR DEFECTO
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
    alt: "imagen Yosemie Valley",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
    alt: "imagen de Lake Louise",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
    alt: "imagen de Bald Mountains",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
    alt: "imagen de Latemar",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
    alt: "imagen de Vanoise National",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
    alt: "imagen del Lago di Braies",
  },
];

//Función para crear la 6 tarjetas principales que se cargaran por defecto
function tarjetasPrincipales() {
  initialCards.forEach((item) => {
    let tarjetaPrincipal = document.querySelector("#newElement").content;
    let contenedorCards = document.querySelector(".cards");

    let cadaTarjetaPrincipal = tarjetaPrincipal
      .querySelector(".cards__element")
      .cloneNode("true");

    //Crea un alemento para cada tarjeta y le da los atributos
    cadaTarjetaPrincipal.querySelector(".cards__element_image").src = item.link;
    cadaTarjetaPrincipal.querySelector(
      ".cards__element_itemTitle"
    ).textContent = item.name;
    cadaTarjetaPrincipal.querySelector(".cards__element_image").alt = item.alt;
    //Para cambiar el color del boton me gusta al momento de darle click
    cadaTarjetaPrincipal
      .querySelector(".cards__element_itemImage")
      .addEventListener("click", function (event) {
        event.target.classList.toggle("cards__like_active");
      });

    //Para eliminar la tarjeta seleccionada
    cadaTarjetaPrincipal
      .querySelector(".cards__element_trast")
      .addEventListener("click", function () {
        const intemList = cadaTarjetaPrincipal.closest(".cards__element");
        intemList.remove();
      });

    //Obtener la lista de todas las imágnes emergentes
    const imagenes = document.querySelectorAll(".cards__element_image");
    //Obtener la ventana emergente y su contenido
    const modal = document.querySelector(".modal");
    const modalImage = document.querySelector("#modalImage");
    const modalClose = document.querySelector(".modal-close");
    //Itera sobre cada imagen y agrega un avento click a cada una de ellas
    imagenes.forEach((imagen) => {
      //Establece la imagen clicada sobre la ventana emergente
      imagen.addEventListener("click", () => {
        modalImage.src = imagen.src;
        modal.classList.add("show");
        //Mustra la ventana amergente
        modal.style.display = "grid";
      });
    });

    modalClose.addEventListener("click", () => {
      modal.classList.remove("show");
      modal.classList.add("hide");
      modal.style.display = "none";
    });

    //Agregar las tarjetas al contenedor principal
    contenedorCards.appendChild(cadaTarjetaPrincipal);
  });
}
//Crear las tarjetas cuando se cargue la página
window.addEventListener("load", tarjetasPrincipales);

//Función para almacenar los datos ingresados por el usuario y remplazarlos por
//los que ya estan por defecto al momento de darle click al boton de guardar.
function almacenarDatos(event) {
  event.preventDefault();

  let nuevoUsuario = entradaNombre.value;
  let nuevaActividad = entradaActividad.value;

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
  formularioTarjetas.classList.remove("show");
  overlayVentana.style.display = "none";
  formularioTarjetas.classList.add("hidePopup");
  formularioTarjetas.style.display = "none";
}
iconCerrarFormularioTarjetas.addEventListener("click", cerrarAgregarTarjetas);

//AGREGAR LA NUEVA TARJETA QUE INGRESA EL USUARIO
function agregarNuevaTarjeta(event) {
  event.preventDefault();
  //Seleccionamos el template donde vamos a crear la nueva tarjeta
  let newElement = document.querySelector("#newElement").content;

  //CONTENEDOR DONDE VAMOS A AGREGAR LA NUEVA TARJETA
  let userOnline = document.querySelector(".cards");

  //Clonamos el nodo de la tarjeta donde vamos a agregar el enlace
  let userElement = newElement
    .querySelector(".cards__element")
    .cloneNode("true");

  //Agregamos el enlace de la nueva imagen
  userElement.querySelector(".cards__element_image").src = entradaEnlace.value;

  //Agregamos el título de la nueva imagen
  userElement.querySelector(".cards__element_itemTitle").textContent =
    entradaTitulo.value;

  //Para cambiar el color del boton me gusta al momento de darle click
  userElement
    .querySelector(".cards__element_itemImage")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("cards__like_active");
    });

  //Para eliminar la tarjeta seleccionada
  userElement
    .querySelector(".cards__element_trast")
    .addEventListener("click", function () {
      const intemList = userElement.closest(".cards__element");
      intemList.remove();
    });

  //Obtener la lista de todas las imágnes emergentes
  const imagenes = document.querySelectorAll(".cards__element_image");
  //Obtener la ventana emergente y su contenido
  const modal = document.querySelector(".modal");
  const modalImage = document.querySelector("#modalImage");
  const modalClose = document.querySelector(".modal-close");
  //Itera sobre cada imagen y agrega un avento click a cada una de ellas
  imagenes.forEach((item) => {
    //Establece la imagen clicada sobre la ventana emergente
    item.addEventListener("click", () => {
      modalImage.src = item.src;
      modal.classList.add("show");
      //Mustra la ventana amergente
      modal.style.display = "grid";
    });
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("show");
    modal.classList.add("hide");
    modal.style.display = "none";
  });

  //Esta nueva tarjeta se agregará al principio del bloque cards
  userOnline.prepend(userElement);

  //luego cerrará el formulario suavemente
  formularioTarjetas.classList.remove("show");
  overlayVentana.style.display = "none";
  formularioTarjetas.classList.add("hidePopup");
  formularioTarjetas.style.display = "none";

  //Se limpian las entradas para el usuario no tenga que borrarlas
  let limpiarEntradaTitulo = (document.querySelector(".popup__imput").value =
    "");
  let limpiarEntradaEnlace = (document.querySelector("#enlace_imagen").value =
    "");
}
botonCrear.addEventListener("click", agregarNuevaTarjeta);
