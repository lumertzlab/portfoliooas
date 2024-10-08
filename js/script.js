var className = "scroll-header";
var scrollTrigger = 60;

window.onscroll = function () {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};

let burger = document.getElementById("navTrigger"),
  nav = document.getElementById("navMenu");

burger.addEventListener("click", function (e) {
  this.classList.toggle("active");
  nav.classList.toggle("active");
});

const sections = document.querySelectorAll("div[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".sec-title ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".sec-title ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
