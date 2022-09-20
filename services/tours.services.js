const Tour = require("../models/Tour");

module.exports.getToursService = async (filters, queries) => {
  const tours = await Tour.find(filters)
    .select(queries.fields)
    .skip((queries.page - 1) * queries.limit)
    .limit(queries.limit)
    .sort(queries.sort);

  const total = await Tour.countDocuments(filters);
  const page = Math.ceil(total / queries.limit);

  return { total, page, tours };
};

module.exports.createTourService = async (tourData) => {
  const result = await Tour.create(tourData);
  return result;
};

module.exports.getTourByIdService = async (tourId) => {
  const tour = Tour.findById(tourId);
  return tour;
};

module.exports.updateTourService = async (tourId, data) => {
  const result = await Tour.updateOne(
    { _id: tourId },
    { $set: data },
    {
      runValidators: true,
    }
  );
  return result;
};
