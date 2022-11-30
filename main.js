let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');
let uPoints = document.querySelector('#upoints');
let cPoints = document.querySelector('#cpoints');
let cGuess = document.querySelector('#compGuess');

let choices = ['rock', 'paper', 'scissor'];
let machinePoints = 0;
let userPoints = 0;

const random = function(){
    return Math.floor(Math.random() * 4);
}

rock.addEventListener('click', ()=> {
    machineGuess = choices[random()];

    if (machineGuess == 'rock') {
        alert('Draw!');
        cGuess.innerText = '✊';
    }
    else if (machineGuess == 'paper') {
        machinePoints++;
        cPoints.innerText = machinePoints;
        cGuess.innerText = '🖐️';
    }
    else {
        userPoints++;
        uPoints.innerText = userPoints;
        cGuess.innerText = '✌️';
    }
})

paper.addEventListener('click', ()=> {
    machineGuess = choices[random()];

    if (machineGuess == 'paper') {
        alert('Draw!');
        cGuess.innerText = '🖐️';
    }
    else if (machineGuess == 'scissor') {
        machinePoints++;
        cPoints.innerText = machinePoints;
        cGuess.innerText = '✌️';
    }
    else {
        userPoints++;
        uPoints.innerText = userPoints;
        cGuess.innerText = '✊';
    }
})

scissor.addEventListener('click', ()=> {
    machineGuess = choices[random()];

    if (machineGuess == 'scissor') {
        alert('Draw!');
        cGuess.innerText = '✌️';
    }
    else if (machineGuess == 'rock') {
        machinePoints++;
        cPoints.innerText = machinePoints;
        cGuess.innerText = '✊';
    }
    else {
        userPoints++;
        uPoints.innerText = userPoints;
        cGuess.innerText = '🖐️';
    }
})
