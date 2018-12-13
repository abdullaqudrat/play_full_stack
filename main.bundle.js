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
/******/ 	__webpack_require__.p = "https://abdullaqudrat.github.io/play_full_stack/";
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

var Song = __webpack_require__(/*! ./javascripts/classes/song.js */ "./lib/javascripts/classes/song.js").default;

var Playlist = __webpack_require__(/*! ./javascripts/classes/playlist.js */ "./lib/javascripts/classes/playlist.js").default;

var Favorite = __webpack_require__(/*! ./javascripts/classes/favorite.js */ "./lib/javascripts/classes/favorite.js").default;

document.addEventListener('DOMContentLoaded', init);

function init() {
  document.querySelector('.logo').addEventListener('click', displayWelcomePage);
  document.getElementById('favoritesBtn').addEventListener('click', displayFavoritesPage);
  document.getElementById('playlistsBtn').addEventListener('click', displayPlaylistsPage);
  document.getElementById("searchBtn").addEventListener("click", searchArtistTracks);
  document.getElementById('playlistsBtn').addEventListener('click', getPlaylists);
}

;

var displayWelcomePage = function displayWelcomePage() {
  document.getElementById('favoritesPage').style.display = 'none';
  document.getElementById('searchResultPage').style.display = 'none';
  document.getElementById('playlistsPage').style.display = 'none';
  document.getElementById('welcomePage').style.display = 'block';
  document.querySelector('.below-nav').style.height = '64vh';
};

var addToFavorites = function addToFavorites(track) {
  var genres = ["rock", "pop", "rap", "misc"];
  fetch("https://vast-crag-31836.herokuapp.com/api/v1/favorites", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      song_title: track.name,
      artist_name: track.artist,
      genre: genres[Math.floor(Math.random() * genres.length)],
      song_rating: track.songRating
    })
  }).then(function (response) {
    console.log(response);

    if (response.status == 201) {
      document.getElementById('notice').innerText = "You favorited ".concat(track.name, " by ").concat(track.artist);
    }
  });
};

var displayFavoritesPage = function displayFavoritesPage() {
  document.getElementById('welcomePage').style.display = 'none';
  document.getElementById('searchResultPage').style.display = 'none';
  document.getElementById('notice').innerText = '';
  document.getElementById('playlistsPage').style.display = 'none'; // View this page instead

  document.getElementById('favoritesPage').style.display = 'block';
  document.querySelector('.below-nav').style.height = '79vh';
};

var displayPlaylistsPage = function displayPlaylistsPage() {
  // Remove view of these pages
  document.getElementById('welcomePage').style.display = 'none';
  document.getElementById('searchResultPage').style.display = 'none';
  document.getElementById('favoritesPage').style.display = 'none'; // View this page instead

  document.getElementById('playlistsPage').style.display = 'grid';
  document.querySelector('.below-nav').style.height = '85vh';
};

var searchArtistTracks = function searchArtistTracks(event) {
  event.preventDefault();
  var artistName = document.getElementById('searchField').value;
  fetch("https://api.musixmatch.com/ws/1.1/track.search?q_artist=".concat(artistName, "&page_size=10&page=1&s_track_rating=desc&apikey=d54f2a729ccc9c98bfdf337e42a89ce9")).then(function (response) {
    return response.json();
  }).then(function (artistInfo) {
    var trackArr = artistInfo["message"]["body"]["track_list"];
    displaySearchResults(trackArr);
  }).catch(function (error) {
    return console.log({
      error: error
    });
  });
};

var getPlaylists = function getPlaylists() {
  $('#playlistsPage').html('');
  fetch("https://vast-crag-31836.herokuapp.com/api/v1/playlists").then(function (response) {
    return response.json();
  }).then(function (playlists) {
    playlists.forEach(function (playlistData) {
      playlist = new Playlist(playlistData);
      $("#playlistsPage").append("\n        <div class='playlist-label-container'>\n          <h3 class='playlist-label'>".concat(playlist.name, "\n          </h3>\n          <i style='display: inline' class='fas fa-trash-alt'></i>\n        </div>\n        <div id='p-").concat(playlist.id, "'class='playlist-grid table'>\n        "));
      playlist.favorites.forEach(function (favoriteData) {
        var favorite = new Favorite(favoriteData);
        $("#p-".concat(playlist.id)).append("\n          <p class='fave-song'>".concat(favorite.name, "</p>\n          <p class='fave-artist'>").concat(favorite.artist, "</p>\n          <p class='fave-album'>").concat(favorite.album, "</p>\n          <p class='add-btn'>\n            <i class='fas fa-plus'></i>\n          </p>\n          "));
      });
    });
  }).catch(function (error) {
    return console.log({
      error: error
    });
  });
};

var displaySearchResults = function displaySearchResults(trackArr) {
  var songs = document.querySelectorAll('.search-song-data');
  var artists = document.querySelectorAll('.search-artist-data');
  var albums = document.querySelectorAll('.search-album-data');
  var buttons = document.querySelectorAll('.add-favorite-btn');
  songs.forEach(function (song) {
    song.parentNode.removeChild(song);
  });
  artists.forEach(function (artist) {
    artist.parentNode.removeChild(artist);
  });
  albums.forEach(function (album) {
    album.parentNode.removeChild(album);
  });
  buttons.forEach(function (button) {
    button.parentNode.removeChild(button);
  });
  trackArr.forEach(function (track) {
    var song = new Song(track);
    console.log(song);
    $("#searchTable").append("\n      <p class='search-song-data'>".concat(song.name, "</p>\n      <p class='search-artist-data'>").concat(song.artist, "</p>\n      <p class='search-album-data'>").concat(song.album, "</p>\n      <p class=\"add-favorite-btn\" id=\"").concat(song.id, "\" >\n        <i class='fas fa-plus'></i>\n      </p>\n      "));
    document.getElementById('notice').innerText = '';
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('favoritesPage').style.display = 'none';
    document.querySelector('.below-nav').style.height = '79vh';
    document.getElementById('searchResultPage').style.display = 'block';
    var button = document.getElementById("".concat(song.id));
    button.addEventListener('click', function () {
      addToFavorites(song);
    }, false);
  });
};

/***/ }),

/***/ "./lib/javascripts/classes/favorite.js":
/*!*********************************************!*\
  !*** ./lib/javascripts/classes/favorite.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Favorite; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Favorite = function Favorite(data) {
  _classCallCheck(this, Favorite);

  this.name = data['song_title'];
  this.artist = data['artist_name'];
  this.genre = data['genre'];
  this.song_rating = data['song_rating'];
  this.album = ['Experiment', 'The Wall', 'Bad', 'Supernatural', 'Legend', 'Rumours', 'Dark Side of the Moon'][Math.floor(Math.random() * 7)];
};



/***/ }),

/***/ "./lib/javascripts/classes/playlist.js":
/*!*********************************************!*\
  !*** ./lib/javascripts/classes/playlist.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Playlist; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Playlist = function Playlist(data) {
  _classCallCheck(this, Playlist);

  this.name = data['name'];
  this.favorites = data['favorites'];
  this.id = data['id'];
};



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

  this.id = data["track"]["track_id"];
  this.name = data["track"]["track_name"];
  this.album = data["track"]["album_name"];
  this.artist = data["track"]["artist_name"];
  this.songRating = data["track"]["track_rating"];
};



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9qYXZhc2NyaXB0cy9jbGFzc2VzL2Zhdm9yaXRlLmpzIiwid2VicGFjazovLy8uL2xpYi9qYXZhc2NyaXB0cy9jbGFzc2VzL3BsYXlsaXN0LmpzIiwid2VicGFjazovLy8uL2xpYi9qYXZhc2NyaXB0cy9jbGFzc2VzL3NvbmcuanMiXSwibmFtZXMiOlsiU29uZyIsInJlcXVpcmUiLCJkZWZhdWx0IiwiUGxheWxpc3QiLCJGYXZvcml0ZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXQiLCJxdWVyeVNlbGVjdG9yIiwiZGlzcGxheVdlbGNvbWVQYWdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNwbGF5RmF2b3JpdGVzUGFnZSIsImRpc3BsYXlQbGF5bGlzdHNQYWdlIiwic2VhcmNoQXJ0aXN0VHJhY2tzIiwiZ2V0UGxheWxpc3RzIiwic3R5bGUiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiYWRkVG9GYXZvcml0ZXMiLCJ0cmFjayIsImdlbnJlcyIsImZldGNoIiwiaGVhZGVycyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic29uZ190aXRsZSIsIm5hbWUiLCJhcnRpc3RfbmFtZSIsImFydGlzdCIsImdlbnJlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwic29uZ19yYXRpbmciLCJzb25nUmF0aW5nIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImlubmVyVGV4dCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhcnRpc3ROYW1lIiwidmFsdWUiLCJqc29uIiwiYXJ0aXN0SW5mbyIsInRyYWNrQXJyIiwiZGlzcGxheVNlYXJjaFJlc3VsdHMiLCJjYXRjaCIsImVycm9yIiwiJCIsImh0bWwiLCJwbGF5bGlzdHMiLCJmb3JFYWNoIiwicGxheWxpc3REYXRhIiwicGxheWxpc3QiLCJhcHBlbmQiLCJpZCIsImZhdm9yaXRlcyIsImZhdm9yaXRlRGF0YSIsImZhdm9yaXRlIiwiYWxidW0iLCJzb25ncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhcnRpc3RzIiwiYWxidW1zIiwiYnV0dG9ucyIsInNvbmciLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJidXR0b24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLHdFQUFELENBQVAsQ0FBeUNDLE9BQXREOztBQUNBLElBQU1DLFFBQVEsR0FBR0YsbUJBQU8sQ0FBQyxnRkFBRCxDQUFQLENBQTZDQyxPQUE5RDs7QUFDQSxJQUFNRSxRQUFRLEdBQUdILG1CQUFPLENBQUMsZ0ZBQUQsQ0FBUCxDQUE2Q0MsT0FBOUQ7O0FBQ0FHLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVB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WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImh0dHBzOi8vYWJkdWxsYXF1ZHJhdC5naXRodWIuaW8vcGxheV9mdWxsX3N0YWNrL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsImNvbnN0IFNvbmcgPSByZXF1aXJlKCcuL2phdmFzY3JpcHRzL2NsYXNzZXMvc29uZy5qcycpLmRlZmF1bHRcbmNvbnN0IFBsYXlsaXN0ID0gcmVxdWlyZSgnLi9qYXZhc2NyaXB0cy9jbGFzc2VzL3BsYXlsaXN0LmpzJykuZGVmYXVsdFxuY29uc3QgRmF2b3JpdGUgPSByZXF1aXJlKCcuL2phdmFzY3JpcHRzL2NsYXNzZXMvZmF2b3JpdGUuanMnKS5kZWZhdWx0XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQoKXtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlXZWxjb21lUGFnZSlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zhdm9yaXRlc0J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUZhdm9yaXRlc1BhZ2UpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWxpc3RzQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRpc3BsYXlQbGF5bGlzdHNQYWdlKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlYXJjaEFydGlzdFRyYWNrcyk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5bGlzdHNCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldFBsYXlsaXN0cylcbn07XG5cbmNvbnN0IGRpc3BsYXlXZWxjb21lUGFnZSA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zhdm9yaXRlc1BhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hSZXN1bHRQYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWxpc3RzUGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZVBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmVsb3ctbmF2Jykuc3R5bGUuaGVpZ2h0ID0gJzY0dmgnXG59XG5cbmNvbnN0IGFkZFRvRmF2b3JpdGVzID0gKHRyYWNrKSA9PiB7XG4gIGxldCBnZW5yZXMgPSBbXCJyb2NrXCIsIFwicG9wXCIsIFwicmFwXCIsIFwibWlzY1wiXVxuXG4gIGZldGNoKFwiaHR0cHM6Ly92YXN0LWNyYWctMzE4MzYuaGVyb2t1YXBwLmNvbS9hcGkvdjEvZmF2b3JpdGVzXCIsXG4gIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0sXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7c29uZ190aXRsZTogdHJhY2submFtZSxcbiAgICAgIGFydGlzdF9uYW1lOiB0cmFjay5hcnRpc3QsXG4gICAgICBnZW5yZTogZ2VucmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpnZW5yZXMubGVuZ3RoKV0sXG4gICAgICBzb25nX3JhdGluZzogdHJhY2suc29uZ1JhdGluZ30pXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAxKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpY2UnKS5pbm5lclRleHQgPSBgWW91IGZhdm9yaXRlZCAke3RyYWNrLm5hbWV9IGJ5ICR7dHJhY2suYXJ0aXN0fWBcbiAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCBkaXNwbGF5RmF2b3JpdGVzUGFnZSA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWVQYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoUmVzdWx0UGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90aWNlJykuaW5uZXJUZXh0ID0gJydcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWxpc3RzUGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAvLyBWaWV3IHRoaXMgcGFnZSBpbnN0ZWFkXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYXZvcml0ZXNQYWdlJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJlbG93LW5hdicpLnN0eWxlLmhlaWdodCA9ICc3OXZoJ1xufVxuXG5jb25zdCBkaXNwbGF5UGxheWxpc3RzUGFnZSA9ICgpID0+IHtcbiAgLy8gUmVtb3ZlIHZpZXcgb2YgdGhlc2UgcGFnZXNcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWVQYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoUmVzdWx0UGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zhdm9yaXRlc1BhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIC8vIFZpZXcgdGhpcyBwYWdlIGluc3RlYWRcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXlsaXN0c1BhZ2UnKS5zdHlsZS5kaXNwbGF5ID0nZ3JpZCdcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJlbG93LW5hdicpLnN0eWxlLmhlaWdodCA9ICc4NXZoJ1xuXG59XG5cbmNvbnN0IHNlYXJjaEFydGlzdFRyYWNrcyA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IGFydGlzdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoRmllbGQnKS52YWx1ZTtcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkubXVzaXhtYXRjaC5jb20vd3MvMS4xL3RyYWNrLnNlYXJjaD9xX2FydGlzdD0ke2FydGlzdE5hbWV9JnBhZ2Vfc2l6ZT0xMCZwYWdlPTEmc190cmFja19yYXRpbmc9ZGVzYyZhcGlrZXk9ZDU0ZjJhNzI5Y2NjOWM5OGJmZGYzMzdlNDJhODljZTlgXG4gICAgKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihhcnRpc3RJbmZvID0+ICB7XG4gICAgICB2YXIgdHJhY2tBcnIgPSBhcnRpc3RJbmZvW1wibWVzc2FnZVwiXVtcImJvZHlcIl1bXCJ0cmFja19saXN0XCJdXG4gICAgICBkaXNwbGF5U2VhcmNoUmVzdWx0cyh0cmFja0Fycik7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coe2Vycm9yfSkpXG59XG5cbmNvbnN0IGdldFBsYXlsaXN0cyA9ICgpID0+IHtcbiAgJCgnI3BsYXlsaXN0c1BhZ2UnKS5odG1sKCcnKTtcbiAgZmV0Y2goYGh0dHBzOi8vdmFzdC1jcmFnLTMxODM2Lmhlcm9rdWFwcC5jb20vYXBpL3YxL3BsYXlsaXN0c2ApXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4ocGxheWxpc3RzID0+IHtcbiAgICBwbGF5bGlzdHMuZm9yRWFjaChmdW5jdGlvbihwbGF5bGlzdERhdGEpIHtcbiAgICAgIHBsYXlsaXN0ID0gbmV3IFBsYXlsaXN0KHBsYXlsaXN0RGF0YSlcbiAgICAgICQoYCNwbGF5bGlzdHNQYWdlYCkuYXBwZW5kKGBcbiAgICAgICAgPGRpdiBjbGFzcz0ncGxheWxpc3QtbGFiZWwtY29udGFpbmVyJz5cbiAgICAgICAgICA8aDMgY2xhc3M9J3BsYXlsaXN0LWxhYmVsJz4ke3BsYXlsaXN0Lm5hbWV9XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8aSBzdHlsZT0nZGlzcGxheTogaW5saW5lJyBjbGFzcz0nZmFzIGZhLXRyYXNoLWFsdCc+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD0ncC0ke3BsYXlsaXN0LmlkfSdjbGFzcz0ncGxheWxpc3QtZ3JpZCB0YWJsZSc+XG4gICAgICAgIGApXG4gICAgICBwbGF5bGlzdC5mYXZvcml0ZXMuZm9yRWFjaChmdW5jdGlvbihmYXZvcml0ZURhdGEpIHtcbiAgICAgICAgbGV0IGZhdm9yaXRlID0gbmV3IEZhdm9yaXRlKGZhdm9yaXRlRGF0YSlcbiAgICAgICAgJChgI3AtJHtwbGF5bGlzdC5pZH1gKS5hcHBlbmQoYFxuICAgICAgICAgIDxwIGNsYXNzPSdmYXZlLXNvbmcnPiR7ZmF2b3JpdGUubmFtZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9J2ZhdmUtYXJ0aXN0Jz4ke2Zhdm9yaXRlLmFydGlzdH08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9J2ZhdmUtYWxidW0nPiR7ZmF2b3JpdGUuYWxidW19PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPSdhZGQtYnRuJz5cbiAgICAgICAgICAgIDxpIGNsYXNzPSdmYXMgZmEtcGx1cyc+PC9pPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICBgKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coe2Vycm9yfSkpXG59XG5cbmNvbnN0IGRpc3BsYXlTZWFyY2hSZXN1bHRzID0gKHRyYWNrQXJyKSA9PiB7XG4gIGxldCBzb25ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2gtc29uZy1kYXRhJylcbiAgbGV0IGFydGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VhcmNoLWFydGlzdC1kYXRhJylcbiAgbGV0IGFsYnVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2gtYWxidW0tZGF0YScpXG4gIGxldCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC1mYXZvcml0ZS1idG4nKVxuXG4gIHNvbmdzLmZvckVhY2goZnVuY3Rpb24oc29uZykgeyBzb25nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc29uZyk7fSlcbiAgYXJ0aXN0cy5mb3JFYWNoKGZ1bmN0aW9uKGFydGlzdCkgeyBhcnRpc3QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhcnRpc3QpO30pXG4gIGFsYnVtcy5mb3JFYWNoKGZ1bmN0aW9uKGFsYnVtKSB7IGFsYnVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYWxidW0pO30pXG4gIGJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbihidXR0b24pIHsgYnV0dG9uLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYnV0dG9uKTt9KVxuXG4gIHRyYWNrQXJyLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICBsZXQgc29uZyA9IG5ldyBTb25nKHRyYWNrKVxuICAgIGNvbnNvbGUubG9nKHNvbmcpXG4gICAgJChgI3NlYXJjaFRhYmxlYCkuYXBwZW5kKGBcbiAgICAgIDxwIGNsYXNzPSdzZWFyY2gtc29uZy1kYXRhJz4ke3NvbmcubmFtZX08L3A+XG4gICAgICA8cCBjbGFzcz0nc2VhcmNoLWFydGlzdC1kYXRhJz4ke3NvbmcuYXJ0aXN0fTwvcD5cbiAgICAgIDxwIGNsYXNzPSdzZWFyY2gtYWxidW0tZGF0YSc+JHtzb25nLmFsYnVtfTwvcD5cbiAgICAgIDxwIGNsYXNzPVwiYWRkLWZhdm9yaXRlLWJ0blwiIGlkPVwiJHtzb25nLmlkfVwiID5cbiAgICAgICAgPGkgY2xhc3M9J2ZhcyBmYS1wbHVzJz48L2k+XG4gICAgICA8L3A+XG4gICAgICBgKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGljZScpLmlubmVyVGV4dCA9ICcnXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZVBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmF2b3JpdGVzUGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZWxvdy1uYXYnKS5zdHlsZS5oZWlnaHQgPSAnNzl2aCdcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hSZXN1bHRQYWdlJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcblxuICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3NvbmcuaWR9YClcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGFkZFRvRmF2b3JpdGVzKHNvbmcpO1xuICAgICAgfSwgZmFsc2UpO1xuICB9KVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmF2b3JpdGUge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5uYW1lID0gZGF0YVsnc29uZ190aXRsZSddXG4gICAgdGhpcy5hcnRpc3QgPSBkYXRhWydhcnRpc3RfbmFtZSddXG4gICAgdGhpcy5nZW5yZSA9IGRhdGFbJ2dlbnJlJ11cbiAgICB0aGlzLnNvbmdfcmF0aW5nID0gZGF0YVsnc29uZ19yYXRpbmcnXVxuICAgIHRoaXMuYWxidW0gPSBbJ0V4cGVyaW1lbnQnLCAnVGhlIFdhbGwnLCAnQmFkJywgJ1N1cGVybmF0dXJhbCcsICdMZWdlbmQnLCAnUnVtb3VycycsICdEYXJrIFNpZGUgb2YgdGhlIE1vb24nXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNyldXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXlsaXN0IHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMubmFtZSA9IGRhdGFbJ25hbWUnXVxuICAgIHRoaXMuZmF2b3JpdGVzID0gZGF0YVsnZmF2b3JpdGVzJ11cbiAgICB0aGlzLmlkID0gZGF0YVsnaWQnXVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTb25nIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuaWQgPSBkYXRhW1widHJhY2tcIl1bXCJ0cmFja19pZFwiXVxuICAgIHRoaXMubmFtZSA9IGRhdGFbXCJ0cmFja1wiXVtcInRyYWNrX25hbWVcIl1cbiAgICB0aGlzLmFsYnVtID0gZGF0YVtcInRyYWNrXCJdW1wiYWxidW1fbmFtZVwiXVxuICAgIHRoaXMuYXJ0aXN0ID0gZGF0YVtcInRyYWNrXCJdW1wiYXJ0aXN0X25hbWVcIl1cbiAgICB0aGlzLnNvbmdSYXRpbmcgPSBkYXRhW1widHJhY2tcIl1bXCJ0cmFja19yYXRpbmdcIl1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==