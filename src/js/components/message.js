class BRAlert {
  constructor ( name, component ) {
    this.name = name;
    this.component = component;
    this._setBehavior();
  }

  _setBehavior () {
    for ( let button of this.component.querySelectorAll( "div.close button" ) ) {
      button.addEventListener( "click", () => {
        this._dismiss( this.component );
      } );
    }
  }

  _dismiss ( component ) {
    component.parentNode.removeChild( component );
  }
}


export default BRAlert
