export default function Buttons() {
    function removeForestSound() {
        document.querySelector('.cards .card:nth-child(1)').classList.remove('active')
        document.querySelector('.cards .card:nth-child(1) svg').classList.remove('active')
    }

    function removeRainSound() {
        document.querySelector('.cards .card:nth-child(2)').classList.remove('active')
        document.querySelector('.cards .card:nth-child(2) svg').classList.remove('active')
    }

    function removeStoreSound() {
        document.querySelector('.cards .card:nth-child(3)').classList.remove('active')
        document.querySelector('.cards .card:nth-child(3) svg').classList.remove('active')
    }

    function removeFireSound() {
        document.querySelector('.cards .card:nth-child(4)').classList.remove('active')
        document.querySelector('.cards .card:nth-child(4) svg').classList.remove('active')
    }

    return {
        removeFireSound,
        removeForestSound,
        removeRainSound,
        removeStoreSound
    }
}



