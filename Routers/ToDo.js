const express = require('express')
const Router = express.Router()
const toDoController = require('../controllers/ToDo')

Router.get("/api/todo",toDoController.getAllToDos )
Router.get("/api/todo/:id",toDoController.getToDo )
Router.post("/api/todo",toDoController.creatToDo )
Router.put("/api/todo/:id",toDoController.updateToDo)
Router.delete("/api/todo/:id",toDoController.deleteToDo )

module.exports = Router