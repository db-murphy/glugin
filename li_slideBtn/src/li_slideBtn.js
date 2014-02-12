/*
 * li_slideBtn
 * https://github.com/wuxia/li_slideBtn
 *
 * Copyright (c) 2014 
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.li_slideBtn = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.li_slideBtn = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.li_slideBtn.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.li_slideBtn.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].li_slideBtn = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
