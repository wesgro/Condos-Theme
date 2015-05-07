//doGTranslate('en|zh-CN')
function GTranslateFireEvent(a, b) {
    try {
      var c;
        if (document.createEvent) {
            c = document.createEvent("HTMLEvents");
            c.initEvent(b, true, true);
            a.dispatchEvent(c);
        } else {
            c = document.createEventObject();
            a.fireEvent('on' + b, c);
        }
    } catch (e) {}
}

function doGTranslate(a) {
    if (a.value) {
      a = a.value;
    }
    if (a === ''){
      return;
    }
    var b = a.split('|')[1];
    var c;
    var d = document.getElementsByTagName('select');
    for (var i = 0; i < d.length; i++){
        if (d[i].className === 'goog-te-combo'){ 
          c = d[i];
        }
    }
    if (document.getElementById('google_translate_element2') === null || document.getElementById('google_translate_element2').innerHTML.length === 0 || c.length === 0 || c.innerHTML.length === 0) {
      
        setTimeout(function() {
            doGTranslate(a);
        }, 500);
    } else {
        c.value = b;
        return new GTranslateFireEvent(c, 'change');
    }
}
(function($) {
  $(window).load(function(){
    var language = $(".goog-te-combo").find(":selected").text();
    var lang = $.cookie('language');
    var $translateLink = $(".translate a, a.translate");
    //console.log(lang);
    if(lang === "CN"){
      $translateLink.removeClass('chinese');
      $translateLink.addClass('english');
    }
    $translateLink.on('click', function(e){
      e.preventDefault();
      var urlString=window.location.href;
      var url=urlString.split("#")[0];
     // window.location.href = url + "#mypara";
      //console.log();
      language = $(".goog-te-combo").find(":selected").text();
      console.log("language is " + language);
      if(language === 'Select Language' || language === 'English'){
        //new GTranslateFireEvent('zh-CN', 'change');
       // window.location.href = url + "#googtrans(en|zh-CN)";
        console.log('translate to chinese');
        doGTranslate('en|zh-CN');
        doGTranslate('en|zh-CN');
        $(this).removeClass('chinese');
        $(this).addClass('english');
        $.cookie('language', 'CN');
      }else{
         //window.location.href = url + "#googtrans(zh-CN|en)";
        console.log('translate to english');
        doGTranslate('zh-CN|en');
        $(this).removeClass('english');
        $(this).addClass('chinese');
        $.cookie('language', 'EN');
      }
     // location.reload();
    });
  });
})(jQuery);