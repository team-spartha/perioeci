const btn = document.querySelector(".fas.fa-search");
const search_bar = document.querySelector(".search-bar-responsive");
const btn_menu = document.querySelector(".fas.fa-bars");
var theme_bar = document.querySelector(".theme-bar");
var OS_bar = document.querySelector(".OS-bar");

var opened = false;
if(screen.width<1000){
    OS_bar.style.display = "none"
}

function transition() {
    if(search_bar.classList.contains('active')){
        search_bar.classList.remove('active');
    }
    else{
        search_bar.classList.add('active');
    }
}

function transition_menu(){
    if(opened){
        theme_bar.classList.remove("active")
        OS_bar.style.display = "none"
        opened = false
    }
    else{
        theme_bar.classList.add("active")
        OS_bar.style.display = "flex"
        opened = true
    }
}
btn.addEventListener('click',transition);
btn_menu.addEventListener('click',transition_menu);
