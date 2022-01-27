"use script";
//pat: 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
// --> 2.15 Functions

// function message() {
//   console.log("Message from function");
// }
// message();

// Values passed to a function as parameters are copied to its local variables.

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

// task
// function min(a, b) {
//   return a < b ? a : b;
// }

// console.log(min(2, -5));

// function pow(x, n) {
//   res = 1;

//   for (let i = 0; i < n; ++i) {
//     res = res * x;
//   }
//   return res;
// }

// console.log(pow(2, 5)); //32

// 2.16 Function Expression
// --> Theres is another syntax for creating a function that is called a Function Expression. It allows us to create a new function in the midddle of any expression.

// --> Observe that there is no name after the function keyword. Omitting a name is allowed for function Expression.
// let sayHello = function () {
//   console.log("Hello");
// };
// console.log(sayHello());

// --> Function is a value

// function sayHi() { // The function Declaration creates the function and puts it into the variable named sayHi
//   console.log("Hello");
// }

// let a = sayHi; // This line copies the variable into "a" , as a result the function can be called as both sayHi() and a().

// a(); // Hello
// sayHi(); // Hello

// --> Function Expression have ";" at the end, but Function Decleration does not.

// --> Revisit Function Expressions later

// -->2.17 Arrow Functions, the basics
// --> Arrow functions can be used as replacements of function expressions

// --> Syntax: let func = (arg1, arg2, ..., argN) => expression;

// let sum = (a, b) => a + b;
// console.log(sum(2, 3)); // 5

// let double = (n) => n * 2;
// console.log(double(2)); // 4

// let sayHi = () => console.log("hello");
// sayHi(); // hello

// let factorial = (a) => {
//   let res = 1;
//   for (let i = a; i > 1; --i) {
//     res *= i;
//   }
//   return res;
// };

// console.log(factorial(5)); // 120

// --> 3.1 Revisit Debugging in browser

// --> Note: backtick quotes "`" allow to split the string into multiple lines

// let str = `
//   hello
//   I
//   am
//   anurag
//   `;
// console.log(str);
