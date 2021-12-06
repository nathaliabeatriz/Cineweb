const menuHamburger = document.getElementById('menu-hamburger');

function menuAparece(){
    const nav = document.getElementById('navegar2');
    nav.classList.toggle('active');
}

menuHamburger.addEventListener('click', menuAparece);