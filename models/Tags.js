const mongoose = require("mongoose");
const tagsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"coures"
  },
});

module.exports = mongoose.model("tags", tagsSchema);
