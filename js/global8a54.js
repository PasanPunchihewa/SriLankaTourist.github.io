jQuery(function( $ ){


	$( '.nav-primary .genesis-nav-menu, .nav-secondary .genesis-nav-menu' ).addClass( 'responsive-menu' ).before('<div class="responsive-menu-icon"></div>');

	$( '.responsive-menu-icon' ).click(function(){
		$(this).next( '.nav-primary .genesis-nav-menu,  .nav-secondary .genesis-nav-menu' ).slideToggle();
	});

	$( window ).resize(function(){
		if ( window.innerWidth > 800 ) {
			$( '.nav-primary .genesis-nav-menu,  .nav-secondary .genesis-nav-menu, nav .sub-menu' ).removeAttr( 'style' );
			$( '.responsive-menu > .menu-item' ).removeClass( 'menu-open' );
		}
	});

	$( '.responsive-menu > .menu-item' ).click(function(event){
		if ( event.target !== this )
		return;
			$(this).find( '.sub-menu:first' ).slideToggle(function() {
			$(this).parent().toggleClass( 'menu-open' );
		});
	});

        $('#main-nav-search-link').click(function(){
		$('.search-div').show('1200');
	});

	$("*", document.body).click(function(event){
		// event.stopPropagation();
		var el = $(event.target);
		var gsfrm = $(el).closest('form');
		if(el.attr('id') !='main-nav-search-link' && el.attr('role') != 'search' && gsfrm.attr('role') != 'search'){
			$('.search-div').hide('1200');
		}
	});


});

jQuery(document).ready(function($){
	// Scroll (in pixels) after which the "To Top" link is shown
	var offset = 400,
		//Scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//Duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//Get the "To Top" link
		$back_to_top = $('.magnolia-backtotop');

	//Visible or not "To Top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('top-is-visible') : $back_to_top.removeClass('top-is-visible top-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('top-fade-out');
		}
	});

	//Smoothy scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});


(function($) {

	//* Make sure JS is enabled
	document.documentElement.className = "js";

	$(document).ready( function() {

		//* Run 0.25 seconds after document ready for any instances viewable on load
		setTimeout( function() {
			animateObject();
		}, 250);

	});

	$(window).scroll( function() {

		//* Run on scroll
		animateObject();

	});

	function animateObject() {

		//* Define your object via class
		var object = $( '.fadeup-effect' );

		//* Loop through each object in the array
		$.each( object, function() {

			var windowHeight = $(window).height(),
				offset 		 = $(this).offset().top,
				top			 = offset - $(document).scrollTop(),
				percent 	 = Math.floor( top / windowHeight * 100 );


			if ( percent < 80 ) {

				$(this).addClass( 'fadeInUp' );

			}
		});
	}

})(jQuery);
