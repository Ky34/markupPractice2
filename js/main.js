/* подключаем корусель */
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    dots: false,
    margin: 48,
    loop: true
  })
});

/* Video */
const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');

videoWrapper.addEventListener('click', function () { // Слушаем клик по видео

  if (video.paused) {          // если видео на паузе
    videoPicture.classList.add('none'); // скрываем картинку превью
    videoBtn.classList.add('none');   // скрываем кнопку
    videoWrapper.classList.remove('video-overlay')  // скрываем оверлей
    video.play();         // воспросизводим видео
  } else {
    videoWrapper.classList.add('video-overlay'); // показываем оверлей
    videoBtn.classList.remove('none'); // показываем кнопку
    video.pause();      // видео на паузу
  }
})