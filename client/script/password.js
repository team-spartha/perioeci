const passwordInput = document.querySelector(".signin .password input");
const passwordCheck = document.querySelector(".password-check");
const passwordScore = document.querySelectorAll(".check-meter .score");
const passwordConditions = document.querySelectorAll(".password-check li");

function loadScore(score) {
  let color = "bad";
  if (score > 1 && score <= 3) color = "average";
  else if (score > 3 && score <= 5) color = "good";

  for (i = 0; i < 5; i++) {
    for (const c of ["bad", "average", "good"])
      if (passwordScore[i].classList.contains(c)) 
        passwordScore[i].classList.remove(c);
    
    if (score > 0) {
      passwordScore[i].classList.add(color);
      score--;
    }
  }
}

passwordInput.addEventListener("input", () => {
  const user_input = passwordInput.value;
  let score = 0;
  let length = 0;
  let majFound = false;
  let minFound = false;
  let numFound = false;
  let speFound = false;

  for (i = 0; i < user_input.length; i++) {
    const code = user_input.charCodeAt(i);
    if (code != 32) length++;
    if (code >= 65 && code <= 90) majFound = true;
    if (code >= 97 && code <= 122) minFound = true;
    if (code >= 48 && code <= 57) numFound = true;

    if  ((code >= 33 && code <= 47) || (code >= 58 && code <= 64)
      || (code >= 91 && code <= 96) || (code >= 123 && code <= 126))
      speFound = true;
  }
  
  if (length >= 8) {
    score++;
    passwordConditions[4].style.color = "#2ecc71";
  } else passwordConditions[4].style.color = "#9ea39e";

  if (majFound) {
    score++;
    passwordConditions[0].style.color = "#2ecc71";
  } else passwordConditions[0].style.color = "#9ea39e";

  if (minFound) {
    score++;
    passwordConditions[1].style.color = "#2ecc71";
  } else passwordConditions[1].style.color = "#9ea39e";

  if (numFound) {
    score++;
    passwordConditions[2].style.color = "#2ecc71";
  } else passwordConditions[2].style.color = "#9ea39e";

  if (speFound) {
    score++;
    passwordConditions[3].style.color = "#2ecc71";
  } else passwordConditions[3].style.color = "#9ea39e";

  loadScore(score);
});

passwordInput.addEventListener("focus", () => {
  passwordCheck.style.display = "block";
});