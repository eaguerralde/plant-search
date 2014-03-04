var seedsAnimations = angular.module('seedsApp.animations', ['ngAnimate']);

seedsAnimations.animation('.loadPanel', function() {

  var animateUp = function(element, className, done) {
    if(className != 'active') {
      return;
    }
    element.css({
      position: 'absolute',
      top: 500,
      left: 0,
      display: 'block'
    });

    jQuery(element).animate({
      top: 0
    }, done);

    return function(cancel) {
      if(cancel) {
        element.stop();
      }
    };
  }

  var animateDown = function(element, className, done) {
    if(className != 'active') {
      return;
    }
    element.css({
      position: 'absolute',
      left: 0,
      top: 0
    });

    jQuery(element).animate({
      top: -500
    }, done);

    return function(cancel) {
      if(cancel) {
        element.stop();
      }
    };
  }
  
  return {
//    addClass: animateUp,
//    removeClass: animateDown,
    enter: function(element, done) {
        var elementDefaults = {width: element[0].clientWidth, height: element[0].clientHeight}
            element.css({
              width: 0,
              height: elementDefaults.height
            });
            jQuery(element).animate({
              width: elementDefaults.width,
              height: elementDefaults.height
            }, 1000, done);
            
        return function(cancel) {
          if(cancel) {
            element.stop();
          }
        };
    },
//      leave: function(element, done) {
//          done();
//        return function(cancel) {
//          if(cancel) {
//            element.stop();
//          }
//        };
//      },
//      move: function(element, done) {
//          done();
//        return function(cancel) {
//          if(cancel) {
//            element.stop();
//          }
//        };
//      },
 
      //animation that can be triggered before the class is added
      beforeAddClass: function(element, className, done) {
          done();
        return function(cancel) {
          if(cancel) {
            element.stop();
          }
        };
      },
 
      //animation that can be triggered after the class is added
      addClass: function(element, className, done) {
          
            jQuery(element).animate({
              paddingLeft: '20px'
            }, 300, done);
            
        return function(cancel) {
          if(cancel) {
            element.stop();
          }
        };
      },
 
      //animation that can be triggered before the class is removed
      beforeRemoveClass: function(element, className, done) {
          done();
        return function(cancel) {
          if(cancel) {
            element.stop();
          }
        };
      },
 
      //animation that can be triggered after the class is removed
      removeClass: function(element, className, done) {
            jQuery(element).animate({
              paddingLeft: 0
            }, 300, done);
        return function(cancel) {
          if(cancel) {
            element.stop();
          }
        };   
      }
  };
});
