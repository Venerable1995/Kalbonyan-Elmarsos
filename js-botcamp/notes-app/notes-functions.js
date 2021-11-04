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
   const textEl = document.createElement('a')
   const lastEdited = document.createElement('span')
   
   lastEdited.textContent=`  last edit ${moment(note.updatedAt).fromNow()} `
   textEl.setAttribute('href',`/edit.html#${note.id}`)
   textEl.textContent ='Unnamed note'
   const button = document.createElement('button')
   //setup the remove note button
   button.textContent = 'x'
   button.addEventListener('click',function(){
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
const sortNotes=function(notes,sortBy){
if(sortBy==='byEdited'){
    return notes.sort(function(a,b){
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
    return notes.sort(function(a,b){
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
    return notes.sort(function(a,b){
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
const renderNotes = function(notes,filters) {
    notes=sortNotes(notes ,filters.SortBy)
    const filterNotes = notes.filter(function(note){
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML=''

    filterNotes.forEach(function(note){
        const noteEl= generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
        }) 
}