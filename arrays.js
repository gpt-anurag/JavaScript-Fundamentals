"use-strict";

// --> Array is a special type of object
// --> Array syntax
// let arr = new Array();
// let arr2 = [];

// console.log(typeof arr);
// console.log(typeof arr2);

// let fruits = ["Apple", "Orange", "Plum"];
// console.log(fruits[0], fruits[1], fruits[2]); // Apple Orange Plum

// --> We can replace an element
// fruits[2] = "Pear";
// console.log(fruits); // [ 'Apple', 'Orange', 'Pear' ]

// --> Add a new element to the array
// fruits[3] = "Lemon";
// console.log(fruits); // [ 'Apple', 'Orange', 'Pear', 'Lemon' ]

// console.log(fruits.length); // 4

// --> An array can store elements of any type

// let arr = [
//   "Apple",
//   { name: "John" },
//   true,
//   function () {
//     console.log("Hello");
//   },
// ];
// console.log(arr); // [ 'Apple', { name: 'John' }, true, [Function] ]

// --> Array Methods pop/push, shift/unshift
// --> push/shift act as queue. push appends elements to the end. Shift removes, returns first element from the array. It also modifies the array.
// --> pop/push makes array act as stack. pop removes last added element. push appends an element at the end of the array.

// --> Arrays in JS act as both stack and queue. This type of data structure is called dequeue.

// --> pop
// let arr = ["Apple", "Orange", "Pear"];
// console.log(arr); // [ 'Apple', 'Orange', 'Pear' ]
// console.log(arr.pop()); // Pear
// console.log(arr); // [ 'Apple', 'Orange' ]

// console.log(arr.push("Pear")); // 3 --> equivalent to fruits[fruits.length]
// console.log(arr); // [ 'Apple', 'Orange', 'Pear' ]

// --> NOTE: Push/Shift together work as queue.
// --> Pop/Push together work as stack.
// --> Pop/Push are used to work with the elements at the end.
// --> Shift/Unshift are used to work with the elements at the beginning.

// --> Shift removes element from the beginning. Pop removes element from the end.
// --> Unshift add element at the beginning. Shift add element at the end.
// let fruits = ["Apple", "Orange", "Pear"];
// console.log(fruits); // [ 'Apple', 'Orange', 'Pear' ]

// console.log(fruits.shift()); // Apple --> returned and removed
// console.log(fruits); // [ 'Orange', 'Pear' ]

// console.log(fruits.unshift("Apple")); // 3 returns length of the array after adding element at the beginning
// console.log(fruits); // [ 'Apple', 'Orange', 'Pear' ]

// --> We can add multiple elements using push and unshift
// --> Arrays are copied by reference because array is object

// let a = [123, 443, 3234];
// console.log(a.length); // 3
// a[3] = 543;
// console.log(a.length); // 4
// // a[10] = 6545;
// // console.log(a.length); // 11
// // console.log(a); // [ 123, 443, 3234, 543, <6 empty items>, 6545 ]
// // console.log(a[6]); // undefined
// a.age = 30;
// console.log(a.length); // 4
// console.log(a); // [ 123, 443, 3234, 543, age: 30 ]
// console.log(a[4]); // undefined array property broken

// --> Note: Shift/Unshift are slower as compared to pop/push.

// let arr = ["Apple", "Orange", "Pear"];
// // --> Regular for loop
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// // Apple
// // Orange
// // Pear

// // --> for..in loop is possible but bad idea
// for (ele in arr) {
//   console.log(ele, arr[ele]);
// }
// // 0 Apple
// // 1 Orange
// // 2 Pear

// // --> for..of loop
// for (let fruit of arr) {
//   console.log(fruit);
// }
// // Apple
// // Orange
// // Pear

// --> length property in arrays
// --> length property in arrays is writable

// let fruits = [];
// fruits[123] = "apple";
// console.log(fruits.length); // 124 --> Hence, array length is increased

// let arr = [1, 2, 3, 4, 5];
// arr.length = 2;

// console.log(arr); // [1,2] --> the array is truncated

// --> The simplest way to clear the array is: arr.length=0

// --> Arrays have their own implementation of toString method that returns a comma-seperated list of elements.

// let arr = [1, 2, 3];
// console.log(typeof String(arr)); //string
// console.log(typeof arr); // object
// console.log(String(arr)); // 1,2,3 --> string with commas
// console.log(arr); // [ 1, 2, 3 ]

// console.log({} == {}); // false

// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.floor(styles.length / 2)] = "Classics";
// console.log(styles.shift());
// styles.unshift("Rap");
// styles.unshift("Reggae");
// console.log(styles);

// let a = {
//   asdf: 234,
//   fdgdf: 45363,
//   func() {
//     return this;
//   },
// };

// console.log(a.func()); // { asdf: 234, fdgdf: 45363, func: [Function: func] }

// --> 5.5 Array Methods

// let arr = ["I", "go", "home"];

// delete arr[1];
// console.log(arr); // [ 'I', <1 empty item>, 'home' ] // --> length is 3. empty item. bad option

// for (let ele of arr) {
//   console.log(ele);
// }
// // I
// // undefined
// // home

// --> arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.

// --> syntax: arr.splice(start[, deleteCount, elem1, ..., elemN])
// --> It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.

// let arr = ["I", "study", "JavaScript"];

// arr.splice(1, 1);
// console.log(arr); // [ 'I', 'JavaScript' ]

// let arr = ["I", "study", "JavaScript", "right", "now"];

// arr.splice(0, 3);
// console.log(arr); // [ 'right', 'now' ]

// --> splice returns the array of removed elements

// let arr = ["I", "study", "JavaScript", "right", "now"];

// console.log(arr.splice(0, 2)); // [ 'I', 'study' ]
// console.log(arr); // [ 'JavaScript', 'right', 'now' ]

// let arr = ["I", "study", "JavaScript"];

// arr.splice(2, 0, "complex", "language");

// console.log(arr); // [ 'I', 'study', 'complex', 'language', 'JavaScript' ] --> to insert elements set deleteCount value as 0.

// --> We can also use slice to manipulate arrays.
// --> Syntax: arr.slice([start], [end])
// --> Slice returns a new array copying to it all items from index start to end (exclusive)

// let arr = ["t", "e", "s", "t"];
// console.log(arr.slice(1, 3)); // [ 'e', 's' ] --> e,s (copy from 1 to 3)
// console.log(arr.slice(-2)); // [ 's', 't' ] --> s,t (copy from -2 till the end)

// --> we can also copy arrays using slice
// let arr2 = arr.slice();
// console.log(arr == arr2); // false

// --> concat method
// --> syntax: arr.concat(arg1, arg2...)

// let arr = [1, 2];

// console.log(arr.concat([3, 4])); // [ 1, 2, 3, 4 ]
// console.log(arr); // [ 1, 2 ] --> original array not changed

// --> Objects even if they look like arrays, are added as a whole:

// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   length: 1,
// };

// console.log(arr.concat(arrayLike)); //[ 1, 2, { '0': 'something', length: 1 } ] --> Not added as array but as object

// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   1: "else",
//   length: 2,
//   [Symbol.isConcatSpreadable]: true,
// };

// console.log(arr.concat(arrayLike)); // [ 1, 2, 'something', 'else' ] --> using "Symbol.isConcatSpreadable" property the object is treated as array.

// --> Iterate: forEach
// --> Use arr.forEach method to run a function for every element of the array.

// *** Syntax forEach
// arr.forEach(function(item, index, array) {
//   // .. do something with item
// });

// function display(val) {
//   console.log(val);
// }

// // for each element call log
// ["Bilbo", "Gandalf", "Nazgul"].forEach(display);

// --> Searching in array ==> indexOf/lastIndexOf and includes
// --> the above search functions work same as string counterparts but works on elements rather than characters:

// arr.indexOf(item, from) -- looks for item starting from index from, and returns the index where it was found, otherwise -1.
// arr.lastIndexOf(item, from) -- same, but looks for from right to left.
// arr.includes(item, from) -- looks for items starting from index from, return true if found, otherwise -1.
// arr.includes(item, from) -- looks for item starting from index from, returns true if found.

// let arr = [1, 0, false];

// console.log(arr.indexOf(1)); // 0
// console.log(arr.indexOf(false)); // 2
// console.log(arr.indexOf(null)); // -1
// console.log(arr.includes(1)); // true

// --> find and findIndex Methods
// --> How do we find an object with the specific condition?
// **** Syntax

// let result = arr.find(function(item, index, array) {
//   // if true is returned, item is returned and iteration is stopped
//   // for falsy scenario returns undefined
// });

// --> the function is called for elements of the array, one after another:
// -- item
// -- index
// -- array

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];

// let user = users.find((item) => item.id == 1);

// console.log(user.name); // John

// --> arr.findIndex method is same but returns the index not the element

// --> filter method
// --> The find mehtod looks for a single (first) element that makes the function return true. If there may be many, we can use arr.filter(fn).
// --> The syntax is similar to find, but filter returns an array of all matching elements:

// let results = arr.filter(function (item, index, array) {
//   // if true item is pushed to results and the iteration continues
//   // returns empty array if nothing found
// });

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];

// // returns array of the first two users
// let someUsers = users.filter((item) => item.id < 3);

// console.log(someUsers); // [ { id: 1, name: 'John' }, { id: 2, name: 'Pete' } ]
// console.log(someUsers.length); // 2

// --> Transform an array
// --> arr.map method is one of the most useful and often used.
// --> It calls the function for each element of the aray and returns the array of results.

// *******Syntax
// let result = arr.map(function(item, index, array) {
//   // returns the new values instead of item
// });

// let a = [2, 3, 4, 5, 6];

// let double = a.map((item) => item * 2);
// console.log(double); //[ 4, 6, 8, 10, 12 ]

// --> sort(fn)
// --> The call to arr.sort() sorts the array in place, changing its element order.
// --> It also returns the sorted array, but the returned value is usually ignored, as arr itself if modified

// let arr = [12423, 35345, 564, 6786, 2431];
// arr.sort();
// console.log(arr); // [ 12423, 2431, 35345, 564, 6786 ] --> arrays are sorted as strings by default

// --> To use our own sorting order, we need to supply a function as the argument of arr.sord().

// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }

// let arr = [1, 2, 15];

// arr.sort(compareNumeric);
// console.log(arr); // [ 1, 2, 15 ]

// --> reverse

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr); // [ 5, 4, 3, 2, 1 ]

// --> split and join
// let names = "Bilbo, Gandalf, Nazgui";

// let arr = names.split(", ");

// console.log(arr); // [ 'Bilbo', 'Gandalf', 'Nazgui' ] --> converted string to array using delimeter ", "

// --> split string into array of letters
// let str = "test";
// console.log(str.split("")); //[ 't', 'e', 's', 't' ]

// --> join does the reverse to split. It creates a string of arr items joined by glue between them.

// let arr = ["Bilbo", "Gandalf", "Nazgul"];

// let str = arr.join(";");

// console.log(str); // Bilbo;Gandalf;Nazgul --> split seperates a string to array using a delimeter. join combines array of strings into one string and adding specified delimeter.

// --> reduce/reduceRight
// ****** Syntax

// let value = arr.reduce(function(accumulator, item, index, array) {
//   // .....
// }, [initial]);

// --> The function is applied to all array elements one after another and "carries on" its result to the next call.

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 0);

// console.log(result); // 15

// --> Use isArray() to check if an object is array.

// let a = [];
// let b = {};

// console.log(typeof a, typeof b, Array.isArray(a), Array.isArray(b)); //object object true false

// function camelize(str) {
//   return str
//     .split("-")
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");
// }

// console.log(camelize("hello-world"));
