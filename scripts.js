let botonPincelEditar = document.querySelector(".profile__intro_edit-button");
let inconoCerrarFomulario = document.querySelector(".edit-form_icono");
let todoElformulario = document.querySelector(".edit-form");
let nombreUsuario = document.querySelector(".profile__intro_name-explorer");
let actividadUsuario = document.querySelector(".profile__intro_explorer");
let entradaNombre = document.querySelector("#primer-nombre");
let entradaActividad = document.querySelector("#actividad");
let overlayVentana = document.querySelector(".overlay");
let botonGuadar = document.querySelector(".form__submi");

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

//Función para almacenar los datos ingresados por el usuario y remplazarlos por los que ya estan por defecto al momento de darle click al boton de guardar.
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
