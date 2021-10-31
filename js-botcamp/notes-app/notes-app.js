let notes =[]
const filters = {
        searchText:''
    }

//63    
const notesJSON = localStorage.getItem('notes')
if(notesJSON!== null){
    notes=JSON.parse(notesJSON)
}





const renderNotes = function(notes,filters){
    const filterNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML=''
   filterNotes.forEach(function(note){
       const noteEl= document.createElement('p')
       noteEl.textContent = note.title
       document.querySelector('#notes').appendChild(noteEl)
   }) 
}   
renderNotes(notes,filters) 
document.querySelector('#create-note').addEventListener('click',function(e){
    //(63
   notes.push({
       title:'',
       body:''
   })
localStorage.setItem('notes',JSON.stringify(notes))
renderNotes(notes,filters)
// /63)
})

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText=e.target.value
    renderNotes(notes,filters)
})

document.querySelector('#filter-by').addEventListener('change',function(e){
    console.log(e.target.value)
})