// ! ================================================================ 2.22
// ! Union types
/*
// function combine(n1: number, n2: number) {
//     const result = n1 + n2;
//     return result;
// }

// const combinedAges = combine(39, 35);
// console.log(combinedAges);

// If we try to combine strings, it will failed
// Union types are helpful here '|'

function combine(n1: number | string, n2: number | string) {
    let result;

    if (typeof n1 === 'number' && n2 === 'number') {
        result = n1 + n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    
    
    return result;
}

const combinedAges = combine(39, 35);
console.log(combinedAges);

const combinedNames = combine('Charlie ', 'and Ceci');
console.log(combinedNames);
*/

// ! ================================================================ 2.23
// ! Literal types

/*
function combine(n1: number | string, n2: number | string, /*resultConversion: string*/ // resultConversion: //'as-number' | 'as-text') {
    //let result;

    /*if (typeof n1 === 'number' && n2 === 'number') {
        result = n1 + n2;
    } else {
        result = n1.toString() + n2.toString();
    }

    if (resultConversion === 'as-number') {
        // + in the front of an input force it to a number
        return +result;
    } else {
        return result.toString();
    }*/
/*
    // Alternative
    if (typeof n1 === 'number' && n2 === 'number' || resultConversion === 'as-number') {
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    
    
    return result;
}

const combinedAges = combine(39, 35, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('39', '35', 'as-number');
console.log(combinedStringAges);


const combinedNames = combine('Charlie ', 'and Ceci', 'as-text');
console.log(combinedNames);
*/

// ! ================================================================ 2.24
// ! Type aliases
/*
type Combinable = number | string;
type conversionDescriptor = 'as-number' | 'as-text';

function combine(n1: Combinable, n2: Combinable, resultConversion: conversionDescriptor) {
    
    let result;

    if (typeof n1 === 'number' && n2 === 'number' || resultConversion === 'as-number') {
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    
    return result;
    
}

const combinedAges = combine(39, 35, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('39', '35', 'as-number');
console.log(combinedStringAges);


const combinedNames = combine('Charlie ', 'and Ceci', 'as-text');
console.log(combinedNames);
*/



