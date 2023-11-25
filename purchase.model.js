const mongoose = require("mongoose")
// CREATING SCHEMA
let purchaseSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "courses",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  enrolledDate: {
    type: Date,
    required: true,
  },
  completionDate: {
    type: Date,
    required: true,
  },
  result: {
    type: String,
  },
})
// creating variable which contains collection name and schema data
const purchaseModel = mongoose.model("customers", purchaseSchema);
// exporting model 
module.exports = purchaseModel;
