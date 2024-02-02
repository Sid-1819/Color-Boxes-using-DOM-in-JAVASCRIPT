console.log("Color the boxes");

let boxes = document.querySelector(".container").children;
let box = Array.from(boxes);

box.forEach((e) => {
  e.style.backgroundColor = randomColor();
  e.style.color = randomColor();
});

function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}
