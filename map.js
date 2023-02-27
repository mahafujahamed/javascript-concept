

const numbers = [2, 5, 8, 9, 5, 3];
const output = [];
for(const number of numbers){
    const doubled = number * 2;
    output.push(doubled);
}
console.log(output);


// using Arrow function-------

const doubleIt = num => num * 2;
const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);

// Another way-------

const makeDoubleDirect = numbers.map(num => num *2);
console.log(makeDoubleDirect);

// Another way-1------------

const fiveTimes = [1, 2, 3, 4, 5, 6].map(x => x * 5);
console.log(fiveTimes);

// String value array using map------
   /*
        find first letters to make new array 
   */ 

const friends = ['mahafuj ahamed', 'rakib hasan', 'sourov hossain'];
const firstLetters = friends.map(friend => friend[0]);
console.log(firstLetters);
// find string length to make ew array----

const nameLength = friends.map(friend => friend.length);
console.log(nameLength);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'moble', price: 49000},
    {id: 1, name: 'build-pc', price: 466000},
    {id: 1, name: 'tablet', price: 46000}
];

const items = products.map(product => product.name );
console.log(items);