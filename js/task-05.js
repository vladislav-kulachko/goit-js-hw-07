const inputForm = document.querySelector("#name-input");
const inputNameText = document.querySelector("#name-output");

inputForm.addEventListener("input", onFormChange);

function onFormChange(event) {
  inputNameText.textContent = event.currentTarget.value || "незнакомец";
  if (event.data === " ") {
    inputNameText.textContent = "незнакомец";
  }
}
