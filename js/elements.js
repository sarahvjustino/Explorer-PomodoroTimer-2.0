const minutesDisplay = document.querySelector('#minutes');
const secondsDisplay = document.querySelector('#seconds');
let minutes = Number(minutesDisplay.textContent);
const buttonPlay = document.querySelector('#play');
const buttonStop = document.querySelector('#stop');
const buttonAddTime = document.querySelector('#add');
const buttonSubTime = document.querySelector('#sub');
const cardForest = document.querySelector('#forest');
const cardRain = document.querySelector('#rain');
const cardStore = document.querySelector('#shop');
const cardFire = document.querySelector('#fire');
let timerTimeOut
let newMinutes

export {
    minutesDisplay,
    secondsDisplay,
    minutes,
    buttonPlay,
    buttonStop,
    buttonSubTime,
    buttonAddTime,
    cardFire,
    cardForest,
    cardRain,
    cardStore,
    timerTimeOut,
    newMinutes
}