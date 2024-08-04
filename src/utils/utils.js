// Función que nos permite resetear los formularios y también
function resetForms(forms) {
    forms.forEach((form) => {
        // Resetea cada entrada de los formularios para eliminar los datos que quedan
        form.reset();

        const submitButtons = form.querySelectorAll('.form__submit');
        submitButtons.forEach((button) => {
            if (!button.classList.contains("form__submit_confirmation")) {
                button.classList.add("button_inactive")
            }
        })
    });
}

export { resetForms };