"use strict";
const mainHex = document.querySelector('.main');
const btnHex = document.querySelector('.btn');
const colorHex = document.querySelector('.color-hex');
const navHex = document.querySelector('.hex');
navHex.style.color = '#0af';
const changeHexColor = () => {
    let indexRandom = Math.random();
    let hex = indexRandom.toString(16).substring(2, 8);
    mainHex.style.backgroundColor = `#${hex}`;
    colorHex.innerHTML = `#${hex}`;
};
window.addEventListener('load', changeHexColor);
btnHex.addEventListener('click', changeHexColor);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGV4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2hleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQWdCLENBQUE7QUFDOUQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQXNCLENBQUE7QUFDbEUsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQW9CLENBQUE7QUFDeEUsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQW9CLENBQUE7QUFHaEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFBO0FBRTNCLE1BQU0sY0FBYyxHQUFHLEdBQUcsRUFBRTtJQUMxQixJQUFJLFdBQVcsR0FBVyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDdkMsSUFBSSxHQUFHLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ2xELE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUE7SUFDekMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBO0FBQ2hDLENBQUMsQ0FBQTtBQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUE7QUFFL0MsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQSJ9