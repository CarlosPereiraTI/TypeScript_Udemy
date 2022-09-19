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
// ? ===================================================================== 2.12
// Working with numbers, strings and booleans
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var phraseString = 'The result is: ';
var result = add(number1, number2, printResult, phraseString);
// console.log(result);
