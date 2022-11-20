import "./index.scss";

const preloader = document.querySelector(".preloader");
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-bg") as HTMLVideoElement; /* ; */

window.addEventListener("load", () => {
  preloader?.classList.add("gif-hidden");
});

btn?.addEventListener("click", () => {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});
