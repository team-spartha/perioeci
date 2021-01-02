const report_btn = document.querySelector(".comment-user.options button:last-child")
const report_btn_icon = document.querySelector(".comment-user.options button:last-child i")
const report_panel = document.querySelector(".report-panel")

report_btn.addEventListener("click",() =>{
    if(report_btn_icon.classList.contains("far")){
        like_btn_icon.classList.remove("far")
        like_btn_icon.classList.add("fas")
        report_panel.style.display = "grid"
    }
    else{
        like_btn_icon.classList.remove("fas")
        like_btn_icon.classList.add("far")
        report_panel.style.display = "none"
    }
})