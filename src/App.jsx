import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {

  const _TASKS = [
    {id: "td-2151", name: "Take out the trash"},
    {id: "td-2152", name: "Do the dishes"},
    {id: "td-2155", name: "Get better at React"}
  ]

  const [tasks, setTasks ] = useState(_TASKS)


  const todoList = _TASKS.map((task) => (
    <Todo
     id={task.id} 
     name={task.name} 
     key={task.id} 
     />
  ))

  const addTask = (taskName) => {
    alert(taskName)
  }

 

  return (
    <>
      <div className="todo-container">
        <h1>Welcome!</h1>
        <h2>Please enter a task!</h2>

        <TodoForm addTask={addTask}/>

        <div className="todo-list-container">
          <ul className="todo-list">
            {todoList}
            
          </ul>
        </div>


      </div>
    </>
  );
}

export default App;
