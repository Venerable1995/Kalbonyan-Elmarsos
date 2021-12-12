import uuidv4 from 'uuid/v4'
let todos = []
const loadTodos= ()=>{
    const todosJSON= localStorage.getItem('todos')
    try{ 
        todos = todosJSON ? JSON.parse(todosJSON) : []
    }catch(e){
        todos = []
    }
}

const saveTodos=() => localStorage.setItem('todos',JSON.stringify(todos))

const getTodos = () => todos

const createTodo = (textEl)=>{
    const id = uuidv4()
    if(textEl.trim().length >0){  
     todos.push({id:id,title:textEl.trim(),completed:false})
     saveTodos()  
    }
          
}

const removeTodo = function(todoId){
    const todoIndex = todos.findIndex(function(todo){
        return todo.id === todoId
    })
    if(todoIndex>-1){
        todos.splice(todoIndex,1)
        saveTodos()     
    }
    
}

const toggleTodo = function(todoId){
    const todo = todos.find(function(todo){
        return todo.id === todoId
    })
    if(todo!==undefined){
       todo.completed=!todo.completed    
       saveTodos()      
    }
    
}
loadTodos()
export {loadTodos,saveTodos,getTodos,createTodo,removeTodo,toggleTodo}