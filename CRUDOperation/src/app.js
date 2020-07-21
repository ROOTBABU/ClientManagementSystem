const http = require('http');
const properties = require('./config/properties.js');
const clientService = require('./services/clientService.js');
const { parse } = require('querystring');


const server = http.createServer(function(req,res){
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Request-Method', '*');
		res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
		res.setHeader('Access-Control-Allow-Headers', '*');

		if(req.url === '/create'){	
			let body = [];	//client data
			req.on('data', (chunk) => {
			  body.push(chunk);
			  body = Buffer.concat(body).toString();
			  console.log(body);
			  clientService.create(req,res,JSON.parse(body));
			});
			
		   res.write("data inserted");
		   res.end();
		}
		else if(req.url === '/update'){
			let body = [];
			req.on('data', (chunk) => {
			  body.push(chunk);
			  body = Buffer.concat(body).toString();
			  console.log(body);
			  clientService.update(req,res,JSON.parse(body));
			});
		   
			res.write('data updated');
			//clientService.update(req,res,clientObj);
			res.end();
		}
		else if(req.url === '/delete'){
			let body = [];
			req.on('data', (chunk) => {
			  body.push(chunk);
			}).on('end', () => {
			  body = Buffer.concat(body).toString();
			  console.log(body);
			});
		   
			res.write('data deleted');
			//clientService.update(req,res,clientObj);
			res.end();
		}
		else if(req.url === '/retrieve'){
			clientService.retrieve();
			
			var data = JSON.stringify([{"Id":"akksdf","Name":"vikas"}]);
			res.write(data);
			res.end();
		}
		else{
			res.write('404 not found');
		}
	}).listen(properties.PORT,function(){
		console.log(`Server is running on ${properties.PORT}`);
});
  
