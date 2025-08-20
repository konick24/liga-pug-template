const bunnerButtonsList = document.querySelector('.bunner__list');
const bunnerList = document.querySelector('.bunner-content__list');
const bunnerItems = bunnerList.querySelectorAll('.bunner-content__item');

bunnerButtonsList
    .querySelector('.bunner__item--current')
    .querySelector('.bunner__button')
    .disabled = true;

bunnerButtonsList.addEventListener('click', (evt) => {
  const currentItem = evt.target.closest('.bunner__item');

  if (!currentItem.classList.contains('bunner__item--current')) {
    const preItem = bunnerButtonsList.querySelector('.bunner__item--current');
    const preBunner = bunnerList.querySelector('.bunner-content__item--current');
    let currentBunner;

    if (preItem) {
      preItem.classList.remove('bunner__item--current');
      preItem.querySelector('.bunner__button').disabled = false;
      preBunner.classList.remove('bunner-content__item--current');
    }

    currentItem.classList.add('bunner__item--current');
    currentItem.querySelector('.bunner__button').disabled = true;

    bunnerItems.forEach((item) => {
      if (item.dataset.bunnerItem === currentItem.dataset.bunnerContentItem) {
        currentBunner = item;
      }
    });

    currentBunner.classList.add('bunner-content__item--current');
  }
});
