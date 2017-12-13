

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id int(10) NOT NULL AUTO_INCREMENT,
	burger_name varchar(30) NOT NULL,
	devoured boolean,
	date_added TIMESTAMP,
    PRIMARY KEY(id)
);
