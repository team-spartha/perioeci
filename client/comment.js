const textarea = document.querySelector(".textarea");
const text_effect = document.querySelectorAll(".comment-text-effect div");

const deletedText = () =>{
    const deletedPart = document.createElement("del");
    const currentInnerHTML = textarea.innerHTML();
    if(window.getSelection()==undefined){
        textarea.innerHTML = currentInnerHTML.slice(0,textarea.selectionStart) + boldPart + currentInnerHTML.slice(textarea.selectionStart + 1);
    }
    else{
        boldPart.innerHTML = window.getSelection();
        textarea.innerHTML = currentInnerHTML.slice(0,textarea.selectionStart) + boldPart + currentInnerHTML.slice(textarea.selectionEnd);
    }
};

const italicText = () =>{
    const italicPart = document.createElement("em");
    const currentInnerHTML = textarea.innerHTML();
    if(window.getSelection()==undefined){
        textarea.innerHTML = currentInnerHTML.slice(0,textarea.selectionStart) + boldPart + currentInnerHTML.slice(textarea.selectionStart + 1);
    }
    else{
        boldPart.innerHTML = window.getSelection();
        textarea.innerHTML = currentInnerHTML.slice(0,textarea.selectionStart) + boldPart + currentInnerHTML.slice(textarea.selectionEnd);
    }
} 

const boldText = () =>{
    const boldPart = document.createElement("strong");
    const currentInnerHTML = textarea.innerHTML();
    if(window.getSelection()==undefined){
        textarea.innerHTML = currentInnerHTML.slice(0,textarea.selectionStart) + boldPart + currentInnerHTML.slice(textarea.selectionStart + 1);
    }
    else{
        boldPart.innerHTML = window.getSelection();
        textarea.innerHTML = currentInnerHTML.slice(0,textarea.selectionStart) + boldPart + currentInnerHTML.slice(textarea.selectionEnd);
    }
}
