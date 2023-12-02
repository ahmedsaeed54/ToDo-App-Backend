const toDoModel = require("../Schemas/ToDo");

exports.getAllToDos = async function (req, res) {
    try {
        const toDos = await toDoModel.find();
        return res.json({ message: "Done", data: toDos });
    } catch (err) {
        return res.status(400).send({ message: err });
    }
};

exports.getToDo = async function (req, res) {
    try {
        const toDo = await toDoModel.find({ _id: req.params.id });
        if (toDo.length === 0) {
            return res.json({ message: "Not Found", data: toDo });
        } else {
            return res.json({ message: "todo is found", data: toDo });
        }
    } catch (err) {
        return res.status(400).send({ message: err });
    }
};

exports.creatToDo = async function (req, res) {
    try {
        const newToDo = await toDoModel.create(req.body);
        return res.json({ message: "todo is created", data: newToDo });
    } catch (err) {
        return res.status(400).send({ message: err });
    }
};

exports.updateToDo = async function (req, res) {
    try {
        const updatedToDo = await toDoModel.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        if (!updatedToDo.id) {
            return res.json({ message: "not found", data: [] });
        } else {
            return res.json({ message: "todo is updated", data: updatedToDo });
        }
    } catch (err) {
        return res.status(400).send({ message: err });
    }
};

exports.deleteToDo = async function (req, res) {
    try {
        await toDoModel.findByIdAndDelete(req.params.id);
        return res.json({ message: "todo is deletd", data: [] });
    } catch (err) {
        return res.status(400).send({ message: err });
    }
};
