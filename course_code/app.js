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
// Objects types
/*
// {} TS notation for object types
const person: {
    name: string;
    age: number;
} = {
    name: 'Charlie',
    age: 30
};

console.log(person);
console.log(person.name);
*/
// ? ===================================================================== 2.18
// Arrays
// {} TS notation for object types
var person = {
    //     name: string;
    //     age: number;
    // } = {
    name: 'Charlie',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
var favoriteActivities;
// favoriteActivities = 'Sports'; !! Error
favoriteActivities = ['Sports']; // Is possible to assign a string array
// favoriteActivities = ['Sports', 1] !!! Error is not possible to assign an integer to an string array
// possible solution:
// let favoriteActivities: any[]; !!! Not recommended but is possible
// console.log(person);
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
