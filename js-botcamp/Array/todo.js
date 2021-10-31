
const todos =
[
    {title:'bootcamp', completed:true},
    {title:'node.js' , completed:false},
    {title:'react.js', completed:false},
    {title:'CSS'     , completed:true}
]
//1. Convert array to array of Objects -> text , completed
//2. Create function to remove a todo by text value

const deleteTodo = function(todos,key)
{
      const index =todos.findIndex(function (todo){
          return todo.title.toLowerCase()===key.toLowerCase()
      })
      if(index>-1){
          todos.splice(index,1)
      }
}
//deleteTodo(todos ,' 231react.js')
//console.log(todos)
const getThingsToDo = function (todos){
    return todos.filter( function (todo) {
         
        return !todo.completed
        
    })}
const sortTodos = function (todos) {
    todos.sort(function(a , b)   {
        if(a.completed === false && b.completed ===true){
            return -1
        }
        else if (b.completed===false && a.completed===true){
            return 1
        }
        else return 0
    })
}
    sortTodos(todos)
    console.log(todos)
//console.log(getThingsToDo(todos))