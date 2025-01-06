JavaScript Interview Questions

This repository contains a collection of JavaScript interview questions with answers and brief explanations.

Question 1: Array Assignment and Reference

Question:

// IBM
let a = [10, 20];
let b = a;
b.push(30);
console.log(a);

Output:

[10, 20, 30]

Explanation:

In JavaScript, arrays are reference types. When you assign a to b, both variables point to the same array in memory. Any modification made to the array using b will also reflect in a since they share the same reference.

In the code:

a is initialized as [10, 20].

b is assigned the reference of a, so b and a both point to the same array.

b.push(30) adds 30 to the array.

Since a and b reference the same array, logging a outputs [10, 20, 30].

