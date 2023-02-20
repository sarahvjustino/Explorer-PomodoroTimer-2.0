import Timer from "./timer.js";
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
    lightMode,
    darkMode,
    main,
    body
} from "./elements.js";
import Sounds from "./sounds.js";
import Events from "./events.js";

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    minutes
})

const buttons = Buttons()

const sounds = Sounds({
    cardForest,
    cardFire,
    cardStore,
    cardRain
})

Events({
    timer,
    sounds,
    buttons,
})

lightMode.addEventListener('click', () => {
    darkMode.style.display = 'block';
    lightMode.style.display = 'none';
    main.classList.add('dark');
    body.classList.add('dark');
});

darkMode.addEventListener('click', () => {
    lightMode.style.display = 'block';
    darkMode.style.display = 'none';
    main.classList.remove('dark');
    body.classList.remove('dark');
});

