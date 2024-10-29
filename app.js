require("dotenv").config();
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const connectDB = require("./server/config/db");
//const { flash } = require("express-flash-message");
const session = require("express-session");
const app = express();
const flash = require("express-flash");
const port = process.env.PORT || 5001;

//Database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static("public"));

//Express Session
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, //1 week
    },
  })
);

//flash Messages
app.use(flash({ sessionKeyName: "flashMessage" }));

// Templating Engine
app.use(expressLayout);
app.set("layout", "./layout/main");
app.set("view engine", "ejs");

// Home route
app.use("/", require("./server/routes/customer"));

// 404 page
app.get("*", (req, res) => {
  res.status(404).render("404", { layout: false });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
