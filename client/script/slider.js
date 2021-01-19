const slide = document.querySelectorAll('.shot');
const nbImg = slide.length;
const items = document.querySelectorAll('.software-screen-overview img');
const prev = document.querySelector('.software-screen-btn-left');
const next = document.querySelector('.software-screen-btn-right');
let count = 0;

function nextSlide() {
  slide[count].classList.remove('active');
  items[count].classList.remove('active');
  if (count < nbImg - 1) count++;
  else count = 0;
  slide[count].classList.add('active');
  items[count].classList.add('active');
}

function prevSlide() {
  slide[count].classList.remove('active');
  items[count].classList.remove('active');
  if (count > 0) count--;
  else count = nbImg - 1;
  slide[count].classList.add('active');
  items[count].classList.add('active');
}

function activation(screen) {
  const index = screen.slice(6);
  slide[count].classList.remove('active');
  items[count].classList.remove('active');
  count = index - 1;
  slide[count].classList.add('active');
  items[count].classList.add('active');
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Transition
for (i = 0;; i++) {
  const screen = document.getElementById(`screen${i}`);
  if (!screen) break;
  screen.onclick = () => activation(screen.id);
}