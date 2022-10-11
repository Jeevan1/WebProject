const nav_btn = document.querySelector(".nav-btn");
const nav_header = document.querySelector(".header");

const toogleNav = () =>{
    nav_header.classList.toggle("active");
}

nav_btn.addEventListener("click", () => toogleNav());

// -----slider------
var myIndex = 0;
carousel();

function carousel(){
    let i;
    var x = document.getElementsByClassName("mySlides");
    for( i = 0; i< x.length; i++){
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length){
        myIndex=1;
    }
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4000);
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
 

}

// ---------Search navbar----------
const hotel_form = document.getElementById("hotel-form");
const packages_form = document.getElementById("packages-form");
const places_form = document.getElementById("places-form");
const search_hotel= document.querySelector(".search-form-hotel");
const search_packages = document.querySelector(".search-form-packages")
const search_places = document.querySelector(".search-form-places")
const toogleFormHotel = () =>{
  search_hotel.style.display = "block";
  search_packages.style.display = "none";
  search_places.style.display = "none";
}
const toogleFormPkg = () =>{
  search_packages.style.display = "block";
  search_hotel.style.display = "none";
  search_places.style.display = "none";
}
const toogleFormPlace = () =>{
  search_places.style.display = "block";
  search_hotel.style.display = "none";
  search_packages.style.display = "none";
}

hotel_form.addEventListener("click", () => toogleFormHotel());
packages_form.addEventListener("click", () => toogleFormPkg());
places_form.addEventListener("click", () => toogleFormPlace());



// ------search------

// function drop(){
//   const cityList = document.querySelector(".city-list");
// if(cityList.style.display=="block"){
//   cityList.style.display="none";
// }
// else{
//   cityList.style.display="block";
// }
// }
// function dropA(){
//   const cityListA = document.querySelector(".city-listA");
// if(cityListA.style.display=="block"){
//   cityListA.style.display="none";
// }
// else{
//   cityListA.style.display="block";
// }
// }
// function dropB(){
//   const cityListB = document.querySelector(".city-listB");
// if(cityListB.style.display=="block"){
//   cityListB.style.display="none";
// }
// else{
//   cityListB.style.display="block";
// }
// }


// ----------------------------------------Package Slider----------------//
var avlSlideIndex = 1;
avlshowDivs(avlSlideIndex);

function avlplusDivs(n) {
  avlshowDivs(avlSlideIndex += n);
}

function avlshowDivs(n) {
  var k;
  var p = document.getElementsByClassName("package");
  if (n > p.length) {avlSlideIndex = 1}
  if (n < 1) {avlSlideIndex = p.length}
  for (k = 0; k < p.length; k++) {
    p[k].style.display = "none";  
  }
  p[avlSlideIndex-1].style.display = "block";  
  p[avlSlideIndex-1].style.transition = "0.3 s ease-in-out";  
  p[avlSlideIndex].style.display = "block";  
  
}



// // ====Packages=====//
// const pokhara = document.querySelector('#pokhara');
// const packages_col= document.querySelector(".avl-packages");
// function pkgShow(){
//     packages_col.style.display="none";
// }
// // packages_col.addEventListener('click', pkgShow);

