const hamburger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    mobileMenu.classList.toggle('active')
})