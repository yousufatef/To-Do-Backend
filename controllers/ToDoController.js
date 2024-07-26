const ToDoModel = require("../models/ToDoModel");

const getTodo = async (req, res) => {
  try {
    const todo = await ToDoModel.find();
    res.send(todo);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).send({ error: "An error occurred while fetching todos." });
  }
};

const createTodo = async (req, res) => {
  const { text } = req.body;
  ToDoModel.create({ text })
    .then((data) => {
      console.log(`Data: ${data}`, "Added Successfully");
      res.send(data);
    })
    .catch((err) => console.log(err));
};

const updateTodo = async (req, res) => {
  try {
    const { id, text } = req.body;
    const updatedTodo = await ToDoModel.findByIdAndUpdate(
      id,
      { text },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).send("ToDo item not found");
    }

    res.json(updatedTodo); // Return the updated todo item for verification
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while updating the ToDo item");
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.body;
    await ToDoModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting todo" });
  }
};

module.exports = {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
