const imgs = document.querySelectorAll('.sample-image img');
const fullPage = document.querySelector('#fullpage');
const cvBtn = document.getElementById('downloadCV');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });
});


cvBtn.addEventListener('click', () => {
  window.open('CV.pdf', '_blank');
});