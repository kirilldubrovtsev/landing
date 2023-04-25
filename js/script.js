const menuWrapper = document.querySelector('.header');
const menuBurger = document.querySelector('.burger');
const menuList = document.querySelector('.menu__list')

function toggleMenu () {
  menuList.classList.toggle('opened');
}

function closeMenu(evt) {
    let insideMenu = menuWrapper.contains(evt.target);

    if (!insideMenu) {
        menuList.classList.remove('opened');
    }
}

menuBurger.addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenu);
