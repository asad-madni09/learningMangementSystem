const Purchase = require("./purchase.model");
const Fetch = require("./purchase.model");
///////////Create Customer//////////////////////////////////////

const customer = async function (req, res) {
  try {
    let data = req.body;
    const insertData = Purchase(data);
    await insertData.save();
    res.status(200).json({
      message: "Data added successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message + "Error while adding data" });
  }
};
////////////////////FETCH Customer/////////////////////////////////

const fetchCustomer = async function (req, res) {
  try {
    const customerDetail = await Fetch.find({})
      .populate("courseId")
      .populate("userId");
    res.status(200).json({ data: customerDetail });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { customer, fetchCustomer };
