class Section {
    constructor({ items, renderer }, cardSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(cardSelector);
    }

    renderer() {
        this._items.forEach((item) => {
            this._renderer(item);
        })
    }

    addItem(element) {
        this._container.appendChild(element);
    }

}


// Ejemplo de uso:
const mySection = new Section({
    items: [/* array de datos */],
    renderer: (item) => {
        // Crea y renderiza el elemento en la página
        // (por ejemplo, crea una tarjeta con los datos del item)
        // ...
    }
}, '.my-section-container');

// Luego, puedes llamar a mySection.render() para mostrar los elementos en la página.