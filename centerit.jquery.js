$.fn.centerit = function() {
  var elem = $(this);
  var wind = $(window)
  var imgHeight = elem.height();
  var imgWidth = elem.width();
  var wWidth = wind.width();
  var wHeight = wind.height();

  // Apply CSS to make this element centerit
  // absolute element with 50% left and top value sustracted by respective elem width/2
elem.css({
  'position':'absolute',
  'left':wWidth/2  - imgWidth/2,
  'top':wHeight/2  - imgHeight/2,
})

};
