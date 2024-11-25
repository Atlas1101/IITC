const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// Models Import
const userSchema = require("./models/userModel");

// routes import
const userRoutes = require("./routes/userRoutes");

const PORT = 3000;

const dbUri = process.env.DB_URI;

const app = express();

app.use(express.json());

mongoose.connect(dbUri).then(() => {
  console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
  res.send("Hello World! big it up");
});

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
