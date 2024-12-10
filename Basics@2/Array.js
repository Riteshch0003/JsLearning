const myarr=[0,1,2,3,4]
// console.log(myarr[0]);



// Array Methods 


// myarr.push(6)
// myarr.push(7)
// myarr.pop()

// myarr.unshift(9)

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3));

// const  newArr=myarr.join()
// console.log(myarr);

// console.log(newArr);

// slice  Splice
// console.log("A",myarr);

const myn1=myarr.slice(1,3)

// console.log(myn1);
// console.log("B",myarr);
// Manuplate Original Array
const myn2=myarr.splice(1,3)
// console.log("C",myarr);

// console.log(myn2);

const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);



// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros);
const another_array=[1,2,3,[4,5,6],7,[6,7],[4,5]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);


console.log( Array.isArray("Ritesh"));
console.log( Array.from("Ritesh"));
//  empty array
console.log( Array.from({name:"ritesh"}))     

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
