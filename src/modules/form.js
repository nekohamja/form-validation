import UI from "./UI";

export default class Form {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static evaluateForm() {
    const formName = document.querySelector("#name");
    const formEmail = document.querySelector("#email");
    const formPassword = document.querySelector("#password");
    const formConfirmPassword = document.querySelector("#confirm-password");

    if (formName.value === "" || formName.value === null) {
      UI.errorMessage(0, "Name is required.");
    }
    if (formEmail.value === "" || formEmail.value === null) {
      UI.errorMessage(1, "Email is required.");
    }
    if (formPassword.value === "" || formPassword.value === null) {
      UI.errorMessage(2, "Please enter password.");
      return;
    }
    if (formPassword.value.length <= 8) {
      UI.errorMessage(2, "Password must be longer than 8 characters.");
      return;
    }
    if (formPassword.value.length >= 20) {
      UI.errorMessage(2, "Password must be less than 20 characters.");
      return;
    }
    if (
      formConfirmPassword.value === "" ||
      formConfirmPassword.value === null
    ) {
      UI.errorMessage(3, "Please confirm password.");
    }
    if (formConfirmPassword.value !== formPassword.value) {
      UI.errorMessage(3, "Passwords do not match.");
    }
  }
}
