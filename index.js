
function gameLoop(){
    let letter = getRandomAlphabet();
    
    let targetVal = document.getElementById('target');
    targetVal.innerText = letter;

    setBackgroundColor(letter);
}


function play(){
    hiddenElement('home-screen');
    hiddenElement('sore-section');
    addElEment('play-ground');

    setTextValueById('current-life', 5);
    setTextValueById('current-score', 0)

    gameLoop();
}

