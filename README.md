# JavaScript Interview Questions

Welcome to the **JavaScript Interview Questions** repository! This repository contains a collection of frequently asked JavaScript interview questions, along with detailed answers and brief explanations. Whether you're a beginner or an experienced developer, this repository is a great resource to help you prepare for your JavaScript-related interviews.

---


## Overview

This repository provides a collection of common JavaScript interview questions. Each question is followed by an answer with a brief explanation to help you understand the core concepts involved. Topics covered include:

- **Data Types and Structures** (Arrays, Objects, etc.)
- **Functions and Closures**
- **Asynchronous JavaScript** (Promises, async/await)
- **Object-Oriented Programming** (OOP) in JavaScript
- **Error Handling and Debugging**
- **Performance Optimization**
- **And more...**

These questions are designed to test your understanding of JavaScript fundamentals as well as advanced topics. Feel free to explore, learn, and even contribute to the repository!

---

## Question 1: Array Assignment and Reference
```javascript
// IBM
let a = [10, 20];
let b = a;
b.push(30);
console.log(a);
[10, 20, 30]
```
---
### Explanation:
---
In JavaScript, arrays are reference types. This means that when you assign an array to another variable, both variables reference the same array in memory. In the given code:
- let a = [10, 20]; creates an array [10, 20] and assigns it to the variable a.
- let b = a; assigns the reference of the array a to b. Now, both a and b reference the same array in memory.
- b.push(30); modifies the array by adding the element 30 to it. Since a and b reference the same array, the change is reflected in both variables.
- As a result, when console.log(a); is executed, it outputs the modified array [10, 20, 30].

---
## Question 2 
```javascript
console.log([1]==1) //true
```
### Explanation:
In JavaScript, when comparing an array to a number with the == operator, type coercion occurs. The array [1] is first converted to a string '1', and then to the number 1, making the comparison 1 == 1, which evaluates to true.
---
## Question 3
```javascript

// Question 3 
x=10;
console.log(x)
var x; 
// output 10

```
---
### Explanation:
- The declaration var x; is hoisted to the top of the scope.
- The variable x is declared but not initialized at the top. When x = 10; is executed, x is assigned the value 10.
- Finally, console.log(x); prints 10 to the console.



## Question 4
```javascript
let {length} = 'nitin';
console.log(length); // Output: 5
```
---
### Explanation:
---
In JavaScript, you can use destructuring assignment to extract values from arrays or objects into distinct variables. In this case, the code uses destructuring to extract the length property from the string 'nitin'.
Here’s the step-by-step explanation:
- String Property Access: In JavaScript, strings have properties like length. When you write 'nitin', it is a string object that has a length property with a value of 5 (because the string 'nitin' has 5 characters).
- Destructuring Assignment: The syntax let {length} = 'nitin'; uses destructuring to extract the length property from the string 'nitin' and assigns its value (5) to the variable length.
- Logging the Value: console.log(length); prints the value of length to the console, which is 5.
---

## Question 5
```javascript
let x = 10 > 9 > 8; // Evaluates as (10 > 9) > 8
console.log(x); // Outputs: false
```
---
### Explanation:
---
#### Explanation of `10 > 9 > 8` in JavaScript
- ##### First Comparison (`10 > 9`):
This evaluates to `true` because `10` is greater than `9`.
- ###### Conversion to Number:
The result of `10 > 9` is `true`. When `true` is involved in a numeric comparison, it is coerced to `1`.
- ##### Second Comparison (`1 > 8`):
- Now, the expression becomes `1 > 8`, which evaluates to `false` because `1` is not greater than `8`.
---


## Question 6

In JavaScript, the `delete` operator is used to remove properties from objects. It is important to understand that `delete` behaves differently depending on the type of variable being deleted (whether it’s a property of an object or a variable).

### Explanation of the code:

```javascript
const name = 'nitin';
age = 22;

console.log(delete name);  // Output: false
console.log(delete age);   // Output: true


```
## Explanation of `delete` Operator in JavaScript

### 1. `delete name`

- `name` is declared using `const`, which makes it a constant. Constants cannot be deleted or reassigned after their declaration.
- The `delete` operator only works on **object properties** or **array elements**.
- Since `name` is a constant, `delete name` will **fail** and return `false`.

### 2. `delete age`

- `age` is declared as a global variable (since no `let`, `const`, or `var` is used).
- Variables declared with `var`, `let`, or `const` in the global scope **cannot** be deleted directly.
- However, if you are not using `const` or `let` for declaration (i.e., a non-declared variable in the global scope), it can be deleted from the global object (`window` in browsers, `global` in Node.js).
- In this case, because `age` is implicitly a global variable (not declared with `let`, `const`, or `var`), the `delete` operator **removes** it from the global context and returns `true`.

### Key Points:
- The `delete` operator works only on **object properties** and **array elements**.
- `delete` **cannot** delete variables declared using `let`, `const`, or `var` in the global or local scope.
