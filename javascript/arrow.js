const isEven = (number)=>number % 2 ===0;

const ispostive = (number)=>number >0;

let num = 4 ;
console.log(`Is  ${num} even ?`,isEven(num) );

console.log(`is ${num} positive ?`,ispostive(num));


num = -3 ;
console.log(`Is  ${num} even ?`,isEven(num) );

console.log(`is ${num} positive ?`,ispostive(num));
