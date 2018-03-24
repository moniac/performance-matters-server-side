(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
function updateIndicator() {
	var h1 = document.querySelector('body > h1');
	h1.innerHTML = 'Er is geen internet verbinding!';
}

function updateIndicatorOnline() {
	var h1 = document.querySelector('body > h1');
	h1.innerHTML = 'Verwoeste gebouwen van Amsterdam';
}

window.addEventListener('offline', updateIndicator);
window.addEventListener('online', updateIndicatorOnline);

exports.updateIndicator = updateIndicator;
exports.updateIndicatorOnline = updateIndicatorOnline;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var container = document.querySelector('#buildinglist');

if (container) {
	var newInput = document.createElement('input');
	newInput.id = 'myInput';
	newInput.placeholder = 'Zoeken op gebouwen';
	container.prepend(newInput);

	var inputs = document.querySelector('#myInput');

	inputs.addEventListener('keyup', filterList);
}

function filterList() {
	if (!container) {
		return;
	}
	var input = void 0,
	    filter = void 0,
	    ul = void 0,
	    li = void 0,
	    a = void 0,
	    i = void 0;
	input = document.getElementById('myInput');
	filter = input.value.toLowerCase();
	ul = document.getElementById("myUL");
	li = ul.getElementsByTagName('li');

	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

exports.filterList = filterList;

},{}],3:[function(require,module,exports){
'use strict';

var _filter = require('./filter');

var _checkinternet = require('./checkinternet');

},{"./checkinternet":1,"./filter":2}]},{},[3]);
