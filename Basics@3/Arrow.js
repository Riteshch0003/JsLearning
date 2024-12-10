// arrow function
const user={
    username:"ritesh",
    price:333,
    welcomeMessage:function(){
            console.log(`${this.username},welcome to website`);
            console.log(this);
            
    }
}


// browserobjects=windows
// user.welcomeMessage()
// user.username="shan"
// user.welcomeMessage()
// user.welcomeMessage(this)



// function chai(){
//     let username="ritesh"
//     console.log(this.username);
    
// }
// chai()


// const chai=function(){
//     let username="ritesh"
//             console.log(this.username);
            
// }

// const chai=()=>{
//         let username="ritesh"
//                 console.log(this);
                
//     }
//   chai()  


// const addTwo=(num1,num2)=>{
//     return num1+num2
// }


// const addTwo=(num1,num2)=> num1+num2

const addTwo=(num1,num2)=>({username:"ritesh"})
console.log(addTwo(3,4));

// const myArray=[2,5,3,7,8]
// myArray.forEach()

