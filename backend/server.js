import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

/**
 * GET /tasks
 */
app.get("/tasks", (req, res) => {
  res.status(200).json({
    success: true,
    data: tasks,
  });
});

/**
 * POST /tasks
 */
app.post("/tasks", (req, res) => {
  const { title } = req.body;

  // ✅ Validation
  if (!title || title.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Title is required",
    });
  }

  const newTask = {
    id: Date.now().toString(),
    title,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);

  res.status(201).json({
    success: true,
    data: newTask,
  });
});

/**
 * PATCH /tasks/:id
 */
app.patch("/tasks/:id", (req, res) => {
  const { id } = req.params;

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }

  task.completed = !task.completed;

  res.json({
    success: true,
    data: task,
  });
});

/**
 * DELETE /tasks/:id
 */
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;

  const exists = tasks.some((t) => t.id === id);

  if (!exists) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }

  tasks = tasks.filter((t) => t.id !== id);

  res.json({
    success: true,
    message: "Task deleted",
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});