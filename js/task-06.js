const inputForm = document.querySelector("#validation-input");
inputForm.addEventListener("change", checkValidation);
function checkValidation(event) {
  inputForm.classList.add("invalid");
  if (
    Number(event.currentTarget.value.split("").length) ===
    Number(inputForm.getAttribute("data-length"))
  ) {
    inputForm.classList.replace("invalid", "valid");
  }
}
