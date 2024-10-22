// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is a dynamically typed language

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

const bigNumber = 35476576756657n 

// Reference (Non Primitive)

// Array, Objects, Functions

const hero = ["shaktiman", "rukando", "pokemon"];
let myObj = {
    name: "ashi",
    age: 18,
}

const myFunction = function() {
    // console.log("Hello World");
    
}

// console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "code..188.com";

let anothername = myYoutubename
anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "ashi@google.com",
    upi: "user@ybl"
}

let userTwo =  userOne

userTwo.email = "zhi@google.com"

console.log(userOne.email);
console.log(userTwo.email);

