// Sets up the requirements
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Initiate port variable
var port = process.env.PORT || 3000;

// Creates the app as an express function
var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars variable
var exphbs = require("express-handlebars");

// Tells app that handlebars "main" is the default engine & page
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controller/burgers_controller.js");

app.use("/", routes);

// Initiates the port listen
app.listen(port);

