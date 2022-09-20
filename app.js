const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// routes
const tourRoutes = require("./routes/v1/tours.routes");
app.use("/api/v1/tours", tourRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    routes: [
      {
        route: "GET /api/v1/tours",
        desc: "Get all the tours or get filtered tours",
      },
      {
        route: "POST /api/v1/tours",
        desc: "Add a tour",
      },
      {
        route: "GET /api/v1/tours/:id",
        desc: "Get a tour details by id",
      },
      {
        route: "PATCH /api/v1/tours/:id",
        desc: "Update a tour",
      },
      {
        route: "GET /api/v1/tours/trending",
        desc: "Get top 3 viewed tours",
      },
      {
        route: "GET /api/v1/tours/cheapest",
        desc: "Get top 3 cheapest tours",
      },
    ],
  });
});

module.exports = app;
