// function - input , code , output
let greetUser = function() {
    console.log('Welcome user1')
}
greetUser()
greetUser()
greetUser()
let square = function (num)
{
    let result = num * num
    return result
}
let value = square(3)
let otherValue =square(10)
console.log(value)
console.log(otherValue)
let calculateTemp = function(fahrenheit) 
{
    let celsuis =(fahrenheit -32) * 5 / 9
// calculate celsius and store in celsius variable
// print that value
    let kelvin = (fahrenheit + 459.67) * 5 / 9
return celsuis 
}
let celsuis = calculateTemp(32)
let celsuis2 = calculateTemp(68)
let calculateTemp2 = function(fahrenheit) 
{

    let kelvin = (fahrenheit + 459.67) * 5 / 9
return kelvin 
}
let kelvin = calculateTemp2(32)
console.log('Celsuis 1 is : ')
console.log(celsuis)
console.log('Celsuis 2  is : ')
console.log(celsuis2)
console.log('kelvin is : ')
console.log(kelvin)