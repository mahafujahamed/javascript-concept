
// Array Filtering------

const numbers = [12, 34, 5, 67, 78, 98, 45, 3, 2];
const bigNum = numbers.filter(number => number > 20);
const tiny = numbers.filter(n => n < 10);
console.log(bigNum);
console.log(tiny);