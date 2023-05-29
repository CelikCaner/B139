const buttons = document.querySelectorAll('.buttons button');
const displayArea = document.querySelector('#displayArea');
const equals = document.querySelector('#equals');

const display = (event) => {
  const clickedButton = event.target;
  const clickedValue = clickedButton.innerText;
  if (clickedValue === '=') {
    displayArea.value = eval(displayArea.value);
  } else {
    displayArea.value += clickedValue;
  }
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', display);
}
