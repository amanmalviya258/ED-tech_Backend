const mongoose = require("mongoose");
const coursesSchema = new mongoose.Schema({
  courseName: {
    type: String,
    trim: true,
  },
  courseDescription: {
    type: String,
    trim: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  whatYouWillLearn: {
    type: String,
  },
  courseContent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "section",
  },
  ratingAndReview: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ratingAndReviews",
  },
  price: {
    type: Number,
  },
  thumbnail:{
    type:String
  },
  tag:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "tags",
  },
  studentsEnrolled:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required:true,

  }
});

module.exports = mongoose.model("courses", userSchema);
