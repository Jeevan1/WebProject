const nav_btn = document.querySelector(".nav-btn");
const nav_header = document.querySelector(".header");

const toogleNav = () =>{
    nav_header.classList.toggle("active");
}

nav_btn.addEventListener("click", () => toogleNav());

// -----slider------
var myIndex = 0;
carousel();