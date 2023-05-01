const time = document.getElementById('time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let seconds = 0;
let interval = null;

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

function timer() {
  seconds++;

  let hours = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hours * 3600) / 60);
  let secs = seconds % 60;

  if (secs < 10) {
    secs = '0' + secs;
  }
  if (mins < 10) {
    mins = '0' + mins;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }
  time.innerText = `${hours}:${mins}:${secs}`;
}

function start() {
  if (interval) {
    return;
  }
  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  time.innerText = '00:00:00';
}
