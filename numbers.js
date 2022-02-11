// "use script";
// --> 5.1 Methods of primitives

// --> The “object wrappers” are different for each primitive type and are called: String, Number, Boolean, Symbol and BigInt. Thus, they provide different sets of methods.

// let john = {
//   name: "John",
//   sayHi() {
//     console.log("Hi buddy");
//   },
// };

// john.sayHi();

// let str = "Hello";

// console.log(str.toUpperCase()); // HELLO

// --> Simple, right? Here’s what actually happens in str.toUpperCase():
// --> 1. The string str is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like toUpperCase().
// --> 2. That method runs and returns a new string (shown by alert).
// --> 3. The special object is destroyed, leaving the primitive str alone.

// let n = 1.23456;
// console.log(n.toFixed(4)); // 1.2346

// let str = "Hello";
// str.test = 5;
// console.log(str.test);

// --> 5.2 Numbers
// --> for big numbers we can separate using '_' underscore.

// let billion = 1000000000;
// console.log(billion);

// let billion = 1e9;
// console.log(billion);

// billion = 7.3e9; // 7.3 billion
// console.log(billion);

// let mcs = 0.000001; // microsecond
// console.log(mcs); // 0.000001

// mcs = 1e-6;
// console.log(mcs); // 0.000001

// let num = 255;
// console.log(num.toString(16)); // ff --> num.toString(base)
// console.log(num.toString(2)); // 11111111 --> in binary

// --> The base can vary from 2 to 36, By default it's 10.

// console.log((123456).toString(36)); // 2n9c

// --> Rounding
// --> four functions: Math.floor, Math.ceil, Math.round, Math.trunc

// let a = 3.1;
// let b = 3.5;
// console.log(Math.floor(a)); // 3
// console.log(Math.ceil(1)); // 4
// console.log(Math.ceil(b)); // 4
// console.log(Math.floor(b)); // 3
// console.log(Math.round(a)); // 3 --> round to nearest number
// console.log(Math.trunc(3.6)); // 3 --> remove anything after decimal

// console.log((12.34).toFixed(1)); // "12.3" --> round to nth decimal places but returns as string. we can convert to number using unary plus or a Number()

// --> VIMP star always use toFixed() to get precise decimal values.

// --> Two special numeric values: Infinity (and -Infinity) & NaN (represents an error)

// console.log(isNaN(NaN)); // true --> isNaN is function to check if a number is NaN
// console.log(Number("str")); // NaN

// console.log(isNaN("str")); // true

// // --> The NaN is unique, it does not equal anything, including itself

// console.log(NaN == NaN); // false
// console.log(NaN === NaN); // false

// --> isFinite(value) converts its argument to a number and returns true if it's a regualr number, not NaN/Infinity/-Infinity

// console.log(isFinite("15")); // true
// console.log(isFinite("str")); // false, because a special value: NaN
// console.log(isFinite(Infinity)); // false, because a special value: Infinity

// let a = "";
// console.log(+a); // 0

// --> parseInt and parseFloat (extracts integer until it can't)

// console.log(parseInt("100px")); // 100
// console.log(parseFloat("12.4em")); // 12.4
// console.log(parseInt("12.3")); // 12
// console.log(parseFloat("12.3.4")); // 12.3
// console.log(parseInt("a123")); // NaN

// --> other math functions

// console.log(Math.random()); // 0.9641458764074224 --> random number b/w 0 and 1
// console.log(Math.max(2, 3, 5, 3, 234, 65546)); // 65546
// console.log(Math.min(234, 3423, 456456, 342, 65)); // 65
// console.log(Math.pow(2, 10)); // 1024 --> 2 to the power 10

// console.log((6.35).toFixed(1)); // 6.3
