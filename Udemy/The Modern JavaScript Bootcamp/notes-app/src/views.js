import moment from 'moment'
import {getFilters} from './filters'
import {sortNotes ,getNotes} from './notes'

//generate note DOM strucute for a note
const generateNoteDOM = (note)=>{
   const noteEl= document.createElement('a')
   const textEl = document.createElement('p')
   const lastEdited = document.createElement('a')
    
   lastEdited.textContent= generateLastEdited(note.updatedAt)
   textEl.textContent ='Unnamed note'
   textEl.classList.add('list-item__title')
   lastEdited.classList.add('list-item__subtitle')
  noteEl.setAttribute('href',`/edit.html#${note.id}`)
  noteEl.classList.add('list-item')
   //setup the remove note button
   noteEl.appendChild(textEl)
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
// render application notes
const renderNotes = () => {
    const notesEl=document.querySelector('#notes')
    const filters = getFilters()
    const notes=sortNotes(notes ,filters.SortBy)
    const filterNotes = notes.filter((note)=> note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    notesEl.innerHTML=''
    if(filterNotes.length>0){
    filterNotes.forEach((note)=>{
        const noteEl= generateNoteDOM(note)
       notesEl.appendChild(noteEl)
        }) 
    }
    else{
        const emptyMsg=document.createElement('p')
        emptyMsg.textContent='No notes to show'
        emptyMsg.classList.add('empty-message')
        notesEl.appendChild(emptyMsg)
    }
}
const initializeEditPage=(noteId)=>{
    
const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')

const notes = getNotes()
const note = notes.find((note)=> note.id ===noteId)
     
if (!note)
{
location.assign('/index.html')
}
noteTitle.value = note.title
noteBody.value = note.body
}
const generateLastEdited=(timestamp)=>{
    return `Last edited ${moment(timestamp).fromNow()}`
}

export {generateNoteDOM,renderNotes,generateLastEdited,initializeEditPage}