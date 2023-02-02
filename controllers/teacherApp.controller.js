const teacherRegDAO = require("../dao/teacherAppDAO");

class TeacherRegCtrl {
	static async postTeacher(req, res, next) {
		try {
			const teacherApp = await teacherRegDAO.addTeacher(req.body);
			res.json({ status: "success" });
		} catch (err) {
			res.status(500).json({ error: err.message });
		}
	}
}

module.exports = TeacherRegCtrl;
