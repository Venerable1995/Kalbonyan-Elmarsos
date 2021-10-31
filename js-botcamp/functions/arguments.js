let add = function(a, b,c){
return a+b+c
}
let result = add(10,1,5)
console.log(result)
let getScoreText = function (name ='Anonymous' ,score = 0){
    return `Name : ${name} - Score: ${score}`
}
let scoreText = getScoreText('Salah',100)
console.log(scoreText)
let getTip = function(total,percent=.2){
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return ` A ${percent}% tip on ${total}$ would be ${tip}$`
}
let tip = getTip(40, .25)
console.log(tip)
