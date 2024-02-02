# Color the Boxes

This JavaScript code snippet colors the boxes within a container using random background and text colors.

## Code Explanation

```javascript
console.log("Color the boxes");

// Select all children elements of the container
let boxes = document.querySelector(".container").children;

// Convert the HTMLCollection to an array
let box = Array.from(boxes);

// Iterate over each box element
box.forEach((e) => {
  // Set random background color
  e.style.backgroundColor = randomColor();
  // Set random text color
  e.style.color = randomColor();
});

// Function to generate a random RGB color
function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}


Instructions
Include this JavaScript code snippet in your HTML document.
Make sure to have an HTML element with the class "container" containing the boxes you want to color.
When the script runs, it will set random background and text colors for each box within the container.
This script provides a simple way to add color variations to elements on your web page dynamically.
