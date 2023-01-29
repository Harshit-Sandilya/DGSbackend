const express = require("express");
const StudentRegCtrl = require("./studentReg.controller");

const router = express.Router();

router.route("/").post(StudentRegCtrl.postStudent);

module.exports = router;
