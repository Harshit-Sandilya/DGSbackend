const mongoose = require("mongoose");
const StudentReg = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model("Student", StudentReg);
