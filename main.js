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
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].clearAll();
    }
  }

  static evaluateNameInput() {
    const formName = document.querySelector("#name");
    if (formName.value === "" || formName.value === null) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(0, "Name is required.");
      formName.classList.add("invalid");
    } else formName.classList.add("valid");
  }

  static evaluateEmailInput() {
    const formEmail = document.querySelector("#email");
    const validityState = formEmail.validity;

    if (formEmail.value === "" || formEmail.value === null) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(1, "Email is required.");
      formEmail.classList.add("invalid");
    } else formEmail.classList.add("valid");

    if (validityState.typeMismatch) {
      formEmail.classList.add("invalid");
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(1, "Enter correct email address.");
    } else formEmail.classList.add("valid");
  }

  static evaluatePhoneInput() {
    const formPhone = document.querySelector("#phone");

    if (formPhone.value === "" || formPhone.value === null) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(2, "Phone is required.");
      formPhone.classList.add("invalid");
      return;
    } else formPhone.classList.add("valid");

    if (!/^\d+$/.test(formPhone.value)) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(2, "Please input a Phone number.");
      formPhone.classList.add("invalid");
    } else formPhone.classList.add("valid");
  }

  static evaluatePasswordInput() {
    const formPassword = document.querySelector("#password");

    if (formPassword.value === "" || formPassword.value === null) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(3, "Please enter password.");
      formPassword.classList.add("invalid");
      return;
    } else formPassword.classList.add("valid");

    if (formPassword.value.length <= 8) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(3, "Password must be longer than 8 characters.");
      formPassword.classList.add("invalid");
      return;
    } else formPassword.classList.add("valid");

    if (formPassword.value.length >= 20) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(3, "Password must be less than 20 characters.");
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
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(4, "Please confirm password.");
      formConfirmPassword.classList.add("invalid");
      return;
    } else formConfirmPassword.classList.add("valid");

    if (formConfirmPassword.value !== formPassword.value) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(4, "Passwords do not match.");
      formConfirmPassword.classList.add("invalid");
    } else formConfirmPassword.classList.add("valid");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7O0FBRVg7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEI7QUFDMUIsTUFBTSw2Q0FBSTtBQUNWLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLE1BQU0sNkNBQUk7QUFDVixLQUFLO0FBQ0w7QUFDQSxNQUFNLDZDQUFJO0FBQ1YsS0FBSztBQUNMO0FBQ0EsTUFBTSw2Q0FBSTtBQUNWLEtBQUs7QUFDTDtBQUNBLE1BQU0sNkNBQUk7QUFDVixLQUFLO0FBQ0w7QUFDQSxNQUFNLDZDQUFJO0FBQ1YsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVFc0I7O0FBRVA7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFNLDJDQUFFO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJDQUFFO0FBQ1I7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwyQ0FBRTtBQUNSO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0EsTUFBTSwyQ0FBRTtBQUNSLE1BQU07QUFDTjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwyQ0FBRTtBQUNSO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EsTUFBTSwyQ0FBRTtBQUNSO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDJDQUFFO0FBQ1I7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQSxNQUFNLDJDQUFFO0FBQ1I7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQSxNQUFNLDJDQUFFO0FBQ1I7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJDQUFFO0FBQ1I7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQSxNQUFNLDJDQUFFO0FBQ1I7QUFDQSxNQUFNO0FBQ047QUFDQTs7Ozs7OztVQ3hHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhCOztBQUU5Qiw4Q0FBOEMsbURBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb3JtLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybSBmcm9tIFwiLi9mb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIGxvYWRGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1cIik7XG4gICAgY29uc3QgcGhvbmVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmVcIik7XG5cbiAgICBVSS5oYW5kbGVJbnB1dCgpO1xuXG4gICAgd2luZG93LmludGxUZWxJbnB1dChwaG9uZUlucHV0LCB7XG4gICAgICB1dGlsc1NjcmlwdDpcbiAgICAgICAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2ludGwtdGVsLWlucHV0QDE4LjIuMS9idWlsZC9qcy91dGlscy5qc1wiLFxuICAgICAgc2VwYXJhdGVEaWFsQ29kZTogdHJ1ZSxcbiAgICB9KTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBhY3R1YWxseSBzdWJtaXR0aW5nIGZvcm1cbiAgICAgIEZvcm0uZXZhbHVhdGVGb3JtKCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlSW5wdXQoKSB7XG4gICAgY29uc3QgZm9ybUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZm9ybS1maWVsZF1cIik7XG4gICAgY29uc3QgZm9ybU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIik7XG4gICAgY29uc3QgZm9ybUVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWFpbFwiKTtcbiAgICBjb25zdCBmb3JtUGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bob25lXCIpO1xuICAgIGNvbnN0IGZvcm1QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRcIik7XG4gICAgY29uc3QgZm9ybUNvbmZpcm1QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybS1wYXNzd29yZFwiKTtcblxuICAgIGZvcm1JbnB1dHMuZm9yRWFjaCgoZm9ybUlucHV0KSA9PiB7XG4gICAgICBmb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgICAgZm9ybUlucHV0LnBhcmVudE5vZGUuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBmb3JtSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRcIik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBmb3JtUGhvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgIGZvcm1QaG9uZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgZm9ybVBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkXCIpO1xuICAgIH0pO1xuXG4gICAgZm9ybU5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgRm9ybS5ldmFsdWF0ZU5hbWVJbnB1dCgpO1xuICAgIH0pO1xuICAgIGZvcm1FbWFpbC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICBGb3JtLmV2YWx1YXRlRW1haWxJbnB1dCgpO1xuICAgIH0pO1xuICAgIGZvcm1QaG9uZS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICBGb3JtLmV2YWx1YXRlUGhvbmVJbnB1dCgpO1xuICAgIH0pO1xuICAgIGZvcm1QYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICBGb3JtLmV2YWx1YXRlUGFzc3dvcmRJbnB1dCgpO1xuICAgIH0pO1xuICAgIGZvcm1Db25maXJtUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgRm9ybS5ldmFsdWF0ZUNvbmZpcm1QYXNzd29yZElucHV0KCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZXJyb3JNZXNzYWdlKGluZGV4LCBtZXNzYWdlKSB7XG4gICAgY29uc3QgZXJyb3JJbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2Vycm9yLWhhbmRsZXJdXCIpO1xuICAgIGVycm9ySW5kaWNhdG9yW2luZGV4XS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gIH1cblxuICBzdGF0aWMgY2xlYXJBbGwoKSB7XG4gICAgY29uc3QgZm9ybUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZm9ybS1maWVsZF1cIik7XG4gICAgY29uc3QgZm9ybVBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaG9uZVwiKTtcbiAgICBmb3JtSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgfSk7XG4gICAgZm9ybVBob25lLnZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIHN0YXRpYyBmb3JtU3VibWl0dGVkKCkge1xuICAgIC8vIHRvZG9cbiAgICAvLyBjcmVhdGUgZm9ybSBzdWJtaXNzaW9uIGluZGljYXRvciBoZXJlXG4gICAgLy8gaW1wbGVtZW50IFNBU1NcbiAgICAvLyBpbXBsZW1lbnQgM2QgdmlkZW8gYmcgYXBpXG4gIH1cbn1cbiIsImltcG9ydCBVSSBmcm9tIFwiLi9VSVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIHtcbiAgc3RhdGljIGV2YWx1YXRlRm9ybSgpIHtcbiAgICBjb25zdCBlcnJvckluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZXJyb3ItaGFuZGxlcl1cIik7XG4gICAgbGV0IGVycm9yQ291bnQgPSAwO1xuXG4gICAgRm9ybS5ldmFsdWF0ZU5hbWVJbnB1dCgpO1xuICAgIEZvcm0uZXZhbHVhdGVFbWFpbElucHV0KCk7XG4gICAgRm9ybS5ldmFsdWF0ZVBob25lSW5wdXQoKTtcbiAgICBGb3JtLmV2YWx1YXRlUGFzc3dvcmRJbnB1dCgpO1xuXG4gICAgZXJyb3JJbmRpY2F0b3IuZm9yRWFjaCgobWVzc2FnZSkgPT4ge1xuICAgICAgaWYgKG1lc3NhZ2UudGV4dENvbnRlbnQgIT09IFwiXCIpIHtcbiAgICAgICAgZXJyb3JDb3VudCsrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGVycm9yQ291bnQgPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZm9ybSBzdWJtaXR0ZWRcIik7XG4gICAgICBVSS5jbGVhckFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBldmFsdWF0ZU5hbWVJbnB1dCgpIHtcbiAgICBjb25zdCBmb3JtTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKTtcbiAgICBpZiAoZm9ybU5hbWUudmFsdWUgPT09IFwiXCIgfHwgZm9ybU5hbWUudmFsdWUgPT09IG51bGwpIHtcbiAgICAgIFVJLmVycm9yTWVzc2FnZSgwLCBcIk5hbWUgaXMgcmVxdWlyZWQuXCIpO1xuICAgICAgZm9ybU5hbWUuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgfSBlbHNlIGZvcm1OYW1lLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZFwiKTtcbiAgfVxuXG4gIHN0YXRpYyBldmFsdWF0ZUVtYWlsSW5wdXQoKSB7XG4gICAgY29uc3QgZm9ybUVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWFpbFwiKTtcbiAgICBjb25zdCB2YWxpZGl0eVN0YXRlID0gZm9ybUVtYWlsLnZhbGlkaXR5O1xuXG4gICAgaWYgKGZvcm1FbWFpbC52YWx1ZSA9PT0gXCJcIiB8fCBmb3JtRW1haWwudmFsdWUgPT09IG51bGwpIHtcbiAgICAgIFVJLmVycm9yTWVzc2FnZSgxLCBcIkVtYWlsIGlzIHJlcXVpcmVkLlwiKTtcbiAgICAgIGZvcm1FbWFpbC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICB9IGVsc2UgZm9ybUVtYWlsLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZFwiKTtcblxuICAgIGlmICh2YWxpZGl0eVN0YXRlLnR5cGVNaXNtYXRjaCkge1xuICAgICAgZm9ybUVtYWlsLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgVUkuZXJyb3JNZXNzYWdlKDEsIFwiRW50ZXIgY29ycmVjdCBlbWFpbCBhZGRyZXNzLlwiKTtcbiAgICB9IGVsc2UgZm9ybUVtYWlsLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZFwiKTtcbiAgfVxuXG4gIHN0YXRpYyBldmFsdWF0ZVBob25lSW5wdXQoKSB7XG4gICAgY29uc3QgZm9ybVBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaG9uZVwiKTtcblxuICAgIGlmIChmb3JtUGhvbmUudmFsdWUgPT09IFwiXCIgfHwgZm9ybVBob25lLnZhbHVlID09PSBudWxsKSB7XG4gICAgICBVSS5lcnJvck1lc3NhZ2UoMiwgXCJQaG9uZSBpcyByZXF1aXJlZC5cIik7XG4gICAgICBmb3JtUGhvbmUuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGZvcm1QaG9uZS5jbGFzc0xpc3QuYWRkKFwidmFsaWRcIik7XG5cbiAgICBpZiAoIS9eXFxkKyQvLnRlc3QoZm9ybVBob25lLnZhbHVlKSkge1xuICAgICAgVUkuZXJyb3JNZXNzYWdlKDIsIFwiUGxlYXNlIGlucHV0IGEgUGhvbmUgbnVtYmVyLlwiKTtcbiAgICAgIGZvcm1QaG9uZS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICB9IGVsc2UgZm9ybVBob25lLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZFwiKTtcbiAgfVxuXG4gIHN0YXRpYyBldmFsdWF0ZVBhc3N3b3JkSW5wdXQoKSB7XG4gICAgY29uc3QgZm9ybVBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZFwiKTtcblxuICAgIGlmIChmb3JtUGFzc3dvcmQudmFsdWUgPT09IFwiXCIgfHwgZm9ybVBhc3N3b3JkLnZhbHVlID09PSBudWxsKSB7XG4gICAgICBVSS5lcnJvck1lc3NhZ2UoMywgXCJQbGVhc2UgZW50ZXIgcGFzc3dvcmQuXCIpO1xuICAgICAgZm9ybVBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBmb3JtUGFzc3dvcmQuY2xhc3NMaXN0LmFkZChcInZhbGlkXCIpO1xuXG4gICAgaWYgKGZvcm1QYXNzd29yZC52YWx1ZS5sZW5ndGggPD0gOCkge1xuICAgICAgVUkuZXJyb3JNZXNzYWdlKDMsIFwiUGFzc3dvcmQgbXVzdCBiZSBsb25nZXIgdGhhbiA4IGNoYXJhY3RlcnMuXCIpO1xuICAgICAgZm9ybVBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBmb3JtUGFzc3dvcmQuY2xhc3NMaXN0LmFkZChcInZhbGlkXCIpO1xuXG4gICAgaWYgKGZvcm1QYXNzd29yZC52YWx1ZS5sZW5ndGggPj0gMjApIHtcbiAgICAgIFVJLmVycm9yTWVzc2FnZSgzLCBcIlBhc3N3b3JkIG11c3QgYmUgbGVzcyB0aGFuIDIwIGNoYXJhY3RlcnMuXCIpO1xuICAgICAgZm9ybVBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBmb3JtUGFzc3dvcmQuY2xhc3NMaXN0LmFkZChcInZhbGlkXCIpO1xuXG4gICAgRm9ybS5ldmFsdWF0ZUNvbmZpcm1QYXNzd29yZElucHV0KCk7XG4gIH1cblxuICBzdGF0aWMgZXZhbHVhdGVDb25maXJtUGFzc3dvcmRJbnB1dCgpIHtcbiAgICBjb25zdCBmb3JtQ29uZmlybVBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25maXJtLXBhc3N3b3JkXCIpO1xuICAgIGNvbnN0IGZvcm1QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRcIik7XG5cbiAgICBpZiAoXG4gICAgICBmb3JtQ29uZmlybVBhc3N3b3JkLnZhbHVlID09PSBcIlwiIHx8XG4gICAgICBmb3JtQ29uZmlybVBhc3N3b3JkLnZhbHVlID09PSBudWxsXG4gICAgKSB7XG4gICAgICBVSS5lcnJvck1lc3NhZ2UoNCwgXCJQbGVhc2UgY29uZmlybSBwYXNzd29yZC5cIik7XG4gICAgICBmb3JtQ29uZmlybVBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBmb3JtQ29uZmlybVBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZFwiKTtcblxuICAgIGlmIChmb3JtQ29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSBmb3JtUGFzc3dvcmQudmFsdWUpIHtcbiAgICAgIFVJLmVycm9yTWVzc2FnZSg0LCBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2guXCIpO1xuICAgICAgZm9ybUNvbmZpcm1QYXNzd29yZC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICB9IGVsc2UgZm9ybUNvbmZpcm1QYXNzd29yZC5jbGFzc0xpc3QuYWRkKFwidmFsaWRcIik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVJIGZyb20gXCIuL21vZHVsZXMvVUlcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgVUkubG9hZEZvcm0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9