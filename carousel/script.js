let currentIndex = 0;

function showSlide(index) {
   const carouselInner = document.querySelector('.carousel-inner');
   const slides = document.querySelectorAll('.carousel-item');

   if (index >= slides.length) {
      currentIndex = 0;
   } else if (index < 0) {
      currentIndex = slides.length - 1;
   } else {
      currentIndex = index;
   }

   const translationValue = -currentIndex * 100 + '%';
   carouselInner.style.transform = 'translateX(' + translationValue + ')';

}

document.querySelector('.prev').addEventListener('click', function(){
   showSlide(currentIndex - 1)
})

document.querySelector('.next').addEventListener('click', function(){
   showSlide(currentIndex + 1)
})