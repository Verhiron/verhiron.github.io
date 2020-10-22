$(document).ready(function() {
  // Add smooth scrolling to all links
  $(".scrollButton").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;
          // animates the scroll down to body
          $('html, body').animate({
              scrollTop: $(hash).offset().top - $(".container").height()
          }, 800);
      } else {
          console.log("error");
      }
        

  });

  var btn = $('#scrollTop');

  $(window).scroll(function() {
      if ($(window).scrollTop() > 1500) {
          btn.addClass('show');
      } else {
          btn.removeClass('show');
      }
  });

  btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: 0
      }, '300');
  });
});
