import React from "react";

const Todo = (props) => {



  return (
    <li className="todo-list-item" key={props.id} id={props.id}>
      <div className="todo-name-container">
        <p className="todo-name">{props.name}</p>
      </div>
      <div className="todo-btn-group">
        <button 
        className="todo-action-btn"
        >
          Edit
        </button>

        <button 
        className="todo-action-btn"
        onClick={() => props.deleteTask(props.id)}
        >
          Delete
          </button>
      </div>
    </li>
  );
};

export default Todo;
