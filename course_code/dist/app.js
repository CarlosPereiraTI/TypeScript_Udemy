"use strict";
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
/*
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
*/
// ! ====================================================== 5.59
// Creating first class
// console.log("Hello typescript!");
/*
class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

const accounting = new Department('Accounting');
console.log(accounting);
*/
// ! ====================================================== 5.61
// Creating first class
// console.log("Hello typescript!");
/*
class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department){
        console.log('Department: ' + this.name);
        
    }
}

const accounting = new Department('Accounting');
console.log(accounting);
accounting.describe();

const accountingCopy = {name: 'dummy', describe: accounting.describe };
accountingCopy.describe();
*/
// ! ====================================================== 5.62
// Creating first class
// console.log("Hello typescript!");
/*
class Department {
    name: string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department){
        console.log('Department: ' + this.name);
        
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('Accounting');

accounting.addEmployee('Charlie');

console.log(accounting);

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = {name: 'dummy', describe: accounting.describe };
// accountingCopy.describe();
*/
// ! ====================================================== 5.63
// Creating first class
// console.log("Hello typescript!");
/*
class Department {
    // private id: string;
    // private name: string;
    private employees: string[] = [];

    constructor(private id: string, public name: string) {
        // this.name = n;
    }

    describe(this: Department){
        console.log(`Department (${this.id}: ${this.name}`);
        
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('id','Accounting');

accounting.addEmployee('Charlie');

console.log(accounting);

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = {name: 'dummy', describe: accounting.describe };
// accountingCopy.describe();
*/
// ! ====================================================== 5.64
// Read only
// console.log("Hello typescript!");
/*
class Department {
    // private id: string;
    // private name: string;
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.name = n;
    }

    describe(this: Department){
        console.log(`Department (${this.id}: ${this.name}`);
        
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('id','Accounting');

accounting.addEmployee('Charlie');

console.log(accounting);

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = {name: 'dummy', describe: accounting.describe };
// accountingCopy.describe();
*/
// ! ====================================================== 5.64
// Inheritance
// console.log("Hello typescript!");
/*
class Department {
    // private id: string;
    // private name: string;
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.name = n;
    }

    describe(this: Department){
        console.log(`Department ${this.id}: ${this.name}`);
        
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class itDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

const it = new itDepartment('d1', ['Max']);

it.addEmployee('Charlie');

console.log(it);

it.describe();
it.printEmployeeInformation();

// const accountingCopy = {name: 'dummy', describe: accounting.describe };
// accountingCopy.describe();
*/
// ! ====================================================== 5.67
/*
class Department {
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    }

    describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
    }

    printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
    if (this.lastReport) {
        return this.lastReport;
    }
    throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
    if (!value) {
        throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
    }

    addEmployee(name: string) {
    if (name === 'Max') {
        return;
    }
    this.employees.push(name);
    }

    addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
    }

    printReports() {
    console.log(this.reports);
    }
}


const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.printReports();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
*/
// ! ====================================================== 5.69
// Abstract classes
/*

abstract class Department {
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    }

    abstract describe(this: Department): void
        // console.log(`Department (${this.id}): ${this.name}`);
    

    addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
    }

    printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
    if (this.lastReport) {
        return this.lastReport;
    }
    throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
    if (!value) {
        throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addEmployee(name: string) {
    if (name === 'Max') {
        return;
    }
    this.employees.push(name);
    }

    addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
    }

    printReports() {
    console.log(this.reports);
    }
}


const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.describe();

// accounting.printReports();
// accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
*/
// ! ====================================================== 5.70
// Singletons and Private Constructors
/*
abstract class Department {
    static fiscalYear = 2020;
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
      // this.id = id;
      // this.name = n;
      // console.log(Department.fiscalYear);
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        // validation etc
        // this.id = 'd2';
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
admins: string[];
constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
}

describe() {
    console.log('IT Department - ID: ' + this.id);
}
}

class AccountingDepartment extends Department {
private lastReport: string;
private static instance: AccountingDepartment;

get mostRecentReport() {
    if (this.lastReport) {
    return this.lastReport;
    }
    throw new Error('No report found.');
}

set mostRecentReport(value: string) {
    if (!value) {
    throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
}

private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
}

static getInstance() {
    if (AccountingDepartment.instance) {
        return this.instance;
    }

    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
}

describe() {
    console.log('Accounting Department - ID: ' + this.id);
}

addEmployee(name: string) {
    if (name === 'Max') {
    return;
    }
    this.employees.push(name);
}

addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
}

printReports() {
    console.log(this.reports);
}
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
*/
// ! ====================================================== 5.72
// A first interface
/*

interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
name: 'Max',
age: 30,
greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
}
};

user1.greet('Hi there - I am');
*/
// ! ====================================================== 5.73
// Using interfaces with classes
/*
interface Greetable {
    name: string;

    greet(phrase: string): void;
}


class Person implements Greetable {
    name: string;
    age = 30;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greetable;

user1 = new Person('Max');

user1.greet('Hi there - I am');
console.log(user1);
*/
// ! ====================================================== 5.76
// Extending Interfaces
/*

interface Named {
    readonly name: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greetable;

user1 = new Person('Max');
// user1.name = 'Manu';

user1.greet('Hi there - I am');
console.log(user1);
*/
// ! ====================================================== 5.77
// Interfaces as funtion types
/*
// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    readonly name: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greetable;

user1 = new Person('Max');
// user1.name = 'Manu';

user1.greet('Hi there - I am');
console.log(user1);
*/
// ! ====================================================== 5.78
// Optional parameters & Propertes
/*
// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(n?: string) {
        if (n) {
        this.name = n;
        }
    }

    greet(phrase: string) {
        if (this.name) {
        console.log(phrase + ' ' + this.name);
        } else {
        console.log('Hi!');
        }
    }
}

let user1: Greetable;

user1 = new Person();
// user1.name = 'Manu';

user1.greet('Hi there - I am');
console.log(user1);
*/
