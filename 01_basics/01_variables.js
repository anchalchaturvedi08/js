const accountId = 43434
let accountEmail = "ashi@gmail.com"
var accountPassword = "4324"
accountCity = "MP"
let accountState;

// accountId = 2 // not allowed

accountEmail = "Ac@Ac.com"
accountPassword = "0000"
accountCity = "Bhopal"

console.log(accountId);

/*  
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);