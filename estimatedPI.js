
//gets an array - checks if in circle area
exports.getPointsWithinCircle = function ( gridsize , plot_array, circle_diameter) {
	plots_in_circle=0;
	plots_out_circle=0;
	grid_middle=0
	grid_middle = gridsize/2;
	
	
	
	
	
    return 1;
};







//create an array of 100 points on the grid
exports.generateGridPoints = function (gridsize, n) {
	x=0;
	y=0;
	plotPoint_array = [];
	while(plotPoint_array.length<n){
		
		//plot status to determine if plot points are already on grid
		plot_status=false;
		
		//generate new points
		x = Math.floor((Math.random() * gridsize) + 1);
		y = Math.floor((Math.random() * gridsize) + 1);
		
		//check array if plots already excist
		plotPoint_array.forEach(function (plot) {
		  if(plot[0]==x&&plot[1]==y){
			  plot_status=true;
		  }
		})
		//if plot not on grid - add to array of plots
		plot_array =[];
		plot_array[0]=x;
		plot_array[1]=y;
		if(!plot_status){
			plotPoint_array[plotPoint_array.length+1]=plot_array;
		}
	}

    return plotPoint_array.length;
};