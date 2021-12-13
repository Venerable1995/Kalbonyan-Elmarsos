let myBook = {
    title:'1984',
    author: 'George Orwell',
    pageCount: 326
}
let otherBook = {
    title:'A Peoples History',
    author: 'Howard Zim',
    pageCount: 723
}
let getSummary = function (book){
return {Summary: `${ book.title} by ${book.author}` ,
pageCountSummary: `${book.title} is ${book.pageCount} pages long` }
}
let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)
console.log(bookSummary.pageCountSummary)
//challenge area
//Creat Function - take fahrenheit in - return object with all three
let CalcTemp = function (fahrenheit) {
    let celsius =(fahrenheit -32) * 5 / 9
    let kelvin =(fahrenheit + 459.67) * 5 / 9
    return { fahrenheit:`${fahrenheit} dgress in fahrenheit`,
Celsuis: `${celsius} dgrees in celsius`,
Kelvin:`${kelvin} dgress in kelvin`}
}
let temp = CalcTemp(32)
console.log(temp)