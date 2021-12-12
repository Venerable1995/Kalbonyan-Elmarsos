import {getTodos} from './todos'
import{getFilters,setFilters} from './filters'
import {toggleTodo ,removeTodo} from './todos'

const  renderTodos =  ()=>{
    const todosEl = document.querySelector('#todo-filter')
    const {searchText,hideCompleted} =getFilters()
    let filtertodo = getTodos().filter(function(todo){
        const searchTextMatch = todo.title.toLowerCase().includes(searchText.toLowerCase())
        const hideCompletedMatch = !todo.completed || !hideCompleted
    
      setFilters(searchTextMatch)
      setFilters(hideCompletedMatch)
      return searchTextMatch && hideCompletedMatch
        
    })
    const todosLeft=filtertodo.filter((todo) => !todo.completed)
    

    todosEl.innerHTML=''

    todosEl.appendChild(generateSummaryDOM(todosLeft))
    if(filtertodo.length>0){
            filtertodo.forEach((todo)=>{
                const todoEl = generateTodoDOM(todo)
                todosEl.appendChild(todoEl)
                }) 
    }
    else{
        const emptyMsg= document.createElement('p')
        emptyMsg.classList.add('empty-message')
        emptyMsg.textContent='No to-dos to show'
        todosEl.appendChild(emptyMsg)
    }

    }

const generateTodoDOM = (todo)=>{
    const DivEl=document.createElement('label')
    const containerEl=document.createElement('div')
    const buttonEl = document.createElement('button')
    const checkboxEl= document.createElement('input')
    const todoEl=document.createElement('span')


    checkboxEl.setAttribute('type','checkbox')
    checkboxEl.checked = todo.completed
    containerEl.appendChild(checkboxEl)
    checkboxEl.addEventListener('change' , (e)=>{
        toggleTodo(todo.id)
    })
    todoEl.textContent=todo.title
    containerEl.appendChild(todoEl)

    DivEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    DivEl.appendChild(containerEl)
 
    buttonEl.textContent = 'Remove'
    buttonEl.classList.add('button','button--text')
    DivEl.appendChild(buttonEl)
    buttonEl.addEventListener('click',()=>{
        removeTodo(todo.id)
        renderTodos()
        
    })
 return DivEl
}   

const generateSummaryDOM =(todosL)=>{
    const msg = document.createElement('h2')
    msg.classList.add('list-title')
    if(todosL.length===1){
    msg.textContent = `you have ${todosL.length} todo left`
    }
    else{
    msg.textContent = `you have ${todosL.length} todos left`
    }
   return msg
}

export {generateTodoDOM,renderTodos,generateSummaryDOM}