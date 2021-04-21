const menuToogle = document.querySelector(".toogle");
const navigator = document.querySelector(".navigation");
menuToogle.onclick = function(){
    menuToogle.classList.toggle("active");
    navigator.classList.toggle("active");
}