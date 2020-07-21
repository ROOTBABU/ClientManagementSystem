var client = require('../models/client.model.js');
var validation = require('../validation/validation.js');
var clientModel = require('../models/client.model');

module.exports.create = function(req,res,client){
	//validation

	clientModel.insert(client);
	
	/*var flag = validation(client);
	console.log(flag);
	if(flag){
		clientModel.insert(client);
	}else{
		console.log("invalid input")
	}
	*/
	//exception handling
	//pass to model
	//console.log(client);
	//console.log(validation);
	//client.createClient();
}


module.exports.update = function(req,res,client){
	//validation
	clientModel.update(client);
	/*var flag = validation(client);
	console.log(flag);
	if(flag){
		clientModel.update(client);
	}else{
		console.log("invalid input")
	}*/

	//exception handling
	//pass to model
	console.log(client);
	console.log(validation);
	//client.createClient();
}

module.exports.retrieve = function(req,res,id){

	var dataList = clientModel.retrieve(id);
	console.log("dataLis"+dataList);
}
