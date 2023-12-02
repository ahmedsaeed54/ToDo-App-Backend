const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Url = 'mongodb+srv://ahmedsaeed33364:123a123@maag.obrrn3i.mongodb.net/maag?retryWrites=true&w=majority'

const app = express();
const toDoRouter = require('./Routers/ToDo')
app.use(bodyParser.json());
const connectDb = async () => {
    try{
        mongoose.set('strictQuery',false)
        mongoose.connect(Url)
        console.log("connected");
    }
    catch(err){
        console.log(err);
        process.exit();
    }
}
connectDb();
app.use('/',toDoRouter)
app.listen(8000)