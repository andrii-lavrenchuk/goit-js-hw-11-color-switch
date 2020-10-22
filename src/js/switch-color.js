import colorsArr from './colors'

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector("button[data-action='start']"),
  stopBtn: document.querySelector("button[data-action='stop']"),
  body: document.querySelector('body')
}

refs.startBtn.addEventListener('click', onStartBtnClick)
refs.stopBtn.addEventListener('click', onStoptBtnClick)

let intervalId;

function onStartBtnClick() {
   intervalId = setInterval(() => {
    refs.body.style.backgroundColor = colorsArr[randomIntegerFromInterval(0, colorsArr.length-1)];

  }, 1000);
    refs.startBtn.disabled = true;
    refs.startBtn.textContent= 'Disabled'

}
function onStoptBtnClick() {
  clearInterval(intervalId);
    refs.startBtn.disabled = false;
        refs.startBtn.textContent= 'Start'

}