/* for menu responsive */ 

let hamMenu = document.querySelector(".hamburger");
let menu = document.querySelector(".list_items");
hamMenu.addEventListener("click", () => {
  menu.classList.toggle("show");
});