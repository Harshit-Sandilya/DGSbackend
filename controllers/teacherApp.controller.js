const teacherRegDAO = require("../dao/teacherAppDAO");

class TeacherRegCtrl {
  static async postTeacher(req, res, next) {
    try {
      teacherRegDAO.addTeacher(res, req.body);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = TeacherRegCtrl;
