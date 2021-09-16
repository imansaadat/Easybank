/* for menu responsive */ 

let hamMenu = document.querySelector(".icon-menu");
let menu = document.querySelector(".list_items");
hamMenu.addEventListener("click", () => {
  menu.classList.toggle("show");
  if(hamMenu.className !=='icon-cancel'){
    hamMenu.className ='icon-cancel'
  }
  else{
    hamMenu.className ='icon-menu';
  }
});
