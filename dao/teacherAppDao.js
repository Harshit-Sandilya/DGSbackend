const sendEmail = require("../mailer");
const Teacher = require("../models/TeacherApp");

class teacherRegDAO {
	static async addTeacher(data) {
		try {
			const newTeacher = new Teacher(data);
			newTeacher.save().then(() => {
				console.log("Teacher Added Success");
				sendEmail({
					subject: "Teacher Application",
					text: `${newTeacher}`,
					to: "dundlodgirlsschool@gmail.com",
					from: process.env.EMAIL,
					replyTo: `${data.email}`,
				});
				sendEmail({
					subject: "Teacher Application",
					text: `${newTeacher}`,
					to: `${data.email}`,
					from: process.env.EMAIL,
					replyTo: "dundlodgirlsschool@gmail.com",
				});
			});
			console.log(newTeacher);
			return newTeacher;
		} catch (err) {
			console.error(`Unable to insert teacher in TeacherAppDAO: ${err}`);
			return { error: err };
		}
	}
}

module.exports = teacherRegDAO;
