const express = require("express");
const dataController = require("./../controllers/dataController");
const router = express.Router();

router.route("/").get(dataController.getAllProblems);
module.exports = router;
