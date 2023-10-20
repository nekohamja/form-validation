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

    // intl-tel-input API
    window.intlTelInput(phoneInput, {
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
      separateDialCode: true,
    });

    form.addEventListener("submit", (e) => {
      UI.clear();
      _form__WEBPACK_IMPORTED_MODULE_0__["default"].evaluateForm();
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
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(0, "Name is required.");
    }
    if (formEmail.value === "" || formEmail.value === null) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(1, "Email is required.");
    }
    if (formPassword.value === "" || formPassword.value === null) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(2, "Please enter password.");
      return;
    }
    if (formPassword.value.length <= 8) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(2, "Password must be longer than 8 characters.");
      return;
    }
    if (formPassword.value.length >= 20) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(2, "Password must be less than 20 characters.");
      return;
    }
    if (
      formConfirmPassword.value === "" ||
      formConfirmPassword.value === null
    ) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(3, "Please confirm password.");
    }
    if (formConfirmPassword.value !== formPassword.value) {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].errorMessage(3, "Passwords do not match.");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7O0FBRVg7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLE1BQU0sNkNBQUk7QUFDViwwQkFBMEI7QUFDMUIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ3NCOztBQUVQO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwyQ0FBRTtBQUNSO0FBQ0E7QUFDQSxNQUFNLDJDQUFFO0FBQ1I7QUFDQTtBQUNBLE1BQU0sMkNBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJDQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsTUFBTSwyQ0FBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkNBQUU7QUFDUjtBQUNBO0FBQ0EsTUFBTSwyQ0FBRTtBQUNSO0FBQ0E7QUFDQTs7Ozs7OztVQzNDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhCOztBQUU5Qiw4Q0FBOEMsbURBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb3JtLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybSBmcm9tIFwiLi9mb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIGxvYWRGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1cIik7XG4gICAgY29uc3QgcGhvbmVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmVcIik7XG5cbiAgICAvLyBpbnRsLXRlbC1pbnB1dCBBUElcbiAgICB3aW5kb3cuaW50bFRlbElucHV0KHBob25lSW5wdXQsIHtcbiAgICAgIHV0aWxzU2NyaXB0OlxuICAgICAgICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vaW50bC10ZWwtaW5wdXRAMTguMi4xL2J1aWxkL2pzL3V0aWxzLmpzXCIsXG4gICAgICBzZXBhcmF0ZURpYWxDb2RlOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBVSS5jbGVhcigpO1xuICAgICAgRm9ybS5ldmFsdWF0ZUZvcm0oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBzdWJtaXR0aW5nIGZvcm1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBlcnJvck1lc3NhZ2UoaW5kZXgsIG1lc3NhZ2UpIHtcbiAgICBjb25zdCBlcnJvckluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZXJyb3ItaGFuZGxlcl1cIik7XG4gICAgZXJyb3JJbmRpY2F0b3JbaW5kZXhdLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgfVxuXG4gIHN0YXRpYyBjbGVhcigpIHtcbiAgICBjb25zdCBlcnJvckluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZXJyb3ItaGFuZGxlcl1cIik7XG4gICAgZXJyb3JJbmRpY2F0b3IuZm9yRWFjaCgobWVzc2FnZSkgPT4ge1xuICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBVSSBmcm9tIFwiLi9VSVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW1haWwsIHBhc3N3b3JkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVtYWlsID0gZW1haWw7XG4gICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICB9XG5cbiAgc3RhdGljIGV2YWx1YXRlRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKTtcbiAgICBjb25zdCBmb3JtRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsXCIpO1xuICAgIGNvbnN0IGZvcm1QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRcIik7XG4gICAgY29uc3QgZm9ybUNvbmZpcm1QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybS1wYXNzd29yZFwiKTtcblxuICAgIGlmIChmb3JtTmFtZS52YWx1ZSA9PT0gXCJcIiB8fCBmb3JtTmFtZS52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgVUkuZXJyb3JNZXNzYWdlKDAsIFwiTmFtZSBpcyByZXF1aXJlZC5cIik7XG4gICAgfVxuICAgIGlmIChmb3JtRW1haWwudmFsdWUgPT09IFwiXCIgfHwgZm9ybUVtYWlsLnZhbHVlID09PSBudWxsKSB7XG4gICAgICBVSS5lcnJvck1lc3NhZ2UoMSwgXCJFbWFpbCBpcyByZXF1aXJlZC5cIik7XG4gICAgfVxuICAgIGlmIChmb3JtUGFzc3dvcmQudmFsdWUgPT09IFwiXCIgfHwgZm9ybVBhc3N3b3JkLnZhbHVlID09PSBudWxsKSB7XG4gICAgICBVSS5lcnJvck1lc3NhZ2UoMiwgXCJQbGVhc2UgZW50ZXIgcGFzc3dvcmQuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZm9ybVBhc3N3b3JkLnZhbHVlLmxlbmd0aCA8PSA4KSB7XG4gICAgICBVSS5lcnJvck1lc3NhZ2UoMiwgXCJQYXNzd29yZCBtdXN0IGJlIGxvbmdlciB0aGFuIDggY2hhcmFjdGVycy5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChmb3JtUGFzc3dvcmQudmFsdWUubGVuZ3RoID49IDIwKSB7XG4gICAgICBVSS5lcnJvck1lc3NhZ2UoMiwgXCJQYXNzd29yZCBtdXN0IGJlIGxlc3MgdGhhbiAyMCBjaGFyYWN0ZXJzLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgZm9ybUNvbmZpcm1QYXNzd29yZC52YWx1ZSA9PT0gXCJcIiB8fFxuICAgICAgZm9ybUNvbmZpcm1QYXNzd29yZC52YWx1ZSA9PT0gbnVsbFxuICAgICkge1xuICAgICAgVUkuZXJyb3JNZXNzYWdlKDMsIFwiUGxlYXNlIGNvbmZpcm0gcGFzc3dvcmQuXCIpO1xuICAgIH1cbiAgICBpZiAoZm9ybUNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gZm9ybVBhc3N3b3JkLnZhbHVlKSB7XG4gICAgICBVSS5lcnJvck1lc3NhZ2UoMywgXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoLlwiKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVJIGZyb20gXCIuL21vZHVsZXMvVUlcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgVUkubG9hZEZvcm0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9