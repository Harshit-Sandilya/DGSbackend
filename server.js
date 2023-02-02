const express = require("express");
const cors = require("cors");
const studentReg = require("./routes/studentReg.route.js");
const teacherApp = require("./routes/teacherApp.route.js");
const contact = require("./routes/contact.route.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/studentReg", studentReg);
app.use("/teacherApp", teacherApp);
app.use("/contact", contact);
app.use("*", (req, res) => res.status(404).json({ error: "Not found" }));

module.exports = app;
