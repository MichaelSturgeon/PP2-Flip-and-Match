/**
 * The code below ensures that the DOM loads before starting the game. 
 */
document.addEventListener("DOMContentLoaded", function () {
    // Start of welcome screen code
    if (!document.getElementById('welcome-screen').classList.contains('hidden')) {
        /**
         * The code below will pick a value from the benefits list array at random
         * and display it on the welcome screen inside the paragraph element.
        */
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

    }
    // End of welcome screen code
    // Start of game board code
    if (!document.getElementById('game-board').classList.contains('hidden')) {
        const card = document.querySelectorAll('.card');
        card.forEach(card => card.addEventListener('click', flipcard));

        function flipcard() {
            this.classList.toggle('flip');
        }
    }
    // End of game board code
    // Start of score board code
    if (!document.getElementById('score-board').classList.contains('hidden')) {

    }
    // End of score board code
})
