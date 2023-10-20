import UI from "./UI";

export default class Form {
  static evaluateForm() {
    const errorIndicator = document.querySelectorAll("[error-handler]");
    let errorCount = 0;

    Form.evaluateNameInput();
    Form.evaluateEmailInput();
    Form.evaluatePhoneInput();
    Form.evaluatePasswordInput();

    errorIndicator.forEach((message) => {
      if (message.textContent !== "") {
        errorCount++;
      }
    });

    if (errorCount === 0) {
      console.log("form submitted");
      UI.clearAll();
    }
  }

  static evaluateNameInput() {
    const formName = document.querySelector("#name");
    if (formName.value === "" || formName.value === null) {
      UI.errorMessage(0, "Name is required.");
      formName.classList.add("invalid");
    } else formName.classList.add("valid");
  }

  static evaluateEmailInput() {
    const formEmail = document.querySelector("#email");
    const validityState = formEmail.validity;

    if (formEmail.value === "" || formEmail.value === null) {
      UI.errorMessage(1, "Email is required.");
      formEmail.classList.add("invalid");
    } else formEmail.classList.add("valid");

    if (validityState.typeMismatch) {
      formEmail.classList.add("invalid");
      UI.errorMessage(1, "Enter correct email address.");
    } else formEmail.classList.add("valid");
  }

  static evaluatePhoneInput() {
    const formPhone = document.querySelector("#phone");

    if (formPhone.value === "" || formPhone.value === null) {
      UI.errorMessage(2, "Phone is required.");
      formPhone.classList.add("invalid");
      return;
    } else formPhone.classList.add("valid");

    if (!/^\d+$/.test(formPhone.value)) {
      UI.errorMessage(2, "Please input a Phone number.");
      formPhone.classList.add("invalid");
    } else formPhone.classList.add("valid");
  }

  static evaluatePasswordInput() {
    const formPassword = document.querySelector("#password");

    if (formPassword.value === "" || formPassword.value === null) {
      UI.errorMessage(3, "Please enter password.");
      formPassword.classList.add("invalid");
      return;
    } else formPassword.classList.add("valid");

    if (formPassword.value.length <= 8) {
      UI.errorMessage(3, "Password must be longer than 8 characters.");
      formPassword.classList.add("invalid");
      return;
    } else formPassword.classList.add("valid");

    if (formPassword.value.length >= 20) {
      UI.errorMessage(3, "Password must be less than 20 characters.");
      formPassword.classList.add("invalid");
      return;
    } else formPassword.classList.add("valid");

    Form.evaluateConfirmPasswordInput();
  }

  static evaluateConfirmPasswordInput() {
    const formConfirmPassword = document.querySelector("#confirm-password");
    const formPassword = document.querySelector("#password");

    if (
      formConfirmPassword.value === "" ||
      formConfirmPassword.value === null
    ) {
      UI.errorMessage(4, "Please confirm password.");
      formConfirmPassword.classList.add("invalid");
      return;
    } else formConfirmPassword.classList.add("valid");

    if (formConfirmPassword.value !== formPassword.value) {
      UI.errorMessage(4, "Passwords do not match.");
      formConfirmPassword.classList.add("invalid");
    } else formConfirmPassword.classList.add("valid");
  }
}
