const sendEmail = require("../mailer");
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
				sendEmail({
					subject: "Student Registration",
					text: `${newStudent}`,
					to: "dundlodgirlsschool@gmail.com",
					from: process.env.EMAIL,
					replyTo: `${student.email}`,
				});
				sendEmail({
					subject: "Student Registration",
					text: `${newStudent}`,
					to: `${student.email}`,
					from: process.env.EMAIL,
					replyTo: "dundlodgirlsschool@gmail.com",
				});
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
