let myBook = {
    title:'1984',
    author: 'George Orwell',
    pageCount: 326
}
console.log(`${myBook.title} by ${myBook.author}`)
myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)
//challenge
//name , age , location
// Mohamed is 26 and lives in Giza 
// increase age by 1 and print again
let me = {
    name:'Mohamed',
    age :26 ,
    location: 'Giza'
}
console.log(`${me.name} is ${me.age} and lives in ${me.location}` )
me.age = me.age +1
console.log(`${me.name} is ${me.age} and lives in ${me.location}` )