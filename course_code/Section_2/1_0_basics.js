"use strict";
// ? ===================================================================== 2.16
// type assignment and type inference
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5; // type inference TS understand that is a number is not necessary to assign using variable: number
const number2 = 2.8;
const printResult = true;
const phraseString = 'The result is: ';
const result = add(number1, number2, printResult, phraseString);
// console.log(result);
