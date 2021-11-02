const todos = LoadTodos()
const filters = {
    searchText:'',
    hideCompleted:false
    }


renderTodos(todos,filters)
document.querySelector('#search-todo').addEventListener('input',function (e){
    e.preventDefault()
    filters.searchText=(e.target.value)
    renderTodos(todos,filters)
    })

document.querySelector('#name-form').addEventListener('submit',function(e){
    e.preventDefault()
    todos.push({id:uuidv4(),title:e.target.elements.addTodo.value,completed:false})
    saveTodos(todos)
    renderTodos(todos,filters)
    e.target.elements.addTodo.value =''
    })
document.querySelector('#checkbox1').addEventListener('change',function(e){
    e.preventDefault()
    filters.hideCompleted=e.target.checked
    renderTodos(todos,filters)
    })
