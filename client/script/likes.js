const likeBtn = document.querySelector(".comment-user.options button:first-child");
const likeBtnIcon = document.querySelector(".comment-user.options button:first-child i");
const likeBtnLabel = document.querySelector(".comment-user.options button:first-child h4");
const cpt = document.querySelector(".likes h4");

likeBtn.addEventListener("click", () => {
  if (likeBtnIcon.classList.contains("far")) {
    const newCpt = parseInt(cpt.innerHTML, 10) + 1;
    cpt.innerHTML = newCpt;
    likeBtnIcon.classList.remove("far");
    likeBtnIcon.classList.add("fas");
    likeBtnLabel.innerHTML = "Aimé";
    likeBtnLabel.classList.add("underlined");
  } else {
    const newCpt = parseInt(cpt.innerHTML, 10) - 1;
    cpt.innerHTML = newCpt;
    likeBtnIcon.classList.remove("fas");
    likeBtnIcon.classList.add("far");
    likeBtnLabel.innerHTML = "J'aime";
    likeBtnLabel.classList.remove("underlined");
  }
})