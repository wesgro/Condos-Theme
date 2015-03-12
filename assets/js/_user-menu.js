(function($) {
  $(function(){
    //city drop down
    var $selections = $(".user-menu > .menu");
    $link = $(".user-menu > a");
    var originalHeight = $selections.height();
    $selections.height(0);
    $link.on('click', function(e){
      e.preventDefault();
      $selections.toggleClass('open');
      if($selections.hasClass('open')){
        $selections.height(originalHeight+'px');
      }else{
        $selections.height(0);
      }
      return false;
    });
  });
})(jQuery);/** end user menu*/