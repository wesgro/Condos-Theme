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
      $(".l-main option").each(function(){
        if($(this).val() === ''){
          $(this).remove();
        }
      });
      $("select").each(function(){
        var $that = $(this);
        var $label = $("label[for='"+$that.attr('id')+"']");
        if($label.html().length> 0){
          var option = '<option selected="selected" value="" disabled="disabled">'+$label.html()+'</option>';
          $that.prepend(option);
        }
      });
      $(".up,.up i").on('click touchstart',function(e){
        e.preventDefault();
        $("html").velocity("scroll", { offset:0,duration: 500, mobileHA: false });
        return false;
      });
      $(".l-header").waypoint(function(direction){
        if(direction === 'down'){
          $(".up").addClass('show');
        }else{
          $(".up").removeClass('show');
        }
      },
      {offset:'-300'});

      if(Modernizr.input.placeholder){
        $(".webform-component-textfield  label, .webform-component-phone label, .webform-component-email label, .webform-component-select label").hide();
      }
      $(window).load(function(){
        $(".view-id-condos .views-row").matchHeight();
      });
      $(document).ajaxComplete(function(){
        $matchRows =  $(".view-id-condos .views-row");
        matchHeight_after_ajax($matchRows);
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
        items:1,
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
                margin:26,
            },
            1000:{
                items:2,
                nav:true,
                loop:false,
                margin:26,
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
      var $matchRows = $(".view-news.view-display-id-page .views-row");
      $matchRows.matchHeight();
      $(document).ajaxComplete(function(){
        $matchRows = $(".view-news.view-display-id-page .views-row");
        matchHeight_after_ajax($matchRows);
      });
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
function matchHeight_after_ajax($img_container) { // do callback when images in $img_container (jQuery object) are loaded. Only works when ALL images in $img_container are newly inserted images and this function is called immediately after images are inserted into the target.
  var _imgs = $img_container.find('img'),
  img_length = _imgs.length,
  img_load_cntr = 0;
  var $jumpRow = false;
  $img_container.each(function(){
    //console.log("checking for style "+$(this).attr("style"));
    if( $(this).attr("style") === 'opacity: 0;'){
      $jumpRow = $(this);
      return false;
    }
  });
  
  if (img_length) { //if the $img_container contains new images.
    _imgs.on('load', function() { //then we avoid the callback until images are loaded
        img_load_cntr++;
        $img_container.matchHeight();
        if($jumpRow !== false){
          $(window).scrollTop($jumpRow.offset().top);
        }
    });
  }
}
})(jQuery); 
