function note(star) {
  StarNb = star.slice(4);
  console.log(StarNb);
  for (i = 1; i < (StarNb * 1) + 1; i++) {
    document.getElementById('vote' + i).classList.remove("far");
    document.getElementById('vote' + i).classList.add("fas");
  }
}

function denote(star) {
  StarNb = star.slice(4);
  console.log(StarNb);
  for (i = 1; i < (StarNb * 1) + 1; i++) {
    document.getElementById('vote' + i).classList.remove("fas");
    document.getElementById('vote' + i).classList.add("far");
  }
}

// Notation
for (i = 1; i < 6; i++) {
  const img = document.getElementById("vote" + i);
  console.log(img.id.slice(4));
  img.onmouseover = () => note(img.id);
  img.onmouseout = () => denote(img.id);
}