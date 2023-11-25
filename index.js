const express = require("express");

const app = express();
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Learning_Management_System");

/// Declaring path of course model///////
const Course = require("./course.model");
const User = require("./users.model");

//// Declaring path where the functions are kept 
const { addingCourse, getCourse } = require("./course.service");
const { addingUsers, getUsers } = require("./user.service");
const { customer, fetchCustomer } = require("./purchase.service");

//////APIs For USERS//////////

app.post("/users", addingUsers);
app.get("/users", getUsers);

//////APIs For COURSE//////////

app.post("/course", addingCourse);
app.get("/course", getCourse);

///// APIs for Purchase//////
app.post("/purchase", customer);
app.get("/fetch", fetchCustomer);


app.listen(9005);
console.log("App listening on ", 9005);
