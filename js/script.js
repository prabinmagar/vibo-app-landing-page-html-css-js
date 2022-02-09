
// navbar toggle
const navbarToggler = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');

navbarToggler.addEventListener('click', () => {
    navbar.classList.toggle('show-navbar');
    changeTogglerIcon();
});

function changeTogglerIcon(){
    if(navbar.classList.contains('show-navbar')){
        navbarToggler.querySelector('img').src = "images/ham-menu-blue-icon.png";
    } else {
        navbarToggler.querySelector('img').src = "images/ham-menu-icon.png";
    }
}

// stop tranisition and animation while resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

// accordion
const accordionDiv = document.querySelector('.accordion');
accordionDiv.addEventListener('click', (event) => {
    if(event.target.classList.contains('accordion-title')){
        let content = event.target.nextElementSibling;
        content.classList.toggle('show-accordion');
    }
});