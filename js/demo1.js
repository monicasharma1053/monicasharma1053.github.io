(function() {

  var triggerBttn = document.getElementsByClassName( 'portfolio-box' ),
    overlay = document.querySelector( 'div.overlay' ),
    closeBttn = overlay.querySelector( 'button.overlay-close' );
    transEndEventNames = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd',
      'transition': 'transitionend'
    }
    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
    support = { transitions : Modernizr.csstransitions };
    overlays = {
      'portfolio_box_1': 'overlay_1',
      'portfolio_box_2': 'overlay_2',
      'portfolio_box_3': 'overlay_3',
      'portfolio_box_4': 'overlay_4',
      'portfolio_box_5': 'overlay_5',
      'portfolio_box_6': 'overlay_6'
    };

  function toggleOverlay() {
     id         = $(this)[0].id
     overlay_id = overlays[id]
     overlay    = document.getElementById( overlay_id ) || $(this).parent()[0]

    if( classie.has( overlay, 'open' ) ) {
      classie.remove( overlay, 'open' );
      classie.add( overlay, 'close' );
      var onEndTransitionFn = function( ev ) {
        if( support.transitions ) {
          if( ev.propertyName !== 'visibility' ) return;
          this.removeEventListener( transEndEventName, onEndTransitionFn );
        }
        classie.remove( overlay, 'close' );
      };
      if( support.transitions ) {
        overlay.addEventListener( transEndEventName, onEndTransitionFn );
      }
      else {
        onEndTransitionFn();
      }
    }
    else if( !classie.has( overlay, 'close' ) ) {
      classie.add( overlay, 'open' );
    }
  }

  $('.portfolio-box').click(toggleOverlay);
  $('button.overlay-close').click(toggleOverlay);
})();
