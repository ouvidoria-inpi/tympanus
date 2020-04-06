class BRBreadcrumb {

  constructor ( name, component ) {
    this.name = name;
    this.component = component;
    this._setBehavior();
  }

  _setBehavior () {
    window.addEventListener( "load", () => {
      if ( window.innerWidth < this.component.scrollWidth ) {
        this.hideCrumbs();
      }
    } );
    this.component.addEventListener( "mousewheel", ( event ) => {
      let delta = Math.max( -1, Math.min( 1, ( event.wheelDelta || -event.detail ) ) );
      event.currentTarget.scrollLeft -= ( delta * 40 );
      event.preventDefault();
    } );
  }

  hideCrumbs () {
    for ( let crumb of this.component.querySelectorAll( "li:not(:nth-child(1)):not(:last-child)" ) ) {
      if ( crumb.classList.contains( "hidden" ) ) {
        crumb.classList.remove( "hidden" );
        crumb.classList.add( "more" );
        crumb.addEventListener( "click", () => {
          this._showCrumbs();
        } );
      } else {
        crumb.classList.add( "hidden" );
      }
    }
  }

  _showCrumbs () {
    for ( let crumb of this.component.querySelectorAll( "li:not(:nth-child(1)):not(:last-child)" ) ) {
      if ( crumb.classList.contains( "more" ) ) {
        crumb.classList.remove( "more" );
        crumb.classList.add( "hidden" );
      } else {
        crumb.classList.remove( "hidden" );
      }
    }
  }
}

let breadcrumbList = [];
for ( let brBreadcrumb of window.document.querySelectorAll( ".br-breadcrumb" ) ) {
  breadcrumbList.push( new BRBreadcrumb( "br-breadcrumb", brBreadcrumb ) );
}

export default BRBreadcrumb;

// function expandBreadcrumbs(){
//   var expand = document.createElement('Button');
//   var title = document.createTextNode('btn');
//   var lista = document.querySelectorAll('li');
//   expand.appendChild(title);
//   expand.style.backGround='blue';
//   for(i=0; i < lista.length; i++){
//     if(lista[i].display.style === 'none'){
//       lista.display.style = 'inline';
//     }  
//     else{
//       lista.display.style = 'inline';
//     }
//   }
//   expand.addEventListener('click',expandBreadcrumbs) 
// }

