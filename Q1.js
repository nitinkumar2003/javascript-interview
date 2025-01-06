// IBM
let a=[10,20]
let b=a;
b.push(30)
console.log(a); 


//  out put is [10,20,30]
// Description :- 
// In this code, the array a is assigned to b. Both variables now reference the same array in memory. When b.push(30) is called, it modifies the array, which also updates a since both a and b point to the same array. Thus, the output is [10, 20, 30].