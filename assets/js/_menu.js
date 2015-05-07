(function($) {
  $(function(){
    $('#mobile-navigation .main .menu').tendina({
      activeMenu: $('#mobile-navigation .menu .active'),
    });
    var $mobileNavContainer = $("#mobile-navigation");
    
    function getMenuHeight(){
      var documentHeight = $(window).height();
      var pageHeight = $('.l-page').height();
      return Math.max(documentHeight, pageHeight);
    }
    function redrawMenu(){
      if($("body").hasClass('not-front')){
  
      }
      $mobileNavContainer.css('max-height',getMenuHeight().toString()+'px');
      return false;
    }
    function returnOffset(){
      try{
        if (matchMedia('only screen and (max-width: 738px)').matches) {
          return -120;
        }else{
          return -120;
        }
      }catch(e){
        return -120;
      }
  
    }
    function closeMobileMenu(e){
      if($(".l-page").hasClass('mobile-menu-visible')) {
        $(".l-page, body,html").removeClass('mobile-menu-visible');
        $mobileNavContainer.removeClass('mobile-menu-visible');
        $('#mobile-navigation-toggle').removeClass('active');
        //$('.navbar-nav').tendina('hideAll');
        e.preventDefault();
        e.stopPropagation();
      }
    }
    redrawMenu();
    //$mobileNavContainer.height($(window).height());
    $('.menu-toggle').on('click', function(e) {
      if (!$mobileNavContainer.hasClass('mobile-menu-visible')) {
        $(".l-page, body,html").addClass('mobile-menu-visible');
        $mobileNavContainer.addClass('mobile-menu-visible');
        $(this).addClass('active');
        e.preventDefault();
        e.stopPropagation();
      }else{
        $(".l-page, body,html").removeClass('mobile-menu-visible');
        $mobileNavContainer.removeClass('mobile-menu-visible');
        $(this).removeClass('active');
        e.preventDefault();
        e.stopPropagation();
      }
    });
  
  
    $('.l-page, .close').on('click ',function(e) {
      closeMobileMenu(e);
    });
    $(window).resize($.throttle( 250, redrawMenu));
  
  });
})(jQuery);





