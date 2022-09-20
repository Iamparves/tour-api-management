const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const dbConnect = (DATABASE_URI) => {
  return mongoose.connect(DATABASE_URI).then(() => {
    console.log("Database connection successful");
  });
};

module.exports = dbConnect;
