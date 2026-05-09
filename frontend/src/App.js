import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const addTask = () => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");

    fetch("/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    }).catch(() => {
      console.log("Backend request failed, UI still updated");
    });
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="app-container">
      <h2>FSAD Task Tracker</h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span
              style={{
                marginLeft: "8px",
                textDecoration: task.completed
                  ? "line-through"
                  : "none",
                color: task.completed ? "#6b7280" : "#000",
              }}
            >
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;