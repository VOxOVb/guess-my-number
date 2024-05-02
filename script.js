'use strict';
// console.log(document.querySelector('.message').textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let guess;

const changeTextContent = function (elem, message) {
  document.querySelector(elem).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    changeTextContent('.message', '⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    changeTextContent('.message', '🎉 Correct Number!');
    changeTextContent('.number', secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      changeTextContent('.highscore', highScore);
    }

    //When guess is wrong
  } else {
    if (score > 1) {
      changeTextContent(
        '.message',
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      changeTextContent('.score', score);
    } else {
      document.querySelector('.message').textContent = '🎆 You lost the game!';
      changeTextContent('.score', 0);
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  changeTextContent('.message', 'Start guessing...');
  changeTextContent('.number', '?');
  changeTextContent('.score', score);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
