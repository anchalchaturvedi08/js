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
    console.log("Hello World");
    
}

console.log(typeof bigNumber);

