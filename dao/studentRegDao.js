const Student = require("../models/StudentReg");

class studentRegDAO {
	static async addStudent(data) {
		try {
			const student = {
				name: data.name,
				email: data.email,
			};
			const newStudent = new Student(student);
			newStudent.save().then(() => {
				console.log("Student Added Success");
			});
			console.log(newStudent);
			return newStudent;
		} catch (err) {
			console.error(`Unable to insert student in StudentRegDAO: ${err}`);
			return { error: err };
		}
	}
}

module.exports = studentRegDAO;
