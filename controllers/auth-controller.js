const bcrypt = require("bcrypt");
const { generateToken } = require("../utilis/generateToken");
const user = require("../models/user-model");

module.exports.registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (fullName === "" || email === "" || password === "") {
      req.flash("error", "All fields are required...");
      return res.redirect("/");
    }

    const userExist = await user.find({ email });
    if (userExist.length > 0) {
      req.flash("error", "User with same e-mail already registered...");
      return res.redirect("/");
    }

    bcrypt.genSalt(10, (error, salt) => {
      if (error) return res.send(error);
      bcrypt.hash(password, salt, async (error, hash) => {
        if (error) return res.send(error);
        else {
          const newUser = await user.create({
            fullName,
            email,
            password: hash,
          });
          let token = generateToken(newUser);
          res.cookie("user", token);
          return res.redirect("/");
        }
      });
    });
  } catch (error) {
    req.flash("error", error);
    return res.redirect("/");
  }
};

module.exports.loginUser = async (req, res) => {
  let { email, password } = req.body;

  const userExist = await user.findOne({ email });
  if (!userExist) {
    req.flash("error", "User not found...");
    return res.redirect("/");
  }

  bcrypt.compare(password, userExist.password, (error, result) => {
    if (result) {
      let token = generateToken(userExist);
      res.cookie("user", token);
      return res.redirect('/shop');
    } else {
      req.flash("error", "User not found...");
      return res.redirect("/");
    }
  });
};

module.exports.logoutUser = async (req, res) => {
  res.clearCookie("user");
  return res.redirect("/");
};
