const containerOnglets = document.querySelectorAll('.container_onglets a');

for (let i = 0; i < containerOnglets.length; i++) {
  containerOnglets[i].addEventListener('click', function (e) {
    const div = this.parentNode.parentNode.parentNode;

    if (this.classList.contains('activeOnglet'))
      return false;

    //On retire la classe active de l'onglet actif
    div.querySelector('.container_onglets .activeOnglet').classList.remove('activeOnglet')
    //On ajoute la classe active à l'onglet actuel
    this.classList.add('activeOnglet')

    //On retire la class active sur le contenu actif
    div.querySelector('.contenu.activeContenu').classList.remove('activeContenu')
    div.querySelector(this.getAttribute('href')).classList.add('activeContenu')
  })
}

/* Onglet Photo de profil */
const currentBackG = document.querySelector(".photo_actuelle");
const currentImage = document.querySelector(".photo_actuelle img");
let currentBackground = currentBackG.style.background;
let currentImg = currentBackG.src;

document.querySelectorAll(".fonds_photo div").forEach(item =>
  item.addEventListener("click", () => {
    currentBackG.style.backgroundColor = item.style.backgroundColor;
    currentBackground = item.style.backgroundColor;
  }));

document.querySelectorAll(".pp_symbole img").forEach(item =>
  item.addEventListener("click", () => {
    currentImage.src = item.src;
    currentImg = item.src;
  }));
