(function($) {
  $(function(){
    if(Modernizr.canvas){
      var color='#ffcc33';
      if($("body").hasClass('victoria')){
        //console.log("victoria");
        color='#00ccff';
      }
      $(".knob").knob({
        fgColor:color,
      });
      $('.knob').trigger('configure', {
        'format': function (v) {
          //v = this.element.parent().parent().find('.description').html();
          v='';
          return v;
        }
      });
      $('.knob').trigger('change');
    }
    $( '.ds-gallery a' ).swipebox({
      hideBarsDelay : 6000
    });
    $(".ds-navigation a").on('click', function(e){
      e.preventDefault();
      var $jump = $("."+$(this).data('jump'));
      $jump.velocity("scroll", { duration: 1500, easing: "easeInOutCirc" });

    });
    $(".flag-wrapper").hoverIntent(function(){
      $that = $(this);
      $count = $that.find('.flag-count');
      $count.velocity("transition.slideDownIn",
          { stagger: 0, duration:950, drag:false, delay: 0 });
    },function(){
      $that = $(this);
      $count = $that.find('.flag-count');
      $count.velocity("transition.slideUpOut",
          { stagger: 0, duration:950, drag:false, delay: 0 });
    });
  });
})(jQuery);