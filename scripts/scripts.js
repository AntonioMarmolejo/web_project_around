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

//Función para cerrar el formulario y desactivar el overlay para esclarecer la página
//al darle click en el boton cerrar que aparece en el formulario
function cerrarFormulario() {
  todoElformulario.style.display = "none";
  overlayVentana.style.display = "none";
}
inconoCerrarFomulario.addEventListener("click", cerrarFormulario);

//Función para mostrar el formulario y activar el overlay para resaltar el formulario
//al darle click en el boton de lapiz que se encuentra en el perfil de usuario
function abrirFormulario() {
  todoElformulario.style.display = "flex";
  overlayVentana.style.display = "grid";
}
botonPincelEditar.addEventListener("click", abrirFormulario);

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
}
botonAgregarImagen.addEventListener("click", abrirAgregarImagen);

//CERRAR EL FOMULARIO DE AGREGAR TARJETA
function cerrarAgregarTarjetas() {
  formularioTarjetas.style.display = "none";
  overlayVentana.style.display = "none";
}
iconCerrarFormularioTarjetas.addEventListener("click", cerrarAgregarTarjetas);

//AGREGAR LA NUEVA TARJETA
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

  //Esta nueva tarjeta se agregará al principio del bloque cards
  userOnline.prepend(userElement);

  //luego cerrará el formulario
  formularioTarjetas.style.display = "none";
  overlayVentana.style.display = "none";
}
botonCrear.addEventListener("click", agregarNuevaTarjeta);
