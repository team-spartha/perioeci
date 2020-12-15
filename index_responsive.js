const btn = document.querySelector(".fas.fa-search");
const search_bar = document.querySelector(".search-bar-responsive");
const btn_menu = document.querySelector(".fas.fa-bars");
const theme_bar = document.querySelector(".theme-bar");
const OS_bar = document.querySelector(".OS-bar");

function transition() {
    if(search_bar.classList.contains('active')){
        search_bar.classList.remove('active');
    }
    else{
        search_bar.classList.add('active');
    }
}

function transition_menu(){
    if(theme_bar.classList.contains('active')){
        theme_bar.classList.remove('active');
        OS_bar.classList.remove('active');
    }
    else{
        OS_bar.classList.add('active');
        theme_bar.classList.add('active');
        
    }
}
btn.addEventListener('click',transition);
btn_menu.addEventListener('click',transition_menu);
