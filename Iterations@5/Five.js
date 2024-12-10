const coding =["js","ruby","java","python","cpp"]


// coding.forEach( function(item){
//     console.log(item);
    
// })

coding.forEach((item)=>{
    console.log(item);
    
})


// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

coding.forEach((item,index,array)=>{
console.log(item,index,array);
})

const myCoding=[
    {
        language:"javascript",
        languagefilename:"js"
    },
    {
        language:"java",
        languagefilename:"java"
    },
    {
        language:"python",
        languagefilename:"py"
    },
]
myCoding.forEach((item)=>{
    console.log(item.language);
    
})