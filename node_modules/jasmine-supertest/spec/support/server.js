var http = require('http');

var server = http.createServer();
server.on('request', function (request, response) {
	if (request.method === 'GET' && request.url === '/echo') {
		response.statusCode = 200;
		response.write('Success');
	} else {
		response.statusCode = 404;
	}
	response.end();
});

module.exports = server;