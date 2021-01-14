

const navbarIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

navbarIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});

