const navToggle = document.getElementById('menu__toggle');
navClose = document.getElementById('menu__close');
navMenu = document.getElementById('nav__menu');
showOverlay = document.getElementById('overlay');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        showOverlay.classList.add('show-overlay')
    })
    
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
        showOverlay.classList.remove('show-overlay')
    })
    
}