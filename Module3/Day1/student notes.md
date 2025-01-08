# JavaScript Essentials for React: A Quick Guide

---

## **1. var, let, and const**
- **`var`**: Function-scoped, can be redeclared, hoisted with undefined.
- **`let`**: Block-scoped, cannot be redeclared, hoisted without initialization.
- **`const`**: Block-scoped, must be initialized, used for constants or immutable references.

### **1. Function Scoping vs. Block Scoping**

#### Using `var`:
```javascript
function testVar() {
  if (true) {
    var x = 10; // Declared inside the block
  }
  console.log(x); // Output: 10 (Accessible outside the block)
}
testVar();
```

#### Using `let`:
```javascript
function testLet() {
  if (true) {
    let x = 10; // Declared inside the block
  }
  // console.log(x); // Error: x is not defined (Block-scoped)
}
testLet();
```

**Why this matters in React:**
- In React, unpredictable scoping can lead to bugs in components when variables leak outside their intended scope. For example, in event handlers or loops.

---

### **2. Re-declaration Pitfalls**

#### Using `var`:
```javascript
var count = 1;
var count = 2; // No error
console.log(count); // Output: 2
```

#### Using `let`:
```javascript
let count = 1;
// let count = 2; // Error: Identifier 'count' has already been declared
console.log(count); // Output: 1
```

**Why this matters in React:**
- Re-declaring variables can lead to accidental overwrites, especially in large components or when using shared logic.

---

### **3. Hoisting and Unexpected `undefined`**

#### Using `var`:
```javascript
console.log(name); // Output: undefined
var name = "React";
```

#### Using `let`:
```javascript
// console.log(name); // Error: Cannot access 'name' before initialization
let name = "React";
```

---

## **2. Template Literals**
- Use **backticks (`)** for string interpolation and multi-line strings.

**Example:**
```javascript
const name = "React";
const version = 18;
console.log(`Welcome to ${name} v${version}!`);
```

---

## **3. Destructuring**
- Extract values from arrays or objects into variables.

**Array Example:**
```javascript
const [a, b] = [1, 2];
console.log(a, b); // Output: 1, 2
```

**Object Example:**
```javascript
const obj = { name: 'React', version: 18 };
const { name, version } = obj;
console.log(name, version); // Output: React 18
```

---

## **4. Spread and Rest Operators**
- **Spread (`...`)**: Expands elements of arrays/objects.
- **Rest (`...`)**: Collects remaining elements into an array or object.

**Spread Example:**
```javascript
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr); // Output: [1, 2, 3, 4, 5]
```

**Rest Example:**
```javascript
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
```

---

## **5. Modules**
- **Modules** help organize code into reusable pieces.
- **Named Exports**: Export multiple items by name.
- **Default Export**: Export a single default item.

**Examples:**

**Named Export and Import:**
```javascript
// utils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from './utils';
```

**Default Export and Import:**
```javascript
// utils.js
export default function multiply(a, b) {
  return a * b;
}

// main.js
import multiply from './utils';
```

---

## **6. Higher-Order Functions (HOFs)**
- Functions that take other functions as arguments or return them.
- Common examples: **`map`**, **`filter`**, **`reduce`**.

**Examples:**

**`map`**: Transform an array.
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]
```

**`filter`**: Filter elements based on a condition.
```javascript
const numbers = [1, 2, 3, 4];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // Output: [2, 4]
```

**`reduce`**: Accumulate values into a single result.
```javascript
const numbers = [1, 2, 3];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 6
