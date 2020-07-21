//Database connectivity file
//This file holds the code of database connectivity

var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;

//require databse url from properties file
var dbURL = require('./properties').DB_URL;
//require db name
var dbName = require('./properties').DB_NAME;
//connection
module.exports = function(){

	MongoClient.connect(dbURL,function(err,db){
		if(err) {
			console.log("1");
		}
		try{
			var dbo = db.db(dbName);
			console.log("connection");
		}
		catch(err){
			console.log("2");
		}
		
	});
	
}