class Card {
    constructor({ data, handleCardClick, handleAddLike, handleRemoveLike, handleDeleteClick }, cardSelector, user) {
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


    _isLiked() {
        return this._likesArray.some(like => like._id === this._user._id);
    }

    _isUserOwner() {
        return this._user._id === this._owner._id;
    }

    _updateLikeStatus() {
        const likeButton = this._element.querySelector(".cards__element_itemImage");
        const likeCount = this._element.querySelector(".countlike");

        if (this._isLiked()) {
            likeButton.classList.add("cards__like_active");
        } else {
            likeButton.classList.remove("cards__like_active");
        }

        likeCount.textContent = this._likesArray.length;
    }



    _handleLikeAndDislike() {
        //A la tarjeta creada se le da el Evento Click que activa o desactiva el boton de me gusta si el usuario lo selecciona
        this._element.querySelector(".cards__element_itemImage").addEventListener("click", (event) => {
            const likeButton = event.target;
            const countLike = this._element.querySelector(".countlike");
            if (!this._isLiked()) {
                this._handleAddLike(this._id).then(cardUpdated => {
                    this._likesArray = cardUpdated.likes;
                    likeButton.classList.add("cards__like_active")
                    countLike.textContent = this._likesArray.length;
                })
            } else {
                this._handleRemoveLike(this._id).then(cardUpdated => {
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
