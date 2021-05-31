const boxes = document.querySelector("#boxes");
const btnCreateBoxes = document.querySelector('[data-action="render"]');
const btnDestroyBoxes = document.querySelector('[data-action="destroy"]');
const inputNumbOfBoxes = document.querySelector("input");

let amount = 0;

inputNumbOfBoxes.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
});

//=================================================================================

function createBoxes(numbOfBoxes) {
  let newBox = " ";
  let width = 30;
  let height = 30;
  const randColor = () => Math.floor(Math.random() * 255);
  for (let i = 0; i < numbOfBoxes; i += 1) {
    width += 10;
    height += 10;
    const r = randColor();
    const g = randColor();
    const b = randColor();
    newBox += `<div style = "width: ${width}px; height: ${height}px;
      background: rgb(${r}, ${g}, ${b});" ></div>`;
  }
  return newBox;
}

btnCreateBoxes.addEventListener("click", () =>
  boxes.insertAdjacentHTML("beforeend", createBoxes(amount))
);

//--------------------------------------------------------------------------------

// function createBoxes(numbOfBoxes) {
//   let width = 30;
//   let height = 30;
//   const randColor = () => Math.floor(Math.random() * 255);
//   for (let i = 0; i < numbOfBoxes; i += 1) {
//     width += 10;
//     height += 10;
//     const newBox = document.createElement("div");
//     newBox.style.width = `${width}px`;
//     newBox.style.height = `${height}px`;
//     const r = randColor();
//     const g = randColor();
//     const b = randColor();
//     newBox.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
//     boxes.append(newBox);

//     console.log(boxes.children);
//   }
// }

// btnCreateBoxes.addEventListener("click", () => createBoxes(amount));

//--------------------------------------------------------------------------------

btnDestroyBoxes.addEventListener("click", () => (boxes.innerHTML = ""));

// let box = boxes.firstChild;
// while (box) {
//   box.remove();
//   box = boxes.firstChild;
// }
