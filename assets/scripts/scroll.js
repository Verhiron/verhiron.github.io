$(document).ready(function() {
  // Add smooth scrolling to all links
  $(".scrollButton").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
              scrollTop: $(hash).offset().top - $(".container").height()
          }, 800, function() {

              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
          });
      } // End if
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