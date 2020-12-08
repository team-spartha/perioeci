const log = document.querySelector('.login');
const sign = document.querySelector('.signin');
const page = document.querySelector('.acc_core');
const img = document.querySelector('#illu');
const btn1 = document.querySelector('.switch.log');
const btn2 = document.querySelector('.switch.sign');

function transitionRight() {
  sign.classList.remove('active');
  img.classList.remove('left');
  img.classList.add('right');
}

function transitionLeft() {
  log.classList.remove('active');
  img.classList.remove('right');
  img.classList.add('left');
}

function signLog() {
  if (img.classList.contains('left')) {
    page.classList.remove('.right');
    page.classList.add('.left');
    sign.classList.add('active');
  } else {
    page.classList.remove('.left');
    page.classList.add('.right');
    log.classList.add('active');
  }
}

btn1.addEventListener('click', transitionLeft);
btn2.addEventListener('click', transitionRight);
img.addEventListener('animationend', signLog);