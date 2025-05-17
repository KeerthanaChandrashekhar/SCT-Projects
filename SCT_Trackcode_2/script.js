let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function updateDisplay() {
  const time = Date.now() - startTime + elapsedTime;
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  document.getElementById("display").textContent =
    `${String(hours).padStart(2, '0')}:` +
    `${String(minutes).padStart(2, '0')}:` +
    `${String(seconds).padStart(2, '0')}`;
}

function startStopwatch() {
  if (isRunning) return;
  isRunning = true;
  startTime = Date.now();
  timer = setInterval(updateDisplay, 1000);
}

function pauseStopwatch() {
  if (!isRunning) return;
  isRunning = false;
  clearInterval(timer);
  elapsedTime += Date.now() - startTime;
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function recordLap() {
  if (!isRunning) return;
  const lapTime = document.getElementById("display").textContent;
  const li = document.createElement("li");
  li.textContent = `Lap: ${lapTime}`;
  document.getElementById("laps").appendChild(li);
}
