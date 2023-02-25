function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");


changeColor.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const getColor = getRandomHexColor();
  document.body.style.backgroundColor = `${getColor}`;
  color.textContent = getColor;
}