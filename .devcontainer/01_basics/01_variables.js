const accountId = 22334455
let accountEmail = "nevedita@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let stateName;      //undefined 

// accountId = 2
accountEmail = "nk@gmail.com"

/*
Prefer not use var because of issue in block scope and functional scope
*/
console.log(accountId);
console.log(accountEmail);
console.table([accountId, accountEmail, accountPassword, accountCity, stateName])
