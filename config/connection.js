//Create mysql import variable
var mysql = require('mysql');
var connection; 

	//Setup JAWSDB connection
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
	//Setup mysql connection
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "123qwe$R",
		database: "burgers_db"
	});
}

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