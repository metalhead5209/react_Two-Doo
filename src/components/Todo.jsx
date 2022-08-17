import React, { useState } from "react";

const Todo = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [ editName, setEditName ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editName === '') {
      alert('please enter a task')
    } else {
    props.editTask(props.id, newTask);
    setEditName('');
    setIsEditing(false);
    }
  }

  const handleChange = (e) => {

  }

  const listView = (
    <>
      <div className="todo-name-container">
        <p className="todo-name">{props.name}</p>
      </div>
      <div className="todo-btn-group">
        <button className="todo-action-btn" onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button
          className="todo-action-btn"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete
        </button>
      </div>
    </>
  );

  const editView = (
    <>
      <div className="todo-name-container">
        <div className="edit-container">
          <form
          onSubmit={handleSubmit}
          >
            <input 
            type="text" 
            className="edit-input" 
            onChange={handleChange}
            value={editName}
            />
            <div className="edit-btn-group">
              <button onClick={() => setIsEditing(false)} className="edit-cancel">Cancel</button>
              <button className="edit-submit">Submit</button>
            </div>
          </form>
        </div>
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
    </>
  );

  return (
    <li className="todo-list-item" key={props.id} id={props.id}>
      {isEditing ? editView : listView}
    </li>
  );
};

export default Todo;
