const express = require("express");
const router = express.Router();
const product = require("../models/product-model");
const isLoggedIn = require("../middlewares/isLoggedIn");
const user = require("../models/user-model");

router.get("/", (req, res) => {
  let error = req.flash("error");
  res.render("index", { error });
});

// Shop
router.get("/shop", isLoggedIn, async (req, res) => {
  const allProducts = await product.find({});
  return res.render("shop", { products: allProducts, user: req.user });
});

// Adding to Cart
router.get("/addToCart/:slug", isLoggedIn, async (req, res) => {
  let userData = await user.findOne({ email: req.user.email });
  const productID = req.params.slug;

  await userData.cart.push(productID);
  await userData.save();
  return res.redirect("/shop");
});

// Viewing Cart
router.get("/cart", isLoggedIn, async (req, res) => {
  let userData = await user.findOne({ email: req.user.email }).populate("cart");
  return res.render("cart", { user: req.user, products: userData.cart });
});

module.exports = router;
