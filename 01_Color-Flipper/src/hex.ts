const mainHex = document.querySelector(".main") as HTMLElement;
const btnHex = document.querySelector(".btn") as HTMLButtonElement;
const colorHex = document.querySelector(".color-hex") as HTMLSpanElement;
const navHex = document.querySelector(".hex") as HTMLSpanElement;

navHex.style.color = "#0af";

const changeHexColor = () => {
  let indexRandom: number = Math.random();
  let hex = indexRandom.toString(16).substring(2, 8);
  mainHex.style.backgroundColor = `#${hex}`;
  colorHex.innerHTML = `#${hex}`;
};

window.addEventListener("load", changeHexColor);

btnHex.addEventListener("click", changeHexColor);
