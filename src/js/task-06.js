const inputForm = document.querySelector("#validation-input");
inputForm.addEventListener("change", checkValidation);
function checkValidation(event) {
  if (
    event.currentTarget.value.split("").length ===
    event.currentTarget.data-length
  ) {
    inputForm.classList.replace();
  }

}
