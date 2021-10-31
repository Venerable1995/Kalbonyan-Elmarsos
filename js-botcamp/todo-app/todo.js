const todos =
[
    {title:'bootcamp', completed:true},
    {title:'node.js' , completed:false},
    {title:'react.js', completed:false},
    {title:'CSS'     , completed:true}
]
// you have 2 todos left
// add a p for each todo above (use text value)



const filters ={
    searchText:'',
    hideCompleted:false
}

const renderTodos=function(todos,filter){
    let filtertodo = todos.filter(function(todo){
        const searchTextMatch = todo.title.toLowerCase().includes(filter.searchText.toLowerCase())
        const hideCompletedMatch = !todo.completed || !filters.hideCompleted
       return searchTextMatch && hideCompletedMatch
      
    })
    
    document.querySelector('#todo-filter').innerHTML=''
    filtertodo=filtertodo.filter(function(todo){
        if(filters.hideCompleted){
            return !todo.completed
        }
        else{
            return true
        }
    }) 
  filtertodo.forEach( function(todo){
        let todoEl=document.createElement('p')
        todoEl.textContent=todo.title
        document.querySelector('#todo-filter').appendChild(todoEl)
    })
    const todosLeft=filtertodo.filter(function(todo){
        return !todo.completed
    })
    document.querySelector('#todo-filter').innerHTML=''
    let msg = document.createElement('h2')
    msg.textContent = `you have ${todosLeft.length} todos left`
    document.querySelector('#todo-filter').appendChild(msg)
    const todosText = filtertodo.forEach(function(todo){
        let todosP =document.createElement('p')
    
        todosP.textContent =todo.title
        document.querySelector('#todo-filter').appendChild(todosP)
        
    })
}


document.querySelector('#search-todo').addEventListener('input',function (e){
    filters.searchText=(e.target.value)
    renderTodos(todos,filters)
})

document.querySelector('#name-form').addEventListener('submit',function(e){
    e.preventDefault()
    todos.push({title:e.target.elements.addTodo.value,completed:false})
    console.log(todos)
    renderTodos(todos,filters)
    e.target.elements.addTodo.value =''
})

document.querySelector('button').addEventListener('click' , function(e){
    console.log('adding todo')
})

//-------------------------------------------------------------------------
//                        checkboxes video number 59
//1. Create a checkbox and setup event listener ->"hide completed" / Done
//2. Create new hideCompleted filter (default false)
//3. update hidecompleted an rerender list  on checkbox change
//4. setup renderTodos to remove completed items








document.querySelector('#checkbox1').addEventListener('change', function(e){
    filters.hideCompleted=e.target.checked
    renderTodos(todos,filters)
})
