/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can 
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
Modernizr.addTest('svgasimg', document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1'));
(function($) {

// Use this variable to set up the common and page specific functions. If you 
// rename this variable, you will also need to rename the namespace below.
var Roots = {
  // All pages
  common: {
    init: function() {
      function getAndroidVersion(ua) {
          ua = (ua || navigator.userAgent).toLowerCase(); 
          var match = ua.match(/android\s([0-9\.]*)/);
          return match ? match[1] : false;
      }
      if(!Modernizr.svgasimg || parseFloat(getAndroidVersion()) < 4.3){
       // alert("no svg");
        $('img').each(function() {
          var img_src = $(this).attr('src');
          var new_src = img_src.replace(/\.svg$/, '.png');
          $(this).attr('src', new_src);
        });
      }
      if(Modernizr.input.placeholder){
        $(".webform-component-textfield  label, .webform-component-phone label, .webform-component-email label, .webform-component-select label").hide();
      }
      $(window).load(function(){
        $(".view-id-condos .views-row").matchHeight();
      });
      $("input.required").attr('required','required');
    }
  },
  // Home page
  front: {
    init: function() {
      // JavaScript to be fired on the home page
      var slider = $('.news-slider');
      //mainSlider.trigger('destroy.owl.carousel');
      slider.owlCarousel({
        items:2,
        margin:26,
        stagePadding:0,
        loop:false,
        responsiveRefreshRate:50,
        autoplayHoverPause: true,
        responsiveClass:true,
        dots:true,
        touchDrag:true,
        mouseDrag:false,
        responsive:{
            0:{
                items:1,
                nav:true,
                margin:0,
            },
            768:{
                items:2,
                nav:true,
            },
            1000:{
                items:2,
                nav:true,
                loop:false
            }
        }
      });
    }
  },
  // About us page, note the change from about-us to about_us.
  about_us: {
    init: function() {
      // JavaScript to be fired on the about us page
    }
  },
  page_news: {
    init:function(){
      $(".view-news.view-display-id-page .views-row").matchHeight();
    }
  }
};

// The routing fires all common scripts, followed by the page specific scripts.
// Add additional events for more control over timing e.g. a finalize event
var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = Roots;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {
    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });
  }
};

$(document).ready(UTIL.loadEvents);

})(jQuery); 
