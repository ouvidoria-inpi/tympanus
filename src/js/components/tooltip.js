import { createPopper } from '@popperjs/core';
import { isNumber } from 'util';
class BRTooltip {

  constructor ( name, component ) {
    this.name = name;
    this.component = component;
    this.activator = component.previousSibling.previousSibling;
    const place = component.getAttribute("place");
    this.placement = place ? place : "top";
    this.popover = this.component.classList.contains( "is-popover" ) ;
    this.timer = component.getAttribute("timer");
    this.active = component.getAttribute("active");
    this.popperInstance = null;
    this.showEvents = ['mouseenter', 'focus'];
    this.hideEvents = ['mouseleave', 'blur'];
    this._create();
    this._setBehavior();
  }
  _setBehavior (){
    // Ação de abrir padrao ao entrar no ativador
    this.showEvents.forEach(event => {
      this.activator.addEventListener( event, ( event ) => {
        this._show( event );
      });
    });
    // Adiciona ação de fechar ao botao do popover
    if (this.popover) {
      let close = this.component.querySelectorAll( ".close" )[0];
      close.addEventListener("click", ( event ) => {
        this._hide( event );
      });

    // Ação de fechar padrao ao sair do ativador
    } else {
      this.hideEvents.forEach(event => {
        this.activator.addEventListener( event, ( event ) => {
          this._hide( event );
        });
      });
    }
    // Abre os elementos que devem aparecer já ativos
    if (this.active) {
      this._show( event );
    }
  }
  _create () {
    this._setLayout();
    //Cria a instancia do popper
    this.popperInstance = createPopper(this.activator, this.component, {
      placement: this.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
  }

  _show ( event ) {
    this.component.setAttribute('data-show', '');
    // Importante pois "display: none" conflitua com a instancia do componente e precisa ser setado aqui já que pelo css ativa o fade no primeiro carregamento
    this.component.style.visibility = "visible";
    if ( this.timer ) {
      setTimeout( this._hide, this.timer, event, this.component );
    }
  }

  _hide ( event, component ) {
    // data-show é o atributo que controla a visibilidade 
    if ( this.component ) {
      this.component.removeAttribute('data-show');
    }
    else if ( component ) {
      component.removeAttribute('data-show');
    }
  }

  _setLayout () {
    // Cria a setinha que aponta para o item que criou o tooltip
    let arrow = document.createElement( 'div' );
    arrow.setAttribute( 'data-popper-arrow', '' );
    arrow.classList.add( "arrow" );
    this.component.appendChild( arrow );
    
    // Cria o icone de fechar do popover
    if (this.popover) {
      let close = document.createElement( 'div' );
      close.classList.add( "close" );
      let ico = document.createElement( 'i' );
      ico.classList.add( "fas","fa-times" );
      close.appendChild( ico );
      this.component.appendChild( close );
    }
  }
}

let tooltipList = []
for (let brTooltip of window.document.querySelectorAll( ".br-tooltip")) {
  tooltipList.push(new BRTooltip('br-tooltip', brTooltip ))
}
export default BRTooltip
