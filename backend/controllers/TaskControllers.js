const TaskModel = require("../controllers/TaskControllers");

module.exports.getTasks = async (req, res) => {
	const task = await Task.find();
	res.send(tasks);
};
module.exports.saveTasks = (req, res) => {
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
module.exports.updateTasks = (req, res) => {
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
