const count = document.querySelector('.count') as HTMLDivElement
const btnGroups = document.querySelectorAll('.btn') as NodeListOf<HTMLButtonElement>

let c = Number(count.innerHTML)
const changeColor = (i: number) => {
  if (i > 0) {
    count.style.color = '#44bd32'
  } else if (i < 0) {
    count.style.color = '#e84118'
  } else {
    count.style.color = '#2f3640'
  }
}
for (let btn of btnGroups) {
  btn.addEventListener('click', () => {
    switch (btn.innerHTML) {
      case 'Decrease':
        c--
        break;
      case 'Increase':
        c++
        break;
      case 'Reset':
        c = 0
        break;
      default:
        break;
    }
    changeColor(c)
    count.innerHTML = c.toString()
  })
}

