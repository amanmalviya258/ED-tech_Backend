const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema({
  gender: {
    type: String,
    enum: ["male", "female", "others"],
 
  },
 dateOfBirth: {
    type: String
  },
  about: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("profile", profileSchema);
