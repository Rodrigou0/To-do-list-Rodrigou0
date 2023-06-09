import React, { useState } from "react";

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && newTask !=="") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
      className="text1"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Enter a new task"
      />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div className="box1">
              {task}
              <button
                onClick={() => deleteTask(index)}
                className="delete-button"
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className="text">{tasks.length} Items Left</p>
    </div>
  );
};

export default Todolist;
