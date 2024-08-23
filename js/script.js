var className = "scroll-header";
var scrollTrigger = 60;

window.onscroll = function () {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
    document.getElementsByTagName("header")[0].classList.remove(classNav);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
    document.getElementsByTagName("header")[0].classList.add(classNav);
  }
};

let burger = document.getElementById("navTrigger"),
  nav = document.getElementById("navMenu");

burger.addEventListener("click", function (e) {
  this.classList.toggle("active");
  nav.classList.toggle("active");
});
