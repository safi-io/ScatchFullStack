const mongoose = require("mongoose");

// Schema
const productSchema = mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
  bgColor: String,
  textColor: String,
  panelColor: String,
});

// Model
module.exports = mongoose.model("product", productSchema);
