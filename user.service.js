const User = require("./users.model");

////////////////////////////// POST all Users////////////////////////////////////

const addingUsers = async function (req, res) {
  try {
    let data = req.body;
    const insertingData = User(data);
    await insertingData.save();
    res.status(200).json({
      message: "Data Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add Data " + error.message,
    });
  }
};

////////////////////////////// GET all Users////////////////////////////////////

const getUsers = async function (req, res) {
  try {
    const data = await User.find();
    res.status(200).json({
      message: "All users",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get Users",
    });
  }
};

module.exports = { addingUsers, getUsers };
