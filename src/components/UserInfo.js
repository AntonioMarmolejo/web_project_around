export default class UserInfo {    //Es capaz de presentar información sobre el usuario en la página
    constructor({ nameSelector, jobSelector, avatarSelector }) {
        this._nameElement = document.querySelector(nameSelector);
        this._jobElement = document.querySelector(jobSelector);
        this._avatarElement = document.querySelector(avatarSelector);
    }

    // Método público para obtener información sobre el usuario
    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            job: this._jobElement.textContent,
            avatar: this._avatarElement.textContent,
        };
    }

    // Método público para establecer información sobre el usuario
    setUserInfo({ name, job, avatar }) {
        this._nameElement.textContent = name;
        this._jobElement.textContent = job;
        this._avatarElement.src = avatar;
    }
}
