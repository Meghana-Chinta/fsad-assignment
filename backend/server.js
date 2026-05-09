const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("FSAD Backend is running");
});

// Simple in-memory task list
let tasks = [];

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: Date.now(),
    title: req.body.title,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});