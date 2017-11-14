
//gets an array - checks if in circle area
exports.getPointsWithinCircle = function ( gridsize , plot_array, circle_diameter) {

	plots_in_circle=0;
	plots_out_circle=0;
	grid_middle=0
	grid_middle = gridsize/2;
	
	for(i=0;i<plot_array.length;i++){
		x_distance = grid_middle-plot_array[i][0];
		y_distance = grid_middle-plot_array[i][1];
		
		//ensure all distances from grid center is > 0
		if(x_distance<0){
			x_distance= Math.abs(x_distance);
		}
		if(y_distance<0){
			y_distance= Math.abs(y_distance);
		}
		
		grid_distance = Math.sqrt(pow(x_distance,2)+Math.pow(y_distance,2));
		
		//check how many are in circle
		if(grid_distance<=(circleDiameter/2)){
			plots_in_circle++;
		}
		
	}
	
	
    return plots_in_circle;
};







//create an array of 100 points on the grid
exports.getInnerCirclePoints = function (gridsize, circleDiameter , n) {
	x=0;
	y=0;
	plots_in_circle=0;
	plots_out_circle=0;
	grid_middle=0
	grid_middle = gridsize/2;
	
	//arrays 
	x_plotPoint_array = [];
	y_plotPoint_array = [];
	
	while(x_plotPoint_array.length<n){
		
		//plot status to determine if plot points are already on grid
		plot_status=false;
		
		//generate new points
		x = Math.floor((Math.random() * gridsize) + 1);
		y = Math.floor((Math.random() * gridsize) + 1);
		
		//use x lenght as an array index
		for(i=0;i<x_plotPoint_array.length;i++){
			if(x_plotPoint_array[i]==x&&y_plotPoint_array[i]==y){
				plot_status=true;
			}
		}
		
		//if not found - add x and y to list
		if(!plot_status){
			x_plotPoint_array.push(x);	
			y_plotPoint_array.push(y);	
			
			
			x_distance = grid_middle-x;
			y_distance = grid_middle-y;
		
			//ensure all distances from grid center is > 0
			if(x_distance<0){
				x_distance= Math.abs(x_distance);
			}
			if(y_distance<0){
				y_distance= Math.abs(y_distance);
			}
			
			//use maths to calculate distance
			grid_distance = Math.sqrt(Math.pow(x_distance,2)+Math.pow(y_distance,2));
			
			//check how many are in circle
			if(grid_distance<=(circleDiameter/2)){
				plots_in_circle++;
			}
		}
	}

    return plots_in_circle;
};