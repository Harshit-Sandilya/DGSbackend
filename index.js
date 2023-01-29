const app = require("./server.js");
const mongodb = require("mongodb");
const studentRegDao = require("./dao/studentRegDao");
require("dotenv").config();

const MongoClinet = mongodb.MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.p5xwxcl.mongodb.net/?retryWrites=true&w=majority`;
MongoClinet.connect(uri, {
	maxPoolSize: 50,
	waitQueueTimeoutMS: 2500,
	useNewUrlParser: true,
})
	.catch((err) => {
		console.error(err.stack);
		process.exit(1);
	})
	.then(async (client) => {
		await studentRegDao.injectDB(client);
		app.listen(process.env.PORT, () => {
			console.log(`listening on port ${process.env.PORT}`);
		});
	});
