const accountId = 1234
let accountEmail = "ashi@gmail.com"
var accountPassword = "000"
accountCity = "rewa" // A variable can be declared this way in JavaScript, but it is not good practice, so we need to be careful
let accountState; // Agar aap js ke andar variable declare karke leave kar dete hain uski value nahi dalte hain to js usko 'undefined' maanti hai

// accountId = 3 // not allowed because accountId ko const ke sath pehle hi declare kiya hai isliye value nahi change hogi

accountEmail = "ac@ac.com"
accountPassword = "213"
accountCity = "indore"

console.log(accountId);

/*
Prefer not to use Var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])