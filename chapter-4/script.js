let initialPath = `M 80 100 Q 700 100 1420 100`;
let finalPath = `M 80 100 Q 700 100 1420 100`;

const box = document.querySelector(".box");

box.addEventListener("mousemove", function (data) {
  path = `M 80 100 Q ${data.x} ${data.y} 1420 100`;

  gsap.to("svg path", {
    attr: {
      d: path,
    },
    ease: "power3.out",
    duration: 0.3,
  });
});

box.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: {
      d: finalPath,
    },
    duration: 1.2,
    ease: "elastic.out(1,0.3)",
  });
});
