(function($) {
  $(function(){
    $('a[href*="login"]').click(function(e){
      e.preventDefault();
       $.magnificPopup.open({
        items: {
          src: $("#login"), 
          type: 'inline'
        },
        removalDelay:300,
        mainClass: 'mfp-fade',
        closeMarkup: '<button title="%title%" class="mfp-close">close</button>'
      });
      return false;
    });
  });
})(jQuery);