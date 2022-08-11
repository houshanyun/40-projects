import './index.scss'

const btn = document.querySelector('.btn')
const modal = document.querySelector('.wrapper')
const close = document.querySelector('.close')

const openModal = () => {
  modal?.classList.toggle('open-modal')
}

btn?.addEventListener('click', openModal)
close?.addEventListener('click', openModal)
