const tl = gsap.timeline();

tl.to(".menuContainer", {
  right: 0,
  duration: 0.5,
});

tl.from("li", {
  x: 200,
  opacity: 0,
  duration: 0.4,
  stagger: 0.2,
});

tl.from(".menuContainer i", {
  opacity: 0,
});

tl.pause();

const menu = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");
const menuContainer = document.querySelector(".menuContainer");

menu.addEventListener("click", (e) => {
  e.stopPropagation();
  tl.timeScale(1);
  tl.play();
});

closeIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  tl.timeScale(2);
  tl.reverse();
});

document.addEventListener("click", (e) => {
  if (!menuContainer.contains(e.target) && !menu.contains(e.target)) {
    tl.timeScale(2);
    tl.reverse();
  }
});
