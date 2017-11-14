var http = require('http');
var pi = require('./estimatedPI');

http.createServer(function (req, res) {
	
	//get plot array
	grid_points = [];
	grid_points = pi.generateGridPoints(1000,100);
	
	//get tally of grid_points within circle
	circle_points = pi.getPointsWithinCircle(1000,grid_points,900);	
	
	
    res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("The estimated value of PI is: " + grid_points);
    res.end();
	
}).listen(8080);