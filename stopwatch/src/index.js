import {
  addLapListElement,
  updateStopwatchText,
} from './utils/updateStopwatchText.js';
import { isNewSession } from './utils/checkIfZero.js';

const result = document.querySelector('.stopwatch');
const lapsList = document.querySelector('.laps');
let counter = 0;
let lapCounter = 0;
let interval;

const startHandler = () => {
  start.disabled = true;
  stop.disabled = false;
  lap.disabled = false;
  reset.disabled = false;
  if (interval) return;
  const isNew = isNewSession(result.textContent);

  if (isNew) {
    interval = setInterval(function () {
      counter += 10;
      lapCounter += 10;
      updateStopwatchText(counter, result);
    }, 10);
  }

  if (!isNew) {
    interval = setInterval(function () {
      counter += 10;
      lapCounter += 10;
      updateStopwatchText(counter, result);
    }, 10);
  }
};

const lapHandler = () => {
  addLapListElement(lapsList, lapCounter);
  lapCounter = 0;
};

const stopHandler = () => {
  stop.disabled = true;
  start.disabled = false;
  clearInterval(interval);
  interval = undefined;
};

const resetHandler = () => {
  reset.disabled = true;
  start.disabled = false;
  stop.disabled = true;
  lap.disabled = true;
  clearInterval(interval);
  interval = undefined;
  counter = 0;
  lapCounter = 0;
  updateStopwatchText(counter, result);
  lapsList.innerHTML = '';
};

//Start
const start = document.getElementById('start');
start.addEventListener('click', startHandler);

// Lap
const lap = document.getElementById('lap');
lap.addEventListener('click', lapHandler);
lap.disabled = true;
// Stop
const stop = document.getElementById('stop');
stop.addEventListener('click', stopHandler);
stop.disabled = true;

// Reset
const reset = document.getElementById('reset');
reset.addEventListener('click', resetHandler);
reset.disabled = true;
