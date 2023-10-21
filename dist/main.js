/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/modules/form.js");


class UI {
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
      _form__WEBPACK_IMPORTED_MODULE_0__["default"].evaluateForm();
    });
  }

  static handleInput() {
    const formInputs = document.querySelectorAll("[form-field]");
    const formName = document.querySelector("#name");
    const formEmail = document.querySelector("#email");
    const formPhone = document.querySelector("#phone");
    const formPassword = document.querySelector("#password");
    const formConfirmPassword = document.querySelector("#confirm-password");
    const formCheckbox = document.querySelector("#checkbox");

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
    formCheckbox.addEventListener("click", () => {
      formCheckbox.classList.add("checked");
      formCheckbox.classList.remove("not-checked");
    });

    formName.addEventListener("blur", () => {
      _form__WEBPACK_IMPORTED_MODULE_0__["default"].evaluateNameInput();
    });
    formEmail.addEventListener("blur", () => {
      _form__WEBPACK_IMPORTED_MODULE_0__["default"].evaluateEmailInput();
    });
    formPhone.addEventListener("blur", () => {
      _form__WEBPACK_IMPORTED_MODULE_0__["default"].evaluatePhoneInput();
    });
    formPassword.addEventListener("blur", () => {
      _form__WEBPACK_IMPORTED_MODULE_0__["default"].evaluatePasswordInput();
    });
    formConfirmPassword.addEventListener("blur", () => {
      _form__WEBPACK_IMPORTED_MODULE_0__["default"].evaluateConfirmPasswordInput();
    });
  }

  static errorMessage(index, message) {
    const errorIndicator = document.querySelectorAll("[error-handler]");
    errorIndicator[index].textContent = message;
  }

  static clearAll() {
    const formInputs = document.querySelectorAll("[form-field]");
    const formPhone = document.querySelector("#phone");
    const successMessage = document.querySelector(".popup");

    formInputs.forEach((input) => {
      input.value = "";
    });
    formPhone.value = "";

    successMessage.classList.remove("active");
  }

  static formSubmitted() {
    UI.clearAll();
    const successMessage = document.querySelector(".popup");
    successMessage.classList.add("active");
    successMessage.textContent = "🎉 Account created!";
    setTimeout(this.clearAll, 3000);
  }
}


/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/modules/UI.js");


class Form {
  static evaluateForm() {
    const errorIndicator = document.querySelectorAll("[error-handler]");
    const formCheckbox = document.querySelector("#checkbox");
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
      if (formCheckbox.checked) {
        _UI__WEBPACK_IMPORTED_MODULE_0__["default"].formSubmitted();
      } else {
        formCheckbox.classList.add("not-checked");
        formCheckbox.classList.remove("checked");
      }
    }
  }

  static evaluateNameInput() {
    const formName = document.querySelector("#name");
    if (formName.value === "" || formName.value === null) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(0, "Name is required.");
      formName.classList.add("invalid");
    }
  }

  static evaluateEmailInput() {
    const formEmail = document.querySelector("#email");
    const validityState = formEmail.validity;

    if (formEmail.value === "" || formEmail.value === null) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(1, "Email is required.");
      formEmail.classList.add("invalid");
    }

    if (validityState.typeMismatch) {
      formEmail.classList.add("invalid");
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(1, "Enter correct email address.");
    }
  }

  static evaluatePhoneInput() {
    const formPhone = document.querySelector("#phone");

    if (formPhone.value === "" || formPhone.value === null) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(2, "Phone is required.");
      formPhone.classList.add("invalid");
      return;
    }

    if (!/^\d+$/.test(formPhone.value)) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(2, "Please input a Phone number.");
      formPhone.classList.add("invalid");
    }
  }

  static evaluatePasswordInput() {
    const formPassword = document.querySelector("#password");

    if (formPassword.value === "" || formPassword.value === null) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(3, "Please enter password.");
      formPassword.classList.add("invalid");
      return;
    }

    if (formPassword.value.length <= 8) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(3, "Password must be longer than 8 characters.");
      formPassword.classList.add("invalid");
      return;
    }

    if (formPassword.value.length >= 20) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(3, "Password must be less than 20 characters.");
      formPassword.classList.add("invalid");
      return;
    }

    Form.evaluateConfirmPasswordInput();
  }

  static evaluateConfirmPasswordInput() {
    const formConfirmPassword = document.querySelector("#confirm-password");
    const formPassword = document.querySelector("#password");

    if (
      formConfirmPassword.value === "" ||
      formConfirmPassword.value === null
    ) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(4, "Please confirm password.");
      formConfirmPassword.classList.add("invalid");
      return;
    }

    if (formConfirmPassword.value !== formPassword.value) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(4, "Passwords do not match.");
      formConfirmPassword.classList.add("invalid");
    }
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");


document.addEventListener("DOMContentLoaded", _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].loadForm);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7O0FBRVg7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEI7QUFDMUIsTUFBTSw2Q0FBSTtBQUNWLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLE1BQU0sNkNBQUk7QUFDVixLQUFLO0FBQ0w7QUFDQSxNQUFNLDZDQUFJO0FBQ1YsS0FBSztBQUNMO0FBQ0EsTUFBTSw2Q0FBSTtBQUNWLEtBQUs7QUFDTDtBQUNBLE1BQU0sNkNBQUk7QUFDVixLQUFLO0FBQ0w7QUFDQSxNQUFNLDZDQUFJO0FBQ1YsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEZzQjs7QUFFUDtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsUUFBUSwyQ0FBRTtBQUNWLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkNBQUU7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwyQ0FBRTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sMkNBQUU7QUFDUjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDJDQUFFO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwyQ0FBRTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwyQ0FBRTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sMkNBQUU7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDJDQUFFO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwyQ0FBRTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sMkNBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzdHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhCOztBQUU5Qiw4Q0FBOEMsbURBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb3JtLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybSBmcm9tIFwiLi9mb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIGxvYWRGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1cIik7XG4gICAgY29uc3QgcGhvbmVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmVcIik7XG5cbiAgICBVSS5oYW5kbGVJbnB1dCgpO1xuXG4gICAgd2luZG93LmludGxUZWxJbnB1dChwaG9uZUlucHV0LCB7XG4gICAgICB1dGlsc1NjcmlwdDpcbiAgICAgICAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2ludGwtdGVsLWlucHV0QDE4LjIuMS9idWlsZC9qcy91dGlscy5qc1wiLFxuICAgICAgc2VwYXJhdGVEaWFsQ29kZTogdHJ1ZSxcbiAgICB9KTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBhY3R1YWxseSBzdWJtaXR0aW5nIGZvcm1cbiAgICAgIEZvcm0uZXZhbHVhdGVGb3JtKCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlSW5wdXQoKSB7XG4gICAgY29uc3QgZm9ybUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZm9ybS1maWVsZF1cIik7XG4gICAgY29uc3QgZm9ybU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIik7XG4gICAgY29uc3QgZm9ybUVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWFpbFwiKTtcbiAgICBjb25zdCBmb3JtUGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bob25lXCIpO1xuICAgIGNvbnN0IGZvcm1QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRcIik7XG4gICAgY29uc3QgZm9ybUNvbmZpcm1QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybS1wYXNzd29yZFwiKTtcbiAgICBjb25zdCBmb3JtQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NoZWNrYm94XCIpO1xuXG4gICAgZm9ybUlucHV0cy5mb3JFYWNoKChmb3JtSW5wdXQpID0+IHtcbiAgICAgIGZvcm1JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgICAgICBmb3JtSW5wdXQucGFyZW50Tm9kZS5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGZvcm1JbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZFwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZvcm1QaG9uZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgICAgZm9ybVBob25lLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBmb3JtUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRcIik7XG4gICAgfSk7XG4gICAgZm9ybUNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBmb3JtQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XG4gICAgICBmb3JtQ2hlY2tib3guY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1jaGVja2VkXCIpO1xuICAgIH0pO1xuXG4gICAgZm9ybU5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgRm9ybS5ldmFsdWF0ZU5hbWVJbnB1dCgpO1xuICAgIH0pO1xuICAgIGZvcm1FbWFpbC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICBGb3JtLmV2YWx1YXRlRW1haWxJbnB1dCgpO1xuICAgIH0pO1xuICAgIGZvcm1QaG9uZS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICBGb3JtLmV2YWx1YXRlUGhvbmVJbnB1dCgpO1xuICAgIH0pO1xuICAgIGZvcm1QYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICBGb3JtLmV2YWx1YXRlUGFzc3dvcmRJbnB1dCgpO1xuICAgIH0pO1xuICAgIGZvcm1Db25maXJtUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgRm9ybS5ldmFsdWF0ZUNvbmZpcm1QYXNzd29yZElucHV0KCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZXJyb3JNZXNzYWdlKGluZGV4LCBtZXNzYWdlKSB7XG4gICAgY29uc3QgZXJyb3JJbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2Vycm9yLWhhbmRsZXJdXCIpO1xuICAgIGVycm9ySW5kaWNhdG9yW2luZGV4XS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gIH1cblxuICBzdGF0aWMgY2xlYXJBbGwoKSB7XG4gICAgY29uc3QgZm9ybUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZm9ybS1maWVsZF1cIik7XG4gICAgY29uc3QgZm9ybVBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaG9uZVwiKTtcbiAgICBjb25zdCBzdWNjZXNzTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XG5cbiAgICBmb3JtSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgfSk7XG4gICAgZm9ybVBob25lLnZhbHVlID0gXCJcIjtcblxuICAgIHN1Y2Nlc3NNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cblxuICBzdGF0aWMgZm9ybVN1Ym1pdHRlZCgpIHtcbiAgICBVSS5jbGVhckFsbCgpO1xuICAgIGNvbnN0IHN1Y2Nlc3NNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcbiAgICBzdWNjZXNzTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHN1Y2Nlc3NNZXNzYWdlLnRleHRDb250ZW50ID0gXCLwn46JIEFjY291bnQgY3JlYXRlZCFcIjtcbiAgICBzZXRUaW1lb3V0KHRoaXMuY2xlYXJBbGwsIDMwMDApO1xuICB9XG59XG4iLCJpbXBvcnQgVUkgZnJvbSBcIi4vVUlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSB7XG4gIHN0YXRpYyBldmFsdWF0ZUZvcm0oKSB7XG4gICAgY29uc3QgZXJyb3JJbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2Vycm9yLWhhbmRsZXJdXCIpO1xuICAgIGNvbnN0IGZvcm1DaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tib3hcIik7XG4gICAgbGV0IGVycm9yQ291bnQgPSAwO1xuXG4gICAgRm9ybS5ldmFsdWF0ZU5hbWVJbnB1dCgpO1xuICAgIEZvcm0uZXZhbHVhdGVFbWFpbElucHV0KCk7XG4gICAgRm9ybS5ldmFsdWF0ZVBob25lSW5wdXQoKTtcbiAgICBGb3JtLmV2YWx1YXRlUGFzc3dvcmRJbnB1dCgpO1xuXG4gICAgZXJyb3JJbmRpY2F0b3IuZm9yRWFjaCgobWVzc2FnZSkgPT4ge1xuICAgICAgaWYgKG1lc3NhZ2UudGV4dENvbnRlbnQgIT09IFwiXCIpIHtcbiAgICAgICAgZXJyb3JDb3VudCsrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGVycm9yQ291bnQgPT09IDApIHtcbiAgICAgIGlmIChmb3JtQ2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICBVSS5mb3JtU3VibWl0dGVkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcIm5vdC1jaGVja2VkXCIpO1xuICAgICAgICBmb3JtQ2hlY2tib3guY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrZWRcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGV2YWx1YXRlTmFtZUlucHV0KCkge1xuICAgIGNvbnN0IGZvcm1OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpO1xuICAgIGlmIChmb3JtTmFtZS52YWx1ZSA9PT0gXCJcIiB8fCBmb3JtTmFtZS52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgVUkuZXJyb3JNZXNzYWdlKDAsIFwiTmFtZSBpcyByZXF1aXJlZC5cIik7XG4gICAgICBmb3JtTmFtZS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZXZhbHVhdGVFbWFpbElucHV0KCkge1xuICAgIGNvbnN0IGZvcm1FbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxcIik7XG4gICAgY29uc3QgdmFsaWRpdHlTdGF0ZSA9IGZvcm1FbWFpbC52YWxpZGl0eTtcblxuICAgIGlmIChmb3JtRW1haWwudmFsdWUgPT09IFwiXCIgfHwgZm9ybUVtYWlsLnZhbHVlID09PSBudWxsKSB7XG4gICAgICBVSS5lcnJvck1lc3NhZ2UoMSwgXCJFbWFpbCBpcyByZXF1aXJlZC5cIik7XG4gICAgICBmb3JtRW1haWwuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkaXR5U3RhdGUudHlwZU1pc21hdGNoKSB7XG4gICAgICBmb3JtRW1haWwuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICBVSS5lcnJvck1lc3NhZ2UoMSwgXCJFbnRlciBjb3JyZWN0IGVtYWlsIGFkZHJlc3MuXCIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBldmFsdWF0ZVBob25lSW5wdXQoKSB7XG4gICAgY29uc3QgZm9ybVBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaG9uZVwiKTtcblxuICAgIGlmIChmb3JtUGhvbmUudmFsdWUgPT09IFwiXCIgfHwgZm9ybVBob25lLnZhbHVlID09PSBudWxsKSB7XG4gICAgICBVSS5lcnJvck1lc3NhZ2UoMiwgXCJQaG9uZSBpcyByZXF1aXJlZC5cIik7XG4gICAgICBmb3JtUGhvbmUuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCEvXlxcZCskLy50ZXN0KGZvcm1QaG9uZS52YWx1ZSkpIHtcbiAgICAgIFVJLmVycm9yTWVzc2FnZSgyLCBcIlBsZWFzZSBpbnB1dCBhIFBob25lIG51bWJlci5cIik7XG4gICAgICBmb3JtUGhvbmUuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGV2YWx1YXRlUGFzc3dvcmRJbnB1dCgpIHtcbiAgICBjb25zdCBmb3JtUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkXCIpO1xuXG4gICAgaWYgKGZvcm1QYXNzd29yZC52YWx1ZSA9PT0gXCJcIiB8fCBmb3JtUGFzc3dvcmQudmFsdWUgPT09IG51bGwpIHtcbiAgICAgIFVJLmVycm9yTWVzc2FnZSgzLCBcIlBsZWFzZSBlbnRlciBwYXNzd29yZC5cIik7XG4gICAgICBmb3JtUGFzc3dvcmQuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGZvcm1QYXNzd29yZC52YWx1ZS5sZW5ndGggPD0gOCkge1xuICAgICAgVUkuZXJyb3JNZXNzYWdlKDMsIFwiUGFzc3dvcmQgbXVzdCBiZSBsb25nZXIgdGhhbiA4IGNoYXJhY3RlcnMuXCIpO1xuICAgICAgZm9ybVBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChmb3JtUGFzc3dvcmQudmFsdWUubGVuZ3RoID49IDIwKSB7XG4gICAgICBVSS5lcnJvck1lc3NhZ2UoMywgXCJQYXNzd29yZCBtdXN0IGJlIGxlc3MgdGhhbiAyMCBjaGFyYWN0ZXJzLlwiKTtcbiAgICAgIGZvcm1QYXNzd29yZC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBGb3JtLmV2YWx1YXRlQ29uZmlybVBhc3N3b3JkSW5wdXQoKTtcbiAgfVxuXG4gIHN0YXRpYyBldmFsdWF0ZUNvbmZpcm1QYXNzd29yZElucHV0KCkge1xuICAgIGNvbnN0IGZvcm1Db25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm0tcGFzc3dvcmRcIik7XG4gICAgY29uc3QgZm9ybVBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZFwiKTtcblxuICAgIGlmIChcbiAgICAgIGZvcm1Db25maXJtUGFzc3dvcmQudmFsdWUgPT09IFwiXCIgfHxcbiAgICAgIGZvcm1Db25maXJtUGFzc3dvcmQudmFsdWUgPT09IG51bGxcbiAgICApIHtcbiAgICAgIFVJLmVycm9yTWVzc2FnZSg0LCBcIlBsZWFzZSBjb25maXJtIHBhc3N3b3JkLlwiKTtcbiAgICAgIGZvcm1Db25maXJtUGFzc3dvcmQuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGZvcm1Db25maXJtUGFzc3dvcmQudmFsdWUgIT09IGZvcm1QYXNzd29yZC52YWx1ZSkge1xuICAgICAgVUkuZXJyb3JNZXNzYWdlKDQsIFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaC5cIik7XG4gICAgICBmb3JtQ29uZmlybVBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9VSVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBVSS5sb2FkRm9ybSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=