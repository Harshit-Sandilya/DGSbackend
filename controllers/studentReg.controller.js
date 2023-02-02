const studentRegDAO = require("../dao/studentRegDAO");

class StudentRegCtrl {
	static async postStudent(req, res, next) {
		try {
			const studentReg = await studentRegDAO.addStudent(req.body);
			res.json({ status: "success" });
		} catch (err) {
			res.status(500).json({ error: err.message });
		}
	}
}

module.exports = StudentRegCtrl;
