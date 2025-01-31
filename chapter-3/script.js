gsap.to(".box1", {
  rotate: 720,
  duration: 2,
  delay: 1,
  borderRadius: "40%",
  scale: 1.8,
  scrollTrigger: {
    trigger: ".box1",
    scroller: "body",
    markers: true,
    scrub: true,
  },
});

gsap.from(".page2 h1", {
  opacity: 0,
  x: 500,
  scrollTrigger: {
    trigger: ".page2 h1",
    scroller: "body",
    markers: true,
    start: "top 80%",
    scrub: true,
  },
});

gsap.from(".page2 h2", {
  opacity: 0,
  x: -500,
  scrollTrigger: {
    trigger: ".page2 h2",
    scroller: "body",
    markers: true,
    start: "top 80%",
    scrub: true,
  },
});

gsap.from(".page3 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
