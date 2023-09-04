const express = require("express");
const router = express.Router();
const { createTodo } = require("../contollers/createTodo");
const { getTodos,getTodoById } = require("../contollers/getTodos");
const { updateTodo } = require("../contollers/updateTodo");
const { deleteTodo } = require("../contollers/deleteTodo");

router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
