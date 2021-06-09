const numbers = [1,2,8,4,5,6];

// Array MAP
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const elementSquare = numbers[i];
//     const result = elementSquare * elementSquare;
//     output.push(result);
// }

// function square(element){
//     return element * element;
// }

// const square2 = element => element * element;

// const result = numbers.map(function(element, index, array){
//     return element * element;
// });

const result = numbers.map(x => x*x);

console.log(result);

///////////// Array Filter -> its depend on fullfill condition

const bigger = numbers.filter(x => x>5);
console.log(bigger);
