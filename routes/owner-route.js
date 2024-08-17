const express = require("express");
const owner = require("../models/owner-model");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Creating Admin only in development enviroment
if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let ownerPrevData = await owner.find({});
    if (ownerPrevData.length > 0) {
      return res.status(500).send("Owner already created");
    }
    let { fullName, email, password } = req.body;
    let createdOwner = await owner.create({ fullName, email, password });
    return res.send(createdOwner);
  });
}

// Rendering Admin Login
router.get("/", (req, res) => {
  return res.render("owner-login");
});

// To verify log-in info provided by Admin
router.post("/panel", async (req, res) => {
  const { email, password } = req.body;
  const isAdmin = await owner.findOne({ email, password });
  if (isAdmin) {
    let token = jwt.sign(
      { email: isAdmin.email, id: isAdmin._id },
      process.env.JWT_KEY
    );
    return res.cookie("admin", token).redirect("/products");
  } else {
    return res.render("owner-login");
  }
});

module.exports = router;
