function note(star) {
  for (let i = 1; i < star.slice(4) + 1; i++) {
    document.getElementById(`vote${i}`).classList.remove("far");
    document.getElementById(`vote${i}`).classList.add("fas");
  }
}

function denote(star) {
  for (let i = 1; i < star.slice(4) + 1; i++) {
    document.getElementById(`vote${i}`).classList.remove("fas");
    document.getElementById(`vote${i}`).classList.add("far");
  }
}

// Notation
for (let i = 1; i < 6; i++) {
  const img = document.getElementById(`vote${i}`);
  img.onmouseover = () => note(img.id);
  img.onmouseout = () => denote(img.id);
}