// Función que nos permite resetear los formularios y también
function resetForms(forms) {
    forms.forEach((form) => {
        // Resetea cada entrada de los formularios para eliminar los datos que quedan
        form.reset();
        form.querySelector(".form__submit").classList.add("button_inactive")
    });
}

export { resetForms };