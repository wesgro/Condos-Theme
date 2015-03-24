(function($) {
  $(function(){
    //city drop down
    var $selections = $("#user-menu");
    var $link = $(".user-menu > a");
    // var originalHeight = $selections.height();
    // $selections.height(0);
    // $link.on('click', function(e){
    //   e.preventDefault();
    //   $selections.toggleClass('open');
    //   if($selections.hasClass('open')){
    //     $selections.height(originalHeight+'px');
    //   }else{
    //     $selections.height(0);
    //   }
    //   return false;
    // });
    $link .click(function(e){
      e.preventDefault();
       $.magnificPopup.open({
        items: {
          src: $selections, 
          type: 'inline'
        },
        removalDelay:300,
        mainClass: 'mfp-fade',
        closeMarkup: '<button title="%title%" class="mfp-close">close</button>'
      });
      return false;
    });
  });
})(jQuery);/** end user menu*/