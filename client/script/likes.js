const like_btn = document.querySelector(".comment-user.options button:first-child")
const like_btn_icon = document.querySelector(".comment-user.options button:first-child i")
const like_btn_label = document.querySelector(".comment-user.options button:first-child h4")
const cpt = document.querySelector(".likes h4")

like_btn.addEventListener("click", () =>{
    if(like_btn_icon.classList.contains("far")){
        const new_cpt = parseInt(cpt.innerHTML,10) + 1
        cpt.innerHTML = new_cpt
        like_btn_icon.classList.remove("far")
        like_btn_icon.classList.add("fas")
        like_btn_label.innerHTML = "Aimé";
        like_btn_label.classList.add("underlined")
    }
    else{
        const new_cpt = parseInt(cpt.innerHTML,10) - 1
        cpt.innerHTML = new_cpt
        like_btn_icon.classList.remove("fas")
        like_btn_icon.classList.add("far")
        like_btn_label.innerHTML = "J'aime"
        like_btn_label.classList.remove("underlined")
    }
})