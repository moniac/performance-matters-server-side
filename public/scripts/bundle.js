!function o(u,d,c){function l(t,e){if(!d[t]){if(!u[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(a)return a(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var i=d[t]={exports:{}};u[t][0].call(i.exports,function(e){var n=u[t][1][e];return l(n||e)},i,i.exports,o,u,d,c)}return d[t].exports}for(var a="function"==typeof require&&require,e=0;e<c.length;e++)l(c[e]);return l}({1:[function(e,n,t){"use strict";function r(){document.querySelector("body > h1").innerHTML="Er is geen internet verbinding!"}function i(){document.querySelector("body > h1").innerHTML="Verwoeste gebouwen van Amsterdam"}Object.defineProperty(t,"__esModule",{value:!0}),window.addEventListener("offline",r),window.addEventListener("online",i),t.updateIndicator=r,t.updateIndicatorOnline=i},{}],2:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=document.querySelector("#buildinglist");if(r){var i=document.createElement("input");i.id="myInput",i.placeholder="Zoeken op gebouwen",r.prepend(i),document.querySelector("#myInput").addEventListener("keyup",o)}function o(){if(r){var e,n=void 0,t=void 0;for(e=document.getElementById("myInput").value.toLowerCase(),n=document.getElementById("myUL").getElementsByTagName("li"),t=0;t<n.length;t++)-1<n[t].getElementsByTagName("a")[0].innerHTML.toLowerCase().indexOf(e)?n[t].style.display="":n[t].style.display="none"}}t.filterList=o},{}],3:[function(e,n,t){"use strict";e("./filter"),e("./checkinternet")},{"./checkinternet":1,"./filter":2}]},{},[3]);
