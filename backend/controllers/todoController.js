// controllers/todoController.js
const Todo = require("../models/todoModel");

// Create a new to-do
const createTodo = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newTodo = new Todo({
      title,
      description,
    });

    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Get all to-dos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Get a specific to-do
const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ msg: "To-do not found" });

    res.json(todo);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Update a to-do
const updateTodo = async (req, res) => {
  const { title, description, completed } = req.body;

  try {
    let todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ msg: "To-do not found" });

    todo.title = title;
    todo.description = description;
    todo.completed = completed;

    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Delete a to-do
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ msg: "To-do not found" });

    await todo.remove();
    res.json({ msg: "To-do removed" });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

module.exports = {
  createTodo,
  updateTodo,
  getTodos,
  getTodoById,
  deleteTodo,
};
