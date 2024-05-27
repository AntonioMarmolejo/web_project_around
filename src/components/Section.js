export default class Section { //Recibe el marcado atravez de una funció de callback y lo iserta en el contenedor.
    constructor({ items, renderer }, cardSelector) {
        this._items = items; //Array de datos
        this._renderer = renderer; //Función resposable de crear y mostrar los datos en la página
        this._container = cardSelector; //Selecciona la clase donde van los elemento de la tarjeta
    }

    addItem(element) { //Toma un elemento del DOM y lo agrega al contener
        this._container.append(element);
    }
    clear() {
        this._container.innerHTML = "";
    }
    renderer() { //Renderiza cada uno de los elementos en la página
        this.clear();
        this._items.forEach((item) => {
            const card = this._renderer(item);
            this.addItem(card);
        });
    }


}
