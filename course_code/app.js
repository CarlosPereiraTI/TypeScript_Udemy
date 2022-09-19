// console.log('Your code goes here...');
// ? ===================================================================== 2.11
/*
function add(n1: number, n2: number) {
    return n1+n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result); // 7.8
*/
// ? ===================================================================== 2.12
// TS types vs JS types
/*
function add(n1: number, n2: number) {
    console.log(typeof n1);
    return n1+n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result); // 7.8
*/
// ? ===================================================================== 2.14
// Working with numbers, strings and booleans
/*
function add(n1: number, n2: number, showResult: boolean, phrase: string) {

    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return n1 + n2;
    }
    
}

const number1 = 5;
const number2 = 2.8;

const printResult = true;

const phraseString = 'The result is: ';

const result = add(number1, number2, printResult, phraseString);
// console.log(result);
*/
// ? ===================================================================== 2.15
// type assignment and type inference
/*
function add(n1: number, n2: number, showResult: boolean, phrase: string) {

    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return n1 + n2;
    }
    
}

const number1 = 5; // type inference TS understand that is a number is not necessary to assign using variable: number
const number2 = 2.8;

const printResult = true;

const phraseString = 'The result is: ';

const result = add(number1, number2, printResult, phraseString);
// console.log(result);
*/
// ? ===================================================================== 2.16
// Objects
// {} TS notation for object types
var person = {
    name: 'Charlie',
    age: 30
};
console.log(person);
console.log(person.name);
