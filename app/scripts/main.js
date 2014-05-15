//console.log('\'Allo \'Allo!');
'use strict';

$('.one').click(function() {
	if ( $( '.bluebox' ).is( ':hidden' ) ) {
		$( '.bluebox' ).show( 'slow' );
	} else {
		$( '.bluebox' ).slideUp();
	}
});

$('.two').click(function() {
	$('<h2>Awesome Sauce!</h2>').appendTo('.textappend');

});

$('.three').click(function() {
	$( '.cssmethod' ).css( {
		'border-radius': '50%',
		WebkitTransition : 'border-radius .2s ease-in-out',
		MozTransition    : 'border-radius .2s ease-in-out',
		transition       : 'border-radius .2s ease-in-out'
	});
});



$('.four').click(function() {
		$('.hippocage').children('img').fadeOut();
	}
);

$('.five').click(function() {
	$('.animatesize').animate({width: '100%'}, 400, 'swing');
});

$('.six').click(function() {
	$('.toggle').toggle('showOrHide');
});

$('.seven').click(function() {
	$('p.fontclass:odd').removeClass('pinkHilite').addClass('purpleHilite');
});


$('.eight').click(function() {
	$('.toggletext').text('Hi');
});

$('.nine').click(function () {
	$('.innerdiv').clone().insertAfter('.outerdiv'); 
});

