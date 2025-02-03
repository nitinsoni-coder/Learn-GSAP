const word = document.querySelector(".word");

const wordContent = word.textContent;

const splittedWord = wordContent.split("");

let clutter = "";

const halfText = Math.floor(splittedWord.length / 2);

splittedWord.forEach((word, id) => {
  if (id <= halfText) {
    clutter += `<span class="a">${word}</span>`;
  } else {
    clutter += `<span class="b">${word}</span>`;
  }
});

word.innerHTML = clutter;

gsap.from(".word .a", {
  y: 80,
  duration: 0.4,
  delay: 0.1,
  stagger: 0.15,
  opacity: 0,
});

gsap.from(".word .b", {
  y: 80,
  duration: 0.4,
  delay: 0.1,
  stagger: -0.15,
  opacity: 0,
});
