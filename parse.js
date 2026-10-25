function list(a)
{
	// make variables for points using the "var" because ES5 doesnt have "let"
	var left_x = 0;
	var left_y = 0;
	var right_x = 0;
	var right_y = 0;
	
	// parse left eyebrow (using var)
	// i < 30 becasue there are 10 points * 3 values each point
	// i += 3 because there are 3 values each point
	for (var i = 0; i < 30; i += 3) 
	{
		// = i because x value is first
		left_x += arguments[i];
		
		// = i + 1 because y value is second in the tuple
		left_y += arguments[i + 1];
	}
	
	// parse right eyebrow
	for (var i = 30; i < 60; i += 3)
	{
		right_x += arguments[i];
		right_y += arguments[i + 1];
	}
	
	// average the values of the eyebrow points
	// divide by 30 becasue we already added 30 values together so its the mean
	left_x = left_x / 30;
	left_y = left_y / 30;
	right_x = right_x / 30;
	right_y = right_y / 30;
	
	
	// get distance between y value of chin point and that of eyebrwows
	var yDistance0 = Math.abs(arguments[61] - left_y);
	var yDistance1 = Math.abs(arguments[61] - right_y);
	
	// output average distance
	outlet(0, (yDistance0 + yDistance1)/2);
}