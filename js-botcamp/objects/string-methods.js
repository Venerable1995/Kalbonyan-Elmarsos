let name = ' Andrew'
//length property
console.log(name.length)
// convert to upper case
console.log(name.toUpperCase())
// convert to lower case
console.log(name.toLowerCase())
// includes method
let password = 'abc123password098'
console.log(password.includes('password'))
//trim
console.log(name.trim())
//challenge area 
//invalid password
// length is more than 8= and it doesnt contain the word password
let passwordValidation = function (password){
   return password.length>8 && !password.includes('password')
}
console.log(passwordValidation('asdfp'))
console.log(passwordValidation('abc123098'))
console.log(passwordValidation('abc123password098'))