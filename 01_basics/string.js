const name = "Ashi";
const repocount = 50;

// Outdated string concatenation avoid karo:
// console.log(name + repocount + "value");

// Modern syntax use karo readability aur reliability ke liye:
console.log(`Hello, my name is ${name} and my repo count is ${repocount}`); // Yeh syntax readable, reliable, aur modern hai. Isko string interpolation kehte hain aur isse aap easily variables aur expressions ko strings me include kar sakte ho.

const gameName = new String('ashi-ac-com'); // Yeh ek String object banane ka example hai

// gameName ke first character ko print karne ke liye:
// console.log(gameName[0]);

// String object ke prototype ko dekhne ke liye:
// console.log(gameName.__proto__);

// gameName ki length print karne ke liye:
// console.log(gameName.length);

// gameName ko lowercase me convert karne ke liye:
// console.log(gameName.toLowerCase());

// gameName ke 3rd position pe jo character hai usko print karne ke liye:
// console.log(gameName.charAt(3));

// 'h' character ka index gameName me dekhne ke liye:
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4); // gameName ke 0 se 4 tak ka substring banane ke liye
// console.log(newString);

const anotherString = gameName.slice(-6, 2); // slice method se negative value bhi de sakte hain
// console.log(anotherString);

const newStringOne = "  ashi  "; // newStringOne ko define karne ke liye
// console.log(newStringOne);
// console.log(newStringOne.trim()); // String ke leading aur trailing spaces remove karne ke liye

const url = "https://ashi.com/ashi%20chaturvedi"; 

// '%20' ko '-' se replace karne ke liye:
console.log(url.replace('%20', '-'));

// Check karne ke liye ki 'unique' word URL me hai ya nahi:
console.log(url.includes('unique'));

// gameName ko '-' se split karne ke liye:
console.log(gameName.split('-'));
