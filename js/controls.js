export default function Controls({
    minutesDisplay,
    minutes,
    newMinutes
}) {

    function addTime() {
        newMinutes = minutesDisplay.textContent = String(minutes += 5).padStart(2, '0');
    }

    function subtractTime() {
        if (minutesDisplay.textContent >= 5) {
            newMinutes = minutesDisplay.textContent = String(minutes -= 5).padStart(2, '0');
        }
    }

    return {
        addTime,
        subtractTime
    }
}