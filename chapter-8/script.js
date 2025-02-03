const tl = gsap.timeline();

tl.from("nav", {
  y: 10,
  opacity: 0,
  duration: 0.4,
  delay: 0.3,
});

tl.from(".bgCurve", {
  top: 80,
  opacity: 0,
  duration: 1,
  delay: 0.1,
});

tl.from(".businnerHeadingContainer", {
  duration: 0.8,
  opacity: 0,
});

tl.from(".sideBox", {
  duration: 0.4,
  opacity: 0,
});

const btn = document.querySelector(".signUpBtn");

btn.addEventListener("mouseenter", () => {
  gsap.to(btn, {
    scale: 1.1,
    duration: 0.4,
  });
});

btn.addEventListener("mouseleave", () => {
  gsap.to(btn, {
    scale: 1,
    duration: 0.4,
  });
});

const firstBox = document.querySelector(".firstBox");

firstBox.addEventListener("mouseenter", (e) => {
  const rect = firstBox.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const deltaX = (mouseX - centerX) / rect.width;
  const deltaY = (mouseY - centerY) / rect.height;

  gsap.to(firstBox, {
    rotationY: deltaX * 15, // Tilt horizontally
    rotationX: -deltaY * 85, // Tilt vertically
    ease: "power2.out",
    duration: 0.3,
  });
});

firstBox.addEventListener("mouseleave", () => {
  gsap.to(firstBox, {
    rotationY: 0,
    rotationX: 0,
    duration: 0.3,
    ease: "power2.out",
  });
});

const centerBox = document.querySelector(".centerBox");

centerBox.addEventListener("mouseenter", (e) => {
  const rect = centerBox.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const deltaX = (mouseX - centerX) / rect.width;
  const deltaY = (mouseY - centerY) / rect.height;

  gsap.to(centerBox, {
    rotationY: deltaX * 15, // Tilt horizontally
    rotationX: -deltaY * 85, // Tilt vertically
    ease: "power2.out",
    duration: 0.3,
  });
});

centerBox.addEventListener("mouseleave", () => {
  gsap.to(centerBox, {
    rotationY: 0,
    rotationX: 0,
    duration: 0.3,
    ease: "power2.out",
  });
});

const rightSideBox = document.querySelector(".rightSideBox");

rightSideBox.addEventListener("mouseenter", (e) => {
  const rect = rightSideBox.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const deltaX = (mouseX - centerX) / rect.width;
  const deltaY = (mouseY - centerY) / rect.height;

  gsap.to(rightSideBox, {
    rotationY: deltaX * 15, // Tilt horizontally
    rotationX: -deltaY * 85, // Tilt vertically
    ease: "power2.out",
    duration: 0.3,
  });
});

rightSideBox.addEventListener("mouseleave", () => {
  gsap.to(rightSideBox, {
    rotationY: 0,
    rotationX: 0,
    duration: 0.3,
    ease: "power2.out",
  });
});
