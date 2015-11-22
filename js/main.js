jQuery.noConflict();
(function($) { 
  $(function() {
  	$('.parallax').parallax();
  	$('.scrollspy').scrollSpy();
  	$(".button-collapse").sideNav({
      closeOnClick: true
    });
  });
})(jQuery);
