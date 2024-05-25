(function($) {
	"use strict"
	
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});

	// Mobile Toggle Btn
	$('.navbar-toggle').on('click',function(){
		$('#header').toggleClass('nav-collapse')
	});
	
})(jQuery);


// open overlay popup
document.getElementById("openOverlayOne").addEventListener('click',(e)=>{
	e.preventDefault()
	document.getElementById('overlayOne').style.display='flex'
})

document.getElementById('overlayOne').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});