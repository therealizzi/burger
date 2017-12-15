//Create mysql import variable
var mysql = require('mysql');

//Setup mysql connection
var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "123qwe$R",
	database: "burgers_db"
});

//Make connection to mysql
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id: " + connection.threadId);
});

//Export the mysql connection
module.exports = connection;