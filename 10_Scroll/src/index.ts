import "./index.scss";

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".link-container");
const navbar = document.getElementById("nav");

navToggle?.addEventListener("click", () => {
  links?.classList.toggle("action");
});

window.addEventListener("scroll", () => {
  const scrollHight = window.pageYOffset;
  const bodyWidth = document.body.scrollWidth;
  if (scrollHight > 0 && bodyWidth > 900) {
    navbar?.classList.add("fixed-nav");
  } else if (scrollHight === 0 && bodyWidth > 900) {
    navbar?.classList.remove("fixed-nav");
  }
});
