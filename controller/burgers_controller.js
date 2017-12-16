// Import express and tell it to operate as a router
var express = require('express');
var router = express.Router();

// Using the 'burger' model
var burgers = require('../models/burgers.js');

// Create the routes and logic for the app
router.get("/", function(req, res) {
	burgers.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});
router.post("/", function(req, res) {
	burgers.create([
		"burger_name", "devoured"
	], [
		req.body.name, req.body.devoured
	], function() {
		res.redirect("/");
	});
});
router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	burgers.update({
		devoured: req.body.devoured
	}, condition, function() {
		res.redirect("/");
	});
});

//Exports the routes to server.js to use
module.exports = router;