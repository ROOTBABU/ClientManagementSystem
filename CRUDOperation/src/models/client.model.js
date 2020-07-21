var db = require('../config/mongodb.js');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//insert
module.exports.insert= function(client){
	
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("clients_database");
		dbo.collection("clients").insertOne(client, function(err, res) {
		  if (err) throw err;
		  console.log("1 document inserted");
		  db.close();
		});
	});
}

//update
module.exports.update= function(client){
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("clients_database");
		var Id = client.Id;
		var myquery = { "Id": Id };
		console.log(myquery);
		dbo.collection("clients").update(myquery,client, function(err, res) {
			if (err) throw err;
			console.log("1 document updated");
			db.close();
		  });
	});
}

//retrieve
module.exports.retrieve = function(id){
	var dataList = [];
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("clients_database");
	    dbo.collection("clients").find({}).toArray(function(err, result) {
			if (err) throw err;
			
			db.close();
		});
	
	});
	
	//dummy code
	
}
module.exports.callbackClosure = function(i, callback) {
	  return function() {
		return callback(i);
	  }
}
	
//delete
