//console.log('\'Allo \'Allo!');
'use strict';

$('.one').click(function() {
	if ( $( '.corgibox' ).is( ':hidden' ) ) {
		$( '.corgibox' ).show( 'slow' );
	} else {
		$( '.corgibox' ).slideUp();
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


$('.ten').click(function(){
	$('.sibling2').siblings().css('border', '10px solid #0A2929');
});

$('.eleven').click(function(){
	$('.slidetogglebox').slideToggle('slow');
});

$('.twelve').dblclick(function() {
	$('.removed').remove();
});

$('.thirteen').click(function() {
	$('.fadindiv').delay(800).fadeIn('slow');
});


$('.fourteen').click(function() {
	$('.hidediv').hide(100);
});

$('.fifteen').click(function() {
	$('.fadeto').fadeTo( 'slow', 0.50 );
});



