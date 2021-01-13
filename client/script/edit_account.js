var container_onglets = document.querySelectorAll('.container_onglets a')

for(var i = 0; i < container_onglets.length; i++){
  container_onglets[i].addEventListener('click', function (e){

    var li = this
    var div = this.parentNode.parentNode.parentNode

    if(li.classList.contains('activeOnglet')){
      return false
    }

    //On retire la classe active de l'onglet actif
    div.querySelector('.container_onglets .activeOnglet').classList.remove('activeOnglet')
    //On ajoute la classe active à l'onglet actuel
    li.classList.add('activeOnglet')

    //On retire la class active sur le contenu actif
    div.querySelector('.contenu.activeContenu').classList.remove('activeContenu')
    div.querySelector(this.getAttribute('href')).classList.add('activeContenu')
  })
}

/* Onglet Photo de profil*/

const current_backG = document.querySelector(".photo_actuelle");
const current_image = document.querySelector(".photo_actuelle img");
let current_background = current_backG.style.background;
let current_img = current_backG.src;

document.querySelectorAll(".fonds_photo div").forEach(item => {
    item.addEventListener("click", () => {
        current_backG.style.backgroundColor = item.style.backgroundColor;
        current_background = item.style.backgroundColor;
    })
})
document.querySelectorAll(".pp_symbole img").forEach(item => {
    item.addEventListener("click", () => {
        current_image.src = item.src;
        current_img = item.src;
    })
})
