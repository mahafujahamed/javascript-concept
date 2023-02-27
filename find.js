

const numbers = [12, 34, 5, 67, 78, 98, 45, 3, 2];

const fives = numbers.find(num => num % 5 === 0);
const fiveAll = numbers.filter(num => num % 5 ===0);
console.log(fives);
console.log(fiveAll);