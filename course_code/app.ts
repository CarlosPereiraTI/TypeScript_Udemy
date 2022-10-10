// ! ================================================================ 2.29
// ! The unknown type
/*
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Charlie";

// We can assign any value

// userName = userInput; -> error

// will be necessary to check the type

if (typeof userInput === 'string') {
    userName = userInput;
}
*/

// ! ================================================================ 2.30
// ! The never type

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Charlie";

// We can assign any value

// userName = userInput; -> error

// will be necessary to check the type

if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message:string, code: number): void {
    throw {message: message, errorCode: code}
}

generateError("An error occurred", 500);

