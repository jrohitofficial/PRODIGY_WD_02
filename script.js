let timer;
let isRunning = false;
let lapCounter = 1;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').textContent = 'Start';
        isRunning = false;
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById('startStop').textContent = 'Stop';
        isRunning = true;
    }
}

function updateDisplay() {
    let display = document.getElementById('display');
    let time = display.textContent.split(':');
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let seconds = parseInt(time[2]);

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    display.textContent = 
        (hours < 10 ? '0' + hours : hours) + ':' +
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds);
}

function lap() {
    let display = document.getElementById('display').textContent;
    let lapItem = document.createElement('li');
    lapItem.textContent = 'Lap ' + lapCounter + ': ' + display;
    document.getElementById('laps').appendChild(lapItem);
    lapCounter++;
}

function reset() {
    clearInterval(timer);
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('startStop').textContent = 'Start';
    isRunning = false;
    lapCounter = 1;
    document.getElementById('laps').innerHTML = '';
}

document.getElementById('startStop').addEventListener('click', startStop);
document.getElementById('lap').addEventListener('click', lap);
document.getElementById('reset').addEventListener('click', reset);
