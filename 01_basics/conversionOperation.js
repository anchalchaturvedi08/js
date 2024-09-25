let score = undefined

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "ashi" => true

let num = 34

let stringNum = String(num)
// console.log(stringNum);
// console.log(typeof stringNum);


//  ************OPERATIONS************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2%2);
// console.log(2/2);
// console.log(2**2);

let str1 = "hello"
let str2 = " ashi"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); // "12" - Agar pehla operand string hai, toh saare operands ko string me convert kiya jata hai aur concatenate kiya jata hai.

console.log(1 + "2"); // "12" - Jab kisi number ko string ke sath concatenate kiya jata hai, toh number ko string me convert kar diya jata hai.

console.log("1" + 2 + 2); 
// "1" + 2: Yaha pe pehla operand ek string ("1") hai aur dusra operand ek number (2) hai. 
// String aur number ko concatenate karne par, number ko string me convert kiya jata hai. 
// Isliye, "1" + 2 ka result "12" banta hai.
// Phir, "12" + 2: Yaha pe "12" ab ek string hai aur 2 ek number hai, 
// toh phir se number ko string me convert karke concatenate kiya jata hai.
// Result: "122"

console.log(1 + 2 + "2"); 
// 1 + 2: Dono operands numbers hain, toh inhe add kiya jata hai. 
// Result: 3
// Ab, 3 + "2": Yaha pe 3 ek number hai aur "2" ek string hai. 
// Number aur string ko concatenate karte waqt, number ko string me convert kiya jata hai.
// Isliye, result "32" ban jata hai.


console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 3

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
