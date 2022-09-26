// ! ================================================================ 2.22
// ! Union types

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


