exports.myDateTime = function ( gridsize , circle_diameter, n, iterations ) {
	
	//create an array of 100 points on the grid
	
	
	
	
	
	
    return Math.floor((Math.random() * n) + 1);
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
		if(!plot_status){
			plotPoint_array.push([x,y]);
		}
	}

    return plotPoint_array;
};