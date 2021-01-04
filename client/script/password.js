const password_input = document.querySelector(".signin .password input");
const password_check = document.querySelector(".password-check");
const password_score = document.querySelectorAll(".check-meter .score");
const password_conditions = document.querySelectorAll(".password-check li");


function loadScore(score){
    var color = "bad"
    if(score>1 && score <=3){
        color = "average"
    }
    if(score>3 && score<=5){
        color ="good"
    }
    for(i=0;i<5;i++){
        if(password_score[i].classList.contains("bad")){
            password_score[i].classList.remove("bad")
        }
        if(password_score[i].classList.contains("average")){
            password_score[i].classList.remove("average")
        }
        if(password_score[i].classList.contains("good")){
            password_score[i].classList.remove("good")
        }
        if(score>0){
            password_score[i].classList.add(color)
            score--
        }
    }
}
password_input.addEventListener("input", () => {
    var user_input = password_input.value;
    var score = 0;
    if(user_input.length>=8){
        score++;
        password_conditions[4].style.color = "#2ecc71"
    }
    else{
        password_conditions[4].style.color = "#9ea39e"
    }
    maj_found = false
    min_found = false
    num_found = false
    spe_found = false
    for(i=0;i<user_input.length;i++){
        var code = user_input.charCodeAt(i)
        if(code>=65 && code<=90){
            maj_found = true
        }
        if(code>=97 && code<=122){
            min_found = true
        }
        if(code>=48 && code<=57){
            num_found = true
        }
        if((code>=33 && code<=47)||(code>=58 && code <=64)||(code>=91 && code <=96)||(code>=123 && code<=126)){
            spe_found = true
        }
    }
    if(maj_found){
        score++
        password_conditions[0].style.color = "#2ecc71";
    }
    else{
        password_conditions[0].style.color = "#9ea39e";
    }
    if(min_found){
        score++
        password_conditions[1].style.color = "#2ecc71";
    }
    else{
        password_conditions[1].style.color = "#9ea39e";
    }
    if(num_found){
        score++
        password_conditions[2].style.color = "#2ecc71";
    }
    else{
        password_conditions[2].style.color = "#9ea39e";
    }
    if(spe_found){
        score++;
        password_conditions[3].style.color = "#2ecc71";
    }
    else{
        password_conditions[3].style.color = "#9ea39e";
    }
    loadScore(score)
})


password_input.addEventListener("click",() =>{
    password_check.style.display = "block";
})