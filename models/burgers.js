// Imports orm file
var orm = require("../config/orm.js");

// Creates the interaction variables for the database (via orms file)
var burgers = {
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},
	create: function(cols, vals, cb) {
		orm.create("burgers", cols, vals, function(res) {
			cb(res);
		});
	},
	update: function(objColVals, condition, cb) {
		orm.update("burgers", objColVals, condition, function(res) {
			cb(res);
		});
	}
};

// Export the database functions for the controller
module.exports = burgers;