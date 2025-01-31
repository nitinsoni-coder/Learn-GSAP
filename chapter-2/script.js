const tl = gsap.timeline();

tl.from("h4", {
  y: -30,
  opacity: 0,
  duration: 0.2,
  delay: 0.5,
});

tl.from("li", {
  y: -30,
  opacity: 0,
  duration: 0.2,
  stagger: 0.1,
});

tl.from("h1", {
  y: -30,
  opacity: 0,
  duration: 0.2,
  delay: 0.5,
  scale: 0.5,
});
