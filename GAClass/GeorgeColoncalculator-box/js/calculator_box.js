$(document).ready(function(){
// 	var total = 0;
$(".combine").click(funtion(){
	var total = parseInt($("#white").html());	
	var newvalue = parseInt($(this).html());
		$("white").html(total + newvalue);
	});	
	$(".changeColor").click(function(){
	
// $("#out").click(function(){
// 		total = 0;
// 		$("#out").html(total);
// 		$("#out").css("background-color", "orange");
// 		$("#audio").html("");
// 	});
// 
// 
// 	$("#a10").click(function(){
// 		//add 10 to the total
// 		total = total + 10; // total += 10;
// 		//update #out with the new total using the $("selector").html() 
// 		$("#out").html(total);
// 		$("#out").css("background-color", "violet");
// 		$("#audio").html('<audio id="audio-1" autoplay="true" src="audio/Scary_Sound-Mark_DiAngelo-1101865305.mp3" type="audio/mpeg" ></audio>');
// 		 	});
// 		 	
// 	$("#a20").click(function(){
// 		total = total + 20;
// 		$("#out").html(total);
// 		$("#out").css("background-color", "darkblue");
// 		$("#audio").html('<audio id="audio-1" autoplay="true" src="audio/Raven-SoundBible.com-1790882934.mp3" type="audio/mpeg" ></audio>');
// 	});
// 	$("#a30").click(function(){
// 		total = total + 30;
// 		$("#out").html(total);
// 		$("#out").css("background-color", "green");
// 		$("#audio").html('<audio id="audio-1" autoplay="true" src="audio/Demon_Girls_Mockingbir-Hello-1365708396.mp3" type="audio/mpeg" ></audio>');
// 	});
// 	$("#n10").click(function(){
// 		total = total - 10;
// 		$("#out").html(total);
// 		$("#out").css("background-color", "hotpink");
// 		$("#audio").html('<audio id="audio-1" autoplay="true" src="audio/Scary-Titus_Calen-1449371204.mp3" type="audio/mpeg" ></audio>');
// 	});
// 	$("#n20").click(function(){
// 		total = total - 20;
// 		$("#out").html(total);
// 		$("#out").css("background-color", "gold");
// 		$("#audio").html('<audio id="audio-1" autoplay="true" src="audio/psychotic_laugh_female-Mike_Koenig-2038949469.mp3" type="audio/mpeg" ></audio>');
// 	});
// 	$("#n30").click(function(){
// 		total = total - 30;
// 		$("#out").html(total);
// 		$("#out").css("background-color", "purple");
// 		
// 		$("#audio").html('<audio id="audio-1" autoplay="true" src="audio/Wheres_My_Mummy-KillahChipmunl-717920453.mp3" type="audio/mpeg" ></audio>');
// 	});
// 	//do this for a20, a30, n10, etc.
// 	
// 
// 	$("#red").click(function(){ 
// 		$("#out").css("background-color", "red");
// 		$("#audio").html('<audio id="audio-1" autoplay="true" src="audio/Halloween_Vocals-Mike_Koenig-2.mp3" type="audio/mpeg" ></audio>');
// 	});
// 	
// 	$("#blue").click(function(){ 
// 		$("#out").css("background-color", "blue");
// 		$("#audio").html('<audio id="audio-1" autoplay="true" src="audio/LeaveNow.mp3" type="audio/mpeg" ></audio>');
// 	});
// 	
	//Write three click functions, one for each of the #red #blue and #out divs, updating the background color with $("selector").css()

});