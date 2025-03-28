import Task from "../models/Task.js"

export const createTask = async (req, res) => {
    const { title, description } = req.body;
    try {
      const task = await Task.create({ user: req.user.id, title, description });
      res.status(201).json(task);
    } catch (err) {
      res.status(500).json({ message: "Error creating task" });
    }
  };
  
 export const getTasks = async (req, res) => {
    try {
      const tasks = await Task.find({ user: req.user.id });
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ message: "Error fetching tasks" });
    }
  };
  
 export const updateTask = async (req, res) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedTask);
    } catch (err) {
      res.status(500).json({ message: "Error updating task" });
    }
  };
  
  export const deleteTask = async (req, res) => {
    try {
      await Task.findByIdAndDelete(req.params.id);
      res.json({ message: "Task deleted" });
    } catch (err) {
      res.status(500).json({ message: "Error deleting task" });
    }
  };