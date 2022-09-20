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