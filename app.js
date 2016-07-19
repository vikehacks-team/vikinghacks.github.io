/* From css-tricks.com */
/* Requires JQuery */

$(function () {
  $('.smooth-scroll').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 120 // to offset 60px padding on top and bottom of .section
        }, 500);
        return false;
      }
    }
  });
});