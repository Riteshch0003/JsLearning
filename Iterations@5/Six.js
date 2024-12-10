// const coding =["js","ruby","java","python","cpp"]


const myNums=[1,2,3,4,5,6,7,8,9]
// const newNums=myNums.filter((num)=>num>4)
// Scope
// const newNums=myNums.filter((num)=>{
//    return num>4})

// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const Books=[
    {title:'Book One',genre:'Fiction',publish:'1981',editin:'2004'},
    {title:'Book Two',genre:'Romance',publish:'1990',editin:'2009'},
    {title:'Book Three',genre:'Love',publish:'1980',editin:'2007'},
    {title:'Book Four',genre:'Drama',publish:'1991',editin:'2005'},
    {title:'Book FIve',genre:'Motivation',publish:'1931',editin:'2004'},
    {title:'Book Six',genre:'Spritual',publish:'2000',editin:'2005'},
    {title:'Book Seven',genre:'Action',publish:'1954',editin:'2008'},
    {title:'Book Eight',genre:'Fiction',publish:'2000',editin:'2013'},

];
let userBooks=Books.filter((bk)=>bk.genre==='Fiction')
 userBooks=Books.filter((bk)=>{
    return bk.publish>=2000 && bk.genre==="Fiction"
})
console.log(userBooks);

