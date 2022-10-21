
// const button = document.querySelector("button");

// button?.addEventListener('click', () => {
//     console.log("Clicked!");
// });

// const userName = "Charlie";

// // console.log(userName);
// console.log(`Hello ${userName}`);
// console.log("Disconnecing...");

// ! ====================================================== 4.49
// let and const
/*
const userName = 'Charlie'; // not possble to modify
let age = 35; // is possible to modify

console.log(`Hello, my names is ${userName} and I have ${age} years old.`);

// var is still valid, but is recommended to use let
*/

// ! ====================================================== 4.50
// arrow functions
/*
const add = (a: number, b: number) => {
    return a + b;
};


// if  we only have ONE expression, we can omit the {} and the return
// example:
const add2 = (c: number, d:number) => c + d;

console.log(add(5,5));
console.log(add2(15,5));


const printOutput = (output: string | number) => console.log(output);

printOutput(add(20,35));
*/

// ! ====================================================== 4.52
// The spread operator (...)
/*
const add = (a: number, b: number) => {
    return a + b;
};


// if  we only have ONE expression, we can omit the {} and the return
// example:
const add2 = (c: number, d:number) => c + d;

console.log(add(5,5));
console.log(add2(15,5));


const printOutput = (output: string | number) => console.log(output);

printOutput(add(20,35));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['TV'];

activeHobbies.push(...hobbies);

// it works with objects as well

const person = {
    name: 'Charlie',
    age: 35
};

const copiedPerson = { ...person };
*/


// ! ====================================================== 4.53
// Rest parameters

/*
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['TV'];

activeHobbies.push(...hobbies);

// it works with objects as well

const person = {
    name: 'Charlie',
    age: 35
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
    // let result = 0;
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addNumbers = add(5,10,2,37);
console.log(addNumbers);
*/

// ! ====================================================== 4.54
// Array destructuring


const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['TV'];

activeHobbies.push(...hobbies);

// it works with objects as well

const person = {
    firstName: 'Charlie',
    age: 35
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
    // let result = 0;
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addNumbers = add(5,10,2,37);
console.log(addNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

