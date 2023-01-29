const express = require("express");
const cors = require("cors");
const studentReg = require("./api/studentReg.route.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/studentReg", studentReg);
app.use("*", (req, res) => res.status(404).json({ error: "Not found" }));

module.exports = app;
