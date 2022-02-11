"use-strict";
// --> 5.3 Strings

// --> String length property (not a function)
// console.log("anurag".length); // 6

// --> Accessing characters
// let str = `Hello`;

// // the first character
// console.log(str[0]); // H
// console.log(str.charAt(0)); // H

// // the last character
// console.log(str[str.length - 1]); // o

// iterate over characters of a string
// for (let char of "Hello") {
//   console.log(char);
// } // H e l l o

// --> String are immutable
// let str = "Hi";

// str[0] = "h"; // doesn't work
// console.log(str[0]); // H

// str = "h" + str[1]; // replace the string to get desired result
// console.log(str); // hi

// --> Changing the case
// console.log("Interface".toLocaleUpperCase()); // INTERFACE
// console.log("Interface".toLowerCase()); // interface
// console.log("Anurag"[0].toLowerCase()); // a --> single character lowercase

// --> Searching for a substring
// --> str.indexOf: It looks for the substr in str, starting from the given position pos, and returns the position where the match was found or -1 if nothing can be found.

// let str = "Demon Slayer";
// console.log(str.indexOf("Slayer")); // 6
// console.log(str.indexOf("slayer")); // -1 --> not found
// console.log(str.indexOf("mon")); // 2

// --> If we're interested in all occurances ,we can run indexOf in a loop. Every new call is made with the position after the previous match.

// let str = "As sly as a fox, as strong as an ox";

// let target = "as";

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   console.log(`Found at ${foundPos}`);
//   pos = foundPos + 1;
// }

// --> includes, startsWith, endsWith

// console.log("Widget with id".includes("Widget")); // true
// console.log("widget".startsWith("wid")); // true
// console.log("widget".endsWith("get")); // true

// --> Getting a substring (substring, substr and slice)
// --> Remember only slice

// let str = "stringify";
// console.log(str.slice(0, 5)); // strin --> str.slice(start_idx, end_idx) end index is not included. If no second argument slice goes till the end

// console.log(str.slice(-4, -1)); // gif --> 0=y, -1=f, -2=i, ...

// console.log(str.substring(2, 6)); // ring --> substring takes min value as start and max value as end
// console.log(str.substring(6, 2)); // ring
// --> Negative argument in substring are now allowed and treated as 0

// --> str.substr(start [, length]). returns the part of the string from start, with given length. allows negative start

// console.log(str.substr(-4, 2)); // gi

// --> to get UTF-16 code of a character we use codePointAt(pos)
// console.log("z".codePointAt(0)); // 122

// --> To create a character by its numeric code we use fromCodePoint(pos)
// console.log(String.fromCodePoint(90)); // Z

// function ucFirst(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }

// console.log(ucFirst("john") == "John"); // true

// function checkSpam(str) {
//   str = str.toLowerCase();
//   if (str.indexOf("viagra") != -1) {
//     return true;
//   } else if (str.indexOf("xxx") != -1) {
//     return true;
//   }
//   return false;
// }

// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();

//   return lowerStr.includes("viagra") || lowerStr.includes("xxx");
// }

// console.log(checkSpam("buy ViAgRA now")); // true
// console.log(checkSpam("free xxxxx")); // true
// console.log(checkSpam("innocent rabbit")); // false
