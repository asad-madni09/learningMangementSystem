const mongoose = require("mongoose");
///////Making Schema/////////


let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }

});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
