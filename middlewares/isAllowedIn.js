const jwt = require("jsonwebtoken");
const owner = require("../models/owner-model");

module.exports = async (req, res, next) => {
    if (!req.cookies?.admin) {
      return res.redirect("/owner");
    }
  
    try {
      let decoded = jwt.verify(req.cookies.admin, process.env.JWT_KEY);
  
      let adminData = await owner
        .findOne({ email: decoded.email })
        .select("-password");
  
      if (adminData) {
        req.user = adminData;
      } else {
        return res.redirect("/owner");
      }
  
      next();
    } catch (error) {
      return res.redirect("/owner");
    }
  };
