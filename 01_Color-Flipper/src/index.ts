const COLORS: string[] = ['red', 'green', 'rgb(122, 155, 100)', '#f17025']

const main = document.querySelector('.main') as HTMLElement
const btn = document.querySelector('.btn') as HTMLButtonElement
const colorDefault = document.querySelector('.color-default') as HTMLSpanElement
const simple = document.querySelector('.simple') as HTMLSpanElement

simple.style.color = '#0af'

const changeColor = () => {
  let indexRandom: number = Math.random()*COLORS.length
  main.style.backgroundColor = COLORS[Math.floor(indexRandom)]
  colorDefault.innerText = COLORS[Math.floor(indexRandom)]
}

btn.addEventListener('click', changeColor)
