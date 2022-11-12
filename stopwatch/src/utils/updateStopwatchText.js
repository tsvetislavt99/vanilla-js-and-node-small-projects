import { formatDigits } from './format.js';

export function updateStopwatchText(time, element) {
  element.textContent = createStopWatchText(time);
}

export function addLapListElement(lapsList, time) {
  const li = document.createElement('li');
  li.textContent = createStopWatchText(time);
  lapsList.appendChild(li);
}

function createStopWatchText(time) {
  let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((time % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((time % 1000) / 10);

  return (
    formatDigits(hours) +
    ':' +
    formatDigits(minutes) +
    ':' +
    formatDigits(seconds) +
    ':' +
    formatDigits(milliseconds)
  );
}
