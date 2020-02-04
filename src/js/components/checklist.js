class BRChecklist {
	constructor ( name, component ) {
		this.name = name;
		this.component = component;
		this._setBehavior();
	}

	_setBehavior () {
		for ( let inputRadio of this.component.querySelectorAll(
			'input[type="radio"]'
		) ) {
			inputRadio.addEventListener( "click", event => {
				this._switchSole( event );
			} );
		}
		for ( let inputCheckbox of this.component.querySelectorAll(
			'input[type="checkbox"]'
		) ) {
			inputCheckbox.addEventListener( "click", event => {
				this._switchShared( event );
			} );
		}
	}

	_switchSole ( event ) {
		for ( let field of this.component.querySelectorAll( ".item" ) ) {
			if ( field === event.currentTarget.parentNode.parentNode ) {
				field.classList.add( "is-active" );
			} else {
				field.classList.remove( "is-active" );
			}
		}
	}

	_switchShared ( event ) {
		for ( let field of this.component.querySelectorAll( ".item" ) ) {
			if ( field === event.currentTarget.parentNode.parentNode ) {
				field.classList.toggle( "is-active" );
			}
		}
	}
}

let checklistList = [];

