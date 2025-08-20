import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {CustomSelect} from './modules/select/custom-select';
import {uploadFile, uploadImageDrop} from './modules/input-file/init-upload';
import {initAccordions} from './modules/accordions/custom-accordions';
import './modules/bunners/bunners';

import {initSwiper} from './modules/custom-swiper/init-swiper';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  mobileVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана

  // пользовательские скрипты

  const buttonMenuOpen = document.querySelector('.main-nav__toggle--burger');
  const buttonMenuClose = document.querySelector('.main-nav__toggle--cross');
  const menu = document.querySelector('.secondary-nav');

  buttonMenuOpen.addEventListener('click', () => {
    buttonMenuOpen.classList.add('main-nav__toggle--open');
    menu.classList.add('secondary-nav--open');
  });

  buttonMenuClose.addEventListener('click', () => {
    buttonMenuOpen.classList.remove('main-nav__toggle--open');
    menu.classList.remove('secondary-nav--open');
  });

  window.addEventListener('resize', () => {
    initSwiper();
    initAccordions();
  });

  window.addEventListener('load', () => {
    initSwiper();
    initAccordions();
    initModals();
    uploadFile();
    uploadImageDrop();
    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
