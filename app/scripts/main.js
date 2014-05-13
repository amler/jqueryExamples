//console.log('\'Allo \'Allo!');
"use strict";

$(".one").click(function() {
	if ( $( ".bluebox" ).is( ":hidden" ) ) {
    	$( ".bluebox" ).show( "slow" );
  	} else {
    	$( ".bluebox" ).slideUp();
  	}
});


//   var sureDelete = confirm("Are you sure you to delete this?");
//   if (sureDelete === true) {
/*      $('.bluebox').slideUp('slow', function() { 
      	$('<p>Awesome Sauce!</p>').appendTo('.firstexample');
      });
   
});

*/