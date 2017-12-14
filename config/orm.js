
//Create mysql connection import variable
var connection = require("./connection");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

//ORM variables for the SQL statements
var orm = {
	selectAll: function(cb) {
		var queryString = "SELECT * FROM burgers;";
		connection.query(queryString, function(err, result) {
			if(err) {
				throw err;
			}
			cb(result);
		});
	},
	insertOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;
		queryString += "(";
		queryString += cols.toString();
		queryString += ") ";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if(err) {
				throw err;
			}
			cb(result);
		});
	},
	updateOne: function(table, condition, cb) {
		var queryString = "UPDATE " + table;
		queryString += " WHERE ";
		queryString += condition;

		connection.query(queryString, function(err, result) {
			if(err) {
				throw err;
			}

			cb(result);
		});
	}
};

module.exports = orm;