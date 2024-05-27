class UserInfo {
    constructor({ nameSelector, jobSelector }) {
        this._nameElement = document.querySelector(nameSelector);
        this._jobElement = document.querySelector(jobSelector);
    }

    // Método público para obtener información sobre el usuario
    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            job: this._jobElement.textContent
        };
    }

    // Método público para establecer información sobre el usuario
    setUserInfo({ name, job }) {
        this._nameElement.textContent = name;
        this._jobElement.textContent = job;
    }
}

// Ejemplo de uso:
const myUserInfo = new UserInfo({
    nameSelector: '.user-name',
    jobSelector: '.user-job'
});

// Obtener información actual del usuario
const currentUserInfo = myUserInfo.getUserInfo();
console.log(currentUserInfo); // { name: 'John Doe', job: 'Web Developer' }

// Actualizar información del usuario
myUserInfo.setUserInfo({ name: 'Alice Smith', job: 'Designer' });



/**
 En este ejemplo:

UserInfo recibe los selectores CSS de los elementos que contienen el nombre y el trabajo del usuario.
El método getUserInfo() devuelve un objeto con la información actual del usuario.
El método setUserInfo() actualiza los elementos con los nuevos datos del usuario.
 */


/**
 export class UserInfo {
  constructor({ userNameSelector, userJobSelector }) {
    this._userNameElement = userNameSelector;
    this._userJobElement = userJobSelector;
  }

  getUserInfo() {
    return {
      name: this._userNameElement.textContent,
      job: this._userJobElement.textContent,
    };
  }

  setUserInfo({ name, job }) {
    this._userNameElement.textContent = name;
    this._userJobElement.textContent = job;
  }
}
 */