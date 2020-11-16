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

(function transition() {
    for(i = 1;i<5;i++){
        var screen = document.getElementById("screen"+i);
        screen.onclick = function(){Activation(this.id);};
    }
})()

function Activation(screen){
    var index = screen.slice(6);
    slide[count].classList.remove('active');
    items[count].classList.remove('active');
    count = index-1;
    slide[count].classList.add('active');
    items[count].classList.add('active');
}


suivant.addEventListener('click',SlideSuivante);
precedent.addEventListener('click',SlidePrécédente);
