const express = require("express");
const tourController = require("../../controllers/tours.controllers");

const router = express.Router();

router
  .route("/tours")
  .get(tourController.getTours)
  .post(tourController.createTour);

router.route("/tours/:id").get(tourController.getTourById);

router.route("/tour/trending").get(tourController.getTrendingTours);
router.route("/tour/cheapest").get(tourController.getCheapestTours);

router
  .route("/tour/:id")
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
