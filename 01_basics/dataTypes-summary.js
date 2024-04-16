// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 446653464746747775n



// Reference (Non primitive)

//  Array, Objects, Function

const heros = ["Shaktiman", "naagraj", "doga"];
let myObj = {
    name: "ashi",
    age: 13
}

const myfunction = function() {
    console.log("Hello World");
}

// console.log(typeof outsideTemp);

//  link to study typeof Operator Results
// https://262.ecma-international.org/5.1/#sec-11.4.3




// ++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack (Primitive), Heap, (Non-Primitive)

let myYoutubeName = "ashichaturvedidotcom"

let anothername = myYoutubeName
anothername = "techverse"

console.log(anothername);
console.log(myYoutubeName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ashi@google.com"

console.log(userOne.email);
console.log(userTwo.email);