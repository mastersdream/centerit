(function($) { //Immediately-Invoked Function Expression (IIFE)
  $.fn.centerit = function() {

    var elem = $(this),
      wind = $(window);

    var makeCenter = function() {
      var imgHeight = elem.height(),
        imgWidth = elem.width(),
        wWidth = wind.width(),
        wHeight = wind.height();

      // Apply CSS to make this element centerit
      // absolute element with 50% left and top value sustracted by respective elem width/2
      elem.css({
        'position': 'absolute',
        'left': wWidth / 2 - imgWidth / 2,
        'top': wHeight / 2 - imgHeight / 2,
      })
    }

    // Change position when window get resized
    wind.resize(function() {
      makeCenter();
    });
    // make it center by calling makeCenter function
    makeCenter(); 

  };
}(jQuery));
