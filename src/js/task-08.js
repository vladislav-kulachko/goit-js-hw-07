const boxes = document.querySelector("#boxes");
const btnCreateBoxes = document.querySelector('[data-action="render"]');
const btnDestroyBoxes = document.querySelector('[data-action="destroy"]');
const inputNumbOfBoxes = document.querySelector("input");

let amount = 0;

inputNumbOfBoxes.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
});

let width = 30;
let height = 30;

const randColor = () => Math.floor(Math.random() * 255);

btnCreateBoxes.addEventListener("click", createBoxes);
function createBoxes () {
  for (let i = 0; i < amount; i += 1) {
    width += 10;
    height += 10;
    const newBox = document.createElement("div");
    newBox.style.width = `${width}px`;
    newBox.style.height = `${height}px`;
    const r = randColor()
    const g = randColor()
    const b = randColor()
    newBox.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
    boxes.append(newBox);
  }
}

btnDestroyBoxes.addEventListener('click', destroyBoxes)
function destroyBoxes (){boxes.innerHTML=""; width = 30; height=30}


 