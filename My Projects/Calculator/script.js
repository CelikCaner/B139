const buttons = document.querySelectorAll('.buttons button');
const displayArea = document.querySelector('#displayArea');
const equals = document.querySelector('#equals');

const display = (event) => {
  const clickedButton = event.target;
  const clickedValue = clickedButton.innerText;
  displayArea.value += clickedValue;
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', display);
}

// equals.addEventListener('click', () => {
//   const operation = displayArea.value;
//   const result = eval(operation);
//   displayArea.value = result;
// });
