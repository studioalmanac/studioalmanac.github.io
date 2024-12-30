let slideIndex = 0;
showSlides(slideIndex);

setInterval(function () {
  showSlides((slideIndex += 1));
}, 5000);

function showSlides(nextSlideIndex) {
  const slides = document.getElementsByClassName("slide");
  if (nextSlideIndex > slides.length) {
    slideIndex = 0;
  }

  slides.forEach(function (slide) {
    slide.style.display = "none";
  })

  slides[slideIndex].style.display = "block";
}
