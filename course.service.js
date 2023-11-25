
const Course = require("./course.model");

////////////////////////////// POST all courses////////////////////////////////////
const addingCourse =  async function (req, res) {
    try {
      let data = req.body;
      const insertingData = Course(data);
      await insertingData.save();
      res.status(200).json({ message: "Data Added Successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: error.message + " Error while adding data" });
    }
  }
  ////////////////////////////// Get all courses////////////////////////////////////
const getCourse =  async function (req, res) {
    try {
      const data = await Course.find();
      res.status(200).json({
        message: "Here is all Courses",
        data,
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to get Data from Server",
      });
    }
  }


  module.exports={addingCourse,getCourse}