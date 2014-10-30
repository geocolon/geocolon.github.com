$(document).ready(function(){
	$("#startparty").click(function() {
		$("#guy").addClass("walk-in"); 
		$("#audio").html('<audio controls="controls" autoplay="autoplay" src="audio/Baauer-HarlemShake.ogg" type="audio/ogg"/>'); 
		setTimeout(function() {
			$("#guy").css("left","500px");
			$("#guy").addClass("jump-around"); 
			setTimeout(function() {
				$("#text").html('DO'); 
				setTimeout(function() {
					$("#text").html('DO THE');
					setTimeout(function() {
						$("#text").html('DO THE HAR');
						setTimeout(function() {
							$("#text").html('DO THE HARLEM');	
						}, 150);		
					}, 150);		
				}, 150);		
			}, 12900);		
			setTimeout(function() {
				$("#second_wav").css("opacity","1");
				$("#guy").siblings().addClass("jump-around"); 
				$("#text").html('DO THE HARLEM <br/><span class="shake">SHAKE!</span>');
				
				// $("#guy").siblings().trigger(function(){
// 					setTimeout(function() {
// 						$this.addClass("jump-around");
// 					}, 500);
// 				}); 

// How would I alternate jumping for siblings???
			}, 13500);		
		}, 2000);
		
	});
});

