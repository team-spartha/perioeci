const btn = document.querySelector(".fas.fa-search");
const search_bar = document.querySelector(".search-bar-responsive");
const btn_menu = document.querySelector(".fas.fa-bars");
var theme_bar = document.querySelector(".theme-bar");
var OS_bar = document.querySelector(".OS-bar");

let opened_search_bar = false;
let opened_OS_theme_bars = true;
let mobile_setup = false;

if(screen.width<1000){
    if(!mobile_setup){
        OS_bar.style.display = "none"
        theme_bar.style.display = "none"
        opened_OS_theme_bars = false;
        search_bar.style.display = "none";
        opened_search_bar = false;
    }
    mobile_setup = true;
}

window.addEventListener('resize',()=>{
    if(screen.width<1000){
        if(!mobile_setup){
            OS_bar.style.display = "none"
            theme_bar.style.display = "none"
            opened_OS_theme_bars = false;
            search_bar.style.display = "none";
            opened_search_bar = false;
        }
        mobile_setup = true;
    }
    else{
        mobile_setup = false;
        OS_bar.style.display = "flex"
        theme_bar.style.display = "flex"
        search_bar.style.display = "none";
        opened_search_bar = false;
        opened_OS_theme_bars = true;
    }

})

btn.addEventListener('click',() => {
    if(!opened_search_bar && mobile_setup){
        
        search_bar.style.display = "flex";
        opened_search_bar = true;
    }
    else{
        search_bar.style.display = "none";
        opened_search_bar = false;
    }
});

btn_menu.addEventListener('click',() => {
    if(opened_OS_theme_bars){
        OS_bar.style.display = "none"
        theme_bar.style.display = "none"
        search_bar.classList.remove("boxy");
        opened_OS_theme_bars = false;
    }
    else{
        OS_bar.style.display = "flex"
        theme_bar.style.display = "flex"
        search_bar.classList.add("boxy");
        opened_OS_theme_bars = true;
    }
});
