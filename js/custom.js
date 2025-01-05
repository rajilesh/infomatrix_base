
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    $('#contact_form').submit(function(e) {
      e.preventDefault();
      let form = $(this);
      let name = form.find('input[name="contact_us-form-name"]').val();
      let email = form.find('input[name="contact_us-email"]').val();

      let message = `Hello, I'm ${name}, I have a requirement. Can we have some discussion? My email id is ${email}`;

      window.open(`https://wa.me/+918547105826?text=${encodeURIComponent(message)}`, '_blank');
    });
  
  })(window.jQuery);


