// let JS know that "play" equals the 'button' element with the id "play"
let play = document.getElementById("play");
let counter = document.getElementById("counter");
let counterContainerClass = document.getElementsByClassName("counterContainer");

// set the counter to 0
counter.innerHTML = 0;
function playFart() {
    // the different fart audio files as separate variables
    let fart1 = new Audio("fartSoundEffects/quickFart.mp3");
    let fart2 = new Audio("fartSoundEffects/reverbFart.mp3");
    let fart3 = new Audio("fartSoundEffects/longFart.mp3");
    let fart4 = new Audio("fartSoundEffects/quickVerbFart.mp3");
    let fart5 = new Audio("fartSoundEffects/wetFart.mp3");
    let fart6 = new Audio("fartSoundEffects/fart6.mp3");
    let fart7 = new Audio("fartSoundEffects/fart7.mp3");
    let fart8 = new Audio("fartSoundEffects/fart8.mp3");
    let fart9 = new Audio("fartSoundEffects/fart9.mp3");
    // combine the farts into a single variable as an array
    let fartArray = [fart1, fart2, fart3, fart4, fart5, fart6, fart7, fart8, fart9]
    // picks a random number within counted sum of variables within "fartArray"
    var randomizer = Math.floor(Math.random() * fartArray.length);
    // take the array "fartArray", and have a random variable chosen, and store it in the variable "chosenFart"
    var chosenFart = fartArray[randomizer];
        // play the chosenFart
        chosenFart.play();
};

function increaseCounterContainerFontSize() {
    txt = document.getElementById('counterContainer');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1) + 'px';
};

// when the play button is clicked, play a fart and increase the container font size by 1px
play.addEventListener("click", playFart);
play.addEventListener("click", increaseCounterContainerFontSize);

// increment the counter by 1 everytime the user clicks on the button
play.onclick = function()
{
    counter.innerHTML++;

};
