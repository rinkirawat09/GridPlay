console.log("Welcome to Tic Tac Toe");

let music = new Audio("blue.mp3");
let audioTurn = new Audio("green.mp3");
let gameover = new Audio("yellow.mp3");
let turn = "X";
let isgameover = false;

// Function to change the Turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

// Function to check for a win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    wins.forEach(e => {
        if (boxtexts[e[0]].innerText !== '' &&
            boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) {
            isgameover = true;
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " won";
            document.querySelector('.imgbox img').style.width = "200px"; // Increase the size here
            document.querySelector('.imgbox img').style.height = "auto"; // Adjust the height if necessary
        }
    });
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    element.addEventListener('click', () => {
        let boxtext = element.querySelector('.boxtext');
        if (boxtext.innerText === '' && !isgameover) {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    });
});

// Add on click listener to reset button
document.getElementById('reset').addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox img').style.width = "0px"; // Hide the image again
    document.querySelector('.imgbox img').style.height = "auto"; // Reset the height if necessary
});
