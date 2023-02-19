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