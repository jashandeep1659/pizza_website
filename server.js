const { application } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const path = require("path");
// assets
app.use(express.static("public"));

// setting up template engine
app.use(expressLayout);
app.set("views", path.join(__dirname, "resources/views")); // setting the up file path
app.set("view engine", "ejs"); //for setting up the file extension

// we need to use the expressLayout
require("./routes/web")(app);

app.listen(port);
