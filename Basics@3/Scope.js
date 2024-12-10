
// {}scope else if else 
let a=300
if(true){
    let a=10
    const b=20
    // console.log("INNER:",a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username="ritesh"
    function two(){
        const website="edge"
        console.log(username);
        
    }
    // console.log(website);
    two()
}
// one()
if(true){
    const username="ritesh"
    if(username==="ritesh"){
       const website="edge"
       console.log(username + website );  
    }
    // console.log(website);   
}
// console.log(username);



//  intresting
console.log( addone(5));

function addone(num){
            return num+1
}

// hoisting
addTwo(5)
const addTwo=function(num){
    return num+2
}
