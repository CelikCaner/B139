function add() {
  const sum =
    Number(document.querySelector('#num1').value) +
    Number(document.querySelector('#num2').value);
  document.querySelector('#result').innerText = `Result: ${sum}`;
}
