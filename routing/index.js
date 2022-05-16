const router = require("express").Router()
const Todo = require("../models/todo");

// routes will be here....
router.get("/", async(req, res) => {
    const userTodo = await Todo.find();
    res.render("index", { todo: userTodo })
})


module.exports = router;