class BRAccordeon {
  constructor( name, component ) {
    this.name = name;
    this.component = component;
    this._setBehavior();
  }



  _setBehavior() {
    for ( let button of this.component.querySelectorAll( "button.header" ) ) {
      button.addEventListener( "click", event => {
        this._collapse( event );
        this._changeIcon( event );
      } );
    }
  }

  _collapse( event ) {
    for ( let field of this.component.querySelectorAll( ".item" ) ) {
      if ( field === event.currentTarget.parentNode ) {
        field.classList.toggle( "is-active" );
      } else if ( field.classList.contains( "is-active" ) ) {
        field.classList.toggle( "is-active" );
      }
    }
  }

  _changeIcon( event ) {
    for ( let field of this.component.querySelectorAll( ".item" ) ) {
      if ( field.classList.contains( "is-active" ) ) {
        for ( let icon of field.querySelectorAll( ".icon" ) ) {
          icon.children[ 0 ].classList.remove( "fa-angle-down" );
          icon.children[ 0 ].classList.add( "fa-angle-up" );
        }
      } else {
        for ( let icon of field.querySelectorAll( ".icon" ) ) {
          icon.children[ 0 ].classList.remove( "fa-angle-up" );
          icon.children[ 0 ].classList.add( "fa-angle-down" );
        }
      }
    }
  }
}

let accordeonList = [];
for ( let brAccordeon of window.document.querySelectorAll( ".br-accordeon" ) ) {
  accordeonList.push( Object.create( new BRAccordeon( "br-accordeon", brAccordeon ) ) );
}


export default BRAccordeon
