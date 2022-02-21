// --> 4.1 Objects
// --> Objects are used to store keyed collections of various data and more complex entities.
// --> Objects can be created using figure brackets {} with optional list of properties. A property is a "key: value" pair, where key is a string (also called a "property name"), and value can be anything.

// --> Empty Object

// let user = new Object(); // "object constructor" syntax
// let user = {}; // "object literal" syntax

// console.log(typeof user); // object

// let user = {
//   name: "John",
//   age: 30,
// };

// console.log(user); // { name: 'John', age: 30 }

// --> A property has a key (also known as "name" or "identifier") before the colon ":" and a value to the right of it.

// --> Accessing object values with dot notation

// console.log(user.name, user.age); // John 30

// user.isAdmin = true; // adding a property to object
// console.log(user); //{ name: 'John', age: 30, isAdmin: true }

// --> Remove a property using "delete" operator

// delete user.age;

// console.log(user); //{ name: 'John', isAdmin: true }

// --> we can also use multiword property names, but they must be quoted

// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true,
// };

// console.log(user); //{ name: 'John', age: 30, 'likes birds': true }

// --> The last property in the list may end with a comma.

// let user = {
//   name: "John",
//   age: 30,
// }

// --> Accessing object values using square brackets.

// --> The dot reuqires the key to be valid variable identifier.

// let user = {};

// // set
// user["likes birds"] = true;

// // get
// console.log(user); // { 'likes birds': true }
// console.log(user["likes birds"]); // true

// // delete
// delete user["likes birds"];
// console.log(user); // {}

// let user = new Object();

// let key = "likes birds";

// user[key] = true; // adding a variable as a property

// console.log(user); // { 'likes birds': true }

// --> Computed properties
// using square brackets in an object  literal, when creating an object is called computed properties.

// let fruit = "apple";
// let bag = {
//   [fruit]: 5, // the name of the property is taken from variable fruit
// };

// console.log(bag.apple); // 5

// --> Property value shorthand
// --> In below example we can observe that the properties have the the same names and variables.

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     // .. other properties
//   };
// }

// function makeUser(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// let user = makeUser("John", 30);
// console.log(user); // { name: 'John', age: 30 }

// --> There is no property names limitations. For example, for, let, return, etc., can be used as key values of objects

// let obj = {
//   for: 1,
//   let: 2,
//   return: 3,
// };

// console.log(obj.for + obj.let + obj.return); // 6

// --> Property existence test, "in" operator

// --> Syntax: "key" in object

// let user = {
//   name: "John",
//   age: 30,
// };

// console.log("age" in user); // true

// --> Note: Left side of "in" must be a property name. That is usually a string. If we don't use quotes then it must be a variable.

// --> The "for .. in" loop

// --> To walk over all keys of an object, there exists a special form of the loop: for..in.

// --> Syntax for (key in object) { // executes the body for each key among object properties}

// let user = {
//   name: "Anurag",
//   age: 24,
//   isAdmin: true,
// };

// for (key in user) {
//   console.log(key, ":", user[key]);
// }

// --> The integer properties are ordered rest all appear in order of creation.

// let codes = {
//   234: "India",
//   655: "Aus",
//   675: "Jap",
//   12: "Asia",
//   45: "USA",
// };

// for (i in codes) {
//   console.log(typeof i, codes[i]); // when using integers use square brackets notation to access values.
// }

// let codes = {
//   "+49": "Germany",
//   "+41": "Switzerland",
//   "+44": "Great Britain",
//   // ..,
//   "+1": "USA",
// };

// for (let code in codes) {
//   console.log(typeof code, codes[code]); // 49, 41, 44, 1
// }

// --> Task

// user = new Object();
// user["name"] = "John";
// user["surname"] = "Smith";
// console.log(user);
// user["name"] = "Pete";
// console.log(user);
// delete user["name"];
// console.log(user);

// user = {};
// user.name = "John";
// user.surname = "Smith";
// console.log(user);
// user.name = "Pete";
// console.log(user);
// delete user.name;
// console.log(user);

// function isEmpty(obj) {
//   for (key in obj) {
//     // if loop has started, there is a property
//     return false;
//   }
//   return true;
// }

// let schedule = {};

// console.log(isEmpty(schedule)); // true
// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule)); // false

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function totalSalary(salaries) {
//   sum = 0;
//   for (let name in salaries) {
//     sum += salaries[name];
//   }
//   return sum;
// }

// console.log("Is salaries empty: ", isEmpty(salaries));
// console.log("Total Salary issued: ", totalSalary(salaries));

// function multiplyNumeric(obj) {
//   for (key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// console.log(menu);
// multiplyNumeric(menu);
// console.log(menu);

// --> Arrow function of above question:

// let multiplyNumeric = (obj) => {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
// };

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// console.log(menu); // { width: 200, height: 300, title: 'My menu' }
// multiplyNumeric(menu);
// console.log(menu); // { width: 400, height: 600, title: 'My menu' }

// --> 4.2 Object References and Copying

// --> Objects are stored and copied "by reference", whereas primitive values: strings, numbers, booleans, etc -- are always copied "as a whole value".

// let message = "Hello";
// let phrase = message;

// console.log(phrase);
// message = "Anurag";
// console.log(phrase);

// --> Note: Objects are stored randomly in memory. The object name stores the address (reference) of the object.

// let user = { name: "Anurag" }; // user stores the reference to the object
// console.log(user); // { name: 'Anurag' }

// let admin = user; // now we have two variables, each storing a reference to the same object
// console.log(admin); // { name: 'Anurag' }

// user.name = "John";
// console.log(user); // { name: 'John' }
// console.log(admin); // { name: 'John' }

// --> Comparision by reference
// --> Two objects are equal only if they are the same object.
// --> For instance, here a and b reference the same object, thus they are equal.

// let a = {};
// let b = a; // copy the reference

// console.log(a == b); // true, both variables reference the same object
// console.log(a === b); // true

// let a = {};
// let b = {};

// console.log(a == b); // false
// console.log(a === b); // false

// --> Cloning and merging, object.assign

// --> Cloning

// --> Method 1
// let user = {
//   name: "John",
//   age: 30,
// };

// let clone = {};

// for (let key in user) {
//   clone[key] = user[key];
// }

// console.log(user, clone); // { name: 'John', age: 30 }{ name: 'John', age: 30 }
// clone.name = "Pete";
// console.log(user, clone); //{ name: 'John', age: 30 } { name: 'Pete', age: 30 }

// let user = {
//   name: "Anurag",
//   age: 24,
// };

// let clone = {}; // (or) let clone = Object.assign({}, user);

// Object.assign(clone, user);
// console.log(clone); // { name: 'Anurag', age: 24 }

// --> 4.3 Garbage Collection
// --> Garbage collection depends on Reachability
// --> The garbage collection algorithm used in JS is "mark-and-sweep"

// --> Garbage Collection Optimizations
// --> 1. General Collection: objects are split as new ones and old ones.
// --> 2. Incremental Collection
// --> 3. Idle-time collection

// --> 4.4 Object methods, "this"

// let user = {
//   name: "John",
//   age: 30,
// };

// user.sayHi = () => {
//   console.log("Hello");
// };

// user.sayHi(); // Hello
// console.log(user); // { name: 'John', age: 30, sayHi: [Function] }

// --> A function that is a property of an object is called a method.

// --> Method shorthand: 2 ways to create methods

// user = {
//   sayHi: function () {
//     console.log("Hello");
//   },
// };

// user.sayHi(); // Hello

// user = {
//   sayHi() {
//     console.log("Hello");
//   },
// };
// user.sayHi(); // Hello

// --> To access the properties of object within the method use this keyword
// let user = {
//   name: "Anurag",
//   age: 25,

//   sayHi() {
//     console.log(this.name); // "this.name" means the object "user.name"
//   },
// };

// user.sayHi(); // Anurag

// --> The value of "this" is evaluated during the run-time, depending on the context.

// let user = { name: "Anurag" };
// let admin = { name: "Gigi " };

// function sayHi() {
//   console.log(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f(); // Anurag (this == user)
// admin.f(); // Gigi (this == admin)

// admin["f"](); // Gigi

// --> Arrow functions have no "this"

// let user = {
//   firstName: "Anurag",
//   sayHi() {
//     let arrow = () => console.log(this.firstName);
//     arrow();
//   },
// };

// user.sayHi();

// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// console.log(user.ref().name);
// console.log(user.name);

// --> Create a calculator

// let calculator = {
//   read() {
//     this.a = 10;
//     this.b = 234;
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },
// };

// console.log(calculator);

// calculator.read();
// console.log(calculator.sum()); // 244
// console.log(calculator.mul()); // 2340

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep() {
//     console.log(this.step);
//   },
// };

// ladder.up();
// ladder.up();
// ladder.showStep();
// ladder.down();
// ladder.showStep();

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     console.log(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep().down().showStep();

// abc = {
//   a: 10,
//   b: 20,
//   sum() {
//     return this.a + this.b;
//   },
// };

// console.log(abc.sum());

// --> 4.5 Constructor function

// function User(name) {
//   // this = {};  (implicitly)

//   // add properties to this
//   this.name = name;
//   this.isAdmin = false;

//   // return this;  (implicitly)
// }

// let user = new User("Jack");

// console.log(user.name); // Jack
// console.log(user.isAdmin); // false
// console.log(user); // User { name: 'Jack', isAdmin: false }

// --> Encapsulated code

// --> Create a functon and immediately call it with new
// let user = new (function () {
//   this.name = "John";
//   this.isAdmin = false;
// })(); //  This constructor cannot be called again.

// console.log(user);

// function User() {
//   console.log(new.target);
// }

// User();
// new User();

// -->
// let areaOfRectangle = {
//   area(length, width) {
//     return length * width;
//   },
// };

// console.log(areaOfRectangle.area(10, 20));

// function BigUser() {
//   this.name = "John";
//   return { name: "Anurag" };
// }

// console.log(new BigUser().name);

// --> Methods in constructor

// function User(name) {
//   this.name = name;

//   this.sayHi = function () {
//     console.log("My name is: " + this.name);
//   };
// }

// let Anurag = new User("Anurag");

// Anurag.sayHi();
// let obj = {};

// function A() {
//   return obj;
// }

// function B() {
//   return obj;
// }

// let a = new A();
// let b = new B();

// console.log(a == b);

// function Calculator() {
//   this.a = 10;
//   this.b = 20;

//   this.sum = function () {
//     return this.a + this.b;
//   };

//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// console.log("Sum = " + calculator.sum());
// console.log("Mul = " + calculator.mul());

// --> 4.7 Symbol type
// --> A "Symbol" represents a unique identifier.
// --> A value of this type can be created using Symbol()
// --> Other than strings key values of objects can be Symbols.

// let id = Symbol("id"); // description of symbol is "id"
// console.log(id);

// --> Symbols are guaranteed to be unique.
// let id1 = Symbol("id");
// let id2 = Symbol("id");

// console.log(id1 == id2);

// --> Symbols don't auto-convert to a string
// let id = Symbol("id");
// console.log(id.toString()); // Symbol(id)
// console.log(id.description()); // id

// let user = {
//   name: "John",
// };

// let id = Symbol("id");

// user[id] = 1;
// console.log(user[id]); // we can access the data using the symbol as the key

// let a = {};
// a.id = 42;
// let id = Symbol("id");
// a[id] = 45;
// console.log(a.id); // 42
// console.log(a[id]); // 45

// a[id] = 100;
// console.log(a); // { id: 42, [Symbol(id)]: 100 }

// --> We can only access Symbols using square brackets notation example user[id]

// let id = Symbol("id");

// let user = {
//   name: "John",
//   [id]: 123 // not "id": 123
// };

// --> Symbols are skipped by for...in
// let id = Symbol("id");
// let user = {
//   name: "John",
//   age: 30,
//   [id]: 123,
// };

// for (let key in user) console.log(key); // name age --> Symbol was skipped

// // direct access by the symbol works
// console.log("Direct: " + user[id]); // Direct: 123

// Object.keys(user) also ignores them.
// --> Object.assign copies both string and symbol properties:

// let id = Symbol("id");
// let user = {
//   [id]: 123,
// };

// let clone = Object.assign({}, user);

// console.log(clone[id]); // 123 we can observe that symbol was copied when using Object.assign.

// --> Global symbols
// --> there exists a "global symbol registry". We can create symbols in it and access them later. In order to read (create if absent) a symbol from the registry, use Symbol.for(key)
// let id = Symbol.for("id");

// let idAgain = Symbol.for("id");

// console.log(id === idAgain); // true

// --> Reverse call to Global Symbols to get the desc of symbol

// // get symbol by name
// let sym = Symbol.for("name");
// let sym2 = Symbol.for("id");

// // get name by symbol
// console.log(Symbol.keyFor(sym)); // name
// console.log(Symbol.keyFor(sym2)); // id

// --> 4.8 Object to primitive conversion

// --> All objects are true in a boolean context. There are only numeric and string conversions.
