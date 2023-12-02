const mongoose = require('mongoose')
const Schema = mongoose.Schema
const toDoSchema = new Schema({
    description : String
})
module.exports = mongoose.model('todo',toDoSchema)