// sa-script.js
// document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 1;
  showSlides(slideIndex);

  console.log("hidad")

  // Auto rotate every 5 seconds
  setInterval(function() {
    console.log("himom")
      plusSlide(1);
  }, 5000);

  // Making plusSlide available globally
  window.plusSlide = function(n) {
      showSlides(slideIndex += n);
  }

  function showSlides(n) {
      let i;
      const slides = document.getElementsByClassName("slide");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
  }
// });