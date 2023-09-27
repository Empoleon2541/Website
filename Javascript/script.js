

const imgs = document.querySelectorAll('.sample-image img');
const cvBtn = document.getElementById('downloadCV');
const closeButton = document.getElementById('sliderCloseButton');
const fullPage = document.querySelector('#fullpage');
let clickedGenre = ""
let slideIndex = {'automotivePhotography':1,'filmPhotography':1,'productPhotography':1};
closeButton.addEventListener('click', ()=>{
    let slides = document.getElementsByClassName("slides"+" "+clickedGenre);
    let i
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    fullPage.style.display= 'none';
});
imgs.forEach(img => {
    img.addEventListener('click', function() {
        clickedGenre = img.className;
        fullPage.style.display = 'block'; 
        showSlides(slideIndex[clickedGenre]);
  });
});

cvBtn.addEventListener('click', () => {
    window.open('CV.pdf', '_blank');
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex[clickedGenre] += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex[clickedGenre] = n);
}

function showSlides(n) {
    console.log(clickedGenre)                                                           
    let i;
    let slides = document.getElementsByClassName("slides"+" "+clickedGenre);
    let genreBox = document.querySelectorAll('div.sample-image.'+ clickedGenre+' img') ;
    
    if (slideIndex[clickedGenre] > slides.length) {slideIndex[clickedGenre] = 1} 
    if (slideIndex[clickedGenre] < 1) {slideIndex[clickedGenre] = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex[clickedGenre]-1].style.display = "block";
    genreBox[0].src=slides[slideIndex[clickedGenre]-1].firstElementChild.src
}