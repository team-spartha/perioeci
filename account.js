var log = document.querySelector('.login');
var sign = document.querySelector('.signin');
var page = document.querySelector('.acc_core');
var img = document.querySelector('#illu');
var btn1 = document.querySelector('.switch.log');
var btn2 = document.querySelector('.switch.sign');

function transition_droite() {
    sign.classList.remove('active');
    img.classList.remove('left');
    img.classList.add('right');
}
function transition_gauche() {
    log.classList.remove('active');
    img.classList.remove('right');
    img.classList.add('left');
}

function SignLog() {
    if(img.classList.contains('left')){
        page.classList.remove('.right');
        page.classList.add('.left');
        sign.classList.add('active');
    }
    else{
        page.classList.remove('.left');
        page.classList.add('.right');
        log.classList.add('active');
    }
}

btn1.addEventListener('click',transition_gauche);
btn2.addEventListener('click',transition_droite);
img.addEventListener('animationend',SignLog);
