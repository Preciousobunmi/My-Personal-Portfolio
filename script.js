
const hamburger = document.querySelector('.hamburger');
const navs = document.querySelector('.navs');

hamburger.addEventListener("click", function(){

    navs.classList.toggle("active");
});

let auto = new Typed('.auto', {
    strings: [" PRECIOUS O'BUNMI", " A WEB DEVELOPER.", " A GRAPHICS DESIGNER."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });
  
const navbar = document.querySelector('.navbarz');
  
window.onscroll= function(){
    let top = window.scrollY;
    if (top >=500){
        navbar.classList.add('active')

    }
    else{
        navbar.classList.remove('active')
    }
}