const TaskModel = require("../models/Taskmodel");

module.exports.getTask = async (req, res) => {
	const task = await TaskModel.find();
	res.send(task);
};
module.exports.saveTask = (req, res) => {
	const { name } = req.body;

	TaskModel.create({ name })
		.then((data) => {
			console.log("Saved Succesfully");
			res.status(201).send(data);
		})
		.catch((err) => {
			console.log(err);
			res.send({ error: err, msg: "Something went wrong!" });
		});
};
module.exports.updateTask = (req, res) => {
	const {id} =req.params 
	const { name } = req.body;

	TaskModel.findByIdAndUpdate(id, {task})
		.then(() => res.send("Updated Message"))
		.catch((err) => {
			console.log(err);
			res.send({ error: err, msg: "Something went wrong!" });
		});
};
module.exports.deleteTask = (req, res) => {
	const {id} =req.params 
	

	TaskModel.findByIdAndDelete(id)
		.then(() => res.send("Deleted Message"))
		.catch((err) => {
			console.log(err);
			res.send({ error: err, msg: "Something went wrong!" });
		});
};
