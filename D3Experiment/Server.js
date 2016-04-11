var http = require('http');
	fs = require('fs');
	
http.createServer(function(req, res){
	fs.readFile('./Line.html', function(err, data){
		if(err){
			res.writeHead(500, {'Content-type': 'text/plain'});
			res.end('500 - Internal Error');
		}else{
			res.writeHead(200, {'Content-type': 'text/html'});
			
			res.end(data);
		}
	
	});
}).listen(3000);

console.log('Server started localhost:3000; Press Ctrl+c to terminate....');

	
