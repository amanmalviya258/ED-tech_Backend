const mongoose = require("mongoose");
const invoicesSchema = new mongoose.Schema({
  users: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    required: true,
  },
  address: {
    type: Number,
  },
  pincode: {
    type: String,
  },
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "courses",
  }
});

module.exports = mongoose.model("invoices", invoicesSchema);
