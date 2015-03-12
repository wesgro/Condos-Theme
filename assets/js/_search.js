(function($) {
  $(function(){
    $('.search a').click(function(e){
      $(".search-feature").velocity({left:0},800,'easeOutCubic');
      e.preventDefault();
    });
    $('.close').click(function(e){
      $(".search-feature").velocity({left:'200%'},800,'easeOutCubic');
      e.preventDefault();
    });
  });
})(jQuery);