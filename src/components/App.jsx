import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import "../styles.css";

function App() {
  const [theme, setTheme] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

    const changeTheme = () =>{
      setTheme(!theme);
    }

  useEffect(() =>{
    if (theme === true){
      document.body.classList.add("dark");
    }else{
      document.body.classList.remove("dark");
    }
  }, [theme]);
  const addItem = () => {
    if (inputValue.trim() === "") {
      return;
    }
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const toggleCompleted = (id) => {
    const updatedTask = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTask);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>My Todo List</h2>
      <button onClick={changeTheme}>Change Theme</button>
      <p>
        {tasks.filter((task) => task.completed).length} of {tasks.length} task
        completed
      </p>
      <div className="input-row">
        <input
          className="input-value"
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="add-btn" type="button" onClick={addItem}>
          <FaPlus className="plus-icon" />
          Add
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <div className="task-item" key={task.id}>
            <div className="task-left">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompleted(task.id)}
              />
              <span
                className={`task-text ${task.completed ? "completed" : ""}`}
              >
                {task.text}
              </span>
            </div>

            <FaRegTrashAlt
              className="delete-icon"
              onClick={() => deleteTask(task.id)}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
