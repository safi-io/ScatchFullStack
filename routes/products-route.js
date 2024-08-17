const express = require("express");
const product = require("../models/product-model");
const multer = require("multer");
const path = require("path");
const isAllowedIn = require("../middlewares/isAllowedIn");

const router = express.Router();

// Multer Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/images`));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});
const upload = multer({ storage });

router.get("/", isAllowedIn, async (req, res) => {
  const allProducts = await product.find({});
  return res.render("admin", { products: allProducts });
});

router.get("/add", isAllowedIn, (req, res) => {
  return res.render("createproducts");
});

// Adding Product
router.post("/add", upload.single("image"), async (req, res) => {
  const { image, name, price, discount, bgColor, textColor, panelColor } =
    req.body;

  await product.create({
    image: `/images/${req.file.filename}`,
    name,
    price,
    discount,
    bgColor,
    textColor,
    panelColor,
  });

  const allProducts = await product.find({});

  return res.render("admin", { products: allProducts });
});

module.exports = router;
