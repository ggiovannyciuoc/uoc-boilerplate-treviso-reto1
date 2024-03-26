/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

/* Responsive Navigation */


const toggleButton = document.querySelector('.header__toggle-menu');
const menu = document.querySelector('.header__menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close the menu when a menu item is clicked
const menuItems = document.querySelectorAll('.header__menu a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});



