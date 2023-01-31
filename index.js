const app = require("./server.js");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.p5xwxcl.mongodb.net/?retryWrites=true&w=majority`;
mongoose
	.connect(uri, {
		// maxPoolSize: 50,
		// waitQueueTimeoutMS: 2500,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// useCreateIndex: true,
	})
	.catch((err) => {
		console.error(err.stack);
		process.exit(1);
	})
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`listening on port ${process.env.PORT}`);
		});
	});
