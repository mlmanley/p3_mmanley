$(document).ready(function () {
  $(".hamburger").on("click", function () {
    $(".top-nav").slideToggle("fast", "linear");
  });

  var url = window.location.href;

  if (url.indexOf("menu") > -1) {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;
        console.log(hash);

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
  }

  $(".carousel").slick({
    centerMode: true,
    centerPadding: "40px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 821,
        settings: {
          arrows: true,
          centerMode: true,
          // centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
