const mongoose = require("mongoose");
const TeacherApp = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
	},
	{ collection: "Teacher" }
);
module.exports = mongoose.model("Teacher", TeacherApp);
