import { useState } from "react";
import "./App.css";

function App() {

  const TASKS = [
    {id: 2151, name: "Take out the trash", completed: false},
    {id: 2152, name: "Do the dishes", completed: false},
    {id: 2153, name: "Get better at React", completed: false}
  ]

  return (
    <>
      <div className="todo-container">
        <h1>Welcome!</h1>
        <h2>Please enter a task!</h2>

        {/* TODO FORM
         XXXXXXXXXXXXXXXXXX */}
        <form className="todo-form">
          <input type="text" className='form-input' /> <br />
          <button className="form-btn">Add Task</button>
        </form>
        {/* XXXXXXXXXXXXXXXXXX */}

        <div className="todo-list-container">
          <ul role='list' className="todo-list">
            {/* TODO LIST
            XXXXXXXXXXXXXXXXXXXXXXXXXXX */}

            <li className="todo-list-item">
              <div className="todo-name-container">
                <p className="todo-name">Get better at react</p>
              </div>
              <div className="todo-btn-group">
                <button className='todo-action-btn'>Edit</button>
              <button className='todo-action-btn'>Delete</button>
              </div>
            </li>

            <li className="todo-list-item">
              <div className="todo-name-container">
                <p className="todo-name">Get better at react</p>
              </div>
              <div className="todo-btn-group">
                <button className='todo-action-btn'>Edit</button>
              <button className='todo-action-btn'>Delete</button>
              </div>
            </li>

         

            {/* XXXXXXXXXXXXXXXXXXXXXXX */}
          </ul>
        </div>


      </div>
    </>
  );
}

export default App;
