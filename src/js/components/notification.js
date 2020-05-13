import BRTooltip from './tooltip';

class BRNotification extends BRTooltip{
  constructor ( name, component ) {
    super(name,component);
    this.menuBtns = component.querySelectorAll( ".contextual-btn");
    this.hideEvents = ['mouseleave', 'blur'];
    this._setMenu();
  }
  _setMenu () {
    for (let btn of this.menuBtns) {
      let menu = btn.parentNode.querySelector(".contextual-menu");
      btn.addEventListener ( "click" , () => {
        menu.toggleAttribute("show");
      });
      this.hideEvents.forEach(event => {
        menu.addEventListener( event, ( event ) => {
          menu.removeAttribute("show");
        });
      });
      if ( menu.children[0] ) {
        menu.children[0].addEventListener ( "click" , () => {
          this._hideNotification( menu.children[0] );
        });
      }
      if ( menu.children[1] ) {
        menu.children[1].addEventListener ( "click" , () => {
          this._hideAllNotifications( menu.children[1] );
        });
      }
    }
  }
  _hideNotification( action ) {
    let notification = action.parentNode.parentNode;
    notification.setAttribute('hidden', '');
  }
  _hideAllNotifications( action ) {
    let notifications = action.parentNode.parentNode.parentNode.querySelectorAll( ".item");;
    console.log ( notifications );
    notifications.forEach( notification => {
      notification.setAttribute('hidden', '');
    });
  }
}

let notificationList = []
for (let brNotification of window.document.querySelectorAll( ".br-notification")) {
  notificationList.push( new BRNotification( 'br-notification', brNotification ))
}

export default BRNotification