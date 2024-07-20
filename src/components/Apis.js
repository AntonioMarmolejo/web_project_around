/**
 TOKEN : 678fbd92-e6e4-4044-b047-74ce334ffd4e
 GRUPO: web_es_11
 URL : https://around.nomoreparties.co/v1/web_es_11/cards
 */

class Api {
    constructor(url, token) {
        this._url = url;
        this._token = token;
    };

    //Metodos para cargar los datos del usuario al cargar la página
    getUserInfo() {
        return fetch(`${this._url}/users/me`, //Raliza la petición al servidor de la información del usuario
            {
                method: 'GET',
                headers: {
                    "Authorization": this._token
                }
            }
        )
            .then((res) => res.json()) //Convierte los datos en formato JSON
            .catch((err) => {
                console.log('Error:', err); //Si la respuesta no es correcta se imprimirá un mensaje de error
            })
    }

    //Metodos para obtener las tarjetas del servidor y cargarlas en la página
    getInitialCard() {
        return fetch(`${this._url}/cards`, //Realiza la petición al servidor de las tarjetas principales para cargarlas
            {
                method: "GET",
                headers: {
                    "Authorization": this._token
                }
            }
        )
            .then((res) => res.json()) //Convierte los datos recividos en formato JSON
            .catch((err) => {
                console.log('Error:', err) //Si la respuesta es incorrecta imprimirá un mensaje de error
            })
    }

    //Método para editar la información del usuario desde el servidor
    updateUser(name, about) {
        return fetch(`${this._url}/users/me`, { //Realiza una petición de cambio de datos del perfil de usuario
            method: "PATCH",
            headers: {
                "Authorization": this._token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                about: about,
            })
        })
            .then((res) => res.json()) //Convierte los datos recibios en formato JSON
            .catch((err) => {
                console.log("Error: ", err) //Si algo sale mal me mostrará un mensaje de error
            });
    }

    //Método para actualizar la foto del perfil de usuario
    updateUserPhoto(link) {
        return fetch(`${this._url}/users/me/avatar`, { //Realiza una petición de cambio de la foto de perfil de usuario
            method: 'PATCH',
            headers: {
                "Authorization": this._token,
            },
            body: JSON.stringify({
                avatar: link,
            })
        })
            .this((res) => res.json()) //Conviete los datos en formato JSON
            .catch((err) => {
                console.log("Error:", err); //Si se presenta un error nos mostrará un mensaje en la consola con el error
            })
    }

    //Método para añadir una nueva targeta al servidor
    addCard(name, link) {
        return fetch(`${this._url}/cards`, { //Realiza una petición para agregar una vueva tarjeta al servidor
            method: "POST",
            headers: {
                "Authorization": this._token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                link: link,
                name: name,
            })
        })
            .then((res) => res.json()) //Convierte los datos en formato JSON
            .catch((err) => {
                console.log("Error: ", err) // Si algo sale mal me mostrará un mensaje de error
            })

    }

    //Método para mostrar la cantidad de like de cada tarjeta
    linkCard(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, { //Se realiza una petición para elimiar una tarjeta seleccionada
            method: 'PUT',
            headers: {
                "Authorization": this._token,
            },
        })
            .then((res) => res.json())//Covierte los datos en formato JSON
            .catch((err) => {
                console.log("Error: ", err) //Si algo sale mal se mostrará un mensaje de error
            })
    }
    //Método para eliminar una tarjeta seleccionada
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, { //Se realiza una petición para elimiar una tarjeta seleccionada
            method: 'DELETE',
            headers: {
                "Authorization": this._token,
            }
        })
            .then((res) => res.json())//Covierte los datos en formato JSON
            .catch((err) => {
                console.log("Error: ", err) //Si algo sale mal se mostrará un mensaje de error
            })
    }

    //Método para eliminar un like de una tarjeta seleccionada
    deleteCardLink(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, { //Se realiza una petición para elimiar una tarjeta seleccionada
            method: 'DELETE',
            headers: {
                "Authorization": this._token,
            },
        })
            .then((res) => res.json())//Covierte los datos en formato JSON
            .catch((err) => {
                console.log("Error: ", err) //Si algo sale mal se mostrará un mensaje de error
            })
    }
}


export const api = new Api('https://around.nomoreparties.co/v1/web_es_11', "678fbd92-e6e4-4044-b047-74ce334ffd4e");