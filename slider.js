var slide = document.querySelectorAll('.shot');
var nbImg = slide.length;
var items = document.querySelectorAll('.software-screen.overview img');
var precedent = document.querySelector('.software-screen-btn-left');
var count = 0;
var suivant = document.querySelector('.software-screen-btn-right');


function SlideSuivante() {
   slide[count].classList.remove('active');
   items[count].classList.remove('active');
   if(count < nbImg-1){
       count++;
   }
   else{
       count=0;
   }
   console.log(count)
   slide[count].classList.add('active');
   items[count].classList.add('active');
}
function SlidePrécédente() {
   slide[count].classList.remove('active');
   items[count].classList.remove('active');
   if(count>0){
       count--;
   }
   else{
       count=nbImg-1;
   }
   console.log(count);
   slide[count].classList.add('active');
   items[count].classList.add('active');
}

suivant.addEventListener('click',SlideSuivante)
precedent.addEventListener('click',SlidePrécédente)


var count2 = 0;

function Transition(newcount) {
    items[count].classList.remove('.active');
    slide[count].classList.remove('.active');
    items[newcount].classList.add('.active');
    slide[newcount].classList.add('.active');
    count = newcount;
    console.log(count);
}

items[0].addEventListener('click',Transition(0))
items[1].addEventListener('click',Transition(1))
items[2].addEventListener('click',Transition(2))
items[3].addEventListener('click',Transition(3))

