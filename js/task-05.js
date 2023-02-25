const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', addInputValue)

function addInputValue(el) {

    outputEl.textContent = el.currentTarget.value;

    if (el.currentTarget.value === "") {
        outputEl.textContent = 'Anonymous';
    }
}