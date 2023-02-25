const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", changeFontSize);

function changeFontSize(el) {
  text.style.fontSize = `${el.target.value}px`;
}