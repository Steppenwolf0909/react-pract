import './App.css';
import React from 'react';
import  List from "./proj/List";
import Context from "./context";
import Add from "./proj/Add";



function App() {
    const [todos, setTodos] = React.useState([
        { id: 1, check: false, title: "Apple"},
        { id: 2, check: false, title: "Orrange"}
    ])
    function toggleTodo(id){
        setTodos(
            todos.map(todo=>{
                if(todo.id === id){
                    todo.check = !todo.check
                }
                return todo
            })
        )
    }
    function removeTodo(id){
        setTodos(todos.filter(todo => todo.id !== id)
        )
    }
    function addTodo(title){
        setTodos(todos.concat([
            {
                title,
                id: Date.now(),
                check: false
        }
        ])
        )
    }

  return (
      <Context.Provider value={{removeTodo}}>
    <div className="wrapper">
        <h1>Hi</h1>
        <Add onCreate={addTodo}/>
        {todos.length ? <List todos = {todos} onToggle={toggleTodo}/> : <span> No any more</span>}
    </div>
      </Context.Provider>
  )
}

export default App;
