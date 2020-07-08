let isShow = false
const mobileNav = document.querySelector('.overlay-menu')
const burgerButton = document.querySelector('.nav__burger-button i')

function onToggleNav() {
  if (isShow === false) {
    mobileNav.classList.add('show')
    burgerButton.innerText = 'close'
    isShow = true
  } else {
    mobileNav.classList.remove('show')
    burgerButton.innerText = 'menu'
    isShow = false
  }
}
