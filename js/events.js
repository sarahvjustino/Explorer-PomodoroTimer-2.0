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
}