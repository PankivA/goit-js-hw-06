
let counterValue = 0;

const valueEl = document.querySelector("#value");
const decrement = document.querySelector("button[data-action='decrement']");
const increment = document.querySelector("button[data-action='increment']");

const countIncrement = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
  };

const countDecrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

increment.addEventListener("click", countIncrement);
decrement.addEventListener("click", countDecrement);
