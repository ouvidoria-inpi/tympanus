class BRAccordion {
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
    if ( this.component.hasAttribute( "single" ) ) {
      for ( let field of this.component.querySelectorAll( ".item" ) ) {
        if ( field === event.currentTarget.parentNode ) {
          if ( field.hasAttribute( "active" ) ) {
            field.removeAttribute( "active" );
          } else {
            field.setAttribute( "active", "" );
          }
        } else {
          if ( field.hasAttribute( "active" ) ) {
            field.removeAttribute( "active" );
          }
        }
      }
    } else {
      for ( let field of this.component.querySelectorAll( ".item" ) ) {
        if ( field === event.currentTarget.parentNode ) {
          if ( field.hasAttribute( "active" ) ) {
            field.removeAttribute( "active" );
          } else {
            field.setAttribute( "active", "" );
          }
        }
      }
    }
  }

  _changeIcon( event ) {
    for ( let field of this.component.querySelectorAll( ".item" ) ) {
      if ( field.hasAttribute( "active" ) ) {
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

let accordionList = [];
for ( let brAccordion of window.document.querySelectorAll( ".br-accordion" ) ) {
  accordionList.push( Object.create( new BRAccordion( "br-accordion", brAccordion ) ) );
}


export default BRAccordion
