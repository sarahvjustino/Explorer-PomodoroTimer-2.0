export default function Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    minutes,
}) {
    function updateTimerDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, '0');
        secondsDisplay.textContent = String(seconds).padStart(2, '0');
    }

    function countdown() {
        timerTimeOut = setTimeout(function () {
            let seconds = Number(secondsDisplay.textContent);
            let minutes = Number(minutesDisplay.textContent);

            updateTimerDisplay(minutes, 0)

            if (minutes <= 0) {
                return
            }

            minutesDisplay.textContent = String(minutes - 1).padStart(2, '0');

            if (seconds <= 0) {
                seconds = 60
                --minutes
            }

            updateTimerDisplay(minutes, String(seconds - 1))

            countdown()
        }, 1000)
    }

    function resetTimer() {
        clearTimeout(timerTimeOut)
        updateTimerDisplay(minutesDisplay, 0)
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    return {
        countdown,
        resetTimer,
        updateMinutes,
    }
}

