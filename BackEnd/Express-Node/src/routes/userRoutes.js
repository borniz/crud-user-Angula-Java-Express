const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/data", userController.getUsers);

module.exports = router;
