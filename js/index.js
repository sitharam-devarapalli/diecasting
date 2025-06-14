//  carousel js 
 const carouselElement = document.querySelector('#sslCarouselExample');
  const totalSlides = carouselElement.querySelectorAll('.carousel-item').length;
  const currentElem = document.getElementById('sslCarouselCurrent');
  const totalElem = document.getElementById('sslCarouselTotal');

  totalElem.innerText = totalSlides;

  const carousel = new bootstrap.Carousel(carouselElement);
  
  carouselElement.addEventListener('slid.bs.carousel', function (e) {
    currentElem.innerText = e.to + 1;
  });