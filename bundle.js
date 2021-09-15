/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/select.js":
/*!*****************************!*\
  !*** ./src/utils/select.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$id": () => (/* binding */ $id),
/* harmony export */   "$css": () => (/* binding */ $css),
/* harmony export */   "$query": () => (/* binding */ $query),
/* harmony export */   "$all": () => (/* binding */ $all)
/* harmony export */ });
var $id = function $id(id) {
  var element = document.getElementById(id);

  if (element) {
    return element;
  } else {
    console.log("the id \"".concat(id, "\" not correct!"));
  }
};
var $css = function $css(css) {
  var element = document.querySelector(css);

  if (element) {
    return element;
  } else {
    console.log("the css selector \"".concat(css, "\" not correct!"));
  }
};
var $query = function $query(elem, css) {
  if (!elem) {
    console.log("the html element \"".concat(elem, "\" not found!"));
    return;
  } else {
    var element = elem.querySelector(css);

    if (element) {
      return element;
    } else {
      console.log("the css selector \"".concat(css, "\" not correct!"));
    }
  }
};
var $all = function $all(css) {
  var element = document.querySelector(css);

  if (element) {
    return element;
  } else {
    console.log("the css selector \"".concat(css, "\" not correct!"));
  }
};

/***/ }),

/***/ "./src/images/bin-24.png":
/*!*******************************!*\
  !*** ./src/images/bin-24.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c715c83f06c02e7c124a.png";

/***/ }),

/***/ "./src/images/check-24.png":
/*!*********************************!*\
  !*** ./src/images/check-24.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "86d28427dc683c626f2b.png";

/***/ }),

/***/ "./src/images/edit-24.png":
/*!********************************!*\
  !*** ./src/images/edit-24.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f07e7cb041be7c8dfd57.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _utils_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/select */ "./src/utils/select.js");
/* harmony import */ var _images_check_24_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/check-24.png */ "./src/images/check-24.png");
/* harmony import */ var _images_edit_24_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/edit-24.png */ "./src/images/edit-24.png");
/* harmony import */ var _images_bin_24_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/bin-24.png */ "./src/images/bin-24.png");



 // ****** select items **********
// html elements

var form = (0,_utils_select__WEBPACK_IMPORTED_MODULE_0__.$id)("form");
var input = (0,_utils_select__WEBPACK_IMPORTED_MODULE_0__.$id)("task-input");
var submit = (0,_utils_select__WEBPACK_IMPORTED_MODULE_0__.$css)(".submit");
var container = (0,_utils_select__WEBPACK_IMPORTED_MODULE_0__.$css)(".tasks-container");
var alert = (0,_utils_select__WEBPACK_IMPORTED_MODULE_0__.$id)("alert");
var list = (0,_utils_select__WEBPACK_IMPORTED_MODULE_0__.$css)(".tasks-list");
var clearBtn = (0,_utils_select__WEBPACK_IMPORTED_MODULE_0__.$css)(".clear"); // edit options

var editElement = null;
var editState = false;
var editID; // ****** event listeners **********
// submit btn

form.addEventListener("submit", addTask); // clear btn

clearBtn.addEventListener("click", clearTasks); // display items onload

window.addEventListener("DOMContentLoaded", setupTasks); // ****** functions **********
// constructor

var Task = function Task(id, value) {
  this.done = false;
  this.id = id;
  this.value = value;
}; // add task


function addTask(e) {
  e.preventDefault();
  var txt = input.value;
  var id = new Date().getTime().toString(); // create new task object

  var task = new Task(id, txt);

  if (txt && !editState) {
    // create div element
    var div = createHtml(txt, id); // append div

    append(list, div, task.done); // display alert

    displayAlert("task added to the list", "success"); // show list

    container.classList.add("show-container"); // save the object in  local storage

    addToLocalStorage(task); // add event listeners to buttons

    addEventsToBtns(div, task); // set back to default

    setBackToDefault();
  } else if (txt && editState) {
    task.value = txt;
    editElement.innerHTML = txt;
    displayAlert("value changed", "success");
    editLocalStorage(task);
    setBackToDefault();
  } else {
    displayAlert("empty value, please write something!", "danger");
  }
} // create html div element


function createHtml(txt, id) {
  var div = document.createElement("div");
  div.classList.add("task-item");
  div.dataset.id = id;
  var template = "<button class=\"check btn\">\n  <img src=\"".concat(_images_check_24_png__WEBPACK_IMPORTED_MODULE_1__, "\" alt=\"check\">\n</button>\n\n<p class=\"title\">").concat(txt, "</p>\n\n<button class=\"edit btn\">\n  <img src=\"").concat(_images_edit_24_png__WEBPACK_IMPORTED_MODULE_2__, "\" alt=\"edit\">\n</button>\n\n<button class=\"delete btn\">\n  <img src=\"").concat(_images_bin_24_png__WEBPACK_IMPORTED_MODULE_3__, "\" alt=\"delete\">\n</button>");
  div.innerHTML = template;
  return div;
} // append child to parent


function append(parent, elem, done) {
  parent.append(elem);

  if (done) {
    var checkbtn = (0,_utils_select__WEBPACK_IMPORTED_MODULE_0__.$query)(elem, ".check");
    checkbtn.classList.add("bcgGreen");
  }
} // clear all tasks


function clearTasks() {
  list.innerHTML = "";
  displayAlert("empty list", "danger");
  container.classList.remove("show-container");
  localStorage.removeItem("myTasks");
  setBackToDefault();
} // set back to defaults


function setBackToDefault() {
  input.value = "";
  editState = false;
  editElement = "";
  editID = null;
  submit.textContent = "+add";
} // display alert


function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add("alert-".concat(action)); // remove alert

  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove("alert-".concat(action));
  }, 1000);
} // add events


function addEventsToBtns(div, task) {
  // check btn
  var checkBtn = (0,_utils_select__WEBPACK_IMPORTED_MODULE_0__.$query)(div, ".check");
  checkBtn.addEventListener("click", function () {
    toggleDone(checkBtn, task);
    updateLocaleStorage(task);
    setBackToDefault();
  }); // edit btn

  var editBtn = (0,_utils_select__WEBPACK_IMPORTED_MODULE_0__.$query)(div, ".edit");
  editBtn.addEventListener("click", function () {
    editTask(div);
  }); //  delete btn

  var deleteBtn = (0,_utils_select__WEBPACK_IMPORTED_MODULE_0__.$query)(div, ".delete");
  deleteBtn.addEventListener("click", function () {
    deleteTask(div);
    removeFromLocalStorage(task);
    setBackToDefault();
  });
} //  toggle task done


function toggleDone(btn, obj) {
  btn.classList.toggle("bcgGreen");

  if (obj.done) {
    obj.done = false;
  } else {
    obj.done = true;
  }
} // delete task


function deleteTask(elem) {
  list.removeChild(elem);
  displayAlert("task deleted", "danger");

  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
} // edit task


function editTask(elem) {
  editElement = (0,_utils_select__WEBPACK_IMPORTED_MODULE_0__.$query)(elem, ".title");
  input.value = editElement.innerHTML;
  submit.textContent = "edit";
  editState = true;
  editID = elem.dataset.id;
} // ****** local storage **********
// get an array from local storage


function getLocalStorage() {
  return JSON.parse(localStorage.getItem("myTasks")) || [];
} // add to local storage


function addToLocalStorage(task) {
  var tasks = getLocalStorage();
  tasks.push(task);
  localStorage.setItem("myTasks", JSON.stringify(tasks));
} //  update local storage


function updateLocaleStorage(task) {
  var tasks = getLocalStorage();
  tasks.forEach(function (obj) {
    if (obj.id === task.id) {
      obj.done = task.done;
    }
  });
  localStorage.setItem("myTasks", JSON.stringify(tasks));
} // delete from local storage


function removeFromLocalStorage(task) {
  var tasks = getLocalStorage();
  tasks = tasks.filter(function (obj) {
    return obj.id !== task.id;
  });
  localStorage.setItem("myTasks", JSON.stringify(tasks));
} // edit local storage


function editLocalStorage(task) {
  var tasks = getLocalStorage();
  tasks.forEach(function (obj) {
    if (obj.id === editID) {
      return obj.value = task.value;
    }
  });
  localStorage.setItem("myTasks", JSON.stringify(tasks));
} // ****** setup tasks **********


function setupTasks() {
  var tasks = getLocalStorage();

  if (!tasks.length) {
    return;
  }

  tasks.forEach(function (task) {
    var div = createHtml(task.value, task.id);
    append(list, div, task.done);
    addEventsToBtns(div, task);
  });
  container.classList.add("show-container");
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3JCLGFBQU9nRCxHQUFHLENBQUN6QyxLQUFKLEdBQVlRLElBQUksQ0FBQ1IsS0FBeEI7QUFDRDtBQUNGLEdBSkQ7QUFLQTBCLEVBQUFBLFlBQVksQ0FBQzBCLE9BQWIsQ0FBcUIsU0FBckIsRUFBZ0NMLElBQUksQ0FBQ00sU0FBTCxDQUFlSCxLQUFmLENBQWhDO0FBQ0QsRUFFRDs7O0FBQ0EsU0FBU3BELFVBQVQsR0FBc0I7QUFDcEIsTUFBTW9ELEtBQUssR0FBR0osZUFBZSxFQUE3Qjs7QUFDQSxNQUFJLENBQUNJLEtBQUssQ0FBQ0wsTUFBWCxFQUFtQjtBQUNqQjtBQUNEOztBQUNESyxFQUFBQSxLQUFLLENBQUNJLE9BQU4sQ0FBYyxVQUFVOUMsSUFBVixFQUFnQjtBQUM1QixRQUFNQyxHQUFHLEdBQUdDLFVBQVUsQ0FBQ0YsSUFBSSxDQUFDUixLQUFOLEVBQWFRLElBQUksQ0FBQ3ZDLEVBQWxCLENBQXRCO0FBQ0EwQyxJQUFBQSxNQUFNLENBQUN0QixJQUFELEVBQU9vQixHQUFQLEVBQVlELElBQUksQ0FBQ1AsSUFBakIsQ0FBTjtBQUNBZSxJQUFBQSxlQUFlLENBQUNQLEdBQUQsRUFBTUQsSUFBTixDQUFmO0FBQ0QsR0FKRDtBQUtBckIsRUFBQUEsU0FBUyxDQUFDMEIsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsZ0JBQXhCO0FBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215bGlzdHRvZG8vLi9zcmMvdXRpbHMvc2VsZWN0LmpzIiwid2VicGFjazovL215bGlzdHRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXlsaXN0dG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXlsaXN0dG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215bGlzdHRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teWxpc3R0b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXlsaXN0dG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teWxpc3R0b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCAkaWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgaWYgKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhgdGhlIGlkIFwiJHtpZH1cIiBub3QgY29ycmVjdCFgKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0ICRjc3MgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNzcyk7XG4gIGlmIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coYHRoZSBjc3Mgc2VsZWN0b3IgXCIke2Nzc31cIiBub3QgY29ycmVjdCFgKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0ICRxdWVyeSA9IGZ1bmN0aW9uIChlbGVtLCBjc3MpIHtcbiAgaWYgKCFlbGVtKSB7XG4gICAgY29uc29sZS5sb2coYHRoZSBodG1sIGVsZW1lbnQgXCIke2VsZW19XCIgbm90IGZvdW5kIWApO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbS5xdWVyeVNlbGVjdG9yKGNzcyk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgdGhlIGNzcyBzZWxlY3RvciBcIiR7Y3NzfVwiIG5vdCBjb3JyZWN0IWApO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0ICRhbGwgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNzcyk7XG4gIGlmIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coYHRoZSBjc3Mgc2VsZWN0b3IgXCIke2Nzc31cIiBub3QgY29ycmVjdCFgKTtcbiAgfVxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7ICRpZCwgJGNzcywgJHF1ZXJ5fSBmcm9tIFwiLi91dGlscy9zZWxlY3RcIjtcbmltcG9ydCBjaGVja0ltZyBmcm9tIFwiLi9pbWFnZXMvY2hlY2stMjQucG5nXCI7XG5pbXBvcnQgZWRpdEltZyBmcm9tIFwiLi9pbWFnZXMvZWRpdC0yNC5wbmdcIjtcbmltcG9ydCBiaW5JbWcgZnJvbSBcIi4vaW1hZ2VzL2Jpbi0yNC5wbmdcIjtcbi8vICoqKioqKiBzZWxlY3QgaXRlbXMgKioqKioqKioqKlxuXG4vLyBodG1sIGVsZW1lbnRzXG5jb25zdCBmb3JtID0gJGlkKFwiZm9ybVwiKTtcbmNvbnN0IGlucHV0ID0gJGlkKFwidGFzay1pbnB1dFwiKTtcbmNvbnN0IHN1Ym1pdCA9ICRjc3MoXCIuc3VibWl0XCIpO1xuY29uc3QgY29udGFpbmVyID0gJGNzcyhcIi50YXNrcy1jb250YWluZXJcIik7XG5jb25zdCBhbGVydCA9ICRpZChcImFsZXJ0XCIpO1xuY29uc3QgbGlzdCA9ICRjc3MoXCIudGFza3MtbGlzdFwiKTtcbmNvbnN0IGNsZWFyQnRuID0gJGNzcyhcIi5jbGVhclwiKTtcblxuLy8gZWRpdCBvcHRpb25zXG5sZXQgZWRpdEVsZW1lbnQgPSBudWxsO1xubGV0IGVkaXRTdGF0ZSA9IGZhbHNlO1xubGV0IGVkaXRJRDtcblxuLy8gKioqKioqIGV2ZW50IGxpc3RlbmVycyAqKioqKioqKioqXG4vLyBzdWJtaXQgYnRuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYWRkVGFzayk7XG5cbi8vIGNsZWFyIGJ0blxuY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyVGFza3MpO1xuXG4vLyBkaXNwbGF5IGl0ZW1zIG9ubG9hZFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHNldHVwVGFza3MpO1xuXG4vLyAqKioqKiogZnVuY3Rpb25zICoqKioqKioqKipcblxuLy8gY29uc3RydWN0b3JcbmNvbnN0IFRhc2sgPSBmdW5jdGlvbiAoaWQsIHZhbHVlKSB7XG4gIHRoaXMuZG9uZSA9IGZhbHNlO1xuICB0aGlzLmlkID0gaWQ7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn07XG5cbi8vIGFkZCB0YXNrXG5mdW5jdGlvbiBhZGRUYXNrKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0eHQgPSBpbnB1dC52YWx1ZTtcbiAgY29uc3QgaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpO1xuICAvLyBjcmVhdGUgbmV3IHRhc2sgb2JqZWN0XG4gIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhpZCwgdHh0KTtcbiAgaWYgKHR4dCAmJiAhZWRpdFN0YXRlKSB7XG4gICAgLy8gY3JlYXRlIGRpdiBlbGVtZW50XG4gICBjb25zdCBkaXYgPSBjcmVhdGVIdG1sKHR4dCwgaWQpO1xuICAgIC8vIGFwcGVuZCBkaXZcbiAgICBhcHBlbmQobGlzdCwgZGl2LCB0YXNrLmRvbmUpO1xuICAgIC8vIGRpc3BsYXkgYWxlcnRcbiAgICBkaXNwbGF5QWxlcnQoXCJ0YXNrIGFkZGVkIHRvIHRoZSBsaXN0XCIsIFwic3VjY2Vzc1wiKTtcbiAgICAvLyBzaG93IGxpc3RcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNob3ctY29udGFpbmVyXCIpO1xuICAgIC8vIHNhdmUgdGhlIG9iamVjdCBpbiAgbG9jYWwgc3RvcmFnZVxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKHRhc2spO1xuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lcnMgdG8gYnV0dG9uc1xuICAgIGFkZEV2ZW50c1RvQnRucyhkaXYsIHRhc2spO1xuICAgIC8vIHNldCBiYWNrIHRvIGRlZmF1bHRcbiAgICBzZXRCYWNrVG9EZWZhdWx0KCk7XG5cbiAgfSBlbHNlIGlmICh0eHQgJiYgZWRpdFN0YXRlKSB7XG4gICAgdGFzay52YWx1ZSA9IHR4dCA7IFxuICAgIGVkaXRFbGVtZW50LmlubmVySFRNTCA9IHR4dDtcbiAgICBkaXNwbGF5QWxlcnQoXCJ2YWx1ZSBjaGFuZ2VkXCIsIFwic3VjY2Vzc1wiKTsgICAgICAgICAgICAgICAgICAgXG4gICAgZWRpdExvY2FsU3RvcmFnZSh0YXNrKTtcbiAgICBzZXRCYWNrVG9EZWZhdWx0KCk7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheUFsZXJ0KFwiZW1wdHkgdmFsdWUsIHBsZWFzZSB3cml0ZSBzb21ldGhpbmchXCIsIFwiZGFuZ2VyXCIpO1xuICB9XG59XG5cbi8vIGNyZWF0ZSBodG1sIGRpdiBlbGVtZW50XG5mdW5jdGlvbiBjcmVhdGVIdG1sKHR4dCwgaWQpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW1cIik7XG4gIGRpdi5kYXRhc2V0LmlkID0gaWQ7XG4gIGNvbnN0IHRlbXBsYXRlID0gYDxidXR0b24gY2xhc3M9XCJjaGVjayBidG5cIj5cbiAgPGltZyBzcmM9XCIke2NoZWNrSW1nfVwiIGFsdD1cImNoZWNrXCI+XG48L2J1dHRvbj5cblxuPHAgY2xhc3M9XCJ0aXRsZVwiPiR7dHh0fTwvcD5cblxuPGJ1dHRvbiBjbGFzcz1cImVkaXQgYnRuXCI+XG4gIDxpbWcgc3JjPVwiJHtlZGl0SW1nfVwiIGFsdD1cImVkaXRcIj5cbjwvYnV0dG9uPlxuXG48YnV0dG9uIGNsYXNzPVwiZGVsZXRlIGJ0blwiPlxuICA8aW1nIHNyYz1cIiR7YmluSW1nfVwiIGFsdD1cImRlbGV0ZVwiPlxuPC9idXR0b24+YDtcbiAgZGl2LmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICByZXR1cm4gZGl2O1xufVxuXG4vLyBhcHBlbmQgY2hpbGQgdG8gcGFyZW50XG5mdW5jdGlvbiBhcHBlbmQocGFyZW50LCBlbGVtLCBkb25lKSB7XG4gIHBhcmVudC5hcHBlbmQoZWxlbSk7XG4gIGlmIChkb25lKSB7XG4gICAgY29uc3QgY2hlY2tidG4gPSAkcXVlcnkoZWxlbSwgXCIuY2hlY2tcIik7XG4gICAgY2hlY2tidG4uY2xhc3NMaXN0LmFkZChcImJjZ0dyZWVuXCIpO1xuICB9XG59XG5cbi8vIGNsZWFyIGFsbCB0YXNrc1xuZnVuY3Rpb24gY2xlYXJUYXNrcygpIHtcbiAgbGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICBkaXNwbGF5QWxlcnQoXCJlbXB0eSBsaXN0XCIsIFwiZGFuZ2VyXCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctY29udGFpbmVyXCIpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIm15VGFza3NcIik7XG4gIHNldEJhY2tUb0RlZmF1bHQoKTtcbn1cblxuLy8gc2V0IGJhY2sgdG8gZGVmYXVsdHNcbmZ1bmN0aW9uIHNldEJhY2tUb0RlZmF1bHQoKSB7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgZWRpdFN0YXRlID0gZmFsc2U7XG4gIGVkaXRFbGVtZW50ID0gXCJcIjtcbiAgZWRpdElEID0gbnVsbDtcbiAgc3VibWl0LnRleHRDb250ZW50ID0gXCIrYWRkXCI7XG59XG5cbi8vIGRpc3BsYXkgYWxlcnRcbmZ1bmN0aW9uIGRpc3BsYXlBbGVydCh0ZXh0LCBhY3Rpb24pIHtcbiAgYWxlcnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBhbGVydC5jbGFzc0xpc3QuYWRkKGBhbGVydC0ke2FjdGlvbn1gKTtcbiAgLy8gcmVtb3ZlIGFsZXJ0XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGFsZXJ0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBhbGVydC5jbGFzc0xpc3QucmVtb3ZlKGBhbGVydC0ke2FjdGlvbn1gKTtcbiAgfSwgMTAwMCk7XG59XG5cbi8vIGFkZCBldmVudHNcbmZ1bmN0aW9uIGFkZEV2ZW50c1RvQnRucyhkaXYsIHRhc2spIHtcbiAgLy8gY2hlY2sgYnRuXG4gIGNvbnN0IGNoZWNrQnRuID0gJHF1ZXJ5KGRpdiwgXCIuY2hlY2tcIik7XG4gIGNoZWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdG9nZ2xlRG9uZShjaGVja0J0biwgdGFzayk7XG4gICAgdXBkYXRlTG9jYWxlU3RvcmFnZSh0YXNrKTtcbiAgICBzZXRCYWNrVG9EZWZhdWx0KCk7XG4gIH0pO1xuICAvLyBlZGl0IGJ0blxuICBjb25zdCBlZGl0QnRuID0gJHF1ZXJ5KGRpdiwgXCIuZWRpdFwiKTtcbiAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGVkaXRUYXNrKGRpdik7XG4gIH0pO1xuICAvLyAgZGVsZXRlIGJ0blxuICBjb25zdCBkZWxldGVCdG4gPSAkcXVlcnkoZGl2LCBcIi5kZWxldGVcIik7XG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRlbGV0ZVRhc2soZGl2KTtcbiAgICByZW1vdmVGcm9tTG9jYWxTdG9yYWdlKHRhc2spO1xuICAgIHNldEJhY2tUb0RlZmF1bHQoKTtcbiAgfSk7XG59XG5cbi8vICB0b2dnbGUgdGFzayBkb25lXG5mdW5jdGlvbiB0b2dnbGVEb25lKGJ0biwgb2JqKSB7XG4gIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiYmNnR3JlZW5cIik7XG4gIGlmIChvYmouZG9uZSkge1xuICAgIG9iai5kb25lID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgb2JqLmRvbmUgPSB0cnVlO1xuICB9XG59XG4vLyBkZWxldGUgdGFza1xuZnVuY3Rpb24gZGVsZXRlVGFzayhlbGVtKSB7XG4gIGxpc3QucmVtb3ZlQ2hpbGQoZWxlbSk7XG4gIGRpc3BsYXlBbGVydChcInRhc2sgZGVsZXRlZFwiLCBcImRhbmdlclwiKTtcbiAgaWYgKGxpc3QuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWNvbnRhaW5lclwiKTtcbiAgfVxufVxuLy8gZWRpdCB0YXNrXG5mdW5jdGlvbiBlZGl0VGFzayhlbGVtKSB7XG4gIGVkaXRFbGVtZW50ID0gJHF1ZXJ5KGVsZW0sIFwiLnRpdGxlXCIpO1xuICBpbnB1dC52YWx1ZSA9IGVkaXRFbGVtZW50LmlubmVySFRNTDtcbiAgc3VibWl0LnRleHRDb250ZW50ID0gXCJlZGl0XCI7XG4gIGVkaXRTdGF0ZSA9IHRydWU7ICAgICAgICAgXG4gIGVkaXRJRCA9IGVsZW0uZGF0YXNldC5pZDtcbn1cbi8vICoqKioqKiBsb2NhbCBzdG9yYWdlICoqKioqKioqKipcblxuLy8gZ2V0IGFuIGFycmF5IGZyb20gbG9jYWwgc3RvcmFnZVxuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKCkge1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15VGFza3NcIikpIHx8IFtdO1xufVxuLy8gYWRkIHRvIGxvY2FsIHN0b3JhZ2VcbmZ1bmN0aW9uIGFkZFRvTG9jYWxTdG9yYWdlKHRhc2spIHtcbiAgY29uc3QgdGFza3MgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgdGFza3MucHVzaCh0YXNrKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJteVRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59XG4vLyAgdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbmZ1bmN0aW9uIHVwZGF0ZUxvY2FsZVN0b3JhZ2UodGFzaykge1xuICBjb25zdCB0YXNrcyA9IGdldExvY2FsU3RvcmFnZSgpO1xuICB0YXNrcy5mb3JFYWNoKChvYmopID0+IHtcbiAgICBpZiAob2JqLmlkID09PSB0YXNrLmlkKSB7XG4gICAgICBvYmouZG9uZSA9IHRhc2suZG9uZTtcbiAgICB9XG4gIH0pO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15VGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn1cblxuLy8gZGVsZXRlIGZyb20gbG9jYWwgc3RvcmFnZVxuZnVuY3Rpb24gcmVtb3ZlRnJvbUxvY2FsU3RvcmFnZSh0YXNrKSB7XG4gIGxldCB0YXNrcyA9IGdldExvY2FsU3RvcmFnZSgpO1xuICB0YXNrcyA9IHRhc2tzLmZpbHRlcigob2JqKSA9PiBvYmouaWQgIT09IHRhc2suaWQpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15VGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn1cblxuLy8gZWRpdCBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiBlZGl0TG9jYWxTdG9yYWdlKHRhc2spIHtcbiAgY29uc3QgdGFza3MgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgdGFza3MuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgaWYgKG9iai5pZCA9PT0gZWRpdElEKSB7XG4gICAgICByZXR1cm4gb2JqLnZhbHVlID0gdGFzay52YWx1ZTtcbiAgICB9XG4gIH0pO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15VGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn1cblxuLy8gKioqKioqIHNldHVwIHRhc2tzICoqKioqKioqKipcbmZ1bmN0aW9uIHNldHVwVGFza3MoKSB7XG4gIGNvbnN0IHRhc2tzID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG4gIGlmICghdGFza3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRhc2tzLmZvckVhY2goZnVuY3Rpb24gKHRhc2spIHtcbiAgICBjb25zdCBkaXYgPSBjcmVhdGVIdG1sKHRhc2sudmFsdWUsIHRhc2suaWQpO1xuICAgIGFwcGVuZChsaXN0LCBkaXYsIHRhc2suZG9uZSk7XG4gICAgYWRkRXZlbnRzVG9CdG5zKGRpdiwgdGFzayk7XG4gIH0pO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNob3ctY29udGFpbmVyXCIpO1xufVxuXG4iXSwibmFtZXMiOlsiJGlkIiwiaWQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCIkY3NzIiwiY3NzIiwicXVlcnlTZWxlY3RvciIsIiRxdWVyeSIsImVsZW0iLCIkYWxsIiwiY2hlY2tJbWciLCJlZGl0SW1nIiwiYmluSW1nIiwiZm9ybSIsImlucHV0Iiwic3VibWl0IiwiY29udGFpbmVyIiwiYWxlcnQiLCJsaXN0IiwiY2xlYXJCdG4iLCJlZGl0RWxlbWVudCIsImVkaXRTdGF0ZSIsImVkaXRJRCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRUYXNrIiwiY2xlYXJUYXNrcyIsIndpbmRvdyIsInNldHVwVGFza3MiLCJUYXNrIiwidmFsdWUiLCJkb25lIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHh0IiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsInRhc2siLCJkaXYiLCJjcmVhdGVIdG1sIiwiYXBwZW5kIiwiZGlzcGxheUFsZXJ0IiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkVG9Mb2NhbFN0b3JhZ2UiLCJhZGRFdmVudHNUb0J0bnMiLCJzZXRCYWNrVG9EZWZhdWx0IiwiaW5uZXJIVE1MIiwiZWRpdExvY2FsU3RvcmFnZSIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwidGVtcGxhdGUiLCJwYXJlbnQiLCJjaGVja2J0biIsInJlbW92ZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJ0ZXh0Q29udGVudCIsInRleHQiLCJhY3Rpb24iLCJzZXRUaW1lb3V0IiwiY2hlY2tCdG4iLCJ0b2dnbGVEb25lIiwidXBkYXRlTG9jYWxlU3RvcmFnZSIsImVkaXRCdG4iLCJlZGl0VGFzayIsImRlbGV0ZUJ0biIsImRlbGV0ZVRhc2siLCJyZW1vdmVGcm9tTG9jYWxTdG9yYWdlIiwiYnRuIiwib2JqIiwidG9nZ2xlIiwicmVtb3ZlQ2hpbGQiLCJjaGlsZHJlbiIsImxlbmd0aCIsImdldExvY2FsU3RvcmFnZSIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJ0YXNrcyIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZm9yRWFjaCIsImZpbHRlciJdLCJzb3VyY2VSb290IjoiIn0=