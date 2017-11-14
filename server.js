var http = require('http');
var url = require('url');


http.createServer(function (request, res) {
	var estimatepi = require('./estimatedPI');
	
	var parsedUrl = url.parse(request.url, true);
    var query = parsedUrl.query;
	var program_status =true;
	//paramters declaration
	grid_dimensions = 0;
	circleDiameter = 0;
	n = 0;
	iterations = 0; 
	
	if(query.gridSize&&query.circleDiameter&&query.n&&query.iterations){
		//input parameters and convert to numbers
		grid_dimensions = query.gridSize/1;
		circleDiameter=query.circleDiameter/1;
		n= query.n/1;
		iterations =query.iterations/1;
	
	}else if(query.test){
		//input parameters
		grid_dimensions = 1000;
		circleDiameter=900;
		n= 1000;
		iterations =100;
		
	}else{
		//program fails
		program_status=false;
	}

	//must match conditions
	if(grid_dimensions<circleDiameter||grid_dimensions<0||circleDiameter<0||n<0||iterations<0){
		program_status=false;
	}
	
	
	res.writeHead(200, {'Content-Type': 'text/html'});
	
	if(program_status){
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
		//print to screen
		res.write("The estimated value of PI is: " + total_pi);
	}else{
		//print error to screen
		res.write("The data parameters are missing or are invalid!");
	}
	
    res.end();
	
}).listen(8080);