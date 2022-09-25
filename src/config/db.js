const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

mongoose.connect(
  process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD),
  (err) => (err ? console.log(err) : console.log("DB is connected"))
);

module.exports = mongoose;
