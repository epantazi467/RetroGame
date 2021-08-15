//read the content of the html element at a class(.) named message
'use script';
/*
console.log(document.querySelector('.message').textContent);

//set the textContent
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//get or set the input data
console.log(document.querySelector('.guess').value); */

//eventlistener--> stin mia parametro les poio event , kai stin deuteri vazeis to handle

let secret_number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

let guess_number = function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'You did not guess';
  } //player wins
  else if (guess === secret_number) {
    document.querySelector('.message').textContent = 'that is the number!!!';
    document.querySelector('.number').textContent = secret_number;
    document.querySelector('body').style.backgroundColor = '#FF69B4';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess != secret_number) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > secret_number ? 'Oops too high ' : 'Oops too low ';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else if (score == 0) {
      document.querySelector('.message').textContent = 'Game over dude  ';
    }
  }
};
//player guesees too high

/*else if (guess > secret_number) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Oops too high ';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else if (score == 0) {
      document.querySelector('.message').textContent = 'Game over dude  ';
    }
  } //player guesses too low
  else if (guess < secret_number) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Oops too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score == 0) {
      document.querySelector('.message').textContent = 'Game over dude  ';
    }
  }
};*/

let reset = function () {
  secret_number = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing... ';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
};
document.querySelector('.check').addEventListener('click', guess_number);
document.querySelector('.again').addEventListener('click', reset);
