/*let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); 
}
*/

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}  

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 10000); 
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(num) {
  showSlides(slideIndex += num);
}

// Thumbnail image controls
function currentSlide(num) {
  showSlides(slideIndex = num);
}


  
 