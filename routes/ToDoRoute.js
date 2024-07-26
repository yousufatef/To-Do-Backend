const { Router } = require("express");
const {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/ToDoController");

const router = Router();

router.get("/", getTodo);
router.post("/create", createTodo);
router.post("/update", updateTodo);
router.post("/delete", deleteTodo);

module.exports = router;
