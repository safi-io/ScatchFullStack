const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/auth-controller");

// Sign-up for User
router.post("/register", registerUser);

// Log-in for User
router.post("/login", loginUser);

// Log-out user
router.get("/logout", logoutUser);

module.exports = router;
