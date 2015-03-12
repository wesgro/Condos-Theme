(function($) {
  $(function(){
    $(".knob").knob({
      'draw':function(){
        //this.o.element = this.$;
      }
    });
    $('.knob').trigger('configure', {
      'format': function (v) {
        //v = this.element.parent().parent().find('.description').html();
        v='';
        return v;
      }
    });
    $('.knob').trigger('change');
    $( '.ds-gallery .field--gallery a' ).swipebox({
      hideBarsDelay : 30000,
      hideBarsOnMobile : false
    });
    $(".ds-navigation a").on('click', function(e){
      e.preventDefault();
      var $jump = $("."+$(this).data('jump'));
      $jump.velocity("scroll", { duration: 1500, easing: "easeInOutCirc" });

    });
  });
})(jQuery);