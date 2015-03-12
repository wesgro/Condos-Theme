(function($) {
  $(function(){
    $(".map-popup").on('click', function(){
      var $that = $(this);
      $.magnificPopup.open({
        // Delay in milliseconds before popup is removed
        removalDelay: 300,
      
        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade',
        items: {
          src: '<div class="map-container"><div id="map-canvas" style="width:100%;"></div></div>', // can be a HTML string, jQuery object, or CSS selector
          type: 'inline'
        },
        callbacks: {
          open: function() {
            // Will fire when this exact popup is opened
            // this - is Magnific Popup object
            var location = new google.maps.LatLng($that.data('lat'), $that.data('lng'));
            var mapOptions = {
              zoom: 16,
              center: location,
              disableDefaultUI: true,
            };
          
            var map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);
            var marker = new google.maps.Marker({
              position: location,
              map: map,
              title: 'Hello World!'
            });
          },
          close: function() {
            // Will fire when popup is closed
          }
          // e.t.c.
        }
      });
      return false;
    });
  });
})(jQuery);