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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7O0FBRVg7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEI7QUFDMUIsTUFBTSw2Q0FBSTtBQUNWLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLE1BQU0sNkNBQUk7QUFDVixLQUFLO0FBQ0w7QUFDQSxNQUFNLDZDQUFJO0FBQ1YsS0FBSztBQUNMO0FBQ0EsTUFBTSw2Q0FBSTtBQUNWLEtBQUs7QUFDTDtBQUNBLE1BQU0sNkNBQUk7QUFDVixLQUFLO0FBQ0w7QUFDQSxNQUFNLDZDQUFJO0FBQ1YsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGc0I7O0FBRVA7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLFFBQVEsMkNBQUU7QUFDVixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJDQUFFO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sMkNBQUU7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLDJDQUFFO0FBQ1I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwyQ0FBRTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sMkNBQUU7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQU0sMkNBQUU7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDJDQUFFO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwyQ0FBRTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkNBQUU7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDJDQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM3R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044Qjs7QUFFOUIsOENBQThDLG1EQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm0gZnJvbSBcIi4vZm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG4gIHN0YXRpYyBsb2FkRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtXCIpO1xuICAgIGNvbnN0IHBob25lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bob25lXCIpO1xuXG4gICAgVUkuaGFuZGxlSW5wdXQoKTtcblxuICAgIHdpbmRvdy5pbnRsVGVsSW5wdXQocGhvbmVJbnB1dCwge1xuICAgICAgdXRpbHNTY3JpcHQ6XG4gICAgICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9pbnRsLXRlbC1pbnB1dEAxOC4yLjEvYnVpbGQvanMvdXRpbHMuanNcIixcbiAgICAgIHNlcGFyYXRlRGlhbENvZGU6IHRydWUsXG4gICAgfSk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnQgYWN0dWFsbHkgc3VibWl0dGluZyBmb3JtXG4gICAgICBGb3JtLmV2YWx1YXRlRm9ybSgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGhhbmRsZUlucHV0KCkge1xuICAgIGNvbnN0IGZvcm1JbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2Zvcm0tZmllbGRdXCIpO1xuICAgIGNvbnN0IGZvcm1OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpO1xuICAgIGNvbnN0IGZvcm1FbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxcIik7XG4gICAgY29uc3QgZm9ybVBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaG9uZVwiKTtcbiAgICBjb25zdCBmb3JtUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkXCIpO1xuICAgIGNvbnN0IGZvcm1Db25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm0tcGFzc3dvcmRcIik7XG4gICAgY29uc3QgZm9ybUNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVja2JveFwiKTtcblxuICAgIGZvcm1JbnB1dHMuZm9yRWFjaCgoZm9ybUlucHV0KSA9PiB7XG4gICAgICBmb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgICAgZm9ybUlucHV0LnBhcmVudE5vZGUuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBmb3JtSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRcIik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBmb3JtUGhvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgIGZvcm1QaG9uZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgZm9ybVBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkXCIpO1xuICAgIH0pO1xuICAgIGZvcm1DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZm9ybUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgZm9ybUNoZWNrYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtY2hlY2tlZFwiKTtcbiAgICB9KTtcblxuICAgIGZvcm1OYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgIEZvcm0uZXZhbHVhdGVOYW1lSW5wdXQoKTtcbiAgICB9KTtcbiAgICBmb3JtRW1haWwuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgRm9ybS5ldmFsdWF0ZUVtYWlsSW5wdXQoKTtcbiAgICB9KTtcbiAgICBmb3JtUGhvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgRm9ybS5ldmFsdWF0ZVBob25lSW5wdXQoKTtcbiAgICB9KTtcbiAgICBmb3JtUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgRm9ybS5ldmFsdWF0ZVBhc3N3b3JkSW5wdXQoKTtcbiAgICB9KTtcbiAgICBmb3JtQ29uZmlybVBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgIEZvcm0uZXZhbHVhdGVDb25maXJtUGFzc3dvcmRJbnB1dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGVycm9yTWVzc2FnZShpbmRleCwgbWVzc2FnZSkge1xuICAgIGNvbnN0IGVycm9ySW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltlcnJvci1oYW5kbGVyXVwiKTtcbiAgICBlcnJvckluZGljYXRvcltpbmRleF0udGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICB9XG5cbiAgc3RhdGljIGNsZWFyQWxsKCkge1xuICAgIGNvbnN0IGZvcm1JbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2Zvcm0tZmllbGRdXCIpO1xuICAgIGNvbnN0IGZvcm1QaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmVcIik7XG4gICAgY29uc3Qgc3VjY2Vzc01lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpO1xuXG4gICAgZm9ybUlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIH0pO1xuICAgIGZvcm1QaG9uZS52YWx1ZSA9IFwiXCI7XG5cbiAgICBzdWNjZXNzTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgc3RhdGljIGZvcm1TdWJtaXR0ZWQoKSB7XG4gICAgVUkuY2xlYXJBbGwoKTtcbiAgICBjb25zdCBzdWNjZXNzTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XG4gICAgc3VjY2Vzc01lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBzdWNjZXNzTWVzc2FnZS50ZXh0Q29udGVudCA9IFwi8J+OiSBBY2NvdW50IGNyZWF0ZWQhXCI7XG4gIH1cbn1cbiIsImltcG9ydCBVSSBmcm9tIFwiLi9VSVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIHtcbiAgc3RhdGljIGV2YWx1YXRlRm9ybSgpIHtcbiAgICBjb25zdCBlcnJvckluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZXJyb3ItaGFuZGxlcl1cIik7XG4gICAgY29uc3QgZm9ybUNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVja2JveFwiKTtcbiAgICBsZXQgZXJyb3JDb3VudCA9IDA7XG5cbiAgICBGb3JtLmV2YWx1YXRlTmFtZUlucHV0KCk7XG4gICAgRm9ybS5ldmFsdWF0ZUVtYWlsSW5wdXQoKTtcbiAgICBGb3JtLmV2YWx1YXRlUGhvbmVJbnB1dCgpO1xuICAgIEZvcm0uZXZhbHVhdGVQYXNzd29yZElucHV0KCk7XG5cbiAgICBlcnJvckluZGljYXRvci5mb3JFYWNoKChtZXNzYWdlKSA9PiB7XG4gICAgICBpZiAobWVzc2FnZS50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgICAgICBlcnJvckNvdW50Kys7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZXJyb3JDb3VudCA9PT0gMCkge1xuICAgICAgaWYgKGZvcm1DaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgIFVJLmZvcm1TdWJtaXR0ZWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1DaGVja2JveC5jbGFzc0xpc3QuYWRkKFwibm90LWNoZWNrZWRcIik7XG4gICAgICAgIGZvcm1DaGVja2JveC5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZXZhbHVhdGVOYW1lSW5wdXQoKSB7XG4gICAgY29uc3QgZm9ybU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIik7XG4gICAgaWYgKGZvcm1OYW1lLnZhbHVlID09PSBcIlwiIHx8IGZvcm1OYW1lLnZhbHVlID09PSBudWxsKSB7XG4gICAgICBVSS5lcnJvck1lc3NhZ2UoMCwgXCJOYW1lIGlzIHJlcXVpcmVkLlwiKTtcbiAgICAgIGZvcm1OYW1lLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBldmFsdWF0ZUVtYWlsSW5wdXQoKSB7XG4gICAgY29uc3QgZm9ybUVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWFpbFwiKTtcbiAgICBjb25zdCB2YWxpZGl0eVN0YXRlID0gZm9ybUVtYWlsLnZhbGlkaXR5O1xuXG4gICAgaWYgKGZvcm1FbWFpbC52YWx1ZSA9PT0gXCJcIiB8fCBmb3JtRW1haWwudmFsdWUgPT09IG51bGwpIHtcbiAgICAgIFVJLmVycm9yTWVzc2FnZSgxLCBcIkVtYWlsIGlzIHJlcXVpcmVkLlwiKTtcbiAgICAgIGZvcm1FbWFpbC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRpdHlTdGF0ZS50eXBlTWlzbWF0Y2gpIHtcbiAgICAgIGZvcm1FbWFpbC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgIFVJLmVycm9yTWVzc2FnZSgxLCBcIkVudGVyIGNvcnJlY3QgZW1haWwgYWRkcmVzcy5cIik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGV2YWx1YXRlUGhvbmVJbnB1dCgpIHtcbiAgICBjb25zdCBmb3JtUGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bob25lXCIpO1xuXG4gICAgaWYgKGZvcm1QaG9uZS52YWx1ZSA9PT0gXCJcIiB8fCBmb3JtUGhvbmUudmFsdWUgPT09IG51bGwpIHtcbiAgICAgIFVJLmVycm9yTWVzc2FnZSgyLCBcIlBob25lIGlzIHJlcXVpcmVkLlwiKTtcbiAgICAgIGZvcm1QaG9uZS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIS9eXFxkKyQvLnRlc3QoZm9ybVBob25lLnZhbHVlKSkge1xuICAgICAgVUkuZXJyb3JNZXNzYWdlKDIsIFwiUGxlYXNlIGlucHV0IGEgUGhvbmUgbnVtYmVyLlwiKTtcbiAgICAgIGZvcm1QaG9uZS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZXZhbHVhdGVQYXNzd29yZElucHV0KCkge1xuICAgIGNvbnN0IGZvcm1QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRcIik7XG5cbiAgICBpZiAoZm9ybVBhc3N3b3JkLnZhbHVlID09PSBcIlwiIHx8IGZvcm1QYXNzd29yZC52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgVUkuZXJyb3JNZXNzYWdlKDMsIFwiUGxlYXNlIGVudGVyIHBhc3N3b3JkLlwiKTtcbiAgICAgIGZvcm1QYXNzd29yZC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZm9ybVBhc3N3b3JkLnZhbHVlLmxlbmd0aCA8PSA4KSB7XG4gICAgICBVSS5lcnJvck1lc3NhZ2UoMywgXCJQYXNzd29yZCBtdXN0IGJlIGxvbmdlciB0aGFuIDggY2hhcmFjdGVycy5cIik7XG4gICAgICBmb3JtUGFzc3dvcmQuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGZvcm1QYXNzd29yZC52YWx1ZS5sZW5ndGggPj0gMjApIHtcbiAgICAgIFVJLmVycm9yTWVzc2FnZSgzLCBcIlBhc3N3b3JkIG11c3QgYmUgbGVzcyB0aGFuIDIwIGNoYXJhY3RlcnMuXCIpO1xuICAgICAgZm9ybVBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEZvcm0uZXZhbHVhdGVDb25maXJtUGFzc3dvcmRJbnB1dCgpO1xuICB9XG5cbiAgc3RhdGljIGV2YWx1YXRlQ29uZmlybVBhc3N3b3JkSW5wdXQoKSB7XG4gICAgY29uc3QgZm9ybUNvbmZpcm1QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybS1wYXNzd29yZFwiKTtcbiAgICBjb25zdCBmb3JtUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkXCIpO1xuXG4gICAgaWYgKFxuICAgICAgZm9ybUNvbmZpcm1QYXNzd29yZC52YWx1ZSA9PT0gXCJcIiB8fFxuICAgICAgZm9ybUNvbmZpcm1QYXNzd29yZC52YWx1ZSA9PT0gbnVsbFxuICAgICkge1xuICAgICAgVUkuZXJyb3JNZXNzYWdlKDQsIFwiUGxlYXNlIGNvbmZpcm0gcGFzc3dvcmQuXCIpO1xuICAgICAgZm9ybUNvbmZpcm1QYXNzd29yZC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZm9ybUNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gZm9ybVBhc3N3b3JkLnZhbHVlKSB7XG4gICAgICBVSS5lcnJvck1lc3NhZ2UoNCwgXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoLlwiKTtcbiAgICAgIGZvcm1Db25maXJtUGFzc3dvcmQuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFVJLmxvYWRGb3JtKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==