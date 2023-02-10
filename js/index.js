import Timer from "./timer.js";
import Controls from "./controls.js";
import Buttons from "./buttons.js";
import {
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
    timerTimeOut
} from "./elements.js";
import Sounds from "./sounds.js";


const controls = Controls({
    minutesDisplay,
    minutes
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    minutes
})

const buttons = Buttons()

const sounds = Sounds({
    cardForest,
    cardFire,
    cardStore,
    cardRain
})

buttonPlay.addEventListener('click', () => {
    timer.countdown()
    timer.updateMinutes(minutes)
})

buttonStop.addEventListener('click', () => {
    timer.resetTimer()
    timer.updateMinutes(minutes)

})

buttonAddTime.addEventListener('click', () => {
    controls.addTime();
})

buttonSubTime.addEventListener('click', () => {
    controls.subtractTime();
})

cardForest.addEventListener('click', () => {
    document.querySelector('.cards .card:nth-child(1)').classList.toggle('active')
    document.querySelector('.cards .card:nth-child(1) svg').classList.toggle('active')
    buttons.removeStoreSound()
    buttons.removeRainSound()
    buttons.removeFireSound()
    sounds.playForest()
})

cardRain.addEventListener('click', () => {
    document.querySelector('.cards .card:nth-child(2)').classList.toggle('active')
    document.querySelector('.cards .card:nth-child(2) svg').classList.toggle('active')
    buttons.removeForestSound()
    buttons.removeStoreSound()
    buttons.removeFireSound()
    sounds.playRain()
})

cardStore.addEventListener('click', () => {
    document.querySelector('.cards .card:nth-child(3)').classList.toggle('active')
    document.querySelector('.cards .card:nth-child(3) svg').classList.toggle('active')
    buttons.removeFireSound()
    buttons.removeForestSound()
    buttons.removeRainSound()
    sounds.playShop()
})

cardFire.addEventListener('click', () => {
    document.querySelector('.cards .card:nth-child(4)').classList.toggle('active')
    document.querySelector('.cards .card:nth-child(4) svg').classList.toggle('active')
    buttons.removeForestSound()
    buttons.removeRainSound()
    buttons.removeStoreSound()
    sounds.playFire()
})