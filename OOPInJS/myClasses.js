// ES6

class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password= email   
    }
encryptPassword(){
    return `${this.password}abc`
} 

changeUsername(){
    return`${this.username.toUpperCase()}`
}
}

const ritesh=new User("Ritesh","ritesh@gmail.com","123")
console.log(ritesh.encryptPassword);
console.log(ritesh.changeUsername);

