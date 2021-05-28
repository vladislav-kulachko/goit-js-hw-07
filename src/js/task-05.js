const inputForm = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
inputForm.addEventListener("input", onFormChange);
// inputForm.addEventListener("change", onFormFocus);

function onFormChange(event) {
  console.log(event.currentTarget.value);
  outputName.textContent = event.currentTarget.value;
  if (event.data===null) {outputName.textContent='незнакомец'}
}

// function onFormFocus(event) {
//   outputName.textContent = "вводи, не тяни, ну же:)";
// }
