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



