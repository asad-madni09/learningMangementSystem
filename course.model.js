const mongoose = require("mongoose");

let courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 0,
  },
  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const courseModel = mongoose.model("courses", courseSchema);
module.exports = courseModel;
