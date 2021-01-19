function note(star) {
  const nstar = +star.slice(4);
  for (let i = 1; i < 1 + nstar; i++) {
    document.getElementById(`vote${i}`).classList.remove("far");
    document.getElementById(`vote${i}`).classList.add("fas");
  }
}

function denote(star) {
  const nstar = +star.slice(4);
  for (let i = 1; i < 1 + nstar; i++) {
    document.getElementById(`vote${i}`).classList.remove("fas");
    document.getElementById(`vote${i}`).classList.add("far");
  }
}

// Notation
for (let i = 1; i < 6; i++) {
  console.log(`vote${i}`);
  const img = document.getElementById(`vote${i}`);
  img.onmouseover = () => note(img.id);
  img.onmouseout = () => denote(img.id);
}