let timerInterval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    timerInterval = setInterval(updateTime, 10); // Update every 10 milliseconds
    isRunning = true;
  }
}

function stop() {
  clearInterval(timerInterval);
  isRunning = false;
}

function reset() {
  clearInterval(timerInterval);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  updateDisplay();
  isRunning = false;
}

function updateTime() {
  milliseconds += 10;

  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
  }

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  updateDisplay();
}

function updateDisplay() {
  const displayElement = document.getElementById("display");
  displayElement.textContent = `${padTime(minutes)}:${padTime(
    seconds
  )}:${padTime(milliseconds / 10)}`;
}

function padTime(time) {
  return time.toString().padStart(2, "0");
}