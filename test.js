"use script";
// console.log("hello");

// Single line comment
/* Multi
    line
        comment */

// The JavaScript Language --> JavaScript Fundamentals
//      2.3:
//          --Adding "use strict" at top of the script make script to work the modern way.
//      2.4:
//          -- A variable is a named storage for data.
//          -- Use "let" keyword to create variables.
//          -- we can also use "var" to declare a variable (old way)
//          -- The variable name must only contain letters, digits, or the symbols $ and _
//					-- The first character must not be a digit.
//					-- To declare a constant variable, use const instead of let.
//

// let a = "Anurag";
// let b;

// b = a;
// console.log(b); // Anurag

// const pi = 3.14;
// pi = 2;
// console.log(pi);

//	2.5: Data types
//		-- there are 8 data types in javascript
//		-- The number type represent both integer and floating point numbers.
//		-- special numeric values: "Infinity", "-Infinity", "NaN"
//		-- NaN represents computational error and operation on NaN returns NaN

// let x = 12,
//   y = 12.3443;

// console.log(x);

//		-- Strings --> single quotes, double quotes, and backticks for special functionalities

// let str = "Hello";
// let str2 = "Single quotese are ok too";
// let phrase = `can embed another ${1 + 2}`;

// console.log(phrase);

//      -- Boolean --> true or false

// let lightsOn = false;
// let lightsOff = true;

// console.log(lightsOn, lightsOff);

//      -- null value is a separate type of data type

// let age = null;
// console.log(age);

//      -- undefined is also a separate data type similar to null.
//      -- undefined is "value not assigned". If a variable is declared, but not assigned, then its value is undefined.

// let age;
// console.log(age);

//      -- The object type is special.
//      -- All other types are called 'primitives' because their values can contain only a single thing.
//      -- Objects are used to store collections of data and more complex entities.

//      -- symbol types is used to create unique identifier for objects.

//      -- "typeof" operator returns the type of the argument.

// console.log(typeof 0); // number

// console.log(typeof null);

// DataTypes: Number, bigint,String, Boolean, null, undefined, objects and symbols

// 2.6  Interaction: alert, prompt, confirm

//      -- Three types: alert, prompt, comfirm

//      -- alert opens a mini-window with the message is called a modal window.
//         The word "modal" means that the visitor can't interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case -- until they press "OK".
// alert("Hello");

//      -- prompt accecpts two arguments title (text to show the visitor) and default (optional second parameter, the initial value for the input field).
//      -- prompt modal window contains 2 options cancel and ok.

// result = prompt(title, [default]); //general

// let age = prompt('How old are you?', 100);

// alert(`You are ${age} years old!`); // You are 100 years old!

//      -- confirm shows a message and waits for user to press "Ok" or "Cancle". It returns true for OK and false for Cancel/Esc.
// result = confirm(question);

// let isBoss = confirm("Are you the boss?");
// alert( isBoss ); // true if OK is pressed

// result = prompt(title, [default]);

// 2.7 Type Conversions

//      -- String conversion

// let value = true;
// console.log(typeof value);

// value = String(value);
// console.log(typeof value);

// let str = "123";
// console.log(typeof str);

// let num = Number(str);
// console.log(typeof num);

// Numeric conversions
// undefined --> NaN
// null --> 0
// true and false --> 1 or 0
// string --> whitesapces removed, if remaining string is empty, result is 0. otherwise, the number is "read" from string. An error gives NaN.

// console.log(Number("    123    ")); // 123
// console.log(Number("123z")); // NaN
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN

// --Boolean conversion

// let a = 10;
// console.log(typeof a); // Number

// let b = Boolean(a);
// console.log(typeof b); // Boolean

// 2.8 Basic Operators, maths

// --> An Operand is what operators are applied to. 5*2 (5 and 2 are operands)
// --> If an expression has one operand then the operator is unary else binary

// let x = 1;
// x = -x;
// console.log(x); // -1, unary negation was applied.

// --> If an operator is binary if it has two operands

// let x = 1, y = 3;
// console.log(y-x); // 2, binary minus subtracts values

// --> Supoorted Maths operations
// Addition +
// Subtraction -
// Multiplication *
// Division /
// Remainder %
// Exponentiation **

// --> String Concatenation with binary +
// if binary + is applied to strings, it concatenates them.

// let s = "Anurag " + "Gupta";
// console.log(s);

// console.log("1" + 2); // 12
// console.log(typeof ("1" + 2)); // string

// let a = 1;
// let b = "2";
// console.log(a + b); // 12
// console.log(typeof (a + b)); // string

// console.log(2 + 2 + "1"); // 41
// console.log("1" + 2 + 2); // 122

// --> binary + is the only operator that support string in above way. Other arithmetic operators work only with numbers and always converts their operands to numbers.

// console.log(6 - "2"); // 4
// console.log("6" / "2"); // 3

// --> Unary + converts other types to number
// console.log(typeof +"1");
// console.log(typeof +true);
// console.log(typeof +"");

// --> Operator Precedence(unary '+' has higher precedence than '+')
// --> Assignment Operator has priority of 3 / 19
// --> Assignment Operator always returns a value

// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);

// console.log(a); // 3
// console.log(c); // 0

// --> Chaining assignments
// --> Chained assignments evaluate from right to left.

// let a, b, c;
// a = b = c = 2 + 2;

// console.log(a); //4
// console.log(b); //4
// console.log(c); //4

// --> Modify in place

// let n = 2;
// n += 5; // n = n + 5;
// n *= 2; // n = n * 2

// console.log(n); // 14

// --> Increment/Decrement (Similar to c, c++, java, etc,.)
// --> Increment/Decrement can only applied on variables
// --> The operators ++/-- has higher precedence than most other airthmetical operations

// let counter = 2;
// console.log(counter);// 2
// counter++;
// console.log(counter);// 3

// let counter = 5;
// console.log(counter);// 5
// counter--;
// console.log(counter);// 4

// let counter = 1;
// let a = ++counter;
// console.log(a); //2

// let b = counter++;
// console.log(b); // 2
// console.log(counter); // 3

// --> Bitwise Operators
// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )

// --> Comma Operator
// --> Comma has very low precedence
// --> Only last expression with commas is returned rest is thrown away.

// let a = (1 + 2, 3 + 4);
// console.log(a); // 7 Only last expression is returned.

/*
 --> Exercise
10
-1
1
2
6
9px
$45
2
NaN
    -9    5
-14
1
NaN
-2
*/
// console.log(" \t \n" - 2); // -2
// console.log("   -9   " - 5);//-14
// console.log(typeof ("   -9   " + 5)); // string
// console.log("   -9   " + 5); //     -9    5
// console.log("2" * "3"); // 6
// console.log(""-1+0); // -1 because empty string converts to 0
// console.log(typeof ("" - 1 + 0));// Number because + concatenates as string other mathematical operators result in number.

// console.log(true + false);// 1
// console.log(typeof (true + false));// number

// --> Note: input from prompt is string

// --> 2.9 Comparisions
// --> Boolean is the result of comparision

// --> String comparision
// --> JS compares strings lexicographically, i.e., strings are compared letter-by-letter.
// --> JS compares via unicode order. capital letters are less than small letters
// --> If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
// --> When comparing values of different types, JavaScript converts the values to numbers.

// console.log("cat" < "bat"); // false
// console.log("cat" == "cat"); // true
// console.log("baaaa" < "cats"); // true
// console.log("bee" > "be"); // true

// console.log("2" < 1); // false
// console.log("01" == 1); // true

// --> Note: Operands of different types are converted to numbers by the equality operator "==". An empty string, just like false, becomes zero.

// console.log("" == false); // true

// --> Strict equality operator "==="

// console.log(null == undefined); // true non-strict check
// console.log(null === undefined); // false strict check

// --> Comparisions convert null to number zero.
// --> Equality check == for undefined and null is defined such that, without any conversions, they equal each other and don't equal anything else.

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
// console.log(null === 0); // false

// --> An incomparable undefined
// --> The value undefined should'nt be compared to other values.
// --> NaN returns false for all comparisions.
// --> undefined only equals null and undefined.

// console.log(undefined > 0); // false
// console.log(undefined < 0); // false
// console.log(undefined == 0); // false

// --> Avoid problems in Comparisions

// Treat any comparison with undefined/null except the strict equality === with exceptional care.
// Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.

/*
Tasks Comparision
1. true
2. false
3. true
4. true
5. false
6. false
7. false
*/

// --> 2.10 Conditional branching: if, '?'

// --> 0, "", null, undefined, and NaN all becomes false
// --> if, if else, if else if

// let a = 100;
// if (a > 90) {
//   console.log("eligible");
// }

// --> Note: let result = condition ? value1 : value2; // syntax of terenary operation

// let accessAllowed = 100 > 10 ? "yes that's true" : "It is wrong";
// console.log(accessAllowed);// yes that's true

// let x = "ECMAScript";
// if (x == "ECMAScript") {
//   console.log("Right!");
// } else {
//   console.log('You don\'t know? "ECMAScript"!');
// }

// let a = 10;
// let b = 20;

// let result = a + b < 4 ? "below" : "over";
// console.log(result);

// --> 2.11 Logical Operators

// --> There are 4 logical operators in JS: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).
// --> during comparision operands are converted to boolean then evaluated.

// --> A chain of OR || returns the first truthy value or the last one if no truthy  value is found.

// --> AND returns first falsy value and when all values are truthy last value is returned.

// let a = 1 > 5 || 6 < 4 || 123;
// console.log(a); // 123

// let a = "sfdsd" && null;
// console.log(a); // null

// --> Note: Precedence of AND is higher than OR

// --> ! (NOT) converts operand to boolean than returns the inverse value
// --> !! (double NOT) can be used to convet value to boolean.

// --> alert function doesn't return any value (undefined);
console.log("hello");
