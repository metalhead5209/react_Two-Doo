import { useState } from "react";
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

  const todoList = tasks.map((task) => (
    <Todo id={task.id} name={task.name} key={task.id} />
  ));

  const addTask = (taskName) => {
    const newTask = { id: `td-${nanoid()}`, name: taskName };
    setTasks([...tasks, newTask]);
  };

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
