const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
let StudentReg;

class studentRegDAO {
	static async injectDB(conn) {
		if (StudentReg) {
			return;
		}
		try {
			StudentReg = await conn.db("Registration").collection("Student");
		} catch (err) {
			console.error(`Unable to establish coonection in StudentRegDAO: ${err}`);
		}
	}

	static async addStudent(data) {
		try {
			const student = {
				name: data.name,
				email: data.email,
			};
			return await StudentReg.insertOne(student);
		} catch (err) {
			console.error(`Unable to insert student in StudentRegDAO: ${err}`);
			return { error: err };
		}
	}
}

module.exports = studentRegDAO;
