// Import express and tell it to operate as a router
var express = require('express');
var router = express.Router();

// Using the 'burger' model
var burger = require('../models/burgers.js');

// Create the routes and logic for the app
router.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

//Need to add remaining routes
//insert_One
//update_One

//Exports the routes to server.js to use
module.exports = router;