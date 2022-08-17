import { useState, useEffect } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { nanoid } from "nanoid";

function App() {
  const _TASKS = [
    { id: "td-2151", name: "Take out the trash" },
    { id: "td-2152", name: "Do the dishes" },
  ];

  const [tasks, setTasks] = useState(_TASKS);



  const addTask = (taskName) => {
    const newTask = { id: `td-${nanoid()}`, name: taskName };
    tasks.push(newTask)
    setTasks([...tasks]);
  };

  const deleteTask = (id) => {
    const currentTasks = tasks.filter((task) => id !== task.id)
    setTasks(currentTasks) 
    console.log(currentTasks)
  };

  const editTask = (id, editName) => {
    const editList = [...tasks ].map((task) => {
      if (id === task.id) {
        let newTask = {id: `td-${nanoid()}`, editName}
        tasks.push(newTask)
        return tasks
        
      }
      return {...tasks}
    });
    setTasks(editList)
    console.log(editList)
  }

  const todoList = tasks.map((task) => (
    <Todo 
    id={task.id} 
    name={task.name} 
    key={task.id} 
    deleteTask={deleteTask}
    editTask={editTask}
    />
  ));

  return (
    <>
      <div className="todo-container">
        <h1>Welcome!</h1>
        <h2>Please enter a task!</h2>

        <TodoForm addTask={addTask} />
      

        <div className="todo-list-container">
          <ul className="todo-list">{todoList}</ul>
        </div>
        <footer>
          <p className="footer-text">Thank You!</p>
        </footer>
      </div>
    </>
  );
}

export default App;
