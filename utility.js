
function getTextElementById(element){
    let elementScore = document.getElementById(element);
    let elementScoreText = elementScore.innerText;
    let elementScoreValue = parseInt(elementScoreText);

    return elementScoreValue;
}

function setTextValueById(element, value){
    let elementText = document.getElementById(element);
    elementText.innerText = value;
}

function getCurrentAlphabet(element){
    let alphabet = document.getElementById(element);
    return alphabet;
}

function gameOver(){
    hiddenElement('play-ground');
    addElEment('sore-section');

    let finalScore = getTextElementById('current-score');
    setTextValueById('final-score', finalScore);

    let currentAphabet = getCurrentAlphabet('target').innerText;
    removeBackgroundColor(currentAphabet);
}

function handleKeyBordButtonPress(event){
    let playerPressed = event.key;

    if(event.key === 'Escape'){
        gameOver();
    }

    // Expected key
    let targetValElement = document.getElementById('target');
    let targetValText = targetValElement.innerText;
    let targetValue = targetValText.toLowerCase();
    
    if(playerPressed === targetValue){
        removeBackgroundColor(playerPressed);

        // Score 
        // let scoreValueElement = document.getElementById('current-score');
        // let scoreValueText = scoreValueElement.innerText;
        // let scoreValue = parseInt(scoreValueText)

        // newScore = scoreValue + 1;
        // scoreValueElement.innerText = newScore;

        let currentScore = getTextElementById('current-score');

        updatedScore = currentScore + 1;

        setTextValueById('current-score', updatedScore);

        gameLoop();
    }
    else{
        console.log("You lose your life");
        // let currentLifeElement = document.getElementById('current-life');
        // let currentLifeText = currentLifeElement.innerText;
        // let currentLife = parseInt(currentLifeText);

        // updateLifeScore = currentLife - 1;

        // currentLifeElement.innerText = updateLifeScore;

        // if(updateLifeScore < 0){
        //     hiddenElement('play-ground');
        //     addElEment('sore-section')
        // }

        let currentScore = getTextElementById('current-life');
        updatedScore = currentScore - 1;

        setTextValueById('current-life', updatedScore);

        if(updatedScore < 0){
            gameOver();
        }
    }
}


document.addEventListener('keyup', handleKeyBordButtonPress);


function hiddenElement(elementId){
    let element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function addElEment(elementId){
    let element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColor(elementId){
    let element = document.getElementById(elementId);
    element.classList.add('bg-orange-500')
}

function removeBackgroundColor(elementId){
    let element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500')
}

function getRandomAlphabet(){
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    let alphabet = alphabetString.split('');
    
    let randomNumber = Math.random() * 26;
    let index = Math.round(randomNumber);

    return alphabet[index]
}