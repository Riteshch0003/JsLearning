const userEmail=[]
if(userEmail){
    console.log("Got user email");
    
}else{
    console.log("Dont have user Email");   
}

// falsy value =
// false,0,-0,bigint 0n,null,undefined,nan

// Truthy value=
// "0",'flase'," ",[],{},function(){}

// if(userEmail.length===0){
// console.log("Array Is Empty");
// }


const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");   
}



// nullish coalcing operator(??):null undefined

let val1;
// val1=5 ?? 10
// val1=null??10
// val1=undefined??15


val1=null??10??20

console.log(val1);
// Terniary Opt

// condition?true:flase
const iceTeaPrice=100
iceTeaPrice<=80?
console.log("less than 80"):console.log("more than 80");



