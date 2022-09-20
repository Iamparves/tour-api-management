const {
  createTourService,
  getToursService,
  getTourByIdService,
  updateTourService,
  getCheapestToursService,
  getTrendingToursService,
} = require("../services/tours.services");

module.exports.getTours = async (req, res, next) => {
  try {
    const { fields, page, limit, sort, ...filters } = req.query;
    const queries = {};

    queries.fields = fields ? fields.split(",").join(" ") : "";
    queries.sort = sort ? sort.split(",").join(" ") : "";
    queries.page = page ? +page : 1;
    queries.limit = limit ? +limit : 3;

    const tours = await getToursService(filters, queries);

    res.status(200).send({
      success: true,
      message: "Tours found successfully",
      data: tours,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Couldn't find tours",
      error: err.message,
    });
  }
};

module.exports.createTour = async (req, res, next) => {
  try {
    const result = await createTourService(req.body);

    res.status(200).json({
      success: true,
      message: "Tour inserted successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Couldn't insert the tour",
      error: err.message,
    });
  }
};

module.exports.getTourById = async (req, res, next) => {
  try {
    const tour = await getTourByIdService(req.params.id);
    res.status(200).send({
      success: true,
      message: "Found the tour",
      data: tour,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Couldn't find the tour",
      error: err.message,
    });
  }
};

module.exports.updateTour = async (req, res, next) => {
  try {
    const result = await updateTourService(req.params.id, req.body);

    res.status(200).send({
      success: true,
      message: "Tour updated successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Couldn't update the tour",
      error: err.message,
    });
  }
};

module.exports.getCheapestTours = async (req, res, next) => {
  try {
    const tours = await getCheapestToursService();

    res.status(200).send({
      success: true,
      message: "Cheapest tours found successfully",
      data: tours,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Couldn't find cheapest tours",
      error: err.message,
    });
  }
};

module.exports.getTrendingTours = async (req, res, next) => {
  try {
    const tours = await getTrendingToursService();

    res.status(200).send({
      success: true,
      message: "Trending tours found successfully",
      data: tours,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Couldn't find trending tours",
      error: err.message,
    });
  }
}