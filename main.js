console.log('main file is loaded')

const burgerButton = document.getElementById('burgerButton')
const navButton = document.getElementById('navButton')
const navigation = document.getElementById('navigation')
const clickout = document.getElementById('clickout')

if (burgerButton && navigation && clickout && navButton) {
  burgerButton.addEventListener('click', toggleNavigation)

  navButton.addEventListener('click', toggleNavigation)

  clickout.addEventListener('click', toggleNavigation)
}

function toggleNavigation() {
  navigation.classList.toggle('active')
  clickout.classList.toggle('active')
}
