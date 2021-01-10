//Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//Items
const title = document.querySelector('.info h1');
const logo = document.querySelector('.logo2 img');
const description = document.querySelector('.info h3');

//Moving Animation Event
container.addEventListener('mousemove', (e) => {
  let xAxis =  (window.innerWidth / 2 - e.pageX) /25;
  let yAxis = (window.innerHeight / 2 - e.pageY) /25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

//Animate In
container.addEventListener('mouseenter', e => {
  card.style.transition = 'none';
  //Popout
  title.style.transform = "translateZ(50px)";
  logo.style.transform = "translateZ(50px)";
  description.style.transform = "translateZ(50px)";
});




//Animate Out
container.addEventListener('mouseleave', e =>{
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  logo.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
});
