const mongoose = require("mongoose");
const Customer = require("../model/Customer");

exports.homepage = async (req, res) => {
  const messages = await req.flash("info");
  const locals = {
    title: "Nodejs",
    description: "Nodejs free management system app",
  };

  let perPage = 12;
  let page = req.query.page || 1;

  try {
    const customers = await Customer.aggregate([{ $sort: { createdAt: -1 } }])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();
    // Count is deprecated. Use countDocuments({}) or estimatedDocumentCount()
    // const count = await Customer.count();
    const count = await Customer.countDocuments({});

    res.render("index", {
      locals,
      customers,
      current: page,
      pages: Math.ceil(count / perPage),
      messages,
    });
  } catch (error) {
    console.log(error);
  }
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
    await req.flash("info", "new customer has been added.");

    res.redirect("/");
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("An error occurred while saving the customer.");
  }
};

exports.view = async (req, res) => {
  try {
    const customer = await Customer.findOne({ _id: req.params.id });

    const locals = {
      title: "View Customer Details",
      description: "Free NodeJs User Management System",
    };

    res.render("customer/view", {
      locals,
      customer,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.edit = async (req, res) => {
  try {
    const customer = await Customer.findOne({ _id: req.params.id });

    const locals = {
      title: "Edit Customer Details",
      description: "Free NodeJs User Management System",
    };

    res.render("customer/edit", {
      locals,
      customer,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.editPost = async (req, res) => {
  try {
    await Customer.findByIdAndUpdate(req.params.id, {
      firstname: req.body.firstname,
      lastname: req.body.lastName, // Correct 'lastName' spelling in req.body as needed
      tel: req.body.tel,
      email: req.body.email,
      details: req.body.details,
      updatedAt: Date.now(),
    });

    res.redirect(`/edit/${req.params.id}`); // Corrected string interpolation

    console.log("Redirected successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error"); // Optional: Send error response to client
  }
};
