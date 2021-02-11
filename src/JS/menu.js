const refs = {
  menuRef: document.querySelector('.js-menu'),
};

import itemsMenu from '../templates/menu.hbs';
import menu from '../menu.json';
const murkup = itemsMenu(menu);

refs.menuRef.insertAdjacentHTML('beforeend', murkup);
