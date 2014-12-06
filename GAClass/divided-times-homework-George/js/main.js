$(document).ready(function(){
	//Create a click event for the primary nav anchors
 	$("#primary-nav a").click(function(){
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
    if($(this).hasClass("active")){
      $("#drop-down").slideDown(500)
    }
    else{
      $("#drop-down").slideUp(500)
    }
  })
  
		//Get the anchor that was clicked-on, remove the "active" class from all of its siblings() 
		
		//- use the .siblings() function - check the documentation

		//Get the anchor that was clicked-on, and toggle the class "active" on it (i.e. if it is on, remove it, if it is not on, add it)
		//If - Get the anchor that was clicked on and IF it has the class "active"
		//- use the hasClass() function
			//If it does have the class, show(), fadeIn(), or slideDown() the #drop-down
		//Else
			//hide(), fadeOut(), or slideUp() the #drop-down
});