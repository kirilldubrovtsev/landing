// Узлы

const popupButton = document.querySelector('popup-menu__button');
const popupWrapper = document.querySelector('popup-menu');
const popupMenu = document.querySelector('.popup-menu__list');

// Клик по кнопке

popupButton.addEventListener('click', handleMenu);

// Скрыть и показать кнопку

function handleMenu() {
popupMenu.classList.toggle('hide-popup');
}

// Клик на любое место экрана
document.addEventListener('click', hidePopup);

function hidePopup(el) { 
  {
  let targetinside = popupWrapper.contains(el.target);
}

if(targetinside) {
  popupMenu.classList.add('hide-popup');
}
else {
  return;
}

}