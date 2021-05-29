const inputForm = document.querySelector("#name-input");
const inputNameText = document.querySelector("#name-output");
inputForm.addEventListener("input", onFormChange);
// inputForm.addEventListener("change", onFormFocus);

function onFormChange(event) {
  console.log(event.currentTarget.value);
  inputNameText.textContent = event.currentTarget.value;
  if (event.data===null) {inputNameText.textContent='незнакомец'}
}

// function onFormFocus(event) {
//   outputName.textContent = "вводи, не тяни, ну же:)";
// }
