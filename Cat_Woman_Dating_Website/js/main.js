$(document).ready(function() {
	$(".bio").hide();
	$("#about").show();
	
	// CLICK EVENTS THAT SHOW CORRESPONDING DIVs
	$('#1').click(function(e){
		e.preventDefault();
		$('.bio').hide();
		$('#about').show();
	});
	
	$('#2').click(function(e){
		e.preventDefault();
		$('.bio').hide();
		$('#photos').show();
	});
	
	$('#3').click(function(e){
		e.preventDefault();
		$('.bio').hide();
		$('#test').show();
	});
	
	$('#4').click(function(e){
		e.preventDefault();
		$('.bio').hide();
		$('#matches').show();
	});
	
});