'use strict'

// ------------------ SIDEBAR ------------------ 

const refsSidebar = {
  btnOpen: document.querySelector('.js-header__menu-open'),
  btnMobileOpen: document.querySelector('.js-header__phone-menu-open'),
  sidebar: document.querySelector('.js-sidebar'),
  btnClose: document.querySelector('.js-sidebar__close-button')
};

function toggleHiddenClass() {
  refsSidebar.sidebar.classList.toggle('sidebar--hidden');
  document.body.classList.toggle('body--not-scrollable');
};

Object.values(refsSidebar).filter(value => value !== refsSidebar.sidebar).forEach(ref => ref.addEventListener('click', toggleHiddenClass));