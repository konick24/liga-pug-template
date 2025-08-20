let swiperDirection;
let swiperBunners;

const initSwiper = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 1024 && !swiperDirection) {
    swiperDirection = new Swiper('.direction__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 12,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          centeredSlides: true,
        },
      },
    });
  } else if (screenWidth >= 1024 && swiperDirection) {
    swiperDirection.destroy(true, true);
    swiperDirection = undefined;
  }

  if (screenWidth < 1280 && !swiperBunners) {
    swiperBunners = new Swiper('.bunner-content', {
      slidesPerView: 'auto',
      spaceBetween: 12,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          centeredSlides: true,
        },
      },
    });
  } else if (screenWidth >= 1280 && swiperBunners) {
    swiperBunners.destroy(true, true);
    swiperBunners = undefined;
  }
};

export {initSwiper};
