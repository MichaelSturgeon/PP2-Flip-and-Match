// Load the DOM before starting the game.
document.addEventListener("DOMContentLoaded", function () {

    //Global variables
    const welcomeScreen = document.getElementById('welcome-screen');
    const gameBoard = document.getElementById('game-board');
    const scoreBoard = document.getElementById('score-board');
    const timerDisplay = document.getElementById('timer-display');
    const cards = document.querySelectorAll('.card');
    const cardsFlipped = document.getElementsByClassName('flip');
    const matchedCards = document.getElementsByClassName('match');
    let min = 0;
    let sec = 0;
    let preventClick = false;
    let firstCard = null;
    let secondCard = null;

    // Start of welcome screen code    
    // Add click event to play button.
    const playButton = document.getElementById('play-button');
    playButton.addEventListener('click', () => {
        welcomeScreen.classList.add('hidden');
        gameBoard.classList.remove('hidden');
        startGame();
    })

    // Display a random benefit on welcome screen.
    const benefits = document.getElementById('benefits');

    const benefitsList = [
        'In a world filled with distractions, memory games can help extend your childs attention span and encourage brain their to stay focused.',
        'Memory games can promote neuroplasticity, which is the brains ability to reorganize itself and form new connections. ',
        'By practising information retrieval, students can apply these techniques to any other area of school.',
        'By participating in cognitive training, children gain impulse control and decision-making skills.',
        'In addition to being entertaining, memory games encouraging healthy competition, and also support the intellectual development of young minds.',
        'Children that play memory games on a regular basis show enhanced abilities in identifying patterns and comprehending information that is displayed as objects, maps, or images.',
        'Training the brain with these types of games is beneficial to both its expansion, and maturity.',
        'The focus and concentration required by memory games will develop a childs ability to learn to manage distractions.',
        'Memory games encourage children to develop their problem solving skills, and think outside the box in order to succeed in the game.'
    ];
    benefits.innerText = benefitsList[Math.floor(Math.random() * benefitsList.length)];
    renderBenefits = setInterval(function () {
        benefits.innerText = benefitsList[Math.floor(Math.random() * benefitsList.length)]
    }, 10000);

    // End of welcome screen code

    // Start of game board code   
    // End of game board code

    // Start of score board code
    // Add click event to retry button.
    const playerScores = document.getElementById('player-scores');

    let playerScoresList = [
        {
            name: 'Bradley',
            score: '01:23'
        },
        {
            name: 'Foley',
            score: '04:56'
        },
        {
            name: 'Conners',
            score: '07:89'
        },
        {
            name: 'Jones',
            score: "01:11"
        }];

        renderScores();

    const retryButton = document.getElementById('retry-button');
    retryButton.addEventListener('click', () => {
        resetGameBoard();
        gameBoard.classList.remove('hidden');
        scoreBoard.classList.add('hidden');
        startGame();
    })
    // End of score board code

    // Functions
    function startGame() {
        shuffleCards();
        startTimer();
        cards.forEach(card => card.addEventListener('click', flipcard));
    }

    function shuffleCards() {
        cards.forEach(card => {
            card.style.order = Math.floor(Math.random() * cards.length);
        });
    }

    function startTimer() {

        timerIntId = setInterval(() => {
            sec++;
            if (sec == 60) {
                min++;
                sec = 0;
            }

            let minDisplayed = min;
            let secDisplayed = sec;

            if (min < 10) {
                minDisplayed = "0" + minDisplayed;
            }

            if (sec < 10) {
                secDisplayed = "0" + secDisplayed;
            }

            if (min == 60) {
                timer = false;
                return timer;
            }

            timerDisplay.innerHTML = minDisplayed + ':' + secDisplayed;

        }, 1000)

    }

    function flipcard() {
        if (preventClick) {
            return;
        }

        if (cardsFlipped.length < 2) {

            if (!this.classList.contains('flip', 'match')) {

                this.classList.add('flip');

                if (firstCard === null) {
                    firstCard = this;

                } else if (secondCard === null) {
                    secondCard = this;
                }
            }
        }
        checkMatching();
        checkWinner();

    }

    function checkMatching() {
        if (cardsFlipped.length === 2) {
            preventClick = true;
            if (firstCard.childNodes[1].alt === secondCard.childNodes[1].alt) {
                firstCard.classList.add('match');
                secondCard.classList.add('match');
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                firstCard = null;
                secondCard = null;
                preventClick = false;
                return firstCard, secondCard;
            }

            if (firstCard.childNodes[1].alt !== secondCard.childNodes[1].alt) {
                setTimeout(() => {
                    firstCard.classList.remove('flip');
                    secondCard.classList.remove('flip');
                    firstCard = null;
                    secondCard = null;
                    preventClick = false;
                    return firstCard, secondCard;
                }, 1000);
            }
        }
    }

    function checkWinner() {
        if (matchedCards.length === 12) {
            clearInterval(timerIntId);
            setTimeout(() => {
                gameBoard.classList.add('hidden');
                scoreBoard.classList.remove('hidden');
            }, 2000)
        }
    }

    function renderScores() {
        for(i = 0; i < playerScoresList.length; i++) {
            playerScores.innerHTML += `<li>${playerScoresList[i].name} ${playerScoresList[i].score}</li>`
        }
    }

    function resetGameBoard() {
        min = 0;
        sec = 0;
        timerDisplay.innerHTML = "00:00";
        cards.forEach(card => {
            card.classList.remove('flip', 'match');
        });
    }

})
