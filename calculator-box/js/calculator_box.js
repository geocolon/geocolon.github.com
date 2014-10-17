$(document).ready(function(){
	var total = 0;
	


	$("#a10").click(function(){
		//add 10 to the total
		total = total + 10; // total += 10;
		//update #out with the new total using the $("selector").html() 
		$("#out").html(total);
		$("#out").css("background-color", "violet");
		$("dummy").html('<audio id="audio-1" autoplay="autoplay"><source src="audio/Scary_Sound-Mark_DiAngelo-1101865305.mp3" type="audio/mpeg" ></audio>')
		 	});
		 	
	$("#a20").click(function(){
		total = total + 20;
		$("#out").html(total);
		$("#out").css("background-color", "orange");
		$("#audio-2").trigger("play");
	});
	$("#a30").click(function(){
		total = total + 30;
		$("#out").html(total);
		$("#out").css("background-color", "green");
		$("#audio-3").trigger("play");
	});
	$("#n10").click(function(){
		total = total - 10;
		$("#out").html(total);
		$("#out").css("background-color", "#ffffff");
		$("#audio-4").trigger("play");
	});
	$("#n20").click(function(){
		total = total - 20;
		$("#out").html(total);
		$("#out").css("background-color", "yellow");
		$("#audio-5").trigger("play");
	});
	$("#n30").click(function(){
		total = total - 30;
		$("#out").html(total);
		$("#out").css("background-color", "purple");
		
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