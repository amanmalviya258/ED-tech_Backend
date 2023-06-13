const mongoose = require("mongoose");
const ratingAndReviewsSchema = new mongoose.Schema({
  user: {
    type: String,
  },
  rating: {
    type: Number,
  },
  review: {
    type: String,
  },
});

module.exports = mongoose.model("ratingAndReviews", ratingAndReviewsSchema);
