
const LoadTodos= function(){
    const todosJSON=localStorage.getItem('todos')
     try{return todosJSON!==null ? JSON.parse(todosJSON) : []
    }catch(e){
        return []
    }
        
}
const removeTodo = function(id){
    const todoIndex = todos.findIndex(function(todo){
        return todo.id === id
    })
    if(todoIndex>-1){
        todos.splice(todoIndex,1)
    }
}
const isCompleted = function(id){
    const todo = todos.find(function(todo){
         getID=id
        return todo.id === id
    })
    if(todo!==undefined){
       todo.completed=!todo.completed
            
    }
}
const  renderTodos =  ( todos , filter )=>{
    let filtertodo = todos.filter(function(todo){
        const searchTextMatch = todo.title.toLowerCase().includes(filter.searchText.toLowerCase())
        const hideCompletedMatch = !todo.completed || !filters.hideCompleted
        return searchTextMatch && hideCompletedMatch
      
    })
    const todosLeft=filtertodo.filter((todo) => !todo.completed)
    

    document.querySelector('#todo-filter').innerHTML=''

 
    document.querySelector('#todo-filter').innerHTML=''
    document.querySelector('#todo-filter').appendChild(generateMsg(todosLeft))
    filtertodo.forEach( (todo)=>document.querySelector('#todo-filter').appendChild(generateTodo(todo)))
    }

const saveTodos=(todos) => localStorage.setItem('todos',JSON.stringify(todos))

const generateTodo = (todo)=>{
    const buttonEl = document.createElement('button')
    buttonEl.textContent = 'x'
    buttonEl.addEventListener('click',()=>{
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos,filters)
    })
    const checkboxEl= document.createElement('input')
 
    checkboxEl.setAttribute('type','checkbox')
    checkboxEl.checked = todo.completed
    checkboxEl.addEventListener('change' , (e)=>{
        isCompleted(todo.id)
        saveTodos(todos)
        renderTodos(todos,filters)
    })
    
    const DivEl=document.createElement('div')
    DivEl.appendChild(checkboxEl)

    const todoEl=document.createElement('span')
    todoEl.textContent=todo.title
    DivEl.appendChild(todoEl)
    DivEl.appendChild(buttonEl)
    return DivEl
}       
const generateMsg = (todosL)=>{
    const msg = document.createElement('h2')
    msg.textContent = `you have ${todosL.length} todos left`
   return msg
}


// //    filtertodo=filtertodo.filter(function(todo){
//     if(filters.hideCompleted){
//         return !todo.completed
//     }
//     else{
//         return true
//         }
//     }) 