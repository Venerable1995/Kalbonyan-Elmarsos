'use strict'
const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const noteRemove=document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note)=> note.id ===noteId)
     
if (!note)
{
location.assign('/index.html')
}
noteTitle.value = note.title
noteBody.value = note.body
noteTitle.addEventListener('input',(e)=>{
    note.title=e.target.value
    note.updatedAt=moment().valueOf()
    saveNotes(notes)
})
noteBody.addEventListener('input',(e)=>{
    note.body = e.target.value
    note.updatedAt=moment().valueOf()
    saveNotes(notes)
})
noteRemove.addEventListener('click',()=>{
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})
window.addEventListener('storage',(e)=>{
    if(e.key==='notes'){
        notes= JSON.parse(e.newValue)
         note = notes.find((note)=>note.id ===noteId) 
        if (!note)
        {
        location.assign('/index.html')
        }
        noteTitle.value = note.title
        noteBody.value = note.body
    }
})