const reportBtn = document.querySelector(".comment-user.options button:last-child");
const reportBtnIcon = document.querySelector(".comment-user.options button:last-child i");
const reportBtnLabel = document.querySelector(".comment-user.options button:last-child h4");
const reportPanel = document.querySelector(".report-panel");

reportBtn.addEventListener("click", () => {
  if (reportBtnIcon.classList.contains("far")) {
    reportBtnIcon.classList.remove("far");
    reportBtnIcon.classList.add("fas");
    reportPanel.style.display = "grid";
    reportBtnLabel.classList.add("underlined");
  } else {
    reportBtnIcon.classList.remove("fas");
    reportBtnIcon.classList.add("far");
    reportPanel.style.display = "none";
    reportBtnLabel.classList.remove("underlined");
  }
});