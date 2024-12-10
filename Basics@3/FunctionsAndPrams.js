function sayMyNmae(){
    console.log("R")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("G")
}
// sayMyNmae()

function addTwoNumbers(number1,number2){
        // let result=number1+number2
        // return result        
        return number1+number2
}
 addTwoNumbers(4,7)    //  arguments       

 const result=addTwoNumbers(2,6)
//  console.log("Result:",result);

 function loginUserMessage(username="sam"){
    // if(username===undefined){
    //         console.log("Please enter username");
    //         return            
    // }
    if(!username){
        console.log("Please enter username");
        return            
}
    return `${username} just logged in`
 }
//  console.log(loginUserMessage("ritesh"))
//  console.log(loginUserMessage());
// rest operator
function calculateCartPrice(val1,val2,...num1){
        return num1
}
 console.log(calculateCartPrice(200,300,400));
const user={
    username:"ritesh",
    price:199
}
function handleObject(anyobject){
        console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);       
}
handleObject(user)
handleObject({
    username:"shan",
    price:399
})



const myNewArray=[200,300,100,600]

function returnSecondValue(getarray){
    return getarray[1]

}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,100]));

