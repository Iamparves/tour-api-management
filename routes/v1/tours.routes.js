const express = require("express");
const tourController = require("../../controllers/tours.controllers");

const router = express.Router();

router.route("/").get(tourController.getTours).post(tourController.createTour);

router.route("/trending").get(tourController.getTrendingTours);
router.route("/cheapest").get(tourController.getCheapestTours);

router
  .route("/:id")
  .get(tourController.getTourById)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
