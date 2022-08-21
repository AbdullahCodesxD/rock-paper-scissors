let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');
let uPoints = document.querySelector('#upoints');
let cPoints = document.querySelector('#cpoints');
let cGuess = document.querySelector('#compGuess');

let choices = ['rock', 'paper', 'scissor'];
let machinePoints = 0;
let userPoints = 0;

rock.addEventListener('click', ()=> {
    randomNum = Math.floor(Math.random() * 4);
    machineGuess = choices[randomNum];

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
    randomNum = Math.floor(Math.random() * 4);
    machineGuess = choices[randomNum];

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
    randomNum = Math.floor(Math.random() * 4);
    machineGuess = choices[randomNum];

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