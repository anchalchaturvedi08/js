"use script"; // treat all JS code as newer version

//alert(3+3) // alert() function browser environment ka part hai, Node.js me ye function available nahi hota, isiliye use nahi kar sakte. Node.js me output dekhne ke liye console.log() ka use karen


// console.log(3
//     +
//      3) // code readabilityshould be high
    
// console.log("ashi")


// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => means value is not assign
// symbol => mostly used for uniqueness
// object 


// Number: Integers and floating-point numbers. The maximum safe integer is 2^53 - 1.
const maxSafeInteger = 2 ** 53 - 1; // 9007199254740991
console.log(maxSafeInteger);


// BigInt: Used for integers that are too large to be represented by the Number type.
const bigIntExample = 1234567890123456789012345678901234567890n;
console.log(bigIntExample);


// String: Sequence of characters enclosed in single ('') or double ("") quotes.
const stringExample = "Hello, World!";
console.log(stringExample);


// Boolean: Represents logical values: true or false.
const isJavaScriptFun = true;
console.log(isJavaScriptFun);


// Null: Represents a standalone value that indicates the absence of any object value.
const emptyValue = null;
console.log(emptyValue);


// Undefined: Indicates that a variable has been declared but has not yet been assigned a value.
let undefinedValue; // undefined
console.log(undefinedValue);


// Symbol: Used to create unique identifiers for objects. Often used to avoid property name collisions.
const uniqueSymbol = Symbol('unique');
console.log(uniqueSymbol);


// Object: A collection of key-value pairs.
const person = {
  name: "Anchal",
  age: 20,
  isStudent: true
};
console.log(person);
