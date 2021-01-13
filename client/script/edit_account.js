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
/*
var fonds_photo = document.querySelectorAll('.fonds_photo a')

for(var j = 0; j < fonds_photo.length; j++){
  fonds_photo[j].addEventListener('click', function (f){

    var img = this.parentNode
    var container_photo = this.parentNode.parentNode.parentNode.parentNode.parentNode

    if(img.classList.contains('activeFond')){
      return false
    }

    container_photo.querySelector('.fond_actuel.activeFondVisible').classList.remove('activeFondVisible')
    container_photo.querySelector(this.getAttribute('href')).classList.add('activeFondVisible')
  })
}*/
