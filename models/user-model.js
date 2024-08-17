const mongoose = require("mongoose");

// Schema
const userSchema = mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  order: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: String,
});

// Model
module.exports = mongoose.model("user", userSchema);
