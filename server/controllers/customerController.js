const mongoose = require("mongoose");
const Customer = require("../model/Customer");

exports.homepage = async (req, res) => {
  const locals = {
    title: "Nodejs",
    description: "Nodejs free management system app",
  };
  res.render("index", locals);
};

exports.addCustomer = async (req, res) => {
  const locals = {
    title: "Nodejs New customer",
    description: "Nodejs free management system app",
  };
  res.render("customer/add", locals);
};

exports.postCustomer = async (req, res) => {
  console.log("Request body:", req.body); // Debugging line

  try {
    // Pass `req.body` directly
    const newCustomer = await Customer.create({
      firstname: req.body.firstName,
      lastname: req.body.lastName,
      tel: req.body.tel,
      email: req.body.email,
      details: req.body.details, // Add details if in schema
    });

    res.redirect("/");
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("An error occurred while saving the customer.");
  }
};
