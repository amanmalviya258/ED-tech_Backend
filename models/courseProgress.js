const mongoose = require("mongoose");
const courseProgressSchema = new mongoose.Schema({
  courseID: {
    type: mongoose.schema.Types.ObjectId,
    ref: "courses",
  },
  completedVideos: [
    { type: mongoose.schema.Types.ObjectId, ref: "subSection" },
  ],
});

module.exports = mongoose.model("courseProgress", courseProgressSchema);
