var http = require('http');


http.createServer(function (req, res) {
	var estimatepi = require('./estimatedPI');
	
	//input parameters
	grid_dimensions = 1000;
	circleDiameter=900;
	n= 1000;
	iterations =100;
	
	
	total_pi=0;
	for(i=0;i<iterations;i++){
		//get tally of grid_points within circle
		inner_circle_points = estimatepi.getInnerCirclePoints(grid_dimensions,circleDiameter,n);
				
		//get percentage 
		plotsWithinCirclePercentage = inner_circle_points/n;
				
		//calculate area of circle
		estimated_circle_area = plotsWithinCirclePercentage*Math.pow(grid_dimensions,2);
		
		//calculate radius
		radius= (circleDiameter/2);
		pi=estimated_circle_area/(Math.pow(radius,2));
		
		//tally the pis
		total_pi+= pi;
	}
	
			
			
			
			

    res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("The estimated value of PI is: " + total_pi);
    res.end();
	
}).listen(8080);