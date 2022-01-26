"use script";
// --> 2.15 Functions

// function message() {
//   console.log("Message from function");
// }
// message();

// --> A variable declared inside a function is only visible inside the function.
// --> A variable declared outside a function is outer function. A function can access outer variable and modify it.

// let a = 10;
// console.log(a);// 10
// function outVarMod() {
//   a++;
//   console.log(a);
// }
// outVarMod();
// console.log(a);// 11

// --> It is a good practice to minimize the use of global variables. MOdern code has few or no globals.

// --> A parameter is the variable listed inside the parentheses in the function declaration.
// --> An argument is the value that is passed to the function when it is called.

// --> We can specify default parameter in function declaration using assignment operator.

// function multiply(a, b = 10) {
//   return a * b;
// }

// console.log(multiply(9, 9)); // 81
// console.log(multiply(9)); // 90

// --> If a function does not return a value, it is same as if it returns undefined
// --> An empty return is also the same as return undefined.

// function doNothing() {}

// console.log(doNothing() === undefined);//true
