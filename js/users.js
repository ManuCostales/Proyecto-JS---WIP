// FUNCION CONSTRUCTORA DE CLASE DE OBJETO "USER" /USUARIOS:

class USER {
    constructor(id, firstName, lastName, nickname, email, phone, password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
        this.email = email;
        this.phone = phone;
        this.password = password;
        }
    info() {
        return `<br>
        Nickname: ${this.nickname}<br>
        Usuario: ${this.firstName} ${this.lastName}.<br>
        Email: ${this.email}<br>
        Telefono: ${this.phone}`
    }
}


let userList = [];


let userId
let userName
let userLastName
let userNickName
let userEmail
let userPhone
let userPassword


let USER_CURRENT;


console.log(userList)
