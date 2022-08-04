import './index.scss'

const hamburger: HTMLDivElement | null = document.querySelector('.hamburger')
const close: HTMLDivElement | null = document.querySelector('.close')
const aside: HTMLElement | null = document.querySelector('.aside')

hamburger?.addEventListener('click', () => {
  aside?.classList.toggle('active')
})
close?.addEventListener('click', () => {
  aside?.classList.toggle('active')
})

