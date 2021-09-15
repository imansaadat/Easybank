/* for menu responsive */ 

let hamMenu = document.querySelector(".icon-menu");
let menu = document.querySelector(".list_items");
let body = document.querySelector('body');
hamMenu.addEventListener("click", () => {
  menu.classList.toggle("show");
  body.classList.toggle('overflow')
  if(hamMenu.className !=='icon-cancel'){
    hamMenu.className ='icon-cancel'
  }
  else{
    hamMenu.className ='icon-menu';
  }
});
