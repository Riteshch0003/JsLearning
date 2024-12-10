const name ="Ritesh"
const repoCount=50
// console.log(name +repoCount +"Value");
console.log(`${name}, ${repoCount} `);

const gameName=new String('Ritesh+Rc')
console.log(gameName.__proto__);
console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));
const newString=gameName.substring(0,4)
console.log(newString);


const anotherstring=gameName.slice(-8,4)
console.log(anotherstring);
const newStringOne="   ritesh  "
console.log(newStringOne);
console.log(newStringOne.trim());
// replace 
// split
const url="https://ritesh.com/ritesh%20chopra"
console.log(url.replace('%20','-'));
console.log(gameName.split('-'));
