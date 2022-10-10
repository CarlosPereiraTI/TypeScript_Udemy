// ! ================================================================ 2.26
// ! Function return types and "void"
/*
// Is possible to explicity assign the return type ": number, : string...."
function add(n1:number, n2:number): number {
    return n1 + n2;
}

function printResult(num:number): void {
    console.log("Result: " + num);
    // void means that function is not returning anything
}

printResult(add(5,15));
*/

// ! ================================================================ 2.27
// ! Function as types
/*
// Is possible to explicity assign the return type ": number, : string...."
function add(n1:number, n2:number): number {
    return n1 + n2;
}

function printResult(num:number): void {
    console.log("Result: " + num);
    // void means that function is not returning anything
}

// printResult(add(5,15));

// funtion types
// let combineValues: Function;
// let combineValues: () => number;
// combineValues take s afuntion without parametter and return a number

let combineValues: (a: number, b: number) => number;

combineValues = add;
console.log(combineValues(8,8));
*/


// ! ================================================================ 2.28
// ! Function types and callbacks
/*

// Is possible to explicity assign the return type ": number, : string...."
function add(n1:number, n2:number): number {
    return n1 + n2;
}

function printResult(num:number): void {
    console.log("Result: " + num);
    // void means that function is not returning anything
}

function addAndHandle(n1:number, n2:number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

// printResult(add(5,15));

// funtion types
// let combineValues: Function;
// let combineValues: () => number;
// combineValues take s afuntion without parametter and return a number

let combineValues: (a: number, b: number) => number;

combineValues = add;
console.log(combineValues(8,8));


// calling addAndHandle
addAndHandle(10, 20, (result) => {
    console.log(result);
});
*/





