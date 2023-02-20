export default function Buttons() {
    function removeForestSound() {
        document.querySelector('.cards .card-wrapper:nth-child(1) .card').classList.remove('active')
        document.querySelector('.cards .card-wrapper:nth-child(1) .card svg').classList.remove('active')
    }

    function removeRainSound() {
        document.querySelector('.cards .card-wrapper:nth-child(2) .card').classList.remove('active')
        document.querySelector('.cards .card-wrapper:nth-child(2) .card svg').classList.remove('active')
    }

    function removeStoreSound() {
        document.querySelector('.cards .card-wrapper:nth-child(3) .card').classList.remove('active')
        document.querySelector('.cards .card-wrapper:nth-child(3) .card svg').classList.remove('active')
    }

    function removeFireSound() {
        document.querySelector('.cards .card-wrapper:nth-child(4) .card').classList.remove('active')
        document.querySelector('.cards .card-wrapper:nth-child(4) .card svg').classList.remove('active')
    }

    return {
        removeFireSound,
        removeForestSound,
        removeRainSound,
        removeStoreSound
    }
}



