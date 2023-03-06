export default function Sounds({
    cardForest,
    cardFire,
    cardStore,
    cardRain
}) {
    const forestSound = new Audio('assets/sounds/Floresta.wav');
    const fireSound = new Audio('assets/sounds/Lareira.wav');
    const coffeShopSound = new Audio('assets/sounds/Cafeteria.wav');
    const rainSound = new Audio('assets/sounds/Chuva.wav');
    const forestVolumeControl = document.querySelector('.volume-control');
    const rainVolumeControl = document.querySelector('.card-wrapper:nth-child(2) .volume-control');
    const shopVolumeControl = document.querySelector('.card-wrapper:nth-child(3) .volume-control');
    const fireVolumeControl = document.querySelector('.card-wrapper:nth-child(4) .volume-control');

    function playForest() {
        if (cardForest.classList.contains('active')) {
            forestSound.play()
            forestSound.loop = true;
            fireSound.pause()
            coffeShopSound.pause()
            rainSound.pause()
        } else {
            forestSound.pause()
        }
    }
    function playFire() {
        if (cardFire.classList.contains('active')) {
            fireSound.play()
            fireSound.loop = true;
            forestSound.pause()
            coffeShopSound.pause()
            rainSound.pause()
        } else {
            fireSound.pause()
        }

    }
    function playShop() {
        if (cardStore.classList.contains('active')) {
            coffeShopSound.play()
            coffeShopSound.loop = true;
            fireSound.pause()
            forestSound.pause()
            rainSound.pause()
        } else {
            coffeShopSound.pause()
        }

    }
    function playRain() {
        if (cardRain.classList.contains('active')) {
            rainSound.play()
            rainSound.loop = true;
            fireSound.pause()
            coffeShopSound.pause()
            forestSound.pause()
        } else {
            rainSound.pause()
        }

    }



    forestVolumeControl.addEventListener('change', function () {
        forestSound.volume = this.value
    })

    rainVolumeControl.addEventListener('change', function () {
        rainSound.volume = this.value
    })

    shopVolumeControl.addEventListener('change', function () {
        coffeShopSound.volume = this.value
    })

    fireVolumeControl.addEventListener('change', function () {
        fireSound.volume = this.value
    })



    return {
        playFire,
        playForest,
        playRain,
        playShop
    }
}