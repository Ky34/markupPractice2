/* подключаем корусель */
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    responsive : {
      // breakpoint from 0 up
      0 : {
          items: 2,
          margin: 32,
          dots: false,
          loop: true,
          // stagePadding: 180,
      },
      // breakpoint from 480 up
      601 : {
          items: 2,
          dots: false,
          loop: true,
      },
      // breakpoint from 768 up
      1001 : {
          items: 3,
          margin: 48,
          dots: false,
          loop: true,
      }
  }
  })
});

/* Video */
const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');

videoWrapper.addEventListener('click', function () { // Слушаем клик по видео

  if (video.paused) {          // если видео на паузе
    videoPicture.classList.add('hidden'); // скрываем картинку превью
    videoBtn.classList.add('none');   // скрываем кнопку
    videoWrapper.classList.remove('video-overlay')  // скрываем оверлей
    video.play();         // воспросизводим видео
  } else {
    videoWrapper.classList.add('video-overlay'); // показываем оверлей
    videoBtn.classList.remove('none'); // показываем кнопку
    video.pause();      // видео на паузу
  }
})

/* Mobile Nav */
const openNavbtn = document.querySelector('#openMobileNav');
const closeNavbtn = document.querySelector('#closeMobileNav');
const mobileNav = document.querySelector('#mobileNav');

openNavbtn.onclick = function () {
  mobileNav.classList.remove('none')
  document.body.classList.add('no-scroll');
}

closeNavbtn.onclick = function () {
  mobileNav.classList.add('none');
  document.body.classList.remove('no-scroll');
}