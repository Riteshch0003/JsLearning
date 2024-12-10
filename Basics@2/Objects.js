// singleton

// object literals
// Object.create(singleton method)

const mySym=Symbol("key1")


const JsUSer={
                name:"Ritesh",
                "fullname":"ritesh chopra",
                [mySym]:"key1",
                age:23,
                email:"ritesh@softobiz.com" ,
                isLoggedIn:false,
                lastLoginDays:["Monday","saturday"]
}
// console.log(JsUSer["email"]);
// console.log(JsUSer["fullname"]);
// console.log(JsUSer[mySym]);

JsUSer.email="ritesch@gmail.com"
// Object.freeze(JsUSer)
JsUSer.email="ritesh@sofotbiz.com"
// console.log(JsUSer);

JsUSer.greeting=function(){
    console.log("Hello Js User");
    
}
JsUSer.greetingTwo =function(){
  console.log('Hello Js User  ${this.name}');
      
}
// console.log(JsUSer.greeting());
// console.log(JsUSer.greetingTwo());


// object singleton
const tinderUser={
}
tinderUser.id="1234"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    fullname:{
        userfullname:{
            fisrtname:"ritesh",
            lastname:"chopra"
        }
    }
}
// console.log(regularUser.fullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3={obj1,obj2}

// Object.assign() method only copies enumerable and own properties from a source object to a target object
// const obj3= Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2}
console.log(obj3);

const users=[
    {
    id:1,
    email:"ritesh@gmail.com"
    },
    {
        id:1,
        email:"ritesh@gmail.com" 
    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));




// Desctructuring Of objects
const  course={
    coursename:"js learning",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor:instructor}=course
console.log(instructor);
// array data json format
[
    {},
    {},
    {}
]