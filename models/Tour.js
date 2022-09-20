const mongoose = require("mongoose");

const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide a name for this tour"],
      trim: true,
      unique: [true, "tour name must be unique"],
      minLength: [5, "tour name must be at least 5 characters"],
    },
    location: {
      type: String,
      required: [true, "please provide a tour location"],
      trim: true,
    },
    startDate: {
      type: Date,
      required: [true, "please provide a start date of the tour"],
    },
    difficulty: {
      type: String,
      required: [true, "please provide a tour difficulty"],
      enum: {
        values: ["easy", "medium", "difficult"],
        message: "difficulty can't be {VALUE}, must be easy/medium/difficult",
      },
    },
    image: {
      type: String,
      required: [true, "please provide a tour image"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "please provide the tour price"],
      min: [0, "price can't be negative"],
    },
    duration: {
      type: Number,
      required: [true, "please provide the tour duration"],
      min: [1, "duration can't be less than 1 day"],
      validate: {
        validator: (value) => Number.isInteger(value),
        message: "duration must be an integer",
      },
    },
    stops: {
      type: Number,
      required: [true, "please provide the number of tour stop points"],
      min: [1, "stops can't be less than 1"],
      validate: {
        validator: (value) => Number.isInteger(value),
        message: "stops must be an integer",
      },
    },
    maxGroupSize: {
      type: Number,
      required: [true, "please provide a maximum group size of the tour"],
      min: [10, "group size can't be less than 10"],
      validate: {
        validator: (value) => Number.isInteger(value),
        message: "maxGroupSize must be an integer",
      },
    },
    description: {
      type: String,
      required: [true, "please provide a tour description"],
    },
    viewCount: Number,
  },
  { timestamps: true }
);

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
