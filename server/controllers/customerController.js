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
