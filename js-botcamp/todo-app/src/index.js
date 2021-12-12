import {renderTodos} from './views'
import { setFilters } from './filters'
import { createTodo, loadTodos} from './todos'

renderTodos()

document.querySelector('#search-todo').addEventListener('input', (e)=>{
   setFilters({
    searchText:e.target.value
    })
    renderTodos()
    })

document.querySelector('#checkbox1').addEventListener('change',(e)=>{
    setFilters({hideCompleted:e.target.checked})
    renderTodos()
    })

document.querySelector('#name-form').addEventListener('submit',(e)=>{
    e.preventDefault()
    const value = e.target.elements.addTodo.value
    createTodo(value)
    renderTodos()
    e.target.elements.addTodo.value =''
    })

window.addEventListener('storage',(e)=>{
    if(e.key==='todos'){
        loadTodos()
        renderTodos()
    }
})