class user{
    constructor(username){
        this.username=usernamex 
    }
    logMe(){
        console.log(`Username:${this.username}`);
    }
   static createId(){
        return `123`
    }
}
const ritesh = new User("ritesh")
// console.log(ritesh.createId());
class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email= email
    }
}
const iphone=new Teacher("iphone","i@phone.com")
console.log(iphone);
