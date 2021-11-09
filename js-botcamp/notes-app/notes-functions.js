'use strict'
// read existing notes from local storage
const getSavedNotes =() =>{
    const notesJSON = localStorage.getItem('notes')
    try{
        return notesJSON  ? JSON.parse(notesJSON) : []
    }catch(e) {
        return []
    }
      
}
    
//save the notes 
const saveNotes = (notes) =>{
     localStorage.setItem('notes',JSON.stringify(notes))
    }
//remnove note from the list 
const removeNote=(id)=>{
const noteIndex = notes.findIndex((note) => {
    return note.id === id
})
if(noteIndex>-1){
    notes.splice(noteIndex,1)
}
}
//generate note DOM strucute for a note
const generateNoteDOM = (note)=>{
   const noteEl= document.createElement('div')
   const textEl = document.createElement('a')
   const lastEdited = document.createElement('span')
   
   lastEdited.textContent=`  last edit ${moment(note.updatedAt).fromNow()} `
   textEl.setAttribute('href',`/edit.html#${note.id}`)
   textEl.textContent ='Unnamed note'
   const button = document.createElement('button')
   //setup the remove note button
   button.textContent = 'x'
   button.addEventListener('click',()=>{
       removeNote(note.id)
       saveNotes(notes)
       renderNotes(notes,filters)
   })
   
   noteEl.appendChild(textEl)
   noteEl.appendChild(button)
   noteEl.appendChild(lastEdited)
//setup the note title text
    if(note.title!== '' )
    {
    textEl.textContent=note.title
    }
    else {
    textEl.textContent='Unnamed note'
    }
    
    return noteEl
    }
    //sort your notes by one of the ways
const sortNotes=(notes,sortBy)=>{
if(sortBy==='byEdited'){
    return notes.sort((a,b)=>{
        if(a.updatedAt>b.updatedAt){
            return -1
        }else if (a.updatedAt <b.updatedAt)
        {
            return 1
        }
        else return 0
    })
}
else if(sortBy==='byCreated') {
    return notes.sort((a,b)=>{
        if(a.createdAt<b.createdAt){
            return -1
        }else if (a.createdAt >b.createdAt)
        {
            return 1
        }
        else return 0
    })
}
else if(sortBy==='alphabetical'){
    return notes.sort((a,b)=>{
        if(a.title.toLowerCase()<b.title.toLowerCase()){
            return -1
        }
        else if(a.title.toLowerCase()>b.title.toLowerCase())
        {
            return 1
        }
        
    })
}else return notes
}    
// render application notes
const renderNotes = (notes,filters) => {
    notes=sortNotes(notes ,filters.SortBy)
    const filterNotes = notes.filter((note)=> note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    
    document.querySelector('#notes').innerHTML=''

    filterNotes.forEach((note)=>{
        const noteEl= generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
        }) 
}