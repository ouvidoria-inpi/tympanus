let collapseList = document.querySelectorAll( 'button[data-toggle="collapse"]' );
collapseList.forEach( function ( collapse ) {
	collapse.addEventListener( "click", function ( event ) {
		event.target.classList.toggle( "is-open" )
	} )
} )
