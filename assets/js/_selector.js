(function($) {
  $(function(){
    //city drop down
    var $selections = $(".dropdown .selections");
    var $selector = $(".dropdown.selector");
    var originalHeight = $selections.height();
    $selections.height(0).addClass('ready');
    $('.l-page').on('click', function(){
      $selector.removeClass('open');
      $selections.height(0);
    });
    $selections.on('click', function(e){
      event.stopPropagation();
    });
    $('.dropdown.selector .container').on('click', function(){
      $selector.toggleClass('open');
      if($selector.hasClass('open')){
        if($(window).width() < 768){
          $('html').velocity('scroll', {duration:300, offset:$selector.offset().top});
        }
        $selections.height(originalHeight+'px');
      }else{
        $selections.height(0);
      }
      return false;
    });
  });
})(jQuery);