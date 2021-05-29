'use strict';
const inputForm = document.querySelector("#validation-input");
inputForm.addEventListener("change", checkValidation);
function checkValidation(event) {
  inputForm.classList.add('invalid')
  if (
    event.currentTarget.value.split("").length ==
    inputForm.getAttribute('data-length')
  ) {
    inputForm.classList.replace('invalid', 'valid')
  }
}

