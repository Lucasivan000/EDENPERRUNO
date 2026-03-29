

const toggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const menuLinks = document.querySelectorAll('.menu-links a'); // TODOS los links

// Toggle menú hamburguesa
toggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
});

// Cerrar menú automáticamente al click en un link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('open');
    });
});


