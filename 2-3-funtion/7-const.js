const x = 10;
// x = 20;
console.log(`x: ${x}`);

let numbers = [10, 20, 30, 40];
// let copyNumbers = numbers.slice();
let copyNumbers = [...numbers];
//
// for (const n of numbers) {
//   copyNumbers.push(n);
// }
numbers[1] = 99;
copyNumbers[2] = 777;

console.log('numbers:', numbers);
console.log('copyNumbers:', copyNumbers);
