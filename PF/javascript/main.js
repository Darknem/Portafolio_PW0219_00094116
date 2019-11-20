//Función para esconder el menú
function desplegarMenu() {
  const esconder = document.getElementById("menu");
  esconder.classList.toggle("hide-mobile");
  console.log("as")
  const menu = document.querySelector('.options .fa-bars');
  menu.classList.toggle("hide-mobile");
  
  const cerrar = document.querySelector(".options .fa-times");
  cerrar.classList.toggle("hide-mobile");
}
let a = document.querySelector(".options");
a.addEventListener('click', desplegarMenu, false);



/*Función para carrusel*/
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
