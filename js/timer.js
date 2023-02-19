export default function Timer({
    minutesDisplay,
    secondsDisplay,
    minutes,
}) {

    let timerTimeOut

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
        updateTimerDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function addTime() {
        minutesDisplay.textContent = String(minutes += 5).padStart(2, '0');
    }

    function subtractTime() {
        if (minutesDisplay.textContent >= 5) {
            minutesDisplay.textContent = String(minutes -= 5).padStart(2, '0');
        }
    }

    return {
        countdown,
        resetTimer,
        updateTimerDisplay,
        addTime,
        subtractTime
    }
}

