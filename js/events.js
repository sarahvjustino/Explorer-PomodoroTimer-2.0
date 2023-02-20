import {
    buttonPlay,
    buttonStop,
    buttonSubTime,
    buttonAddTime,
    cardFire,
    cardForest,
    cardRain,
    cardStore,
} from "./elements.js"

export default function Events({
    controls,
    timer,
    sounds,
    buttons,
}) {
    buttonPlay.addEventListener('click', () => {
        timer.countdown()
    })

    buttonStop.addEventListener('click', () => {
        timer.resetTimer()
    })

    buttonAddTime.addEventListener('click', () => {
        timer.addTime();
    })

    buttonSubTime.addEventListener('click', () => {
        timer.subtractTime();
    })

    cardForest.addEventListener('click', () => {
        document.querySelector(".cards .card-wrapper:nth-child(1) .card").classList.toggle('active')
        document.querySelector('.cards .card-wrapper:nth-child(1) .card svg').classList.toggle('active')
        buttons.removeStoreSound()
        buttons.removeRainSound()
        buttons.removeFireSound()
        sounds.playForest()
    })

    cardRain.addEventListener('click', () => {
        document.querySelector('.cards .card-wrapper:nth-child(2) .card').classList.toggle('active')
        document.querySelector('.cards .card-wrapper:nth-child(2) .card svg').classList.toggle('active')
        buttons.removeForestSound()
        buttons.removeStoreSound()
        buttons.removeFireSound()
        sounds.playRain()
    })

    cardStore.addEventListener('click', () => {
        document.querySelector('.cards .card-wrapper:nth-child(3) .card').classList.toggle('active')
        document.querySelector('.cards .card-wrapper:nth-child(3) .card svg').classList.toggle('active')
        buttons.removeFireSound()
        buttons.removeForestSound()
        buttons.removeRainSound()
        sounds.playShop()
    })

    cardFire.addEventListener('click', () => {
        document.querySelector('.cards .card-wrapper:nth-child(4) .card').classList.toggle('active')
        document.querySelector('.cards .card-wrapper:nth-child(4) .card svg').classList.toggle('active')
        buttons.removeForestSound()
        buttons.removeRainSound()
        buttons.removeStoreSound()
        sounds.playFire()
    })
}