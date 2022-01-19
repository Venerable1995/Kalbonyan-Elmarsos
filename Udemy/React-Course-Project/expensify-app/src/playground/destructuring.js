

// const book = {
//     title:'Ego is the Enemy',
//     author:'Ryan Holiday',
//     publisher:{
//         name:'Penguin'
//     }
// } 

// const {name:publisherName ='Self-Published'}=book.publisher
// console.log(publisherName)

const address=['1299 S Juniper Street','Philadelphia','Pennsylvania','19147'];
const[,city,state='New York'] =address
console.log(`You are in ${city} ${state}`)
const item = ['Coffe (hot)','$2.00','$2.50','$2.75']
const [order,priceSmall,priceMeduim,priceLarge]=item
console.log(`A mediom ${order} costs ${priceMeduim}`)