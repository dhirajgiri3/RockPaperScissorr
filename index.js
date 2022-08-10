

function getComputerChoice() {
    let rpsChoices = ['Rock', 'Paper', 'Scissors']
    let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
    return computerChoice
  }

function getResult(playerChoice, computerChoice) {

    let score;


    if (playerChoice === computerChoice) {

        score = 0
        result.style.color = 'grey'

    }

    else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        score = 1
        result.style.color = 'lightgreen'

    }

    else if (playerChoice === "Paper" && computerChoice === "Rock") {
        score = 1
        result.style.color = 'lightgreen'

    }

    else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        score = 1
        result.style.color = 'lightgreen'


    }

    else {
        score = -1
        result.style.color = 'red'
    }


    return score
}

function showResult(score, playerChoice, computerChoice) {
   
    let result = document.getElementById('result')
    switch (score) {
        case -1:
            result.innerText = `You Lose!`
            break;
        case 0:
            result.innerText = `It's a Draw!`
            break;
        case 1:
            result.innerText = `You Win!`
            break;
    }


    let yourcore= "Your Score:"
    let playerScore = document.getElementById('playerscore')
    let hands = document.getElementById('hands')
    playerScore.innerHTML =`${Number(playerScore.innerText)+ score}`
    hands.innerText = ` ${playerChoice} vs ${computerChoice}(Bot)`
}

function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice.value, computerChoice)
    showResult(score, playerChoice.value, computerChoice)
}

// if (result === `You Lose!`) {
//     result.style.color = 'red'
// }

// else if (result === `You Win!`) {S
//     result.style.color = 'green'
// }

// else {

//     result.style.color = 'white'
// }

function playGame() {
  
    let rpsButtons = document.querySelectorAll('.rpsButton')

    
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => { onClickRPS(rpsButton) }
    })

    let endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame()
}


function endGame() {
    let playerScore = document.getElementById('playerscore')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
  }
  
  playGame()


