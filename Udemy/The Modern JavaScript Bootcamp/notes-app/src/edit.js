import {generateLastEdited, initializeEditPage} from './views'
import { updateNote , removeNote } from './notes'
const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const noteRemove=document.querySelector('#remove-note')
const noteId = location.hash.substring(1)

initializeEditPage(noteId)

noteTitle.addEventListener('input',(e)=>{
   const note = updateNote(noteId,{
        title:e.target.value
    })
    note.updatedAt=generateLastEdited(note.updatedAt)
   
})
noteBody.addEventListener('input',(e)=>{
    const note =updateNote(noteId,{
        body:e.target.value
    })
    note.updatedAt=generateLastEdited(note.updatedAt)
})
noteRemove.addEventListener('click',()=>{
    removeNote(noteId)
    location.assign('/index.html')
})
window.addEventListener('storage',(e)=>{
    if(e.key==='notes'){

        initializeEditPage(noteId)
    }
})