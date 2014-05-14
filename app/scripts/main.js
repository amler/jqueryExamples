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

/*
$("#kitten").hover(function(){

    $(this).find("img").fadeOut();

}, function() {

    $(this).find("img").fadeIn();

});
*/

//   var sureDelete = confirm("Are you sure you to delete this?");
//   if (sureDelete === true) {
/*      $('.bluebox').slideUp('slow', function() { 
      });
   
});

*/