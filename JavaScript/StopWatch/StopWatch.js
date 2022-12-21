//Stopwatch in 6 hours
let timer = setInterval(stopWatch, 1000)
let hours = 6;
let minutes = 0;
let seconds = 0;

function stopWatch() {
    seconds += 1;
    if (seconds === 60) {
        minutes += 1
        seconds = 0;
    }
    if (minutes === 60) {
        hours -= 1
        minutes = 0;

    }
    if (hours === 6 && minutes === 0 && seconds === 0) {
        clearInterval(timer)
    }
    console.log(`${hours} hours: ${minutes} minutes: ${seconds} seconds`) 
}