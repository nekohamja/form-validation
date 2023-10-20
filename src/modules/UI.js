import Form from "./form";

export default class UI {
  static loadForm() {
    const form = document.querySelector("#form");
    const phoneInput = document.querySelector("#phone");

    UI.handleInput();

    window.intlTelInput(phoneInput, {
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
      separateDialCode: true,
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent actually submitting form
      Form.evaluateForm();
    });
  }

  static handleInput() {
    const formInputs = document.querySelectorAll("[form-field]");
    const formName = document.querySelector("#name");
    const formEmail = document.querySelector("#email");
    const formPhone = document.querySelector("#phone");
    const formPassword = document.querySelector("#password");
    const formConfirmPassword = document.querySelector("#confirm-password");

    formInputs.forEach((formInput) => {
      formInput.addEventListener("focus", () => {
        formInput.parentNode.children[2].textContent = "";
        formInput.classList.remove("invalid");
      });
    });
    formPhone.addEventListener("focus", () => {
      formPhone.parentNode.parentNode.children[2].textContent = "";
      formPhone.classList.remove("invalid");
    });

    formName.addEventListener("blur", () => {
      Form.evaluateNameInput();
    });
    formEmail.addEventListener("blur", () => {
      Form.evaluateEmailInput();
    });
    formPhone.addEventListener("blur", () => {
      Form.evaluatePhoneInput();
    });
    formPassword.addEventListener("blur", () => {
      Form.evaluatePasswordInput();
    });
    formConfirmPassword.addEventListener("blur", () => {
      Form.evaluateConfirmPasswordInput();
    });
  }

  static errorMessage(index, message) {
    const errorIndicator = document.querySelectorAll("[error-handler]");
    errorIndicator[index].textContent = message;
  }

  static clearAll() {
    const formInputs = document.querySelectorAll("[form-field]");
    const formPhone = document.querySelector("#phone");
    formInputs.forEach((input) => {
      input.value = "";
    });
    formPhone.value = "";
  }

  static formSubmitted() {
    // todo
    // create form submission indicator here
    // implement SASS
    // implement 3d video bg api
  }
}
