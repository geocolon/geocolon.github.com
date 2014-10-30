$(document).ready(function() {
	$('#links > a').click(function(e){
		e.preventDefault()
		$('.bio').hide()
		sectionId = $(this).data('section')
		$(sectionId).show()
	})
	
});