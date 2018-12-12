/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Song = __webpack_require__(/*! ./javascripts/classes/song.js */ "./lib/javascripts/classes/song.js").default; // console.log("hi")
// $('#searchBtn').click(function() {
//   let artistName = $('#searchField').val();
//   findArtist(artistName)
// })


function init() {
  document.getElementById("searchBtn").addEventListener("click", displaySearchResult);
}

window.onload = init;

var displaySearchResult = function displaySearchResult() {
  // let artistName = document.getElementById('searchField').value;
  // findArtist('the_beatles')
  // let artistName = $('#searchField').val();
  //   findArtist(artistName)
  var artistName = document.getElementById('searchField').value;
  findArtist(artistName); // alert(artistName);
}; // displaySearchResult()


var artistName = 'wood_brothers';

var findArtist = function findArtist(name) {
  event.preventDefault();
  $("#searchResultPage").append("\n       <div class='song-name'>it</div>\n       <div class='album-name'>worked</div>\n       "); // fetch(`http://api.musixmatch.com/ws/1.1/track.search?q_artist=${name}&page_size=3&page=1&s_track_rating=desc&apikey=${apiKey}`
  // )
  // .then(response => response.json())
  // .then(artistInfo =>  {
  //   var trackArr = artistInfo["message"]["body"]["track_list"]
  //
  //   trackArr.forEach(function(trackData) {
  //     let song = new Song(trackData)
  //     console.log(song)
  //     $(`#searchResultPage`).append(`
  //       <div class='song-name'>${song.name}</div>
  //       <div class='album-name'>${song.album}</div>
  //       `)
  //   })
  // })
  // .catch(error => console.log({error}))
}; // findArtist(artistName)
// response.body

/***/ }),

/***/ "./lib/javascripts/classes/song.js":
/*!*****************************************!*\
  !*** ./lib/javascripts/classes/song.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Song; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Song = function Song(data) {
  _classCallCheck(this, Song);

  this.name = data["track"]["track_name"];
  this.album = data["track"]["album_name"];
};



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9qYXZhc2NyaXB0cy9jbGFzc2VzL3NvbmcuanMiXSwibmFtZXMiOlsiU29uZyIsInJlcXVpcmUiLCJkZWZhdWx0IiwiaW5pdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGxheVNlYXJjaFJlc3VsdCIsIndpbmRvdyIsIm9ubG9hZCIsImFydGlzdE5hbWUiLCJ2YWx1ZSIsImZpbmRBcnRpc3QiLCJuYW1lIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiQiLCJhcHBlbmQiLCJkYXRhIiwiYWxidW0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsd0VBQUQsQ0FBUCxDQUF5Q0MsT0FBdEQsQyxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVFLFNBQVNDLElBQVQsR0FBZTtBQUNYQyxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNDLGdCQUFyQyxDQUFzRCxPQUF0RCxFQUErREMsbUJBQS9EO0FBQ0g7O0FBQ0RDLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQk4sSUFBaEI7O0FBRUYsSUFBTUksbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0UsTUFBSUcsVUFBVSxHQUFHTixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUNNLEtBQXhEO0FBQ0FDLFlBQVUsQ0FBQ0YsVUFBRCxDQUFWLENBTjhCLENBTzlCO0FBQ0gsQ0FSRCxDLENBU0E7OztBQUVBLElBQUlBLFVBQVUsR0FBRyxlQUFqQjs7QUFHQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQVU7QUFDM0JDLE9BQUssQ0FBQ0MsY0FBTjtBQUNBQyxHQUFDLHFCQUFELENBQXVCQyxNQUF2QixtR0FGMkIsQ0FNM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxDQXRCRCxDLENBd0JBO0FBRUEsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7SUNwRHFCakIsSSxHQUNuQixjQUFZa0IsSUFBWixFQUFrQjtBQUFBOztBQUNoQixPQUFLTCxJQUFMLEdBQVlLLElBQUksQ0FBQyxPQUFELENBQUosQ0FBYyxZQUFkLENBQVo7QUFDQSxPQUFLQyxLQUFMLEdBQWFELElBQUksQ0FBQyxPQUFELENBQUosQ0FBYyxZQUFkLENBQWI7QUFDRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJjb25zdCBTb25nID0gcmVxdWlyZSgnLi9qYXZhc2NyaXB0cy9jbGFzc2VzL3NvbmcuanMnKS5kZWZhdWx0XG4vLyBjb25zb2xlLmxvZyhcImhpXCIpXG4vLyAkKCcjc2VhcmNoQnRuJykuY2xpY2soZnVuY3Rpb24oKSB7XG4vLyAgIGxldCBhcnRpc3ROYW1lID0gJCgnI3NlYXJjaEZpZWxkJykudmFsKCk7XG4vLyAgIGZpbmRBcnRpc3QoYXJ0aXN0TmFtZSlcbi8vIH0pXG5cbiAgZnVuY3Rpb24gaW5pdCgpe1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlTZWFyY2hSZXN1bHQpO1xuICB9XG4gIHdpbmRvdy5vbmxvYWQgPSBpbml0O1xuXG5jb25zdCBkaXNwbGF5U2VhcmNoUmVzdWx0ID0gKCkgPT4ge1xuICAvLyBsZXQgYXJ0aXN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hGaWVsZCcpLnZhbHVlO1xuICAvLyBmaW5kQXJ0aXN0KCd0aGVfYmVhdGxlcycpXG4gIC8vIGxldCBhcnRpc3ROYW1lID0gJCgnI3NlYXJjaEZpZWxkJykudmFsKCk7XG4gIC8vICAgZmluZEFydGlzdChhcnRpc3ROYW1lKVxuICAgIGxldCBhcnRpc3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEZpZWxkJykudmFsdWU7XG4gICAgZmluZEFydGlzdChhcnRpc3ROYW1lKVxuICAgIC8vIGFsZXJ0KGFydGlzdE5hbWUpO1xufVxuLy8gZGlzcGxheVNlYXJjaFJlc3VsdCgpXG5cbnZhciBhcnRpc3ROYW1lID0gJ3dvb2RfYnJvdGhlcnMnXG5cblxuY29uc3QgZmluZEFydGlzdCA9IChuYW1lKSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgJChgI3NlYXJjaFJlc3VsdFBhZ2VgKS5hcHBlbmQoYFxuICAgICAgIDxkaXYgY2xhc3M9J3NvbmctbmFtZSc+aXQ8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzPSdhbGJ1bS1uYW1lJz53b3JrZWQ8L2Rpdj5cbiAgICAgICBgKVxuICAvLyBmZXRjaChgaHR0cDovL2FwaS5tdXNpeG1hdGNoLmNvbS93cy8xLjEvdHJhY2suc2VhcmNoP3FfYXJ0aXN0PSR7bmFtZX0mcGFnZV9zaXplPTMmcGFnZT0xJnNfdHJhY2tfcmF0aW5nPWRlc2MmYXBpa2V5PSR7YXBpS2V5fWBcbiAgLy8gKVxuICAvLyAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC8vIC50aGVuKGFydGlzdEluZm8gPT4gIHtcbiAgLy8gICB2YXIgdHJhY2tBcnIgPSBhcnRpc3RJbmZvW1wibWVzc2FnZVwiXVtcImJvZHlcIl1bXCJ0cmFja19saXN0XCJdXG4gIC8vXG4gIC8vICAgdHJhY2tBcnIuZm9yRWFjaChmdW5jdGlvbih0cmFja0RhdGEpIHtcbiAgLy8gICAgIGxldCBzb25nID0gbmV3IFNvbmcodHJhY2tEYXRhKVxuICAvLyAgICAgY29uc29sZS5sb2coc29uZylcbiAgLy8gICAgICQoYCNzZWFyY2hSZXN1bHRQYWdlYCkuYXBwZW5kKGBcbiAgLy8gICAgICAgPGRpdiBjbGFzcz0nc29uZy1uYW1lJz4ke3NvbmcubmFtZX08L2Rpdj5cbiAgLy8gICAgICAgPGRpdiBjbGFzcz0nYWxidW0tbmFtZSc+JHtzb25nLmFsYnVtfTwvZGl2PlxuICAvLyAgICAgICBgKVxuICAvLyAgIH0pXG4gIC8vIH0pXG4gIC8vIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyh7ZXJyb3J9KSlcbn1cblxuLy8gZmluZEFydGlzdChhcnRpc3ROYW1lKVxuXG4vLyByZXNwb25zZS5ib2R5XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTb25nIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMubmFtZSA9IGRhdGFbXCJ0cmFja1wiXVtcInRyYWNrX25hbWVcIl1cbiAgICB0aGlzLmFsYnVtID0gZGF0YVtcInRyYWNrXCJdW1wiYWxidW1fbmFtZVwiXVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9