const express = require("express");
const userController = require("../controllers/authController");

const router = express.Router();

// Create a new user
router.post("/", userController.registerUser);

// login 
router.post("/login", userController.loginUser);

module.exports = router;