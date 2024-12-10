const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);

// non primitive (object)
// Arrays
const heros=["shaktiman","nagaraj","daaj"]
//object in 
let myObj={
    name:"ritesh",
    age:"23"
}

const myFunction=function(){
    console.log("hello world");
    
}

// stack(Primitive) heap(Non Primitive)
let myusername="ritesh.chopra@softobiz"
let anothername=myusername
anothername="ritesh@gmail.com"
console.log(anothername);

let userOne ={
    email:"ritesh12@gmail.com",
    upi:"@okicici"
}
let userTwo=userOne
userTwo.email="ritesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);

