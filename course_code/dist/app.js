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
// ! ====================================================== 6.83
// Intersection types
/*
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

console.log("Testing");
*/
// ! ====================================================== 6.84
// More on type guards
/*
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};
    
// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation({ name: 'Manu', startDate: new Date() });

class Car {
    drive() {
    console.log('Driving...');
    }
}

class Truck {
    drive() {
    console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);
*/
// ! ====================================================== 6.85
// Discriminated Unions
/*
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation({ name: 'Manu', startDate: new Date() });

class Car {
    drive() {
    console.log('Driving...');
    }
}

class Truck {
    drive() {
    console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

// ====================

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});
*/
// ! ====================================================== 6.86
// Type casting
/*
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation({ name: 'Manu', startDate: new Date() });

class Car {
    drive() {
    console.log('Driving...');
    }
}

class Truck {
    drive() {
    console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
    case 'bird':
        speed = animal.flyingSpeed;
        break;
    case 'horse':
        speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!';
}
*/
// ! ====================================================== 6.87
// Index Properties
/*
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation({ name: 'Manu', startDate: new Date() });

class Car {
    drive() {
    console.log('Driving...');
    }
}

class Truck {
    drive() {
    console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
    case 'bird':
        speed = animal.flyingSpeed;
        break;
    case 'horse':
        speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!';
}

interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character!' }
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};
*/
// ! ====================================================== 7.94
// Built-in generics
/*
// is a type that can connect with another type
// const names: Array = [];
// const names: any[] = [];
const names: Array<string> = []; // generic type
// names[0].split(' ');

// Promises
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});

promise.then(data => {
    data.split(' ');
});
*/
// ! ====================================================== 7.95
// Creating a generic function
// function merge(objA: object, objB: object) {
//     return Object.assign(objA, objB);
// }
/*
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// console.log(merge({name: 'Martina'}, {age: 3}));
const mergeObj = merge({name: 'Martina'}, {age: 3});
*/
// ! ====================================================== 7.96
// Workign with constants
/*
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);
*/
// ! ====================================================== 7.97
// Another Generic Function
/*
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
    descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));
*/
// ! ====================================================== 7.98
// The keyof
/*
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
    descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');
*/
// ! ====================================================== 7.99
// Generic Classes
/*
// const names: Array<string> = []; // string[]
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then(data => {
//   // data.split(' ');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
    descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
    this.data.push(item);
    }

    removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
        return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
    }

    getItems() {
    return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Manu'});
// // ...
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());
*/
// ! ====================================================== 7.102
// Generic types vs Union Types
/*
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
    descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
    this.data.push(item);
    }

    removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
        return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
    }

    getItems() {
    return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Manu'});
// // ...
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();
*/
// ! ====================================================== 8.105
// A first class decorator
/*
function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

@Logger
class Person {
    name = 'Max';

    constructor() {
    console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);
*/
// ! ====================================================== 8.106
/*
function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

@Logger('LOGGING - PERSON')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);
*/
// ! ====================================================== 8.107
// more useful decorators
/*
function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

// @Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Martina';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);
*/
// ! ====================================================== 8.108
// adding multiple decorators
/*
function Logger(logString: string) {
    console.log('LOGGER FACTORY');
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function(constructor: any) {
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
            if (hookEl) {
                hookEl.innerHTML = template;
                hookEl.querySelector('h1')!.textContent = p.name;
            }
    }
}

// @Logger('LOGGING - PERSON')
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);
*/
// ! ====================================================== 8.109
// diving into property decorators
/*
function Logger(logString: string) {
    console.log('LOGGER FACTORY');
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function(constructor: any) {
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    };
}

// @Logger('LOGGING - PERSON')
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);

// ---

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}
*/
// ! ====================================================== 8.110
// acessor and parameter decorators
/*
function Logger(logString: string) {
console.log('LOGGER FACTORY');
return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
};
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function(constructor: any) {
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
            if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
            }
    };
}

// @Logger('LOGGING - PERSON')
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
name = 'Max';

constructor() {
    console.log('Creating person object...');
}
}

const pers = new Person();

console.log(pers);

// ---

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);
*/
// ! ====================================================== 8.113
/*
function Logger(logString: string) {
console.log('LOGGER FACTORY');
return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
};
}

function WithTemplate(template: string, hookId: string) {
console.log('TEMPLATE FACTORY');
return function<T extends { new (...args: any[]): {name: string} }>(
    originalConstructor: T
) {
    return class extends originalConstructor {
    constructor(..._: any[]) {
        super();
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
        hookEl.innerHTML = template;
        hookEl.querySelector('h1')!.textContent = this.name;
        }
    }
    };
};
}

// @Logger('LOGGING - PERSON')
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
name = 'Max';

constructor() {
    console.log('Creating person object...');
}
}

const pers = new Person();

console.log(pers);

// ---

function Log(target: any, propertyName: string | Symbol) {
console.log('Property decorator!');
console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
console.log('Accessor decorator!');
console.log(target);
console.log(name);
console.log(descriptor);
}

function Log3(
target: any,
name: string | Symbol,
descriptor: PropertyDescriptor
) {
console.log('Method decorator!');
console.log(target);
console.log(name);
console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
console.log('Parameter decorator!');
console.log(target);
console.log(name);
console.log(position);
}

class Product {
@Log
title: string;
private _price: number;

@Log2
set price(val: number) {
    if (val > 0) {
    this._price = val;
    } else {
    throw new Error('Invalid price - should be positive!');
    }
}

constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
}

@Log3
getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
}
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);
*/
// ! ====================================================== 8.114
/*
function Logger(logString: string) {
console.log('LOGGER FACTORY');
return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
};
}

function WithTemplate(template: string, hookId: string) {
console.log('TEMPLATE FACTORY');
return function<T extends { new (...args: any[]): {name: string} }>(
    originalConstructor: T
) {
    return class extends originalConstructor {
    constructor(..._: any[]) {
        super();
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
        hookEl.innerHTML = template;
        hookEl.querySelector('h1')!.textContent = this.name;
        }
    }
    };
};
}

// @Logger('LOGGING - PERSON')
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
name = 'Max';

constructor() {
    console.log('Creating person object...');
}
}

const pers = new Person();

console.log(pers);

// ---

function Log(target: any, propertyName: string | Symbol) {
console.log('Property decorator!');
console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
console.log('Accessor decorator!');
console.log(target);
console.log(name);
console.log(descriptor);
}

function Log3(
target: any,
name: string | Symbol,
descriptor: PropertyDescriptor
) {
console.log('Method decorator!');
console.log(target);
console.log(name);
console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
console.log('Parameter decorator!');
console.log(target);
console.log(name);
console.log(position);
}

class Product {
@Log
title: string;
private _price: number;

@Log2
set price(val: number) {
    if (val > 0) {
    this._price = val;
    } else {
    throw new Error('Invalid price - should be positive!');
    }
}

constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
}

@Log3
getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
}
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
const originalMethod = descriptor.value;
const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
    const boundFn = originalMethod.bind(this);
    return boundFn;
    }
};
return adjDescriptor;
}

class Printer {
message = 'This works!';

@Autobind
showMessage() {
    console.log(this.message);
}
}

const p = new Printer();
p.showMessage();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);
*/
// ! ====================================================== 8.116
/*
function Logger(logString: string) {
console.log('LOGGER FACTORY');
return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
};
}

function WithTemplate(template: string, hookId: string) {
console.log('TEMPLATE FACTORY');
return function<T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
) {
    return class extends originalConstructor {
    constructor(..._: any[]) {
        super();
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
        hookEl.innerHTML = template;
        hookEl.querySelector('h1')!.textContent = this.name;
        }
    }
    };
};
}

// @Logger('LOGGING - PERSON')
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
name = 'Max';

constructor() {
    console.log('Creating person object...');
}
}

const pers = new Person();

console.log(pers);

// ---

function Log(target: any, propertyName: string | Symbol) {
console.log('Property decorator!');
console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
console.log('Accessor decorator!');
console.log(target);
console.log(name);
console.log(descriptor);
}

function Log3(
target: any,
name: string | Symbol,
descriptor: PropertyDescriptor
) {
console.log('Method decorator!');
console.log(target);
console.log(name);
console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
console.log('Parameter decorator!');
console.log(target);
console.log(name);
console.log(position);
}

class Product {
@Log
title: string;
private _price: number;

@Log2
set price(val: number) {
    if (val > 0) {
    this._price = val;
    } else {
    throw new Error('Invalid price - should be positive!');
    }
}

constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
}

@Log3
getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
}
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
const originalMethod = descriptor.value;
const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
    const boundFn = originalMethod.bind(this);
    return boundFn;
    }
};
return adjDescriptor;
}

class Printer {
message = 'This works!';

@Autobind
showMessage() {
    console.log(this.message);
}
}

const p = new Printer();
p.showMessage();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

// ---

interface ValidatorConfig {
[property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
};
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required']
};
}

function PositiveNumber(target: any, propName: string) {
registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive']
};
}

function validate(obj: any) {
const objValidatorConfig = registeredValidators[obj.constructor.name];
if (!objValidatorConfig) {
    return true;
}
let isValid = true;
for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
    switch (validator) {
        case 'required':
        isValid = isValid && !!obj[prop];
        break;
        case 'positive':
        isValid = isValid && obj[prop] > 0;
        break;
    }
    }
}
return isValid;
}

class Course {
@Required
title: string;
@PositiveNumber
price: number;

constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
}
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
event.preventDefault();
const titleEl = document.getElementById('title') as HTMLInputElement;
const priceEl = document.getElementById('price') as HTMLInputElement;

const title = titleEl.value;
const price = +priceEl.value;

const createdCourse = new Course(title, price);

if (!validate(createdCourse)) {
    alert('Invalid input, please try again!');
    return;
}
console.log(createdCourse);
});

*/
// ! ======================================================= Project Section 9
// * Section 9 - Project Drag and Drop
// console.log("Test");
// console.log("Test2");
/*
class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;

    constructor() {
        this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!;
        this.hostElement = <HTMLDivElement>document.getElementById('app')!;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.attach();

    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const prjInput = new ProjectInput();
*/
// * 9.123
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        this.configure();
        this.attach();
    }
    submitHandler(event) {
        event.preventDefault();
        console.log(this.titleInputElement.value);
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const prjInput = new ProjectInput();
