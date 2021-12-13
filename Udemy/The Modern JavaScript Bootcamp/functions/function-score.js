let calculateTemp = function(fahrenheit) 
{
    let celsuis =(fahrenheit -32) * 5 / 9
if (celsuis <= 0){
    let isFreezing = true
}
return celsuis 
}
let tempOne = calculateTemp(32)
let tempOne = calculateTemp(68)
