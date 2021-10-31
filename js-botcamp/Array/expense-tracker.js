const account = {
    name: 'Mohamed' ,
    expenses: [],
    income:[]
    ,
    addExpense : function (description , amount) {
           this.expenses.push({ 
            description: description , 
            amount : amount })
        
      },addIncome: function(description , amount){
          this.income.push({
              description : description,
              amount:amount
          })

      },
     getAccountSummary : function(){
         let balance= 0
         let totalIncome=0
         this.income.forEach(function(income)
         { totalIncome = totalIncome + income.amount})
        let totalExpense = 0 
        this.expenses.forEach(function(expense)
             { totalExpense = totalExpense + expense.amount})
             balance = totalIncome - totalExpense
    return `${account.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpense} in expenses.`
}
        
}

//1.add income array to account
//2. addincome method -> description , amount
//3.teak getAccountSummary 
// name has a balance of $10. $100 income. $90 in expenses
account.addExpense('Rent',950)
account.addExpense('Coffe',2)
account.addIncome('Job',1000)
console.log(account.getAccountSummary())
