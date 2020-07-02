const scrollBtn = document.querySelector('.scroll-to-top');
const mainMenu = document.querySelector('.main-menu');
const menuBtn = document.querySelector('.res-menu');
const quitBtn = document.querySelector('.quit');

scrollBtn.addEventListener('click', topFunction);
menuBtn.addEventListener('click', responsiveMenu);
quitBtn.addEventListener('click', hideMenu);

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
}

function responsiveMenu() {
    mainMenu.style.display = 'block';
    menuBtn.style.display = 'none';
    quitBtn.style.display = 'block';
}

function hideMenu() {
    mainMenu.style.display = 'none';
    menuBtn.style.display = 'block';
    quitBtn.style.display = 'none';
}