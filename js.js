// const vis ;

// console.log(vis);

// function clearVisibility() {
//     vis.innerHTML = document.getElementById("close").style.visibility."visible";
// }
const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");


open.addEventListener("click", ()=> {
    container.classList.add('active');
} );

close.addEventListener("click", ()=> {
    container.classList.remove('active');
} ) 
