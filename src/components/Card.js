class Card {
    constructor({ data, handleCardClick, handleDeleteClick, handleAddLike, handleRemoveLike, }, cardSelector, user) {
        this._link = data.link;
        this._name = data.name;
        this._id = data._id;
        this._owner = data.owner;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._likesArray = data.likes || {};
        this._user = user;
        this._handleAddLike = handleAddLike;
        this._handleDeleteClick = handleDeleteClick;
        this._handleRemoveLike = handleRemoveLike;
    }

    _getTemplate() {
        const newElemnt = document.querySelector(this._cardSelector).content.querySelector(".cards__element")
            .cloneNode("true");

        return newElemnt;
    }


    //Método que devuelve verdadero si al menos un elemento del array, cumple con una condiciona, la cual es ver si la identidad del usuario se encuentra en el array, si se encuentra nos dará un true, de lo contrario un false.
    _isLiked() {
        return this._likesArray.some(like => like._id === this._user._id);
    }

    //Método que compara si el ID del usuario optenido de los datos de la peticion hecha en la clase API y cargadas por defecto, es el mismo ID que se encuentra en el array que pasamos como parámetro a la clase Cards, devolverá true si es igual de lo contrario devolverá false.
    _isUserOwner() {
        return this._user._id === this._owner._id;
    }

    //Método que actualiza el contador de like, dependiendo de la cantidad que tenga cada una de las tarjetas
    _updateLikeStatus() {
        const likeButton = this._element.querySelector(".cards__element_itemImage");
        const likeCount = this._element.querySelector(".countlike");

        if (this._isLiked()) {
            likeButton.classList.add("cards__like_active"); //Si es verdadero activa el boton de likes
        } else {
            likeButton.classList.remove("cards__like_active"); //De lo contrario lo desactiva
        }

        likeCount.textContent = this._likesArray.length; //En el contador almacenamos la longitud del array de likes.
    }



    _handleLikeAndDislike() {
        //A la tarjeta creada se le da el Evento Click que activa o desactiva el boton de me gusta si el usuario lo selecciona y ademas actualiza el contador para mostrar la cantidad de like que tiene la tarjeta
        this._element.querySelector(".cards__element_itemImage").addEventListener("click", (event) => {
            const likeButton = event.target; //Guarda el boton que activó el evento.
            const countLike = this._element.querySelector(".countlike"); //Guada el contador like.

            if (!this._isLiked()) { //Si esto no es verdadero (osea si esta persona no ha dado like) ejecuta la siguiente función
                this._handleAddLike(this._id) //Envia una petición de actualización de los likes en el servidor con esta ID de usuario
                    .then(cardUpdated => { //Una vez que la promesa se haya cumplido osea que me devuelva la tarjeta actualizada
                        this._likesArray = cardUpdated.likes; //Almacena a este usuario en el array likes.
                        likeButton.classList.add("cards__like_active") //Activa el corazon de me gusta
                        countLike.textContent = this._likesArray.length; //Actualiza el contador y muestra la cantiad de likes.
                    })
            } else {
                this._handleRemoveLike(this._id)//Si esto es verdadero (osea si este usuario ya dio like) ejecuta la siguiente función
                    .then(cardUpdated => { //Una vez que la promesa se haca cumplido y me devuelva la tarjeta actualizada
                        this._likesArray = cardUpdated.likes;
                        likeButton.classList.remove("cards__like_active")
                        countLike.textContent = this._likesArray.length;
                    })
            }
        });
    }

    _handleRemove() {
        this._element.querySelector(".cards__element_trast").addEventListener("click", () => {
            this._handleDeleteClick(this._id, () => {
                this._element.remove();
            })
        });
    }

    _showCard() {
        //A la tarjeta creada se le da el evento click que nos permite mostrar la tarjeta en la pantalla una vez que el usuario la seleccione
        this._element.querySelector(".cards__element_image").addEventListener("click", () => {
            this._handleCardClick({ link: this._link, name: this._name });
        });
    }


    _setEventListeners() {
        this._handleLikeAndDislike();
        this._handleRemove();
        this._showCard();
        this._imagenElement.addEventListener("click", () => {
            this._handleCardClick({ link: this._link, name: this._name });
        });
    }

    //Utiliza la plantilla colocada en html para crear la nueva tarjeta ingresada por el usuario
    createNewCard() {
        this._element = this._getTemplate();
        this._element.querySelector(".cards__element_itemTitle").textContent = this._name;
        this._imagenElement = this._element.querySelector(".cards__element_image");
        this._imagenElement.src = this._link;
        this._imagenElement.alt = this._name;
        if (!this._isUserOwner()) {
            this._element.querySelector(".cards__element_trast").style.display = 'none'
        }
        this._updateLikeStatus()
        this._setEventListeners();

        return this._element;
    }

}

export default Card;
