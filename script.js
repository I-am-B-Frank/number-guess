'use strict';
/*prevent cheating
disable R-click*/
window.addEventListener('contextmenu', e => {
  e.preventDefault();
});
window.addEventListener('keydown', e => {
  if (e.key === 'F12') {
    e.preventDefault();
  }
  //attach Enter, prevent 2x-click
  if (e.key === 'Enter') {
    cc.click();
    e.preventDefault();
  }
});
//variables, etc.
const cc = document.querySelector('.check');
const nc = document.querySelector('.number');
const gc = document.querySelector('.guess');
const ls = document.querySelector('.label-score');
const dm = document.querySelector('.message');
const ns = document.querySelector('.score');
let sn = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hs = 0;
const mg = guess => {
  guess = Math.trunc(Number(gc.value));
  return guess;
};
const cb = cb => (document.querySelector('body').style.backgroundColor = cb);

//play
cc.addEventListener('click', () => {
  console.log(mg(), sn); //cheat
  if (!mg()) {
    dm.textContent = '⛔ No entry!';
  } else if (mg() === sn) {
    nc.textContent = sn;
    dm.textContent = '🎉 You win!';
    nc.style.width = '30rem';
    cb('green');
    if (score > hs) {
      hs = score;
      document.querySelector('.highscore').textContent = hs;
    }
  } else if (mg() !== sn) {
    if (score > 1) {
      dm.textContent = mg() > sn ? '👆 Too high!' : '👇 Too low!';
      score--;
      ns.textContent = score;
    } else {
      nc.textContent = sn;
      dm.textContent = '💥 You lost!';
      ls.style.display = 'none';
      cb('red');
    }
  }
});
//reset
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  sn = Math.trunc(Math.random() * 20) + 1;
  dm.textContent = 'Start guessing...';
  nc.textContent = '?';
  ns.textContent = score;
  gc.value = '';
  cb('#222');
  nc.style.width = '15rem';
  ls.style.display = 'block';
});
