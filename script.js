'use strict';
var score1 = 0;
var score2 = 0;
var currentscore1 = 0;
var currentscore2 = 0;
const switchplayer = function () {
  if (
    document.querySelector('.player--0').classList.contains('player--active')
  ) {
    document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('.player--0').classList.remove('player--active');
    console.log(
      document.querySelector('.player--0').classList.contains('player--active')
    );
  } else {
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
  }
};
document.querySelector('.btn--roll').addEventListener('click', function () {
  document.querySelector('.dice').classList.remove('hidden');
  const value = Math.floor(Math.random() * 6) + 1;
  const name = 'dice-' + value + '.png';
  document.querySelector('img').src = name;
  if (
    document.querySelector('.player--0').classList.contains('player--active')
  ) {
    currentscore1 = currentscore1 + value;
    if (value == 1) {
      currentscore1 = 0;
      switchplayer();
    }
    document.querySelector('#current--0').textContent = currentscore1;
  } else {
    currentscore2 = currentscore2 + value;
    if (value == 1) {
      currentscore2 = 0;
      switchplayer();
    }
    document.querySelector('#current--1').textContent = currentscore2;
  }
});
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (
    document.querySelector('.player--0').classList.contains('player--active')
  ) {
    score1 = score1 + currentscore1;
    if (score1 >= 100) {
      document.querySelector('.player--0').classList.add('player--winner');
    } else {
      switchplayer();
    }
    document.querySelector('#score--0').textContent = score1;
    currentscore1 = 0;
    document.querySelector('#current--0').textContent = 0;
  } else {
    score2 = score2 + currentscore2;
    if (score2 >= 100) {
      document.querySelector('.player--1').classList.add('player--winner');
    } else {
      switchplayer();
    }
    document.querySelector('#score--1').textContent = score2;
    currentscore2 = 0;
    document.querySelector('#current--1').textContent = 0;
  }
});
document.querySelector('.btn--new').addEventListener('click', function () {
  document.querySelector('.dice').classList.add('hidden');
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
});
