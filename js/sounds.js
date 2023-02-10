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

    function playForest() {
        if (cardForest.classList.contains('active')) {
            forestSound.play()
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
            fireSound.pause()
            coffeShopSound.pause()
            forestSound.pause()
        } else {
            rainSound.pause()
        }

    }

    return {
        playFire,
        playForest,
        playRain,
        playShop
    }
}