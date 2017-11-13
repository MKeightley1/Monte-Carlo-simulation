var http = require('http');
var pi = require('./estimatedPI');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("The estimated value of PI is: " + pi.generateGridPoints(1000,900,100,10));
    res.end();
	
}).listen(8080);