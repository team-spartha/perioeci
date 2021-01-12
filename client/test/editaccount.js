const current_backG = document.querySelector(".photo_actuelle");
const current_image = document.querySelector(".photo_actuelle img");
let current_background = current_backG.style.background;
let current_img = current_backG.src;

document.querySelectorAll(".fonds_photo div").forEach(item => {
    item.addEventListener("click", () => {
        current_backG.style.backgroundColor = item.style.backgroundColor;
        current_background = item.style.backgroundColor;
    })
})
document.querySelectorAll(".pp_symbole img").forEach(item => {
    item.addEventListener("click", () => {
        current_image.src = item.src;
        current_img = item.src;
    })
})