import React, { useState } from "react";


const TodoForm = (props) => {

  const [ taskName, setTaskName ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(taskName);
    setTaskName('')
  };

  const handleChange = (e) => {
    setTaskName(e.target.value)
  }

  return (
    <form
     className="todo-form"
     onSubmit={handleSubmit}
     >
      <input 
      type="text" 
      className="form-input"
      onChange={handleChange} 
      value={taskName} 
      /> <br />
      <button className="form-btn">Add Task</button>
    </form>
  );
};

export default TodoForm;
