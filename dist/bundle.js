/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("let titles = Array.from(document.querySelectorAll('.article-title'));\r\nlet chapters = Array.from(document.querySelectorAll('.chapter'));\r\n\r\nfor(let i=0; i<titles.length; i++) {\r\n    titles[i].addEventListener('click', ()=> {\r\n        let titleActive = titles.findIndex(t => t.classList.contains('title-active'));\r\n        titles[titleActive].classList.remove('title-active');\r\n        titles[i].classList.add('title-active');\r\n\r\n        let chapterActive = chapters.findIndex(c => c.classList.contains('chapter-active'));\r\n        chapters[chapterActive].classList.remove('chapter-active');\r\n        chapters[i].classList.add('chapter-active');\r\n    })\r\n}\n\n//# sourceURL=webpack://brochure/./src/index.js?");
/******/ })()
;