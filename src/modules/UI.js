import Form from "./form";

export default class UI {
  static loadForm() {
    const form = document.querySelector("#form");
    const phoneInput = document.querySelector("#phone");

    // intl-tel-input API
    window.intlTelInput(phoneInput, {
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
      separateDialCode: true,
    });

    form.addEventListener("submit", (e) => {
      UI.clear();
      Form.evaluateForm();
      e.preventDefault(); // prevent submitting form
    });
  }

  static errorMessage(index, message) {
    const errorIndicator = document.querySelectorAll("[error-handler]");
    errorIndicator[index].textContent = message;
  }

  static clear() {
    const errorIndicator = document.querySelectorAll("[error-handler]");
    errorIndicator.forEach((message) => {
      message.textContent = "";
    });
  }
}
