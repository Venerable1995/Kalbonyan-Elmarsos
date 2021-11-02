// read existing notes from local storage
const getSavedNotes =function(){
    const notesJSON = localStorage.getItem('notes')
    if(notesJSON!== null){
    return JSON.parse(notesJSON)
    }
else{
    return []
    }
    }
//save the notes 
const saveNotes = function(notes){
     localStorage.setItem('notes',JSON.stringify(notes))
    }
//remnove note from the list 
const removeNote=function(id){
const noteIndex = notes.findIndex(function(note){
    return note.id === id
})
if(noteIndex>-1){
    notes.splice(noteIndex,1)
}
}
//generate note DOM strucute for a note
const generateNoteDOM = function(note){
   const noteEl= document.createElement('div')
   const textEl=document.createElement('span')
   const button = document.createElement('button')
   //setup the remove note button
   button.textContent = 'x'
   button.addEventListener('click',function(){
       removeNote(note.id)
       saveNotes(notes)
       renderNotes(notes,filters)
   })
   noteEl.appendChild(button)
//setup the note title text
    if(note.title.lenght >0 ){
    textEl.textContent=note.title
    }
    else{
    textEl.textContent='Unnamed note'
    }
    noteEl.appendChild(textEl)
    return noteEl
    }
// render application notes
const renderNotes = function(notes,filters) {
    const filterNotes = notes.filter(function(note){
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML=''

    filterNotes.forEach(function(note){
        const noteEl= generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
        }) 
}