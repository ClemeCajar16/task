import Task from "../models/task.model.js";

export const getTasks = async (req, res) => { 

    const tasks = await Task.find({ user: req.user.id})
    res.json(tasks);
};

export const getTask = async (req, res) => {
    const task = await Task.findOne({ _id: req.params.id, user: req.user.id }).populate("user");
  
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  };
  
 export const createTask = async (req, res) => {

    const {title, description, date} = req.body;

    const newTask = new Task({title, description, date, user: req.user.id});  
  
    const savedTask = await newTask.save();
    res.json (savedTask);
};

export const updateTask = async (req, res) => { 
    const task = await Task.findByIdAndUpdate(req.params.id, req.body,{ new: true });

    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);

};


export const deleteTasks = async (req, res) => {

    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) return res.status(404).json({ message: "Task not found" });
    res.sendStatus(204); 
 };

