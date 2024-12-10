// Immediately Invoked FUnction Expresiion(IIFE)

(function chai(){
    // nmaed IIFE
    console.log(`DB CONNECTED`);
}());

// because of global scope pollution to remove pollution we use 
// (function defi)(executioncall)

( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);

})('ritesh')

