const tab = document.querySelectorAll( '.br-tabs .item' );

for ( let elem of tab ) {
	elem.addEventListener( "click", function () { changeElementTab( elem ) }, false );;

}


function changeElementTab ( event ) {
	console.log( event );
	const a = document.querySelectorAll( '.upload-input' );
	const elements = event.parentElement.querySelectorAll( '.br-tabs .item' );

	for ( let elem of elements ) {
		elem.parentElement.querySelectorAll( ".item" )
		elem.classList.remove( "is-active" );
	}
	event.classList.add( "is-active" );
	console.log( event.classList );


}
