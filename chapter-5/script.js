const main = document.querySelector(".container");
const cursor = document.querySelector(".cursor");
const image = document.querySelector(".image");

main.addEventListener("mousemove", function (data) {
  gsap.to(cursor, {
    x: data.x,
    y: data.y,
  });
});

image.addEventListener("mouseenter", function () {
  gsap.to(cursor, {
    scale: 1.8,
  });
});

image.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    scale: 1,
  });
});
