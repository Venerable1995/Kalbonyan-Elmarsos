let myAccount = {
    name :'Mohamed',
    Expenses : 0 ,
    income: 0
}
let otherAccount = myAccount
otherAccount = { }
let addExpense = function (account ,amount){
    
   account.Expenses = account.Expenses + amount 
    
}

let AddIncome = function (account,amount){
    account.income= account.income + amount
}
let resetAccount = function(account){
    account.Expenses =0
    account.income =0
}
let getAccountSummary = function(account){
    let balance = account.income - account.Expenses
    return `Account for ${account.name} has $${balance} in balance.`
}
AddIncome(myAccount,2000)
addExpense(myAccount,2.50)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))