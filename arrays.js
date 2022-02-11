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
