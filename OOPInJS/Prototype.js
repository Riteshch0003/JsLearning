let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spider Power is ${this.spiderman}`);
    }
   
}
Object.prototype.Ritesh=function () {
    console.log(`ritesh is present in all objects`);
}
Array.prototype.heyRitesh=function(){
    console.log(`ritesh says hello`);
    
}


// heroPower.Ritesh()
myHeros.Ritesh()
myHeros.heyRitesh()

//(top level of things cant get acess the power of any other things)
const User={
    name:"Ritesh",
    email:"ritesh@google.com"
}


const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssigment:'JS Assigment',
    fulltime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)
let anotherUsername="GoogleATService     "
String.prototype.truelength=function(){
    console.log(`${this}`);
    
    console.log(`${this.name}`);
    console.log(`True Length is:${this.trim().length}`);
    
}
anotherUsername.truelength()
