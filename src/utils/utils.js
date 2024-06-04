import { userName, userActivity, inputName, inputActivity, popupProfile, allForms } from "./constants.js"

// //Función que nos Permite Mostrar o Cerrar las Ventanas Emergentes
// function togglePopup(popup) {
//     popup.classList.toggle("popup_show");
// }

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

// //Función que nos pemite mostrar al frente la imagen que seleccionemos, y la resaltará para poder verla con mas detalles, ademas mostrará el nombre de la misma en el pié.
// function showImage(src, alt) {
//     const modalImage = document.querySelector("#popup__image");
//     const nombreModal = document.querySelector(".popup__title");
//     modalImage.src = src;
//     modalImage.alt = alt;
//     nombreModal.textContent = alt;
//     togglePopup(popupImage);
// }

// Función que nos permite resetear los formularios y también
function resetForms(forms) {
    forms.forEach((form) => {
        // Resetea cada entrada de los formularios para eliminar los datos que quedan
        form.reset();
        form.querySelector(".form__submit").classList.add("button_inactive");
    });
}

export { storeData, resetForms };