// Javascript

const imgs = document.querySelectorAll('.sample-image img');
const cvBtn = document.getElementById('downloadCV');
const imgFrame = document.getElementById('automotivePhotography');
const closeButton = document.getElementById('sliderCloseButton');
const fullPage = document.querySelector('#fullpage');
let clickedGenre = ""
let slideIndex = 1
closeButton.addEventListener('click', ()=>{
    fullPage.style.display= 'none';
});

imgs.forEach(img => {
    img.addEventListener('click', function() {
        clickedGenre = img.className
        console.log(clickedGenre)
        fullPage.style.display = 'block'; 
        showSlides(slideIndex) 
  });
});

cvBtn.addEventListener('click', () => {
    window.open('CV.pdf', '_blank');
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let genreBox = document.querySelectorAll('div.sample-image.'+ clickedGenre+' img') ;
  
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  console.log(genreBox)
  genreBox[0].src=slides[slideIndex-1].firstElementChild.src
  console.log(slides[slideIndex-1].firstElementChild.src)
}