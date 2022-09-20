const {
  createTourService,
  getToursService,
} = require("../services/tours.services");

module.exports.getTours = async (req, res, next) => {
  try {
    const { fields, page, limit, sort, ...filters } = req.query;
    const queries = {};

    if (fields) {
      queries.fields = fields.split(",").join(" ");
    }

    if (sort) {
      queries.sort = sort.split(",").join(" ");
    }

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
