console.log("java ok");

// +++
// +++
// +++

const cellsContainer = document.getElementById("contenitore-griglia");
const myButton = document.getElementById("genera-griglia");
let cellsTotal = 10 * 10;

myButton.addEventListener("click", function () {
  generaGriglia(cellsTotal, cellsContainer);
});
