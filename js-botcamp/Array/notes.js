const notes = [{
title:'My next trip',
body:'I would like to go to spain'
},{
title:'Habbits to work on',
body:'Exercise . Eating a bit better'
},{
title:'Office modification',
body:'Get a new seat'
}]
console.log('a' < 'A')
const sortNotes = function()    {
    notes.sort(function(a , b)   {
        if(a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()){
            return -1
        }
        else if (b.title.toLocaleLowerCase()<a.title.toLocaleLowerCase()){
            return 1
        }
        else return 0
    })
}

const findNote= function(notes,noteTitle){
   return  notes = notes.find(function(note,index){
        return note.title.toLowerCase()===noteTitle.toLowerCase()
    })
}
const findNotes =function(notes,query){
return notes.filter(function(note,index){
    const isTitleMatch =note.title.toLowerCase().includes(query.toLowerCase())  
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())   
    return isTitleMatch || isBodyMatch
})}
sortNotes(notes)
console.log(notes)
