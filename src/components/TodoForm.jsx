import React, { useState } from "react";


const TodoForm = (props) => {

  const [ name, setName ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(name);
  };

  const handleChange = (e) => {
    setName(e.target.value)
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
      value={name} 
      /> <br />
      <button className="form-btn">Add Task</button>
    </form>
  );
};

export default TodoForm;
