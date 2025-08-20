import {isEsc} from '../../utils/util';

const accordionContainer = document.querySelector('.secondary-nav__list');

let detailList;
let detailButton;

const resetWindowClick = () => {
  window.removeEventListener('click', onWindowClick);
  window.removeEventListener('click', onEscClick);
  detailList = '';
  detailButton = '';
};

const closeDetail = () => {
  detailList.classList.remove('detail__list--open');
  detailButton.classList.remove('detail__button--open');
  resetWindowClick();
};

const onWindowClick = (evt) => {
  if (!evt.target.closest('.secondary-nav')) {
    closeDetail();
  }
};

function onEscClick(evt) {
  if (isEsc(evt.key)) {
    closeDetail();
  }
}

const onAccordionClick = (evt) => {
  if (evt.target.closest('.detail__button')) {
    detailButton = evt.target.closest('.detail__button');
    detailButton.classList.toggle('detail__button--open');
    detailList = evt.target.closest('.detail').querySelector('.detail__list');
    detailList.classList.toggle('detail__list--open');
    window.addEventListener('click', onWindowClick);
    window.addEventListener('keydown', onEscClick);
  }
};

const onAccordionMobileClick = (evt) => {
  if (evt.target.closest('.detail__button')) {
    detailButton = evt.target.closest('.detail__button');
    detailButton.classList.toggle('detail__button--open');
    detailList = evt.target.closest('.detail').querySelector('.detail__list');
    detailList.classList.toggle('detail__list--open');
  }
};

const initAccordions = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1024) {
    accordionContainer.removeEventListener('click', onAccordionMobileClick);
    accordionContainer.addEventListener('click', onAccordionClick);
  } else {
    accordionContainer.removeEventListener('click', onAccordionClick);
    accordionContainer.addEventListener('click', onAccordionMobileClick);
  }
};

export {initAccordions};
