const express = require("express");
const tourController = require("../../controllers/tours.controllers");

const router = express.Router();

router
  .route("/")
  .get(tourController.getTours)
  .post(tourController.createTour);

module.exports = router;
