$(document).ready(function(){
	var total = 0;
	
	


	$("#a10").click(function(){
		//add 10 to the total
		total = total + 10; // total += 10;
	$("#a20").click(function(){
		//add 10 to the total
		total = total + 20; // total += 20;
		

		//update #out with the new total using the $("selector").html() 
		$("#out").html(total);
	});
	$("#a10").html(total);
	});

	//do this for a20, a30, n10, etc.

	$("#red").click(function(){ 
		$("#out").css("background-color", "red");
	});
	
	$("#blue").click(function(){ 
		$("#out").css("background-color", "blue");
	});
	
	//Write three click functions, one for each of the #red #blue and #out divs, updating the background color with $("selector").css()

});