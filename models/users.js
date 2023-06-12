const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  accountType: {
    type: String,
    enum: ["Admin", "Student", "Instructor"],
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  approve: {
    type: Boolean,
    default: false,
  },
  courses: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'courses'
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'profile'
  },
  courseProgress: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'courseProgress'
  },
});


module.exports = mongoose.model("user",userSchema);
