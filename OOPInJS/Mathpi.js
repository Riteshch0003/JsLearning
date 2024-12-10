const descripter=Object.getOwnPropertyDescriptor(Math,"PI")

const Ritesh={
    name:'Ritesh Chopra',
    Height:6 ,
    isAvailable:true,

    Suspended:function(){
        console.log("Got suspended");
        
    }

}
console.log(Object.getOwnPropertyDescriptor(Ritesh,"name"));
// Object.defineProperty(Ritesh,'name',{
//     writable:false,
//     enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(Ritesh,"name"));
for(let[key,value]of Object.entries(Ritesh)){
    if (typeof value !=='function') {
        console.log(`${key}:${value}`);

    }

}