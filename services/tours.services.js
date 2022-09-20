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
  tourData.viewCount = 0;
  const result = await Tour.create(tourData);
  return result;
};

module.exports.getTourByIdService = async (tourId) => {
  await Tour.updateOne({ _id: tourId }, { $inc: { viewCount: 1 } });
  const tour = await Tour.findById(tourId);
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

module.exports.getCheapestToursService = async () => {
  const tours = await Tour.find({}).sort("price").limit(3);
  return tours;
};

module.exports.getTrendingToursService = async () => {
  const tours = await Tour.find({}).sort("-viewCount").limit(3);
  return tours;
};

module.exports.deleteTourService = async (tourId, data) => {
  const result = await Tour.deleteOne({ _id: tourId });
  return result;
};
