
var orm = require("../config/orm.js");

var burger = {
	all: function(cb) {
		orm.selectAll(function(res) {
			cb(res);
		});
	},

	create: function(table, cols, vals, cb) {
		orm.insertOne(table, cols, valls, function(res) {
			cb(res);
		})
	},

	update: function(table, condition, cb) {
		orm.updateOne(table, condition, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;