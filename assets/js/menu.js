/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Close mobile menu

		var checkbox = document.querySelector( '#myInput' );
		var icon = document.querySelector( '#menuToggle span' );
		var listener = function( e ) {
		  if( e.target != checkbox && e.target != icon ) {
		    checkbox.checked = false;
		    document.removeEventListener( 'click', listener );
		  }
		};

		checkbox.addEventListener( 'click', function(){
		  if( this.checked ) {
		    document.addEventListener( 'click', listener );
		  } 
		});

})(jQuery);
