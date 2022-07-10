const navbarClick = document.querySelector('.hamburger') as HTMLElement
const nav = document.querySelector('.nav-items') as HTMLElement

navbarClick.addEventListener('click', () => {
  nav.classList.toggle('active')
})
