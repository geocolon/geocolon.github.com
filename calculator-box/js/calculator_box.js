$(document).ready(function(){
	var total = 0;
	
	


	$("#a10").click(function(){
		//add 10 to the total
		total = total + 10; // total += 10;
		//update #out with the new total using the $("selector").html() 
		$("#out").html(total);
		$("#out").css("background-color", "pink");
		$("#audio-1").trigger("play");
		 	});
		 	
	$("#a20").click(function(){
		total = total + 20;
		$("#out").html(total);
		$("#out").css("background-color", "0");
		$("#audio-2").trigger("play");
	});
	$("#a30").click(function(){
		total = total + 30;
		$("#out").html(total);
		$("#audio-3").trigger("play");
	});
	$("#n10").click(function(){
		total = total - 10;
		$("#out").html(total);
		$("#audio-4").trigger("play");
	});
	$("#n20").click(function(){
		total = total - 20;
		$("#out").html(total);
		$("#audio-5").trigger("play");
	});
	$("#n30").click(function(){
		total = total - 30;
		$("#out").html(total);
	$("#audio-6").trigger("play");	
	});
	//do this for a20, a30, n10, etc.
	

	$("#red").click(function(){ 
		$("#out").css("background-color", "red");
		$("#audio-7").trigger("play");	
	});
	
	$("#blue").click(function(){ 
		$("#out").css("background-color", "blue");
	});
	
	//Write three click functions, one for each of the #red #blue and #out divs, updating the background color with $("selector").css()

});