let num = 103.941
console.log(num.toFixed(2))
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))
let min = 10
let max = 20
let randomNumb=Math.floor(Math.random() *(max - min + 1)) + min
//0 - 10
console.log(randomNumb)
//challenge area
// range 1-5 true if correct - false if not 
let isGuessTrue = function(guess){
    let randomNumb=Math.floor(Math.random() *(5 - 1 + 1)) + 1
    return guess === randomNumb
}
console.log(isGuessTrue(1))