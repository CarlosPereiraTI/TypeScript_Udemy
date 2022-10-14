TypeScript - Sabre | Udemy

SECTION 1:
=================================================================================
Installation:
npm install -g typescript
check version:
tsc -v
compile:
tsc fileName.ts

npm init to start a pckage.json file
npm install --save--dev lite-server => to install a lite server to do our tests.

in package.json add in dependencies: "start": "lite-server"

npm start - used to start lite server

SECTION 2:
=================================================================================
Core types:
- number: 1 / 5.3 / -10 | All numbers, no difference between floats or integers
- string: 'Hi' / "Hi" / `Hi`
- boolean: true / false
- object: {age: 30}

Note:
Nested Objects & Types

Of course object types can also be created for nested objects.

Let's say you have this JavaScript object:

    const product = {
      id: 'abc1',
      price: 12.99,
      tags: ['great-offer', 'hot-and-new'],
      details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
      }
    }

This would be the type of such an object:

    {
      id: string;
      price: number;
      tags: string[];
      details: {
        title: string;
        description: string;
      }
    }

So you have an object type in an object type so to say.

- Arrays: [1,2,3]
- Tuples: [1,2] / Added by TS: FIxed-length array
- Enums: enum {NEW, OLD} | Added by Typescript: Automaticallu enumarated global constant identifiers
- Any: * | Any kind of values | Avoid if possible


======== 2.25 =========
Type Aliases & Object Types

Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

For example:

    type User = { name: string; age: number };
    const u1: User = { name: 'Max', age: 30 }; // this works!

This allows you to avoid unnecessary repetition and manage types centrally.

For example, you can simplify this code:

    function greet(user: { name: string; age: number }) {
      console.log('Hi, I am ' + user.name);
    }
     
    function isOlder(user: { name: string; age: number }, checkAge: number) {
      return checkAge > user.age;
    }

To:

    type User = { name: string; age: number };
     
    function greet(user: User) {
      console.log('Hi, I am ' + user.name);
    }
     
    function isOlder(user: User, checkAge: number) {
      return checkAge > user.age;
    }

Helpful resources: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html


SECTION 3:
=================================================================================

Compile the .ts file automatically with the server running: "tsc app.ts -w" or "tsc app.ts --watch"

Compile multiple files: "tsc --init" a new file will be created tsconfig.json
  - From now on we can compile all files with "tsc -w"

tsconfig.json
On this file we can setup our dev environment like include and exclude files en subfolders during the compilation (check lines 104 to 112 i tsconfig.json)

