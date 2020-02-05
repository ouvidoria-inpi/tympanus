// ! Refatorações:
// TODO: Comportamento de resize de coluna
// TODO: Efeito resize de altura da linha
// TODO: Cards internos de colunas

// ! Pendências:
// TODO: Barra superior - itens de ação e menu flutuante, tags de filtros, itens selecionados
// TODO: Filtragem de cabeçalhos

const brTablesHeadersClass = "headers";
const active = "is-active";
var brTableNumber = 0;

document.addEventListener("DOMContentLoaded", function(){

	const brTables = document.querySelectorAll( ".br-table" );

	for ( let brTable of brTables ) {
		var searchBar = brTable.querySelector( ".search-bar" );
		var searchTrigger = brTable.querySelector( ".search-trigger" );
		var searchClose = brTable.querySelector( ".search-close" );
		var responsive = brTable.querySelector( ".responsive" );
		var headers = brTable.querySelector( "table thead tr" );
		var rows = brTable.querySelectorAll( "table tbody tr" );

		brTableNumber++;

		setSyncScroll( responsive );
		cloneHeader( brTable, headers );
		setHeaderWidth( brTable, headers );
		toogleSearch( searchBar, searchTrigger, searchClose );
		setClickActions( brTable );
		hoverRow( rows );

		window.addEventListener( "resize", function () {
			setHeaderWidth( brTable, headers );
		} );
	}
});

function hoverRow ( elements ) {
	for ( let element of elements ) {
		if ( element.children[ 0 ].children[ 0 ] ) {
		}
	}
}

function toogleSearch ( container, trigger, close ) {
	if ( trigger ) {
		trigger.addEventListener( "click", function () {
			container.classList.add( active );
		} );
	}

	if ( close ) {
		close.addEventListener( "click", function () {
			container.classList.remove( active );
		} );
	}
}

function setSyncScroll ( element ) {
	element.classList.add( "syncscroll" );
	element.setAttribute( "name", "table-" + brTableNumber );
}

function setHeaderWidth ( parent, element ) {
	var cloneNode = parent.querySelector( `.${ brTablesHeadersClass }` );
	for ( let i = 0; i < element.children.length; i++ ) {
		elementWidth = element.children[ i ].offsetWidth;
		cloneElementWidth = cloneNode.children[ 0 ].children[ i ];
		cloneElementWidth.style.flex = `1 0 ${ elementWidth }px`;
	}
}

function cloneHeader ( parent, element ) {
	var clone = element.cloneNode( true );
	var headersTag = document.createElement( "div" );
	var scrollerTag = document.createElement( "div" );

	setSyncScroll( scrollerTag );
	scrollerTag.classList.add( "scroller" );

	for ( let i = 0; i < element.children.length; i++ ) {
		var elementNode = clone.children[ i ].innerHTML;
		var cloneElementNode = document.createElement( "div" );

		cloneElementNode.classList.add( "item" );
		cloneElementNode.innerHTML = elementNode;

		scrollerTag.appendChild( cloneElementNode );

		if ( cloneElementNode.children[ 0 ] ) {
			if ( cloneElementNode.children[ 0 ].classList.contains( "br-checkbox" ) ) {
				var cloneCheckbox = cloneElementNode.children[ 0 ];
				var cloneCheckboxId = `${ brTablesHeadersClass }-${ parent.id }-check-all`;
				cloneCheckbox.querySelector( "input" ).id = cloneCheckboxId;
				cloneCheckbox
					.querySelector( "label" )
					.setAttribute( "for", cloneCheckboxId );
			}
		}
	}

	headersTag.classList.add( brTablesHeadersClass );
	headersTag.appendChild( scrollerTag );

	parent.appendChild( headersTag );
}

function setClickActions ( brTable ) {
	
	var headerCheckbox = brTable.querySelector(".headers [name='check'] [type='checkbox']");
	var tableCheckboxes = brTable.querySelectorAll("tbody [name='check'] [type='checkbox']");
	var selectedBar = brTable.querySelector( ".selected-bar" );
	var info_select_all = brTable.querySelector(".selected-bar .info .select-all");
	
	if ( tableCheckboxes ) {
		for ( let checkbox of tableCheckboxes ) {
			checkbox.addEventListener( "click", function () { 
				checkRow ( checkbox, selectedBar, tableCheckboxes, headerCheckbox );
			} )
		}
	}

	if ( headerCheckbox ) {
		headerCheckbox.addEventListener( "click", function () {
			selectAllTable ( selectedBar, tableCheckboxes, headerCheckbox );
		} );
	}

	if ( info_select_all ) {
		info_select_all.addEventListener( "click", function () { 
			selectAllTable ( selectedBar, tableCheckboxes );
		});
	}
}

function setRow ( checkbox, check ) {
	tr = checkbox.parentNode.parentNode.parentNode;
	if ( check ) {
		tr.classList.add("is-selected");
		checkbox.parentNode.classList.add("is-inverted");
		checkbox.checked = true;
	} else {
		tr.classList.remove("is-selected");
		checkbox.parentNode.classList.remove("is-inverted");
		checkbox.checked = false;
	}
}

function checkRow ( checkbox, selectedBar, tableCheckboxes, headerCheckbox){
	check = checkbox.checked
	setRow ( checkbox, check );
	countSelected ( check ? 1 : -1, selectedBar, tableCheckboxes, headerCheckbox );
}

function checkAllRows ( tableCheckboxes ) {
	for ( let checkbox of tableCheckboxes ) {
		setRow(checkbox, true);
	}
}

function uncheckAllRows ( tableCheckboxes ) {
	for ( let checkbox of tableCheckboxes ) {
		setRow(checkbox, false);
	}
}

function selectAllTable ( selectedBar, tableCheckboxes, headerCheckbox ) {
	count = tableCheckboxes.length;
	var info_count = selectedBar.querySelector(".info .count");
	var total = parseInt(info_count.innerHTML, 10);

	if ( headerCheckbox ) { 
		if ( headerCheckbox.checked ) {
			checkAllRows ( tableCheckboxes )
		} else {
			uncheckAllRows ( tableCheckboxes )
			count = -1 * count;
		}
	} else {
			if ( total == count ) {
				uncheckAllRows ( tableCheckboxes )
				count = -1 * count;
			}
			else {
				checkAllRows ( tableCheckboxes )
			}
	}
	countSelected(count, selectedBar, tableCheckboxes, headerCheckbox);
}

function countSelected( count, selectedBar, tableCheckboxes, headerCheckbox ) {
	
	var info_count = selectedBar.querySelector(".info .count");
	var info_text = selectedBar.querySelector(".info .text");
	var mobile_ico = selectedBar.querySelector(".info .select-all svg");
	var total = count < 2 ? parseInt(info_count.innerHTML, 10) + count : count;

	if ( total > 0 ) {
		selectedBar.classList.add("is-active");
		info_count.innerHTML = total;
		info_text.innerHTML = total > 1 ? "itens selecionados" : "item selecionado";
		if ( headerCheckbox ) headerCheckbox.parentNode.classList.add("is-checking");
		if (mobile_ico) {
			mobile_ico.classList.add("fa-minus-square");
			mobile_ico.classList.remove("fa-check-square");
		}
		if ( total == tableCheckboxes.length ) {
			if ( headerCheckbox ) { 
				headerCheckbox.checked = true;
				headerCheckbox.parentNode.classList.remove("is-checking");
			}
			if (mobile_ico) {
				mobile_ico.classList.remove("fa-minus-square");
				mobile_ico.classList.add("fa-check-square");
			}
		}
	}
	else {
		selectedBar.classList.remove("is-active");
		info_count.innerHTML = 0;
		if ( headerCheckbox ) { 
			headerCheckbox.checked = false;
			headerCheckbox.parentNode.classList.remove("is-checking");
		}
		if (mobile_ico) {
			mobile_ico.classList.remove("fa-check-square");
			mobile_ico.classList.add("fa-minus-square");
		}
	}
}
