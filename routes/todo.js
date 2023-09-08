const express = require("express");
const router = express.Router();

// Create  Todo
const { createTodo } = require("../controllers/createTodo");
router.post("/createTodo", createTodo);

//Get Todo
const { getTodo, getTodobyid } = require("../controllers/getTodo");
router.get("/getTodo", getTodo);
//Getting todo by id
router.get("/getTodo/:id", getTodobyid);

//Update todo in db
const { updateTodo } = require("../controllers/updateTodo");
router.put("/updateTodo/:id", updateTodo);

//Delete todo from db

const { deleteTodo } = require("../controllers/deleteTodo");
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
