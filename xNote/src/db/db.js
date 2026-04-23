const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 3000;

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

module.exports = connectDB;
