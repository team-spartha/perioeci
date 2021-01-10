const report_btn = document.querySelector(".comment-user.options button:last-child")
const report_btn_icon = document.querySelector(".comment-user.options button:last-child i")
const report_btn_label = document.querySelector(".comment-user.options button:last-child h4")
const report_panel = document.querySelector(".report-panel")

report_btn.addEventListener("click",() =>{
    if(report_btn_icon.classList.contains("far")){
        report_btn_icon.classList.remove("far")
        report_btn_icon.classList.add("fas")
        report_panel.style.display = "grid"
        report_btn_label.classList.add("underlined")
    }
    else{
        report_btn_icon.classList.remove("fas")
        report_btn_icon.classList.add("far")
        report_panel.style.display = "none"
        report_btn_label.classList.remove("underlined")
    }
})