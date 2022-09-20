const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// routes
const tourRoutes = require("./routes/v1/tours.routes");
app.use("/api/v1/tours", tourRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Tour Management API Service");
});

module.exports = app;
