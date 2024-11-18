const sliderRow = document.querySelector('.slider__row');
const prevButton = document.querySelector('.slider__button_prev');
const nextButton = document.querySelector('.slider__button_next');

prevButton.addEventListener('click', () => {
  sliderRow.scrollBy({
    left: -300, //  Прокручиваем  влево  на  300px
    behavior: 'smooth' //  Плавная  прокрутка
  });
});

nextButton.addEventListener('click', () => {
  sliderRow.scrollBy({
    left: 300, //  Прокручиваем  вправо  на  300px
    behavior: 'smooth' //  Плавная  прокрутка
  });
});