exports.homepage = async (req, res) => {
  const locals = {
    title: "Nodejs",
    description: "Nodejs free management system app",
  };
  res.render("index", locals);
};
