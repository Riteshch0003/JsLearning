const myNums=[1,2,3]
// const myTotal=myNums.reduce(function (acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
    
// return acc+currval
// },0)      // ACC INITIAL VAL


const myTotal=myNums.reduce((acc,currval)=>acc+currval,0)
console.log(myTotal);
const ShoppingCart=[
    {
        itemName:"Js Course",
        price:399
    },

    {
        itemName:"Mobile Course",
        price:2000
    },
    {
        itemName:"data scince course",
        price:2999
    },{
        itemName:"Python Course",
        price:489
    },
]

const priceTopay=ShoppingCart.reduce((acc,item)=>acc + item.price,0)

console.log(priceTopay);




