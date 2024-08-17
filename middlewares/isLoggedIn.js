const jwt = require("jsonwebtoken");
const user = require("../models/user-model");

module.exports = async (req, res, next) => {
  if (!req.cookies?.user) {
    req.flash("error", "you need to log-in first");
    return res.redirect("/");
  }

  try {
    let decoded = jwt.verify(req.cookies.user, process.env.JWT_KEY);

    let userData = await user
      .findOne({ email: decoded.email })
      .select("-password");

    if (user) {
      req.user = userData;
    } else {
      return res.redirect("/");
    }

    next();
  } catch (error) {
    req.flash("error", "something went wrong");
    return res.redirect("/");
  }
};