const config = require("config");
const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");

mongoose
  .connect(`${config.get("MONGODB_URL")}/SCATCH`)
  .then(() => dbgr("Database Connected"))
  .catch((err) => dbgr("Unable to Connect Database", err));

module.exports = mongoose.connection;
