
const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const noteRemove=document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function(note){
    return note.id ===noteId
})
if (note===undefined)
{
location.assign('/index.html')
}
noteTitle.value = note.title
noteBody.value = note.body
noteTitle.addEventListener('input',function(e){
    note.title=e.target.value
    note.updatedAt=moment().valueOf()
    saveNotes(notes)
})
noteBody.addEventListener('input',function(e){
    note.body = e.target.value
    note.updatedAt=moment().valueOf()
    saveNotes(notes)
})
noteRemove.addEventListener('click',function(){
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})
window.addEventListener('storage',function(e){
    if(e.key==='notes'){
        notes= JSON.parse(e.newValue)
         note = notes.find(function(note){
            return note.id ===noteId
        })
        if (note===undefined)
        {
        location.assign('/index.html')
        }
        noteTitle.value = note.title
        noteBody.value = note.body
    }
})