(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["training-training-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forced-choice/forced-choice.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forced-choice/forced-choice.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [ngClass]=\"{'default': !showFeedback(), 'success': showFeedback() && slideInfo[currentSlide].stage == Stage.CORRECT, 'failure': showFeedback() && slideInfo[currentSlide].stage == Stage.INCORRECT}\">\n\n  <ion-progress-bar style=\"margin-top: 0px\" value={{progressPercent}}></ion-progress-bar>\n\n  <span *ngIf=\"!scoreCardDisplayed()\">\n    <div class=\"score-banner\"><b>Score: {{score}}/{{progressPercent * taskLength}}</b></div>\n    <div class=\"score-change\">+1</div>\n  </span>\n\n  <div *ngIf=\"slideInfo[currentSlide].stage == Stage.START\" (click)=\"startMemorizeTimer()\" class=\"overlay\" button>\n    <div class=\"overlay-content\">\n      Click anywhere to reveal\n    </div>\n  </div>\n\n  <ion-slides #slideElement (ionSlideDidChange)=\"changeSlide()\">\n\n    <ion-slide *ngFor=\"let slide of slideInfo; let slideIndex = index\">\n  \n      <!--Memorizing the face-->\n      <div *ngIf=\"firstStage(slideIndex)\" class=\"flex-slide\" style=\"align-items: center\">\n        <div class=\"prompt\" *ngIf=\"slideInfo[slideIndex].stage == Stage.START\">Memorize the face: {{memorizeTime}}</div>\n        <div class=\"prompt\" *ngIf=\"slideInfo[slideIndex].stage == Stage.MEMORIZE\">Memorize the face: <span class=\"time-left\">{{timeRemaining}}</span></div>\n        <div class=\"prompt\" *ngIf=\"slideInfo[slideIndex].stage == Stage.MASK\">Hold the face in your mind...</div>\n        <ion-card style=\"height: 310px; width: 270px; display: flex; justify-content: center; align-items: center; background-color: gainsboro\">\n          <img *ngIf=\"slideInfo[slideIndex].stage != Stage.START\" style=\"height: 270px\" [src]=\"slideInfo[slideIndex].stage == Stage.MEMORIZE ? slideInfo[slideIndex].correctFace : mask\" [ngStyle]=\"{'width': slideInfo[slideIndex].stage == Stage.MASK ? '85%' : 'auto'}\"/>\n        </ion-card>\n        <ion-button style=\"visibility: hidden\"></ion-button>\n      </div>\n\n      <!--Choosing the face and feedback-->\n      <div *ngIf=\"!firstStage(slideIndex)\" class=\"flex-slide\">\n\n        <div class=\"prompt\" *ngIf=\"slideInfo[slideIndex].stage == Stage.SELECT\">Who did you see?</div>\n        <div class=\"prompt\" *ngIf=\"slideInfo[slideIndex].stage == Stage.CORRECT\">Correct!</div>\n        <div class=\"prompt\" *ngIf=\"slideInfo[slideIndex].stage == Stage.INCORRECT\">Incorrect!</div>\n\n        <div>\n\n          <div>\n            <ion-card [button]=\"!showFeedback()\" class=\"grid-card\" (click)=\"selectFace(slideInfo[slideIndex].faces[0])\" [ngClass]=\"{'selected-wrong-card': showFeedback() && slideInfo[slideIndex].faces[0] != slideInfo[slideIndex].correctFace && slideInfo[slideIndex].faces[0] == slideInfo[slideIndex].selectedFace, 'disabled-card': showFeedback() && slideInfo[slideIndex].faces[0] != slideInfo[slideIndex].correctFace}\">\n              <img [src]=\"slideInfo[slideIndex].faces[0]\"/>\n            </ion-card>\n  \n            <ion-card [button]=\"!showFeedback()\" class=\"grid-card\" (click)=\"selectFace(slideInfo[slideIndex].faces[1])\" [ngClass]=\"{'selected-wrong-card': showFeedback() && slideInfo[slideIndex].faces[1] != slideInfo[slideIndex].correctFace && slideInfo[slideIndex].faces[1] == slideInfo[slideIndex].selectedFace, 'disabled-card': showFeedback() && slideInfo[slideIndex].faces[1] != slideInfo[slideIndex].correctFace}\">\n              <img [src]=\"slideInfo[slideIndex].faces[1]\"/>\n            </ion-card>\n          </div>\n  \n          <div>\n            <ion-card [button]=\"!showFeedback()\" class=\"grid-card\" (click)=\"selectFace(slideInfo[slideIndex].faces[2])\" [ngClass]=\"{'selected-wrong-card': showFeedback() && slideInfo[slideIndex].faces[2] != slideInfo[slideIndex].correctFace && slideInfo[slideIndex].faces[2] == slideInfo[slideIndex].selectedFace, 'disabled-card': showFeedback() && slideInfo[slideIndex].faces[2] != slideInfo[slideIndex].correctFace}\">\n              <img [src]=\"slideInfo[slideIndex].faces[2]\"/>\n            </ion-card>\n  \n            <ion-card [button]=\"!showFeedback()\" class=\"grid-card\" (click)=\"selectFace(slideInfo[slideIndex].faces[3])\" [ngClass]=\"{'selected-wrong-card': showFeedback() && slideInfo[slideIndex].faces[3] != slideInfo[slideIndex].correctFace && slideInfo[slideIndex].faces[3] == slideInfo[slideIndex].selectedFace, 'disabled-card': showFeedback() && slideInfo[slideIndex].faces[3] != slideInfo[slideIndex].correctFace}\">\n              <img [src]=\"slideInfo[slideIndex].faces[3]\"/>\n            </ion-card>\n          </div>\n\n        </div>\n\n        <ion-item class=\"footer\" lines=\"none\">\n          <ion-label>Swipe to Continue</ion-label>\n          <ion-icon slot=\"end\" color=\"dark\" name=\"arrow-back\"></ion-icon>    \n        </ion-item>\n\n      </div>\n\n    </ion-slide>\n\n   <!--Score page-->\n    <ion-slide>\n      <app-score-page [score]=\"score\" [length]=\"taskLength\" [assessment]=\"true\" (finished)=\"finished.emit([score, 2])\"></app-score-page>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/help-modal/help-modal.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/help-modal/help-modal.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"--background: rgb(206,183,124); --color: white\">\n\n  <ion-item lines=\"none\" style=\"font-size: 3vh; margin-top: 5%; text-align: center; --background: rgb(206,183,124); --color: white\">\n    <ion-label>\n      <b>{{task}}</b>\n    </ion-label>\n    <ion-icon *ngIf=\"showOverview\" (click)=\"toggleOverview()\" slot=\"start\" color=\"dark\" name=\"arrow-back\" style=\"height: 3vh\"></ion-icon>\n    <ion-icon (click)=\"toggleOverview()\" slot=\"end\" color=\"dark\" name=\"help-circle\" style=\"height: 3vh\" [ngClass]=\"{'hidden': task == 'Start' || task == 'Overview' || hideQuit}\"></ion-icon>\n    <ion-icon *ngIf=\"!showOverview\" slot=\"start\" color=\"dark\" name=\"close-circle\" style=\"margin-right: 10px; height: 3vh\" (click)=\"closeModal()\" [ngClass]=\"{'hidden': hideQuit}\"></ion-icon>\n  </ion-item>\n\n  <ion-slides #slideElement (ionSlideWillChange)=\"changeSlide()\" style=\"height: 80%\">\n    <ion-slide *ngFor=\"let slide of slides; let i = index\" style=\"height: 100%; width: 100%; display: flex; flex-direction: column; justify-content: space-evenly; padding-left: 5%; padding-right: 5%\">\n      <img [src]=\"slide[0]\">\n      <div style=\"display: flex; align-items: center; flex-shrink: 2; margin-left: 5%; margin-right: 5%; font-size: 5vw\">{{slide[1]}}</div>\n    </ion-slide>\n  </ion-slides>\n\n  <div style=\"text-align: center; font-size: 3vh\">\n    <span *ngFor=\"let slide of slides; let i = index\" style=\"margin: 0 auto\">\n      <ion-icon *ngIf=\"currentSlide == i\" color=\"dark\" name=\"radio-button-on\"></ion-icon>\n      <ion-icon *ngIf=\"currentSlide != i\" (click)=\"slideElement.slideTo(i)\" color=\"dark\" name=\"radio-button-off\"></ion-icon>\n    </span>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/learning-task/learning-task.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/learning-task/learning-task.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content id=\"learningView\">\n\t<ion-progress-bar style=\"margin-top: 0px\" value={{progressPercent}}></ion-progress-bar>\n\n\t<div class=\"flex-slide\">\n\t\t<div style=\"font-size: 7vw; color: white; text-align: center; margin-top: 5%\">Memorize the faces and names</div>\n\n\t\t<ion-slides #slideElement (ionSlideNextStart)=\"changeCard('next')\" (ionSlidePrevStart)=\"changeCard('back')\" style=\"width: 100%;\">\n\t\t\t<ion-slide *ngFor=\"let face of facePaths; let i = index\" style=\"text-align: center\">\n\t\n\t\t\t\t<ion-card style=\"display: flex; justify-content: center; align-items: center;\">\n\t\t\t\t\t<ion-icon (click)=\"slideElement.slidePrev()\" color=\"dark\" name=\"arrow-back\" style=\"margin-right: calc((100% - 220px) / 2); font-size: 150%\" [ngStyle]=\"{'opacity': progress == 0 ? '0.2' : '1'}\"></ion-icon>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"imgContainer\">\n\t\t\t\t\t\t\t<img [src]=\"face\" id=faceImg>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"nameContainer\">\n\t\t\t\t\t\t\t<div id=\"nameDisplay\">\n\t\t\t\t\t\t\t\t<p id=\"nameText\">{{setNames[i]}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ion-icon (click)=\"slideElement.slideNext()\" color=\"dark\" name=\"arrow-forward\" style=\"margin-left: calc((100% - 220px) / 2); font-size: 150%\" [ngStyle]=\"{'opacity': progress == (facePaths.length - 1) ? '0.2' : '1'}\"></ion-icon>\n\t\t\t\t</ion-card>\n\t\n\t\t\t</ion-slide>\n\t\t</ion-slides>\n\t\n\t\t<div style=\"text-align: center; height: 7%; margin-bottom: 5%\">\n\t\t\t<ion-button *ngIf=\"!seenAll\" color=\"success\" style=\"height: 100%\" disabled>Finish</ion-button>\n\t\t\t<ion-button *ngIf=\"seenAll\" color=\"success\" style=\"height: 100%\" (click)=\"finished.emit()\">Finish</ion-button>\n\t\t</div>\n\t</div>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/memory-match/memory-match.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/memory-match/memory-match.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [ngClass]=\"{'default': stage != Stage.CORRECT && stage != Stage.INCORRECT, 'success': stage == Stage.CORRECT, 'failure': stage == Stage.INCORRECT}\">\n\n  <ion-progress-bar style=\"margin-top: 0px\" value={{progressPercent}}></ion-progress-bar>\n\n  <span *ngIf=\"!scoreCardDisplayed()\">\n    <div class=\"score-banner\"><b>Score: {{score}}/{{progressPercent * taskLength}}</b></div>\n    <div class=\"score-change\" style=\"right: 12vw\">{{stage == Stage.CORRECT ? '+4' : '-1'}}</div>\n  </span>\n\n  <div *ngIf=\"stage == Stage.START\" (click)=\"startMemorizeTimer()\" class=\"overlay\" button>\n    <div class=\"overlay-content\">\n      Click anywhere to reveal\n    </div>\n  </div>\n\n  <ion-slides #slideElement (ionSlideDidChange)=\"ngAfterViewInit(); resetSelected()\" (ionSlideReachStart)=\"firstSlide = true\" (ionSlideReachEnd)=\"firstSlide = false\">\n\n    <ion-slide class=\"flex-slide\">\n\n      <div class=\"prompt-small\" *ngIf=\"stage == Stage.START\">Memorize the face placement: {{memorizeTime}}</div>\n      <div class=\"prompt-small\" *ngIf=\"stage == Stage.MEMORIZE\">Memorize the face placement: <span class=\"time-left\">{{timeRemaining}}</span></div>\n      <div class=\"prompt-small\" *ngIf=\"stage == Stage.MASK\">Hold the faces in your mind...</div>\n      <div class=\"prompt-small\" *ngIf=\"stage == Stage.SELECT\">Match the faces</div>\n      <div class=\"prompt-small\" *ngIf=\"stage == Stage.CORRECT\">Correct!</div>\n      <div class=\"prompt-small\" *ngIf=\"stage == Stage.INCORRECT\">Incorrect!</div>\n      \n      <div style=\"text-align: center;\">\n\n        <div style=\"display: flex; justify-content: center;\">\n          <div *ngFor=\"let item of [].constructor(4); let i = index\" style=\"margin: 10px\">\n            <ion-card [button]=\"stage == Stage.SELECT || stage == Stage.CORRECT || stage == Stage.INCORRECT\" (click)=\"clickFace(i)\" [ngClass]=\"{'selected-card' : selectedFace == i}\">\n              <img *ngIf=\"imageIsDisplayed(i)\" [src]=\"stage == Stage.MASK ? mask : randomFaces[i]\"/>\n            </ion-card>\n          </div>\n        </div>\n\n        <div style=\"display: flex; justify-content: center;\">\n          <div *ngFor=\"let item of [].constructor(4); let i = index\" style=\"margin: 10px\">\n            <ion-card [button]=\"stage == Stage.SELECT || stage == Stage.CORRECT || stage == Stage.INCORRECT\" (click)=\"clickFace(i + 4)\" [ngClass]=\"{'selected-card' : selectedFace == i + 4}\">\n              <img *ngIf=\"imageIsDisplayed(i + 4)\" [src]=\"stage == Stage.MASK ? mask : randomFaces[i + 4]\"/>\n            </ion-card>\n          </div>\n        </div>\n\n        <div style=\"display: flex; justify-content: center\">\n          <div *ngFor=\"let item of [].constructor(4); let i = index\" style=\"margin: 10px\">\n            <ion-card [button]=\"stage == Stage.SELECT || stage == Stage.CORRECT || stage == Stage.INCORRECT\" (click)=\"clickFace(i + 8)\" [ngClass]=\"{'selected-card' : selectedFace == i + 8}\">\n              <img *ngIf=\"imageIsDisplayed(i + 8)\" [src]=\"stage == Stage.MASK ? mask : randomFaces[i + 8]\"/>\n            </ion-card>\n          </div>\n        </div>\n\n        <div style=\"display: flex; justify-content: center\">\n          <div *ngFor=\"let item of [].constructor(4); let i = index\" style=\"margin: 10px\">\n            <ion-card [button]=\"stage == Stage.SELECT || stage == Stage.CORRECT || stage == Stage.INCORRECT\" (click)=\"clickFace(i + 12)\" [ngClass]=\"{'selected-card' : selectedFace == i + 12}\">\n              <img *ngIf=\"imageIsDisplayed(i + 12)\" [src]=\"stage == Stage.MASK ? mask : randomFaces[i + 12]\"/>\n            </ion-card>\n          </div>\n        </div>\n\n      </div>\n\n      <ion-item class=\"footer\" lines=\"none\">\n        <ion-label>Swipe to Continue</ion-label>\n        <ion-icon slot=\"end\" color=\"dark\" name=\"arrow-back\"></ion-icon> \n      </ion-item>\n\n    </ion-slide>\n\n   <!--Score page-->\n    <ion-slide>\n      <app-score-page [score]=\"score\" [length]=\"taskLength\" [assessment]=\"false\" (finished)=\"finish($event)\"></app-score-page>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/name-face/name-face.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/name-face/name-face.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [ngClass]=\"{'default': !showFeedback(), 'success': showFeedback() && slideInfo[currentSlide].stage == Stage.CORRECT, 'failure': showFeedback() && slideInfo[currentSlide].stage == Stage.INCORRECT}\">\n\n  <ion-progress-bar style=\"margin-top: 0px\" value={{progressPercent}}></ion-progress-bar>\n\n  <span *ngIf=\"!scoreCardDisplayed()\">\n    <div class=\"score-banner\"><b>Score: {{score}}/{{progressPercent * taskLength}}</b></div>\n    <div class=\"score-change\">+1</div>\n  </span>\n\n  <ion-slides #slideElement (ionSlideDidChange)=\"changeSlide()\">\n\n    <ion-slide *ngFor=\"let slide of slideInfo; let slideIndex = index\">\n\n      <div class=\"flex-slide\">\n\n        <div class=\"prompt\" *ngIf=\"slideIndex != currentSlide || !showFeedback()\">Who is <b>{{slideInfo[slideIndex].correctName}}</b>?</div>\n        <div class=\"prompt\" *ngIf=\"showFeedback() && slideInfo[slideIndex].stage == Stage.CORRECT\">Correct!</div>\n        <div class=\"prompt\" *ngIf=\"showFeedback() && slideInfo[slideIndex].stage == Stage.INCORRECT\">Incorrect!</div>\n\n        <div>\n\n          <div style=\"display: flex; justify-content: center\">\n\n            <div *ngFor=\"let item of [].constructor(3); let i = index\" style=\"margin-left: 10px; margin-right: 10px\">\n\n              <ion-card [button]=\"!showFeedback()\" class=\"grid-card\" (click)=\"selectFace(slideInfo[slideIndex].faces[i])\" [ngClass]=\"{'selected-wrong-card': showSelected(i) && slideIndex == currentSlide, 'disabled-card': showDisabled(i) && slideIndex == currentSlide}\">\n                <img *ngIf=\"slideIndex <= currentSlide\" [src]=\"slideInfo[slideIndex].faces[i]\"/>\n              </ion-card>\n\n              <div style=\"height: 25px; color: white\">{{slideIndex == currentSlide ? getName(i) : ''}}</div>\n\n            </div>\n\n          </div>\n          <div style=\"display: flex; justify-content: center; margin-top: 10px\">\n\n            <div *ngFor=\"let item of [].constructor(3); let i = index\" style=\"margin-left: 10px; margin-right: 10px\">\n\n              <ion-card [button]=\"!showFeedback()\" class=\"grid-card\" (click)=\"selectFace(slideInfo[slideIndex].faces[i + 3])\" [ngClass]=\"{'selected-wrong-card': showSelected(i + 3) && slideIndex == currentSlide, 'disabled-card': showDisabled(i + 3) && slideIndex == currentSlide}\">\n                <img *ngIf=\"slideIndex <= currentSlide\" [src]=\"slideInfo[slideIndex].faces[i + 3]\"/>\n              </ion-card>\n\n              <div style=\"height: 25px; color: white\">{{slideIndex == currentSlide ? getName(i + 3) : ''}}</div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <ion-item class=\"footer\" lines=\"none\">\n          <ion-label>Swipe to Continue</ion-label>\n          <ion-icon slot=\"end\" color=\"medium\" name=\"arrow-back\" style=\"margin-top: 10px\"></ion-icon>    \n        </ion-item>\n\n      </div>\n\n    </ion-slide>\n\n   <!--Score page-->\n    <ion-slide>\n      <app-score-page [score]=\"score\" [length]=\"taskLength\" [assessment]=\"false\" (finished)=\"finish($event)\"></app-score-page>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/race-select-modal/race-select-modal.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/race-select-modal/race-select-modal.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"--background: rgb(34,31,32); --color: white; ion-justify-content-center\">\n\n  <ion-item lines=\"none\" style=\"font-size: 4vh; margin-top: 40%; text-align: center; --background: rgb(206,183,124); --color: white\">\n    <ion-label >\n      <b>Select a Facial Set</b>\n    </ion-label>\n  </ion-item>\n  \n  <ion-list style=\"--background: rgb(34,31,32);\">\n    <ion-radio-group>\n      <ion-item style=\"--background: rgb(34,31,32);\" *ngFor=\"let card of cards; let i = index\">\n        <ion-label style=\"color: azure;\">{{cards[i]}}</ion-label>\n        <ion-radio (click)=\"selectedRace(cards[i])\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n\n  <div class=\"row\">\n    <div class=\"col text-center\">\n       <ion-button *ngIf=\"!hideStart\" color=\"success\" class=\"ion-justify-content-center\" [ngClass]=\"{'hidden': hideStart}\" (click)=\"closeModal()\">Start</ion-button>\n    </div>\n </div>\n  \n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/same-different/same-different.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/same-different/same-different.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [ngClass]=\"{'default': !showFeedback(), 'success': showFeedback() && slideInfo[currentSlide].stage == Stage.CORRECT, 'failure': showFeedback() && slideInfo[currentSlide].stage == Stage.INCORRECT}\">\n\n  <ion-progress-bar style=\"margin-top: 0px\" value={{progressPercent}}></ion-progress-bar>\n\n  <span *ngIf=\"!scoreCardDisplayed()\">\n    <div class=\"score-banner\"><b>Score: {{score}}/{{progressPercent * taskLength}}</b></div>\n    <div class=\"score-change\">+1</div>\n  </span>\n\n  <div *ngIf=\"slideInfo[currentSlide].stage == Stage.START\" (click)=\"startMemorizeTimer()\" class=\"overlay\" button>\n    <div class=\"overlay-content\">\n      Click anywhere to reveal\n    </div>\n  </div>\n\n  <ion-slides #slideElement (ionSlideDidChange)=\"changeSlide()\">\n\n    <ion-slide *ngFor=\"let slide of slideInfo; let slideIndex = index\" (swipeleft)=\"selectFace(true)\" (swiperight)=\"selectFace(false)\" class=\"flex-slide\">\n\n      <div class=\"prompt\" *ngIf=\"slideInfo[slideIndex].stage == Stage.START\">Memorize the face: {{memorizeTime}}</div>\n      <div class=\"prompt\" *ngIf=\"slideInfo[slideIndex].stage == Stage.MEMORIZE\">Memorize the face: <span class=\"time-left\">{{timeRemaining}}</span></div>\n      <div class=\"prompt\" *ngIf=\"slideInfo[slideIndex].stage == Stage.MASK\">Hold the face in your mind...</div>\n      <div class=\"prompt\" *ngIf=\"slideInfo[slideIndex].stage == Stage.SELECT\">Is this the same person?</div>\n      <div class=\"prompt\" *ngIf=\"slideInfo[slideIndex].stage == Stage.CORRECT\">Correct!</div>\n      <div class=\"prompt\" *ngIf=\"slideInfo[slideIndex].stage == Stage.INCORRECT\">Incorrect!</div>\n\n      <ion-card *ngIf=\"slideInfo[slideIndex].stage != Stage.CORRECT && slideInfo[slideIndex].stage != Stage.INCORRECT\" class=\"swipe-card\">\n        <ion-icon *ngIf=\"slideInfo[slideIndex].stage == Stage.SELECT\" (click)=\"selectFace(false)\" color=\"dark\" name=\"arrow-back\" style=\"font-size: 150%\"></ion-icon>\n        <img *ngIf=\"slideInfo[slideIndex].stage != Stage.START\" [src]=\"getSrc(slideIndex)\" style=\"height: 270px\" [ngStyle]=\"{'width': slideInfo[slideIndex].stage == Stage.MASK ? '85%' : 'auto'}\"/>\n        <ion-icon *ngIf=\"slideInfo[slideIndex].stage == Stage.SELECT\" (click)=\"selectFace(true)\" color=\"dark\" name=\"arrow-forward\" style=\"font-size: 150%\"></ion-icon>\n      </ion-card>\n\n      <div *ngIf=\"slideInfo[slideIndex].stage != Stage.CORRECT && slideInfo[slideIndex].stage != Stage.INCORRECT\" class=\"swipe-footer\">\n        <ion-button (click)=\"selectFace(true)\" color=\"primary\">Same</ion-button>\n        <ion-button (click)=\"selectFace(false)\" color=\"secondary\">Different</ion-button>\n      </div>\n\n      <div *ngIf=\"slideInfo[slideIndex].stage == Stage.CORRECT || slideInfo[slideIndex].stage == Stage.INCORRECT\" style=\"height: 100%; width: 100%; padding-top: 20%; text-align: center; margin: 0 auto\">\n        <div *ngIf=\"slideInfo[slideIndex].correctFace == slideInfo[slideIndex].displayedFace\" class=\"subheader\">Same</div>\n        <div *ngIf=\"slideInfo[slideIndex].correctFace != slideInfo[slideIndex].displayedFace\" class=\"subheader\">Different</div>\n        <ion-card class=\"grid-card\" style=\"--background: gainsboro;\">\n          <img [src]=\"slideInfo[slideIndex].correctFace\">\n        </ion-card>\n        <ion-card class=\"grid-card\" style=\"--background: gainsboro;\">\n          <img [src]=\"slideInfo[slideIndex].displayedFace\">\n        </ion-card>\n\n        <ion-item class=\"footer\" lines=\"none\" style=\"margin-top: 30%\">\n          <ion-label>Swipe to Continue</ion-label>\n          <ion-icon slot=\"end\" color=\"dark\" name=\"arrow-back\" style=\"margin-top: 10px\"></ion-icon>    \n        </ion-item>\n      </div>\n\n    </ion-slide>\n\n   <!--Score page-->\n    <ion-slide>\n      <app-score-page [score]=\"score\" [length]=\"taskLength\" [assessment]=\"true\" (finished)=\"finished.emit([score, 2])\"></app-score-page>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/score-page/score-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/score-page/score-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex-slide\">\n  <div>\n    <div class=\"header\" style=\"color:white\">Your score: {{score}}/{{length}}</div>\n    <div *ngIf=\"failed()\" class=\"subheader\" style=\"margin: 5%\">You need a score of at least {{length * minTrainScore}}/{{length}} ({{minTrainScore * 100}}%) to pass this module</div>\n    <ion-button *ngIf=\"failed()\" (click)=\"finished.emit(0)\">Retry</ion-button>\n    <ion-button *ngIf=\"failed()\" (click)=\"finished.emit(1)\">\n      <ion-icon [src]=replay_icon></ion-icon>\n      &nbsp;\n      <ion-icon [src]=face_icon></ion-icon>\n    </ion-button>\n    <br>\n    <ion-button [color]=\"!failed() ? 'success' : 'danger'\" (click)=\"finished.emit(2)\">Finish</ion-button>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shuffle/shuffle.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shuffle/shuffle.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [ngClass]=\"{'default': !showFeedback(), 'success': showFeedback() && slideInfo[currentSlide].stage == Stage.CORRECT, 'failure': showFeedback() && slideInfo[currentSlide].stage == Stage.INCORRECT}\">\n\n  <ion-progress-bar style=\"margin-top: 0px\" value={{progressPercent}}></ion-progress-bar>\n\n  <span *ngIf=\"!scoreCardDisplayed()\">\n    <div class=\"score-banner\"><b>Score: {{score}}/{{progressPercent * taskLength}}</b></div>\n    <div class=\"score-change\" style=\"right: 12vw\">+{{changeScoreValue}}</div>\n  </span>\n\n  <div *ngIf=\"slideInfo[currentSlide].stage == Stage.START\" (click)=\"startMemorizeTimer()\" class=\"overlay\" button>\n    <div class=\"overlay-content\">\n      Click anywhere to reveal\n    </div>\n  </div>\n\n  <ion-slides #slideElement (ionSlideDidChange)=\"changeSlide()\">\n\n    <ion-slide *ngFor=\"let slide of slideInfo; let slideIndex = index\" class=\"flex-slide\">\n\n      <div class=\"prompt-small\" *ngIf=\"slideInfo[slideIndex].stage == Stage.START\">Memorize the face placement: {{memorizeTime}}</div>\n      <div class=\"prompt-small\" *ngIf=\"slideInfo[slideIndex].stage == Stage.MEMORIZE\">Memorize the face placement: <span class=\"time-left\">{{timeRemaining}}</span></div>\n      <div class=\"prompt-small\" *ngIf=\"slideInfo[slideIndex].stage == Stage.MASK\">Hold the faces in your mind...</div>\n      <div class=\"prompt-small\" *ngIf=\"slideInfo[slideIndex].stage == Stage.SELECT\">Rearrange the faces</div>\n      <div class=\"prompt-small\" *ngIf=\"slideInfo[slideIndex].stage == Stage.CORRECT\">Correct!</div>\n      <div class=\"prompt-small\" *ngIf=\"slideInfo[slideIndex].stage == Stage.INCORRECT\">Incorrect!</div>\n\n      <!--<ion-reorder-group (ionItemReorder)=\"$event.detail.complete();\" disabled=\"false\">\n        <ion-reorder style=\"width: 45%; display: inline-block\">\n          <ion-card (click)=\"clickCard(0)\" [button]=\"slideInfo[slideIndex].stage == Stage.SELECT\" class=\"grid-card\" [ngClass]=\"{'selected-card': slideInfo[slideIndex].stage != Stage.START && getSrc(0) == slideInfo[slideIndex].selectedFace, 'wrong-card': slideInfo[slideIndex].stage == Stage.INCORRECT && slideInfo[slideIndex].feedback && slideInfo[slideIndex].shuffledOrder[0] != slideInfo[slideIndex].correctOrder[0]}\">\n            <img *ngIf=\"slideInfo[slideIndex].stage != Stage.START\" [src]=\"getSrc(0)\"/>\n          </ion-card>\n        </ion-reorder>\n\n        <ion-reorder style=\"width: 45%; display: inline-block\">\n          <ion-card (click)=\"clickCard(1)\" [button]=\"slideInfo[slideIndex].stage == Stage.SELECT\" class=\"grid-card\" [ngClass]=\"{'selected-card': slideInfo[slideIndex].stage != Stage.START && getSrc(1) == slideInfo[slideIndex].selectedFace, 'wrong-card': slideInfo[slideIndex].stage == Stage.INCORRECT && slideInfo[slideIndex].feedback && slideInfo[slideIndex].shuffledOrder[1] != slideInfo[slideIndex].correctOrder[1]}\">\n            <img *ngIf=\"slideInfo[slideIndex].stage != Stage.START\" [src]=\"getSrc(1)\"/>\n          </ion-card>\n        </ion-reorder>\n\n        <ion-reorder style=\"width: 45%; display: inline-block\">\n          <ion-card (click)=\"clickCard(2)\" [button]=\"slideInfo[slideIndex].stage == Stage.SELECT\" class=\"grid-card\" [ngClass]=\"{'selected-card': slideInfo[slideIndex].stage != Stage.START && getSrc(2) == slideInfo[slideIndex].selectedFace, 'wrong-card': slideInfo[slideIndex].stage == Stage.INCORRECT && slideInfo[slideIndex].feedback && slideInfo[slideIndex].shuffledOrder[2] != slideInfo[slideIndex].correctOrder[2]}\">\n            <img *ngIf=\"slideInfo[slideIndex].stage != Stage.START\" [src]=\"getSrc(2)\"/>\n          </ion-card>\n        </ion-reorder>\n\n        <ion-reorder style=\"width: 45%; display: inline-block\">\n          <ion-card (click)=\"clickCard(3)\" [button]=\"slideInfo[slideIndex].stage == Stage.SELECT\" class=\"grid-card\" [ngClass]=\"{'selected-card': slideInfo[slideIndex].stage != Stage.START && getSrc(3) == slideInfo[slideIndex].selectedFace, 'wrong-card': slideInfo[slideIndex].stage == Stage.INCORRECT && slideInfo[slideIndex].feedback && slideInfo[slideIndex].shuffledOrder[3] != slideInfo[slideIndex].correctOrder[3]}\">\n            <img *ngIf=\"slideInfo[slideIndex].stage != Stage.START\" [src]=\"getSrc(3)\"/>\n          </ion-card>\n        </ion-reorder>\n      </ion-reorder-group>-->\n\n      <div>\n\n        <div>\n          <ion-card id=\"card-0\" [button]=\"slideInfo[slideIndex].stage == Stage.SELECT\" class=\"grid-card\" (click)=\"clickCard(0)\" [ngClass]=\"{'selected-card': slideInfo[slideIndex].stage != Stage.START && getSrc(0) == slideInfo[slideIndex].selectedFace, 'wrong-card': slideInfo[slideIndex].stage == Stage.INCORRECT && slideInfo[slideIndex].feedback && slideInfo[slideIndex].shuffledOrder[0] != slideInfo[slideIndex].correctOrder[0]}\">\n            <img *ngIf=\"slideInfo[slideIndex].stage != Stage.START\" [src]=\"getSrc(0)\"/>\n          </ion-card>\n\n          <ion-card id=\"card-1\" [button]=\"slideInfo[slideIndex].stage == Stage.SELECT\" class=\"grid-card\" (click)=\"clickCard(1)\" [ngClass]=\"{'selected-card': slideInfo[slideIndex].stage != Stage.START && getSrc(1) == slideInfo[slideIndex].selectedFace, 'wrong-card': slideInfo[slideIndex].stage == Stage.INCORRECT && slideInfo[slideIndex].feedback && slideInfo[slideIndex].shuffledOrder[1] != slideInfo[slideIndex].correctOrder[1]}\">\n            <img *ngIf=\"slideInfo[slideIndex].stage != Stage.START\" [src]=\"getSrc(1)\"/>\n          </ion-card>\n        </div>\n\n        <div>\n          <ion-card id=\"card-2\" [button]=\"slideInfo[slideIndex].stage == Stage.SELECT\" class=\"grid-card\" (click)=\"clickCard(2)\" [ngClass]=\"{'selected-card': slideInfo[slideIndex].stage != Stage.START && getSrc(2) == slideInfo[slideIndex].selectedFace, 'wrong-card': slideInfo[slideIndex].stage == Stage.INCORRECT && slideInfo[slideIndex].feedback && slideInfo[slideIndex].shuffledOrder[2] != slideInfo[slideIndex].correctOrder[2]}\">\n            <img *ngIf=\"slideInfo[slideIndex].stage != Stage.START\" [src]=\"getSrc(2)\"/>\n          </ion-card>\n\n          <ion-card id=\"card-3\" [button]=\"slideInfo[slideIndex].stage == Stage.SELECT\" class=\"grid-card\" (click)=\"clickCard(3)\" [ngClass]=\"{'selected-card': slideInfo[slideIndex].stage != Stage.START && getSrc(3) == slideInfo[slideIndex].selectedFace, 'wrong-card': slideInfo[slideIndex].stage == Stage.INCORRECT && slideInfo[slideIndex].feedback && slideInfo[slideIndex].shuffledOrder[3] != slideInfo[slideIndex].correctOrder[3]}\">\n            <img *ngIf=\"slideInfo[slideIndex].stage != Stage.START\" [src]=\"getSrc(3)\"/>\n          </ion-card>\n        </div>\n\n      </div>\n\n      <div style=\"text-align: center; height: 10%; width: 100%\">\n        <ion-button *ngIf=\"slideInfo[slideIndex].stage == Stage.SELECT\" (click)=\"clickDone()\">Done</ion-button>\n        <ion-grid *ngIf=\"slideInfo[slideIndex].stage == Stage.INCORRECT\" style=\"--background: transparent; height: 60%\" lines=\"none\">\n          <ion-row>\n            <ion-col>\n              <span style=\"color: white\">Correct</span>\n            </ion-col>\n            <ion-col>\n              <ion-toggle [(ngModel)]=\"slideInfo[slideIndex].feedback\" (click)=\"animateCardChange()\"></ion-toggle>\n            </ion-col>\n            <ion-col>\n              <span style=\"color: white\">Selected</span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <ion-item class=\"footer\" lines=\"none\">\n        <ion-label>Swipe to Continue</ion-label>\n        <ion-icon slot=\"end\" color=\"dark\" name=\"arrow-back\"></ion-icon>    \n      </ion-item>\n\n    </ion-slide>\n\n    <!--Score page-->\n    <ion-slide>\n      <app-score-page [score]=\"score\" [length]=\"taskLength\" [assessment]=\"false\" (finished)=\"finish($event)\"></app-score-page>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/training/training.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/training.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"--background: rgb(34,31,32); height: 100%\">\n\n  <ion-header>\n    <ion-toolbar color = dark [ngClass]=\"{'blue-border' : task == null}\">\n      <ion-title>{{getTitle()}}</ion-title>\n      <ion-buttons *ngIf=\"task == null\" slot=\"start\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      </ion-buttons>\n      <ion-icon *ngIf=\"task != null && task != Task.FORCED_CHOICE && task != Task.SAME_DIFFERENT && task != Task.PRETEST && task != Task.POSTTEST\" slot=\"start\" color=\"medium\" name=\"arrow-back\" style=\"margin-left: 1vw; height: 3vh\" (click)=\"taskExitAlert()\"></ion-icon>\n      <ion-icon *ngIf=\"userLevel <= 9\" slot=\"end\" color=\"medium\" name=\"help-circle\" style=\"margin-right: 1vw; height: 3vh\" (click)=\"getHelp(false)\"></ion-icon>\n    </ion-toolbar>\n  </ion-header>\n\n  <div *ngIf=\"stage == null\" style=\"height: 90%; display: flex; justify-content: center; align-items: center\">\n    <ion-spinner name=\"crescent\" color=\"light\"></ion-spinner>\n  </div>\n\n  <div *ngIf=\"task == null\" style=\"color: white; text-align: center\">\n\n    <!--Start Page-->\n    <div *ngIf=\"stage == Stage.START\" style=\"margin-top: 50%\">\n      <div *ngIf=\"userLevel >= 0 && userLevel < 9\">\n        <div class=\"header\" style=\"color:white;margin: 5%\"><b>Level {{userLevel}}</b></div>\n        <div class=\"subheader\" style=\"margin: 5%\">Are you ready to train?</div>\n      </div>\n      <!--\n      <div *ngIf=\"userLevel == 0\">\n        <div class=\"header\" style = \"color:white\"><b>Pre-Assessment</b></div>\n        <div class=\"subheader\" style=\"margin: 5%\">It looks like you're new, are you ready to begin your pretest?</div>\n      </div>\n      -->\n      <div *ngIf=\"userLevel == 9\">\n        <div class=\"header\" style=\"color: white;\"><b>Post-Assessment</b></div>\n        <div class=\"subheader\" style=\"margin: 5%\">It looks like you've completed all eight levels, are you ready to begin your post-test?</div>\n      </div>\n      <!--<h5>What would you like to train today?</h5>-->\n      <br>\n      <ion-button color=\"success\" (click)=\"clickStart()\">Start</ion-button>\n      <!--<ion-button color=\"success\" style=\"width: 45%\" (click)=\"BlackFaces()\">Black Faces</ion-button> //; finished_setRaceName()//\n      <ion-button color=\"success\" style=\"width: 45%\" (click)=\"AsianFaces()\">Asian Faces</ion-button>-->\n    </div>\n\n    <!--Learning tasks-->\n    <div *ngIf=\"stage == Stage.TRAINING\" style=\"margin-top: 20px\">\n      <div style=\"font-size: 6vw\">What would you like to do next?</div>\n      <!--<p style=\"font-size: small\">{{titleMSG}}</p>-->\n\n      <ion-card (click)=\"scores[Task.NAME_FACE] == -1 ? renderLevelOneHelp() : null; task = Task.NAME_FACE\" button [ngClass]=\"{'task-done': scores[Task.NAME_FACE] >= taskLengths[Task.NAME_FACE] * minTrainScore, 'task-failed': scores[Task.NAME_FACE] > -1 && scores[Task.NAME_FACE] < taskLengths[Task.NAME_FACE] * minTrainScore}\">\n        <ion-icon slot=\"start\" name=\"happy\" style=\"font-size: 300%\"></ion-icon>\n        <div>Name and Face<span *ngIf=\"scores[Task.NAME_FACE] > -1\">: {{scores[Task.NAME_FACE]}}/{{taskLengths[Task.NAME_FACE]}}</span></div>\n      </ion-card>\n\n      <ion-card (click)=\"scores[Task.WHOS_NEW] == -1 ? renderLevelOneHelp() : null; task = Task.WHOS_NEW\" button [ngClass]=\"{'task-done': scores[Task.WHOS_NEW] >= taskLengths[Task.WHOS_NEW] * minTrainScore, 'task-failed': scores[Task.WHOS_NEW] > -1 && scores[Task.WHOS_NEW] < taskLengths[Task.WHOS_NEW] * minTrainScore}\">\n        <ion-icon slot=\"start\" name=\"person-add\" style=\"font-size: 300%\"></ion-icon>\n        <div>Who's New<span *ngIf=\"scores[Task.WHOS_NEW] > -1\">: {{scores[Task.WHOS_NEW]}}/{{taskLengths[Task.WHOS_NEW]}}</span></div>\n      </ion-card>\n\n      <ion-card (click)=\"scores[Task.MEMORY] == -1 ? renderLevelOneHelp() : null; task = Task.MEMORY\" button [ngClass]=\"{'task-done': scores[Task.MEMORY] >= taskLengths[Task.MEMORY] * minTrainScore, 'task-failed': scores[Task.MEMORY] > -1 && scores[Task.MEMORY] < taskLengths[Task.MEMORY] * minTrainScore}\">\n        <ion-icon slot=\"start\" name=\"grid\" style=\"font-size: 300%\"></ion-icon>\n        <div>Memory Match<span *ngIf=\"scores[Task.MEMORY] > -1\">: {{scores[Task.MEMORY]}}/{{taskLengths[Task.MEMORY]}}</span></div>\n      </ion-card>\n\n      <ion-card (click)=\"scores[Task.SHUFFLE] == -1 ? renderLevelOneHelp() : null; task = Task.SHUFFLE\" button [ngClass]=\"{'task-done': scores[Task.SHUFFLE] >= taskLengths[Task.SHUFFLE] * minTrainScore, 'task-failed': scores[Task.SHUFFLE] > -1 && scores[Task.SHUFFLE] < taskLengths[Task.SHUFFLE] * minTrainScore}\">\n        <ion-icon slot=\"start\" name=\"swap\" style=\"font-size: 300%\"></ion-icon>\n        <div>Shuffle<span *ngIf=\"scores[Task.SHUFFLE] > -1\">: {{scores[Task.SHUFFLE]}}/{{taskLengths[Task.SHUFFLE]}}</span></div>\n      </ion-card>\n\n      <ion-button (click)=\"task = Task.LEARNING\" style=\"padding: 0; margin: 1%\">\n        <ion-icon [src]=replay_icon></ion-icon>\n        &nbsp;\n        <ion-icon [src]=face_icon></ion-icon>\n      </ion-button>\n\n      <ion-button (click)=\"startAssessmentAlert()\" style=\"padding: 0; margin: 1%\" [disabled]=\"trainingNotDone()\">\n        <ion-icon [src]=assessment_icon ></ion-icon>\n      </ion-button>\n\n    </div>\n\n    <!--Assessment tasks-->\n    <div *ngIf=\"stage == Stage.ASSESSMENT\" style=\"margin-top: 20px\">\n      <div style=\"font-size: 6vw\">What would you like to do next?</div>\n\n      <ion-card (click)=\"scores[4] == -1 ? task = Task.FORCED_CHOICE : null; renderLevelOneHelp()\" button [ngClass]=\"{'task-done': scores[4] != -1}\">\n        <ion-icon slot=\"start\" name=\"checkmark-circle\" style=\"font-size: 300%\"></ion-icon>\n        <div>Forced Choice<span *ngIf=\"scores[4] > -1\">: {{scores[Task.FORCED_CHOICE]}}/{{taskLengths[Task.FORCED_CHOICE]}}</span></div>\n      </ion-card>\n\n      <ion-card (click)=\"scores[5] == -1 ? task = Task.SAME_DIFFERENT : null; renderLevelOneHelp()\" button [ngClass]=\"{'task-done': scores[5] != -1}\">\n        <ion-icon slot=\"start\" name=\"contacts\" style=\"font-size: 300%\"></ion-icon>\n        <div>Same Different<span *ngIf=\"scores[5] > -1\">: {{scores[Task.SAME_DIFFERENT]}}/{{taskLengths[Task.SAME_DIFFERENT]}}</span></div>\n      </ion-card>\n\n    </div>\n\n    <!--Done Page-->\n    <div *ngIf=\"stage == Stage.DONE\" style=\"margin-top: 40%\">\n\n      <div *ngIf=\"userLevel <= 9\" style=\"display: flex; flex-direction: column; justify-content: center; align-items: center\">\n\n        <div class=\"header\" style=\"color:white;margin: 5%\"><b>Finished!</b></div>\n        <ion-progress-bar style=\"width: 80%\" value={{progress}}></ion-progress-bar>\n        <div style=\"color:white;margin-top: 5%; font-size: 4vh\">Level <span class=\"level\">{{userLevel}}</span></div>\n\n        <div *ngIf=\"userLevel == 1\" class=\"fade-in\">\n          <div class=\"subheader\" style=\"margin: 5%\">You've entered level 1! Click to begin your training.</div>\n          <ion-button color=\"success\" (click)=\"initCurrentLevel()\">Train</ion-button>\n        </div>\n\n        <div *ngIf=\"userLevel > 0 && userLevel < 9\" class=\"fade-in\">\n          <div class=\"subheader\" style=\"margin: 5%\">You've moved on to the next level! Come back tomorrow for your next training.</div>\n          <ion-button color=\"success\" routerLink=\"/dashboard\" routerDirection=\"forward\">Home</ion-button>\n        </div>\n\n        <div *ngIf=\"userLevel == 9\" class=\"fade-in\">\n          <div class=\"subheader\" style=\"margin: 5%\">You've completed all eight levels! Now it's time for your post-assessment.</div>\n          <ion-button color=\"success\" (click)=\"initCurrentLevel()\">Post-Assessment</ion-button>\n        </div>\n\n      </div>\n\n      <div *ngIf=\"userLevel > 9\">\n        <div class=\"header\" style=\"color:white;margin: 5%\"><b>You're all done.</b></div>\n        <div class=\"subheader\" style=\"margin: 5%\">Since you've completed all eight levels and the post assessment, you don't have anything else to do! Thank you for your participation in this research.</div>\n        <ion-button color=\"success\" routerLink=\"/dashboard\" routerDirection=\"forward\">Home</ion-button>\n      </div>\n\n    </div>\n\n  </div>\n\n  <!--Learning Task-->\n  <app-learning-task *ngIf=\"task == Task.LEARNING\" [setNames]=\"setNames\" [facePaths]=\"trainingFacePaths\" (finished)=\"learningDone = true; iterateStage()\"></app-learning-task>\n  <!--Name and Face-->\n  <app-name-face *ngIf=\"task == Task.NAME_FACE\" [setNames]=\"setNames\" [facePaths]=\"trainingFacePaths\" (finished)=\"finished($event, 0)\"></app-name-face>\n  <!--Who's New?-->\n  <app-whos-new *ngIf=\"task == Task.WHOS_NEW\" [facePaths]=\"trainingFacePaths\" [newFacePaths]=\"whosNewFacePaths\" (finished)=\"finished($event, 1)\"></app-whos-new>\n  <!--Memory Match-->\n  <app-memory-match *ngIf=\"task == Task.MEMORY\" [facePaths]=\"trainingFacePaths\" (finished)=\"finished($event, 2)\"></app-memory-match>\n  <!--Shuffle-->\n  <app-shuffle *ngIf=\"task == Task.SHUFFLE\" [facePaths]=\"trainingFacePaths\" (finished)=\"finished($event, 3)\"></app-shuffle>\n  <!--Forced Choice-->\n  <app-forced-choice *ngIf=\"task == Task.FORCED_CHOICE\" [facePaths]=\"assessmentFacePaths\" (finished)=\"finished($event, 4)\"></app-forced-choice>\n  <!--Same-Different-->\n  <app-same-different *ngIf=\"task == Task.SAME_DIFFERENT\" [facePaths]=\"assessmentFacePaths\" (finished)=\"finished($event, 5)\"></app-same-different>\n  <!--Pre-Post-Assessment-->\n  <app-same-different *ngIf=\"task == Task.POSTTEST\" [facePaths]=\"assessmentFacePaths\" (finished)=\"finishPrePost($event)\"></app-same-different>\n\n  <!--For development only\n  <div>\n    <br><br><br><br><br><br><br><br><br><br><br><br>\n    <ion-button (click)=\"completeTraining()\">Complete Training</ion-button>\n    <ion-button (click)=\"completeAssessment()\">Complete Assessment</ion-button>\n    <ion-button (click)=\"completeMost()\">Complete Most</ion-button>\n    <div style=\"text-align:center\">\n      <br><br><br><br><br><br><br><br><br><br><br><br>\n      <ion-button (click)=\"task = Task.LEARNING\">Learning</ion-button>\n      <ion-button (click)=\"task = Task.NAME_FACE\">Name and Face</ion-button>\n      <ion-button (click)=\"task = Task.WHOS_NEW\">Who's New</ion-button>\n      <ion-button (click)=\"task = Task.MEMORY\">Memory</ion-button>\n      <ion-button (click)=\"task = Task.SHUFFLE\">Shuffle</ion-button>\n      <ion-button (click)=\"task = Task.FORCED_CHOICE\">Forced Choice</ion-button>\n      <ion-button (click)=\"task = Task.SAME_DIFFERENT\">Same Different</ion-button>\n    </div>\n  </div>-->\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/whos-new/whos-new.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/whos-new/whos-new.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [ngClass]=\"{'default': !showFeedback(), 'success': showFeedback() && slideInfo[currentSlide].stage == Stage.CORRECT, 'failure': showFeedback() && slideInfo[currentSlide].stage == Stage.INCORRECT}\">\n\n  <ion-progress-bar style=\"margin-top: 0px\" value={{progressPercent}}></ion-progress-bar>\n\n  <span *ngIf=\"!scoreCardDisplayed()\">\n    <div class=\"score-banner\"><b>Score: {{score}}/{{progressPercent * taskLength}}</b></div>\n    <div class=\"score-change\">+1</div>\n  </span>\n\n  <ion-slides #slideElement (ionSlideDidChange)=\"changeSlide()\">\n\n    <ion-slide *ngFor=\"let slide of slideInfo; let slideIndex = index\">\n      \n      <div class=\"flex-slide\">\n\n        <div class=\"prompt\" *ngIf=\"slideIndex != currentSlide || !showFeedback()\">Who didn't you see today?</div>\n        <div class=\"prompt\" *ngIf=\"showFeedback() && slideInfo[slideIndex].stage == Stage.CORRECT\">Correct!</div>\n        <div class=\"prompt\" *ngIf=\"showFeedback() && slideInfo[slideIndex].stage == Stage.INCORRECT\">Incorrect!</div>\n\n        <div>\n\n          <div>\n            <ion-card [button]=\"!showFeedback()\" class=\"grid-card\" (click)=\"selectFace(slideInfo[slideIndex].faces[0])\" [ngClass]=\"{'selected-wrong-card': showSelected(0) && slideIndex == currentSlide, 'disabled-card': showDisabled(0) && slideIndex == currentSlide}\">\n              <img *ngIf=\"slideIndex <= currentSlide\" [src]=\"slideInfo[slideIndex].faces[0]\" />\n            </ion-card>\n\n            <ion-card [button]=\"!showFeedback()\" class=\"grid-card\" (click)=\"selectFace(slideInfo[slideIndex].faces[1])\" [ngClass]=\"{'selected-wrong-card': showSelected(1) && slideIndex == currentSlide, 'disabled-card': showDisabled(1) && slideIndex == currentSlide}\">\n              <img *ngIf=\"slideIndex <= currentSlide\" [src]=\"slideInfo[slideIndex].faces[1]\" />\n            </ion-card>\n          </div>\n\n          <div>\n            <ion-card [button]=\"!showFeedback()\" class=\"grid-card\" (click)=\"selectFace(slideInfo[slideIndex].faces[2])\" [ngClass]=\"{'selected-wrong-card': showSelected(2) && slideIndex == currentSlide, 'disabled-card': showDisabled(2) && slideIndex == currentSlide}\">\n              <img *ngIf=\"slideIndex <= currentSlide\" [src]=\"slideInfo[slideIndex].faces[2]\" />\n            </ion-card>\n\n            <ion-card [button]=\"!showFeedback()\" class=\"grid-card\" (click)=\"selectFace(slideInfo[slideIndex].faces[3])\" [ngClass]=\"{'selected-wrong-card': showSelected(3) && slideIndex == currentSlide, 'disabled-card': showDisabled(3) && slideIndex == currentSlide}\">\n              <img *ngIf=\"slideIndex <= currentSlide\" [src]=\"slideInfo[slideIndex].faces[3]\" />\n            </ion-card>\n          </div>\n\n        </div>\n\n        <ion-item class=\"footer\" lines=\"none\">\n          <ion-label>Swipe to Continue</ion-label>\n          <ion-icon slot=\"end\" color=\"medium\" name=\"arrow-back\"></ion-icon>    \n        </ion-item>\n\n      </div>\n\n    </ion-slide>\n\n   <!--Score page-->\n    <ion-slide>\n      <app-score-page [score]=\"score\" [length]=\"taskLength\" [assessment]=\"false\" (finished)=\"finish($event)\"></app-score-page>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/forced-choice/forced-choice.component.scss":
/*!************************************************************!*\
  !*** ./src/app/forced-choice/forced-choice.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmNlZC1jaG9pY2UvZm9yY2VkLWNob2ljZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/forced-choice/forced-choice.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/forced-choice/forced-choice.component.ts ***!
  \**********************************************************/
/*! exports provided: ForcedChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForcedChoiceComponent", function() { return ForcedChoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/core */ "./node_modules/@ionic/core/dist/esm/index.mjs");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var Stage;
(function (Stage) {
    Stage[Stage["START"] = 0] = "START";
    Stage[Stage["MEMORIZE"] = 1] = "MEMORIZE";
    Stage[Stage["MASK"] = 2] = "MASK";
    Stage[Stage["SELECT"] = 3] = "SELECT";
    Stage[Stage["CORRECT"] = 4] = "CORRECT";
    Stage[Stage["INCORRECT"] = 5] = "INCORRECT";
})(Stage || (Stage = {}));
let ForcedChoiceComponent = class ForcedChoiceComponent {
    constructor() {
        this.finished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.Stage = Stage;
        this.numberOfOptions = 4;
        this.mask = 'assets/background_imgs/mask1.png';
        this.memorizeTime = 3;
    }
    ngOnInit() {
        this.currentSlide = 0;
        this.progressPercent = 0;
        this.score = 0;
        this.fadeIn = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])();
        this.changeScore = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])();
        this.taskLength = this.facePaths.length;
        this.slideInfo = [];
        for (let i = 0; i < this.taskLength; i++) {
            this.slideInfo.push({
                correctFace: this.facePaths[i],
                selectedFace: null,
                faces: this.getSlideFaces(i),
                stage: Stage.START
            });
        }
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500).subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let fadeInOverlay = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                .addElement(document.querySelectorAll('.overlay'))
                .fill('none')
                .duration(500)
                .fromTo('opacity', '0', '.9');
            yield fadeInOverlay.play();
            if (this.slideInfo[this.currentSlide].stage == Stage.START) {
                Array.from(document.getElementsByClassName('overlay'))[0].style.opacity = '.9';
            }
        }));
    }
    ngAfterViewInit() {
        this.slideElement.lockSwipes(true);
    }
    ngOnDestroy() {
        if (this.interval) {
            this.interval.unsubscribe();
        }
        if (this.timer) {
            this.timer.unsubscribe();
        }
    }
    selectFace(face) {
        if (this.slideInfo[this.currentSlide].stage == Stage.SELECT) {
            this.slideInfo[this.currentSlide].selectedFace = face;
            if (face == this.slideInfo[this.currentSlide].correctFace) {
                this.score++;
                this.slideInfo[this.currentSlide].stage = Stage.CORRECT;
                this.changeScore = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                    .addElement(document.querySelectorAll('.score-change'))
                    .fill('none')
                    .duration(2000)
                    .keyframes([
                    { offset: 0, transform: 'translateY(0%)' },
                    { offset: 0.05, transform: 'translateY(100%)' },
                    { offset: 0.1, transform: 'translateY(200%)' },
                    { offset: 0.3, transform: 'translateY(200%)' },
                    { offset: 0.5, transform: 'translateY(200%)' },
                    { offset: 0.7, transform: 'translateY(200%)' },
                    { offset: 0.9, transform: 'translateY(200%)' },
                    { offset: 0.95, transform: 'translateY(100%)' },
                    { offset: 1, transform: 'translateY(0%)' }
                ]);
                this.changeScore.play();
            }
            else {
                this.slideInfo[this.currentSlide].stage = Stage.INCORRECT;
            }
            this.progressPercent = (this.currentSlide + 1) / this.taskLength;
            this.slideElement.lockSwipes(false);
            this.slideElement.lockSwipeToPrev(true);
            let slide = this.currentSlide;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.fadeIn = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                    .addElement(document.querySelectorAll('.footer'))
                    .fill('none')
                    .duration(500)
                    .fromTo('opacity', '0', '0.75');
                if (slide == this.currentSlide) {
                    yield this.fadeIn.play();
                    Array.from(document.getElementsByClassName('footer'))[this.currentSlide].style.opacity = '.75';
                }
            }));
        }
    }
    getSlideFaces(index) {
        let faces = [];
        for (let i = 0; i < this.numberOfOptions - 1; i++) { // Select five faces
            let j = Math.floor(Math.random() * this.taskLength);
            while (faces.indexOf(this.facePaths[j]) > -1 || this.facePaths[j] == this.facePaths[index]) { // Account for repeats
                j = Math.floor(Math.random() * this.taskLength);
            }
            faces.push(this.facePaths[j]);
        }
        let j = Math.floor(Math.random() * this.numberOfOptions);
        faces.splice(j, 0, this.facePaths[index]); // Add in current face
        return faces;
    }
    startMemorizeTimer() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.currentSlide == 0) {
                let fadeOutOverlay = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                    .addElement(document.querySelectorAll('.overlay'))
                    .fill('none')
                    .duration(200)
                    .fromTo('opacity', '.9', '0');
                yield fadeOutOverlay.play();
            }
            this.timeRemaining = this.memorizeTime;
            this.slideInfo[this.currentSlide].stage = Stage.MEMORIZE;
            this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(this.timeRemaining * 1000).subscribe(() => {
                this.startMaskTimer();
            });
            this.interval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(this.timeRemaining * 1000)))
                .subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let first = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                    .addElement(document.querySelector('.time-left'))
                    .fill('none')
                    .duration(100)
                    .keyframes([
                    { offset: 0, transform: 'translateY(0%)', opacity: '1' },
                    { offset: 1, transform: 'translateY(100%)', opacity: '0' }
                ]);
                yield first.play();
                this.timeRemaining--;
                let second = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                    .addElement(document.querySelector('.time-left'))
                    .fill('none')
                    .duration(100)
                    .keyframes([
                    { offset: 0, transform: 'translateY(-100%)', opacity: '0' },
                    { offset: 1, transform: 'translateY(0%)', opacity: '1' }
                ]);
                yield second.play();
            }));
        });
    }
    startMaskTimer() {
        this.slideInfo[this.currentSlide].stage = Stage.MASK;
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(2000).subscribe(() => {
            this.slideInfo[this.currentSlide].stage = Stage.SELECT;
        });
    }
    firstStage(index) {
        return this.slideInfo[index].stage == Stage.START || this.slideInfo[index].stage == Stage.MEMORIZE || this.slideInfo[index].stage == Stage.MASK;
    }
    getSrc(index) {
        if (this.slideInfo[index].stage == Stage.MEMORIZE) {
            return this.slideInfo[index].correctFace;
        }
        else if (this.slideInfo[index].stage == Stage.MASK) {
            return this.mask;
        }
        else {
            return null;
        }
    }
    showFeedback() {
        return !this.scoreCardDisplayed() && (this.slideInfo[this.currentSlide].stage == Stage.CORRECT || this.slideInfo[this.currentSlide].stage == Stage.INCORRECT);
    }
    scoreCardDisplayed() {
        return this.currentSlide >= this.taskLength;
    }
    changeSlide() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if ((yield this.slideElement.getActiveIndex()) > this.currentSlide) {
                this.currentSlide = yield this.slideElement.getActiveIndex();
                yield this.slideElement.lockSwipes(true);
                yield this.changeScore.stop();
                yield this.fadeIn.stop();
                let footers = Array.from(document.getElementsByClassName('footer'));
                for (let i = 0; i < footers.length; i++) {
                    footers[i].style.opacity = '0';
                }
                if (!this.scoreCardDisplayed()) {
                    this.startMemorizeTimer();
                }
            }
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ForcedChoiceComponent.prototype, "facePaths", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ForcedChoiceComponent.prototype, "finished", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideElement', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])
], ForcedChoiceComponent.prototype, "slideElement", void 0);
ForcedChoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forced-choice',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forced-choice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forced-choice/forced-choice.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forced-choice.component.scss */ "./src/app/forced-choice/forced-choice.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ForcedChoiceComponent);



/***/ }),

/***/ "./src/app/help-modal/help-modal.component.scss":
/*!******************************************************!*\
  !*** ./src/app/help-modal/help-modal.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: rgb(206,183,124);\n}\n\ndiv {\n  color: white;\n  text-align: center;\n}\n\nimg {\n  height: 55vh;\n  width: auto;\n  margin: 0 auto;\n  border-radius: 5%;\n}\n\n.hidden {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BzeWNoLWNhcHN0b25lL3BzeWNoLWNhcHN0b25lL2Zyb250LWVuZC9zcmMvYXBwL2hlbHAtbW9kYWwvaGVscC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVscC1tb2RhbC9oZWxwLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9oZWxwLW1vZGFsL2hlbHAtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjA2LDE4MywxMjQpO1xufVxuXG5kaXYge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gICAgaGVpZ2h0OiA1NXZoO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xufVxuXG4uaGlkZGVuIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59IiwiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYigyMDYsMTgzLDEyNCk7XG59XG5cbmRpdiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDU1dmg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNSU7XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/help-modal/help-modal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/help-modal/help-modal.component.ts ***!
  \****************************************************/
/*! exports provided: HelpModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpModalComponent", function() { return HelpModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



const slideValues = {
    'Start': [
        ['assets/help-slides/start/0.png', 'Welcome to your CRD training. Please take a minute to review these slides and familiarize yourself with the training process.'],
        ['assets/help-slides/start/1.png', 'There are 8 levels to complete. You should complete one level per day, in about 10-15 minutes.'],
        ['assets/help-slides/start/2.png', 'In the learning task you will learn the day\'s names and faces, then you will use those faces to complete the challenges in the four training tasks.'],
        ['assets/help-slides/start/3.png', 'After passing the training tasks, you will complete two assessment tasks. Your level will increase after you finish.'],
        ['assets/help-slides/start/4.png', 'Before Level 1 and after Level 8 you will complete an additional assessment to estimate your overall progress.'],
        ['assets/help-slides/start/5.png', 'If you have questions about how to complete a task or what to do next, you can click the help icon in the upper-right corner.'],
        ['assets/help-slides/start/6.png', 'Your data will be used to further research of CRD and facial recognition. For more information about the research visit the About Us page.'],
        ['assets/help-slides/start/7.png', 'Should you need to review this information again, simply click the help icon in the upper right-hand corner of any help page.']
    ],
    'Overview': [
        ['assets/help-slides/start/0.png', 'These slides will provide an overview of the training process.'],
        ['assets/help-slides/start/1.png', 'There are 8 levels to complete. You should complete one level per day, in about 10-15 minutes.'],
        ['assets/help-slides/start/2.png', 'In the learning task you will learn the day\'s names and faces, then you will use those faces to complete the challenges in the four training tasks.'],
        ['assets/help-slides/start/3.png', 'After passing the training tasks, you will complete two assessment tasks. Your level will increase after you finish.'],
        ['assets/help-slides/start/4.png', 'Before Level 1 and after Level 8 you will complete an additional assessment to estimate your overall progress.'],
        ['assets/help-slides/start/5.png', 'If you have questions about how to complete a task or what to do next, you can click the help icon in the upper-right corner.'],
        ['assets/help-slides/start/6.png', 'Your data will be used to further research of CRD and facial recognition. For more information about the research visit the About Us page.']
    ],
    'Meet Today\'s Faces': [
        ['assets/help-slides/learning/0.png', 'Memorize the eight name-face pairs you are shown; they will be the basis of your daily training.'],
        ['assets/help-slides/learning/1.png', 'You can come back to this module at any time after finishing.']
    ],
    'Name and Face': [
        ['assets/help-slides/name-face/0.png', 'For each of the names you\'ve seen before, you\'ll be asked to match the appropriate face.'],
        ['assets/help-slides/name-face/1.png', 'You\'ll get a point for each face you match correctly.'],
        ['assets/help-slides/name-face/2.png', 'Whenever you guess incorrectly, you\'ll be shown the correct answer as well as the two names.']
    ],
    'Who\'s New?': [
        ['assets/help-slides/whos-new/0.png', 'Select the face that you haven\'t yet seen today, and that wasn\'t part of the learning task.'],
        ['assets/help-slides/whos-new/1.png', 'You\'ll get a point for each face you guess correctly.'],
        ['assets/help-slides/whos-new/2.png', 'Whenever you guess incorrectly, you\'ll be shown the correct answer.']
    ],
    'Memory Match': [
        ['assets/help-slides/memory-match/0.png', 'Click anywhere to show the faces and begin the timer.'],
        ['assets/help-slides/memory-match/1.png', 'You will have 10 seconds to memorize the placement of as many face pairs as you can.'],
        ['assets/help-slides/memory-match/2.png', 'After the timer is up, click the cards to match the pairs. When you correctly match a pair, they will be revealed.'],
        ['assets/help-slides/memory-match/3.png', 'Correct matches award 4 points, while incorrect matches deduct 1 point.']
    ],
    'Shuffle': [
        ['assets/help-slides/shuffle/0.png', 'Click anywhere to show the faces and begin the timer.'],
        ['assets/help-slides/shuffle/1.png', 'You will have 10 seconds to memorize the placement of the faces.'],
        ['assets/help-slides/shuffle/2.png', 'After the timer is up, click cards to swap their positions. Click \'Done\' when you think the positions are correct.'],
        ['assets/help-slides/shuffle/3.png', 'For an incorrect solution, incorrect cards will be colored red. You will be awarded a point for each correct card.'],
        ['assets/help-slides/shuffle/4.png', 'You can toggle between your solution and the correct solution with the toggle at the bottom.']
    ],
    'Forced Choice': [
        ['assets/help-slides/forced-choice/0.png', 'Click anywhere to show the face and begin the timer.'],
        ['assets/help-slides/forced-choice/1.png', 'You will have 3 seconds to memorize the face.'],
        ['assets/help-slides/forced-choice/2.png', 'After the timer is up select the face that you saw.'],
        ['assets/help-slides/forced-choice/3.png', 'You will receive a point for each correct answer.']
    ],
    'Same-Different': [
        ['assets/help-slides/same-different/0.png', 'Click anywhere to show the face and begin the timer.'],
        ['assets/help-slides/same-different/1.png', 'You will have 3 seconds to memorize the face.'],
        ['assets/help-slides/same-different/2.png', 'After the timer is up, decide whether the face is the same.'],
        ['assets/help-slides/same-different/3.png', 'You will receive a point for each correct answer.']
    ],
    'Training Tasks': [
        ['assets/help-slides/training/0.png', 'Welcome to the training tasks. You can check today\'s face-name pairs however often you need with the bottom left-hand button.'],
        ['assets/help-slides/training/1.png', 'When you complete a task, you can see your highest score. You must get at least 75% to pass each task, and can do them any number of times.'],
        ['assets/help-slides/training/2.png', 'After passing every task, you can progress to the daily assessment tasks with the bottom right-hand button. You will not be able to come back today after moving on.']
    ],
    'Assessment Tasks': [
        ['assets/help-slides/assessment/0.png', 'The daily assessment tasks track your learning progress. You cannot redo or restart them.']
    ],
    'Finish': [
        ['assets/help-slides/finish/0.png', 'You are done for the day, come back tomorrow for your next training. You can see your training history on the history page.']
    ],
    'Pre-Assessment': [
        ['assets/help-slides/pre-post/0.png', 'Welcome to your pre-assessment. This is a one-time test; it will provide a baseline for your current CRD.'],
        ['assets/help-slides/same-different/0.png', 'Click anywhere to show the face and begin the timer.'],
        ['assets/help-slides/same-different/1.png', 'You will have 3 seconds to memorize the face.'],
        ['assets/help-slides/same-different/2.png', 'After the timer is up, decide whether the face is the same.'],
        ['assets/help-slides/pre-post/1.png', 'This test consists of 30 questions, so set aside a few minutes to complete it.'],
        ['assets/help-slides/finish/0.png', 'When you have finished you can officially begin your training in Level 1.']
    ],
    'Post-Assessment': [
        ['assets/help-slides/pre-post/0.png', 'Welcome to your post-assessment. This is your final test; after this, your participation in this research will be complete.'],
        ['assets/help-slides/pre-post/1.png', 'This test consists of 30 questions, so set aside a few minutes to complete it.']
    ]
};
let HelpModalComponent = class HelpModalComponent {
    constructor(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
    }
    ngOnInit() {
        this.task = this.navParams.data.paramTask;
        this.displayFirst = this.navParams.data.displayFirst;
        this.slides = slideValues[this.task];
        this.currentSlide = 0;
        this.showOverview = false;
        let images = [];
        for (let i = 0; i < this.slides.length; i++) {
            images.push(new Image());
            images[images.length - 1].src = this.slides[i][0];
        }
        this.hideQuit = false;
        // Comment out below, in order to enable quit all the time. 
        // There is a "sliding" bug preventing the user to reach the last slide and close it.
        // if (this.displayFirst && this.slides.length > 1) {
        //   this.hideQuit = true;
        // }
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    changeSlide() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.currentSlide = yield this.slideElement.getActiveIndex();
            if (this.currentSlide == this.slides.length - 1) {
                this.hideQuit = false;
            }
        });
    }
    toggleOverview() {
        this.slideElement.slideTo(0);
        if (this.showOverview) {
            this.showOverview = false;
            this.ngOnInit();
        }
        else {
            this.showOverview = true;
            this.task = 'Overview';
            this.slides = slideValues[this.task];
            let images = [];
            for (let i = 0; i < this.slides.length; i++) {
                images.push(new Image());
                images[images.length - 1].src = this.slides[i][0];
            }
        }
    }
};
HelpModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], HelpModalComponent.prototype, "firstDisplayed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideElement', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], HelpModalComponent.prototype, "slideElement", void 0);
HelpModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./help-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/help-modal/help-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./help-modal.component.scss */ "./src/app/help-modal/help-modal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], HelpModalComponent);



/***/ }),

/***/ "./src/app/learning-task/learning-task.component.scss":
/*!************************************************************!*\
  !*** ./src/app/learning-task/learning-task.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* for phone screens */\n#learningView {\n  --background: rgb(34,31,32);\n}\nion-card {\n  width: 90%;\n  height: auto;\n  text-align: center;\n  border-radius: 2%;\n  box-shadow: 6px 4px 5px rgba(0, 0, 0, 0.7);\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 5px;\n  background-color: gainsboro;\n}\nion-button {\n  width: 80%;\n  height: 100%;\n  padding: 0;\n  margin: 5px;\n}\nion-icon {\n  font-size: 100%;\n}\n.imgContainer {\n  height: 230px;\n  width: auto;\n  text-align: center !important;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n#faceImg {\n  margin: 0 auto;\n  height: 180px;\n  width: 180px;\n  display: inline-block;\n}\n.nameContainer {\n  height: 70px;\n  width: 100%;\n  margin-bottom: 10px;\n  background-image: url('nametag.png');\n  background-position: center;\n  background-size: auto 100%;\n  /*width, height*/\n  background-repeat: no-repeat;\n}\n.nameContainer #nameDisplay {\n  height: 100%;\n  position: relative;\n}\n.nameContainer #nameDisplay #nameText {\n  color: #ceb77c;\n  font-weight: bold;\n  font-size: large;\n  margin: 5px;\n  position: absolute;\n  left: 50%;\n  transform: translate(-55%, 0);\n  bottom: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BzeWNoLWNhcHN0b25lL3BzeWNoLWNhcHN0b25lL2Zyb250LWVuZC9zcmMvYXBwL2xlYXJuaW5nLXRhc2svbGVhcm5pbmctdGFzay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGVhcm5pbmctdGFzay9sZWFybmluZy10YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBQ0E7RUFDQywyQkFBQTtBQ0NEO0FERUE7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0NEO0FERUE7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ0Q7QURFQTtFQUNDLGVBQUE7QUNDRDtBREVBO0VBQ0MsYUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0Q7QURFQTtFQUNDLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQ0Q7QURFQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFBNEIsZ0JBQUE7RUFDNUIsNEJBQUE7QUNFRDtBRERDO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0FDR0Y7QURGRTtFQUNDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ0lIIiwiZmlsZSI6InNyYy9hcHAvbGVhcm5pbmctdGFzay9sZWFybmluZy10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZm9yIHBob25lIHNjcmVlbnMgKi9cbiNsZWFybmluZ1ZpZXcge1xuXHQtLWJhY2tncm91bmQ6IHJnYigzNCwzMSwzMik7XG59XG5cbmlvbi1jYXJkIHtcblx0d2lkdGg6IDkwJTtcblx0aGVpZ2h0OiBhdXRvO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDIlO1xuXHRib3gtc2hhZG93OiA2cHggNHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRtYXJnaW4tYm90dG9tOiA1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcbn1cblxuaW9uLWJ1dHRvbiB7XG5cdHdpZHRoOiA4MCU7XG5cdGhlaWdodDogMTAwJTtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiA1cHg7XG59XG5cbmlvbi1pY29uIHtcblx0Zm9udC1zaXplOiAxMDAlO1xufVxuXG4uaW1nQ29udGFpbmVyIHtcblx0aGVpZ2h0OiAyMzBweDtcblx0d2lkdGg6IGF1dG87XG5cdHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2ZhY2VJbWcge1xuXHRtYXJnaW46IDAgYXV0bztcblx0aGVpZ2h0OiAxODBweDsgLy8yMTBweDtcblx0d2lkdGg6IDE4MHB4OyAvLzE2MHB4O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5uYW1lQ29udGFpbmVyIHtcblx0aGVpZ2h0OiA3MHB4O1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2JhY2tncm91bmRfaW1ncy9uYW1ldGFnLnBuZ1wiKTtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTsgLyp3aWR0aCwgaGVpZ2h0Ki9cblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0I25hbWVEaXNwbGF5IHtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdCNuYW1lVGV4dCB7XG5cdFx0XHRjb2xvcjogcmdiKDIwNiwxODMsMTI0KTtcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0Zm9udC1zaXplOiBsYXJnZTtcblx0XHRcdG1hcmdpbjogNXB4O1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTU1JSwgMCk7XG5cdFx0XHRib3R0b206IDE1JTtcblx0XHR9XG5cdH1cbn1cbiIsIi8qIGZvciBwaG9uZSBzY3JlZW5zICovXG4jbGVhcm5pbmdWaWV3IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMzQsMzEsMzIpO1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgYm94LXNoYWRvdzogNnB4IDRweCA1cHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogNXB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLmltZ0NvbnRhaW5lciB7XG4gIGhlaWdodDogMjMwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNmYWNlSW1nIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTgwcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubmFtZUNvbnRhaW5lciB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kX2ltZ3MvbmFtZXRhZy5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gIC8qd2lkdGgsIGhlaWdodCovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4ubmFtZUNvbnRhaW5lciAjbmFtZURpc3BsYXkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5uYW1lQ29udGFpbmVyICNuYW1lRGlzcGxheSAjbmFtZVRleHQge1xuICBjb2xvcjogI2NlYjc3YztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIG1hcmdpbjogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTU1JSwgMCk7XG4gIGJvdHRvbTogMTUlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/learning-task/learning-task.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/learning-task/learning-task.component.ts ***!
  \**********************************************************/
/*! exports provided: LearningTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningTaskComponent", function() { return LearningTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LearningTaskComponent = class LearningTaskComponent {
    constructor() {
        this.finished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.progress = 0;
        this.progressPercent = 0;
        this.seenAll = false;
    }
    ngOnInit() { }
    changeCard(direction) {
        if (direction == 'next') {
            this.progress++;
        }
        else {
            this.progress--;
        }
        if (!this.seenAll) {
            this.progressPercent = this.progress / (this.facePaths.length - 1);
        }
        if (this.progress == 7) {
            this.seenAll = true;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], LearningTaskComponent.prototype, "setNames", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], LearningTaskComponent.prototype, "facePaths", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LearningTaskComponent.prototype, "finished", void 0);
LearningTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-learning-task',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./learning-task.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/learning-task/learning-task.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./learning-task.component.scss */ "./src/app/learning-task/learning-task.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LearningTaskComponent);



/***/ }),

/***/ "./src/app/memory-match/memory-match.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/memory-match/memory-match.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  text-align: center;\n  background-color: gainsboro;\n  display: inline-block;\n  margin: 0px;\n  height: 78px;\n  width: 78px;\n}\nion-card img {\n  height: 70px;\n  width: 70px;\n  margin-left: 4px;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BzeWNoLWNhcHN0b25lL3BzeWNoLWNhcHN0b25lL2Zyb250LWVuZC9zcmMvYXBwL21lbW9yeS1tYXRjaC9tZW1vcnktbWF0Y2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lbW9yeS1tYXRjaC9tZW1vcnktbWF0Y2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL21lbW9yeS1tYXRjaC9tZW1vcnktbWF0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgaGVpZ2h0OiA3OHB4O1xuICAgIHdpZHRoOiA3OHB4O1xuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9ICAgIFxufSIsImlvbi1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogNzhweDtcbiAgd2lkdGg6IDc4cHg7XG59XG5pb24tY2FyZCBpbWcge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/memory-match/memory-match.component.ts":
/*!********************************************************!*\
  !*** ./src/app/memory-match/memory-match.component.ts ***!
  \********************************************************/
/*! exports provided: MemoryMatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryMatchComponent", function() { return MemoryMatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/core */ "./node_modules/@ionic/core/dist/esm/index.mjs");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var Stage;
(function (Stage) {
    Stage[Stage["START"] = 0] = "START";
    Stage[Stage["MEMORIZE"] = 1] = "MEMORIZE";
    Stage[Stage["MASK"] = 2] = "MASK";
    Stage[Stage["SELECT"] = 3] = "SELECT";
    Stage[Stage["CORRECT"] = 4] = "CORRECT";
    Stage[Stage["INCORRECT"] = 5] = "INCORRECT";
})(Stage || (Stage = {}));
let MemoryMatchComponent = class MemoryMatchComponent {
    constructor() {
        this.finished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.Stage = Stage;
        this.mask = 'assets/background_imgs/mask1.png';
        this.memorizeTime = 15; //Changed this from 10 to 15
        this.taskLength = 32;
    }
    ngOnInit() {
        this.stage = Stage.START;
        this.score = 0;
        this.promise = 0;
        this.progressPercent = 0;
        this.selectedFace = null;
        this.correctFaces = [];
        this.incorrectFaces = [];
        this.firstSlide = true;
        this.changeScore = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])();
        // Init list of faces
        this.randomFaces = [];
        for (let i = 0; i < this.facePaths.length; i++) {
            this.randomFaces.push(this.facePaths[i]);
            this.randomFaces.push(this.facePaths[i]);
        }
        // Shuffle the faces
        for (let i = this.randomFaces.length - 1; i > 0; i -= 1) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.randomFaces[i];
            this.randomFaces[i] = this.randomFaces[j];
            this.randomFaces[j] = temp;
        }
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500).subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let fadeIn = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                .addElement(document.querySelectorAll('.overlay'))
                .fill('none')
                .duration(500)
                .fromTo('opacity', '0', '.9');
            yield fadeIn.play();
            if (this.stage == Stage.START) {
                Array.from(document.getElementsByClassName('overlay'))[0].style.opacity = '.9';
            }
        }));
    }
    ngAfterViewInit() {
        this.slideElement.lockSwipes(true);
    }
    ngOnDestroy() {
        if (this.interval) {
            this.interval.unsubscribe();
        }
        if (this.timer) {
            this.timer.unsubscribe();
        }
    }
    finish(event) {
        this.finished.emit([this.score, event]);
        if (event == 0) { // Reload and retry
            this.ngOnInit();
            this.slideElement.lockSwipes(false);
            this.slideElement.slideTo(0);
            this.slideElement.lockSwipes(true);
        }
    }
    clickFace(face) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.stage != Stage.START && this.stage != Stage.MEMORIZE && this.stage != Stage.MASK) { // Waiting for feedback
                if (this.stage == Stage.CORRECT || this.stage == Stage.INCORRECT) {
                    this.promise++;
                    this.selectedFace = null;
                    this.resetSelected();
                }
                if (this.correctFaces.indexOf(this.randomFaces[face]) < 0 && face != this.selectedFace) { // Click on a valid face
                    if (this.selectedFace == null) { // Select first face
                        this.selectedFace = face;
                    }
                    else if (this.randomFaces[face] == this.randomFaces[this.selectedFace]) { // Correct
                        this.correctFaces.push(this.randomFaces[face]);
                        this.progressPercent = this.correctFaces.length / this.facePaths.length;
                        this.score += this.taskLength / this.facePaths.length;
                        this.stage = Stage.CORRECT;
                        if (this.correctFaces.length == this.facePaths.length) { // Done
                            this.score = Math.ceil(this.score);
                            this.slideElement.lockSwipes(false);
                            this.revealFooter();
                        }
                        yield this.waitForFeedback();
                    }
                    else { // Incorrect
                        this.incorrectFaces.push(this.selectedFace);
                        this.incorrectFaces.push(face);
                        this.score = this.score >= 1 ? this.score - 1 : 0;
                        this.stage = Stage.INCORRECT;
                        yield this.waitForFeedback();
                    }
                }
            }
        });
    }
    imageIsDisplayed(index) {
        return (this.stage == Stage.MEMORIZE ||
            this.stage == Stage.MASK ||
            this.incorrectFaces.indexOf(index) > -1 ||
            this.correctFaces.indexOf(this.randomFaces[index]) > -1 ||
            this.selectedFace == index);
    }
    resetSelected() {
        this.incorrectFaces = [];
        this.stage = Stage.SELECT;
        this.changeScore.stop();
    }
    waitForFeedback() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.selectedFace = null;
            if (this.stage == Stage.INCORRECT || this.stage == Stage.CORRECT) {
                this.changeScore = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                    .addElement(document.querySelectorAll('.score-change'))
                    .fill('none')
                    .duration(2000)
                    .keyframes([
                    { offset: 0, transform: 'translateY(0%)' },
                    { offset: 0.05, transform: 'translateY(100%)' },
                    { offset: 0.1, transform: 'translateY(200%)' },
                    { offset: 0.3, transform: 'translateY(200%)' },
                    { offset: 0.5, transform: 'translateY(200%)' },
                    { offset: 0.7, transform: 'translateY(200%)' },
                    { offset: 0.9, transform: 'translateY(200%)' },
                    { offset: 0.95, transform: 'translateY(100%)' },
                    { offset: 1, transform: 'translateY(0%)' }
                ]);
                this.changeScore.play();
            }
            let promise = this.promise;
            yield new Promise(resolve => setTimeout(resolve, 2000));
            promise == this.promise ? this.resetSelected() : null;
        });
    }
    startMemorizeTimer() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.stage == Stage.START) {
                let fadeOutOverlay = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                    .addElement(document.querySelectorAll('.overlay'))
                    .fill('none')
                    .duration(200)
                    .fromTo('opacity', '.9', '0');
                yield fadeOutOverlay.play();
                this.timeRemaining = this.memorizeTime;
                this.stage = Stage.MEMORIZE;
                this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(this.timeRemaining * 1000).subscribe(() => {
                    this.startMaskTimer();
                });
                this.interval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(this.timeRemaining * 1000)))
                    .subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    let first = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                        .addElement(document.querySelector('.time-left'))
                        .fill('none')
                        .duration(100)
                        .keyframes([
                        { offset: 0, transform: 'translateY(0%)', opacity: '1' },
                        { offset: 1, transform: 'translateY(100%)', opacity: '0' }
                    ]);
                    yield first.play();
                    this.timeRemaining--;
                    let second = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                        .addElement(document.querySelector('.time-left'))
                        .fill('none')
                        .duration(100)
                        .keyframes([
                        { offset: 0, transform: 'translateY(-100%)', opacity: '0' },
                        { offset: 1, transform: 'translateY(0%)', opacity: '1' }
                    ]);
                    yield second.play();
                }));
            }
        });
    }
    startMaskTimer() {
        this.stage = Stage.MASK;
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(2000).subscribe(() => {
            this.stage = Stage.SELECT;
        });
    }
    scoreCardDisplayed() {
        return !this.firstSlide;
    }
    revealFooter() {
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500).subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let fadeIn = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                .addElement(document.querySelectorAll('.footer'))
                .fill('none')
                .duration(500)
                .fromTo('opacity', '0', '0.75');
            yield fadeIn.play();
            Array.from(document.getElementsByClassName('footer'))[0].style.opacity = '0.75';
        }));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], MemoryMatchComponent.prototype, "facePaths", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MemoryMatchComponent.prototype, "finished", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideElement', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])
], MemoryMatchComponent.prototype, "slideElement", void 0);
MemoryMatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-memory-match',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./memory-match.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/memory-match/memory-match.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./memory-match.component.scss */ "./src/app/memory-match/memory-match.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MemoryMatchComponent);



/***/ }),

/***/ "./src/app/name-face/name-face.component.scss":
/*!****************************************************!*\
  !*** ./src/app/name-face/name-face.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  text-align: center;\n  height: 110px;\n  width: 107px;\n  margin: 0px;\n}\nion-card img {\n  height: 100px;\n  width: 100px;\n  margin-left: 3px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BzeWNoLWNhcHN0b25lL3BzeWNoLWNhcHN0b25lL2Zyb250LWVuZC9zcmMvYXBwL25hbWUtZmFjZS9uYW1lLWZhY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hbWUtZmFjZS9uYW1lLWZhY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNHLGFBQUE7RUFDSCxZQUFBO0VBQ0EsV0FBQTtBQ0NEO0FEQUM7RUFDQyxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvbmFtZS1mYWNlL25hbWUtZmFjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTEwcHg7XG5cdHdpZHRoOiAxMDdweDtcblx0bWFyZ2luOiAwcHg7XG5cdGltZyB7XG5cdFx0aGVpZ2h0OiAxMDBweDtcblx0XHR3aWR0aDogMTAwcHg7XG5cdFx0bWFyZ2luLWxlZnQ6IDNweDtcblx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdH1cbn0iLCJpb24tY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgd2lkdGg6IDEwN3B4O1xuICBtYXJnaW46IDBweDtcbn1cbmlvbi1jYXJkIGltZyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/name-face/name-face.component.ts":
/*!**************************************************!*\
  !*** ./src/app/name-face/name-face.component.ts ***!
  \**************************************************/
/*! exports provided: NameFaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameFaceComponent", function() { return NameFaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/core */ "./node_modules/@ionic/core/dist/esm/index.mjs");





var Stage;
(function (Stage) {
    Stage[Stage["SELECT"] = 0] = "SELECT";
    Stage[Stage["CORRECT"] = 1] = "CORRECT";
    Stage[Stage["INCORRECT"] = 2] = "INCORRECT";
})(Stage || (Stage = {}));
let NameFaceComponent = class NameFaceComponent {
    constructor() {
        this.finished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.Stage = Stage;
        this.numberOfOptions = 6;
    }
    ngOnInit() {
        this.score = 0;
        this.currentSlide = 0;
        this.progressPercent = 0;
        this.fadeIn = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])();
        this.changeScore = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])();
        this.taskLength = this.facePaths.length;
        // Initialize shuffled name list
        this.shuffledNames = [];
        for (let name = 0; name < this.taskLength; name++) {
            this.shuffledNames.push(this.setNames[name]);
        }
        // Shuffle Names
        for (let i = this.taskLength - 1; i > 0; i -= 1) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.shuffledNames[i];
            this.shuffledNames[i] = this.shuffledNames[j];
            this.shuffledNames[j] = temp;
        }
        this.slideInfo = [];
        for (let i = 0; i < this.taskLength; i++) {
            this.slideInfo.push({
                correctName: this.shuffledNames[i],
                correctFace: this.facePaths[this.setNames.indexOf(this.shuffledNames[i])],
                selectedFace: null,
                faces: this.getSlideFaces(i),
                stage: Stage.SELECT
            });
        }
    }
    ngAfterViewInit() {
        this.slideElement.lockSwipes(true);
    }
    finish(event) {
        this.finished.emit([this.score, event]);
        if (event == 0) { // Reload and retry
            this.ngOnInit();
            this.slideElement.lockSwipes(false);
            this.slideElement.slideTo(0);
            this.slideElement.lockSwipes(true);
        }
    }
    selectFace(face) {
        if (this.slideInfo[this.currentSlide].stage == Stage.SELECT) {
            this.slideInfo[this.currentSlide].selectedFace = face;
            if (face == this.slideInfo[this.currentSlide].correctFace) {
                this.score++;
                this.slideInfo[this.currentSlide].stage = Stage.CORRECT;
                this.changeScore = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                    .addElement(document.querySelectorAll('.score-change'))
                    .fill('none')
                    .duration(2000)
                    .keyframes([
                    { offset: 0, transform: 'translateY(0%)' },
                    { offset: 0.05, transform: 'translateY(100%)' },
                    { offset: 0.1, transform: 'translateY(200%)' },
                    { offset: 0.3, transform: 'translateY(200%)' },
                    { offset: 0.5, transform: 'translateY(200%)' },
                    { offset: 0.7, transform: 'translateY(200%)' },
                    { offset: 0.9, transform: 'translateY(200%)' },
                    { offset: 0.95, transform: 'translateY(100%)' },
                    { offset: 1, transform: 'translateY(0%)' }
                ]);
                this.changeScore.play();
            }
            else {
                this.slideInfo[this.currentSlide].stage = Stage.INCORRECT;
            }
            this.progressPercent = (this.currentSlide + 1) / this.taskLength;
            this.slideElement.lockSwipes(false);
            this.slideElement.lockSwipeToPrev(true);
            let slide = this.currentSlide;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1000).subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.fadeIn = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                    .addElement(document.querySelectorAll('.footer'))
                    .fill('none')
                    .duration(500)
                    .fromTo('opacity', '0', '0.75');
                if (slide == this.currentSlide) {
                    yield this.fadeIn.play();
                    Array.from(document.getElementsByClassName('footer'))[this.currentSlide].style.opacity = '.75';
                }
            }));
        }
    }
    getSlideFaces(index) {
        let faces = [];
        for (let i = 0; i < this.numberOfOptions - 1; i++) { // Select five faces
            let j = Math.floor(Math.random() * this.taskLength);
            while (faces.indexOf(this.facePaths[j]) > -1 || this.facePaths[j] == this.facePaths[this.setNames.indexOf(this.shuffledNames[index])]) { // Account for repeats
                j = Math.floor(Math.random() * this.taskLength);
            }
            faces.push(this.facePaths[j]);
        }
        let j = Math.floor(Math.random() * this.numberOfOptions);
        faces.splice(j, 0, this.facePaths[this.setNames.indexOf(this.shuffledNames[index])]); // Add in current face
        return faces;
    }
    showDisabled(face) {
        return this.showFeedback() && this.slideInfo[this.currentSlide].correctFace != this.slideInfo[this.currentSlide].faces[face];
    }
    showSelected(face) {
        return this.showFeedback() &&
            this.slideInfo[this.currentSlide].faces[face] != this.slideInfo[this.currentSlide].correctFace &&
            this.slideInfo[this.currentSlide].faces[face] == this.slideInfo[this.currentSlide].selectedFace;
    }
    getName(face) {
        if (this.showFeedback() && (!this.showDisabled(face) || this.showSelected(face))) {
            return this.setNames[this.facePaths.indexOf(this.slideInfo[this.currentSlide].faces[face])];
        }
        else {
            return '  ';
        }
    }
    showFeedback() {
        return !this.scoreCardDisplayed() && (this.slideInfo[this.currentSlide].stage == Stage.CORRECT || this.slideInfo[this.currentSlide].stage == Stage.INCORRECT);
    }
    scoreCardDisplayed() {
        return this.currentSlide >= this.taskLength;
    }
    changeSlide() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if ((yield this.slideElement.getActiveIndex()) > this.currentSlide) {
                this.currentSlide = yield this.slideElement.getActiveIndex();
                yield this.slideElement.lockSwipes(true);
                yield this.changeScore.stop();
                yield this.fadeIn.stop();
                let footers = Array.from(document.getElementsByClassName('footer'));
                for (let i = 0; i < footers.length; i++) {
                    footers[i].style.opacity = '0';
                }
            }
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], NameFaceComponent.prototype, "setNames", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], NameFaceComponent.prototype, "facePaths", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NameFaceComponent.prototype, "finished", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideElement', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], NameFaceComponent.prototype, "slideElement", void 0);
NameFaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-name-face',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./name-face.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/name-face/name-face.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./name-face.component.scss */ "./src/app/name-face/name-face.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NameFaceComponent);



/***/ }),

/***/ "./src/app/race-select-modal/race-select-modal.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/race-select-modal/race-select-modal.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: dodgerblue;\n}\n\ndiv {\n  color: white;\n  text-align: center;\n}\n\n.hidden {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BzeWNoLWNhcHN0b25lL3BzeWNoLWNhcHN0b25lL2Zyb250LWVuZC9zcmMvYXBwL3JhY2Utc2VsZWN0LW1vZGFsL3JhY2Utc2VsZWN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yYWNlLXNlbGVjdC1tb2RhbC9yYWNlLXNlbGVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURTQTtFQUNJLGtCQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9yYWNlLXNlbGVjdC1tb2RhbC9yYWNlLXNlbGVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XG59XG5cbmRpdiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLy8gaW1nIHtcbi8vICAgICBoZWlnaHQ6IDU1dmg7XG4vLyAgICAgd2lkdGg6IGF1dG87XG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNSU7XG4vLyB9XG5cbi5oaWRkZW4ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iLCJpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcbn1cblxuZGl2IHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/race-select-modal/race-select-modal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/race-select-modal/race-select-modal.component.ts ***!
  \******************************************************************/
/*! exports provided: RaceSelectModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceSelectModalComponent", function() { return RaceSelectModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



const raceValues = ['Asian', 'Black', 'Latino', 'White'];
const numRaceSets = 4;
let RaceSelectModalComponent = class RaceSelectModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
        this.cards = raceValues;
        this.hideStart = true;
    }
    // async closeModal(currentRace : string) {
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // const onClosedData: string = "Closed";
            // await this.modalController.dismiss(onClosedData);
            yield this.modalController.dismiss(this.currentRace);
        });
    }
    selectedRace(value) {
        this.hideStart = false;
        this.currentRace = value;
    }
};
RaceSelectModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], RaceSelectModalComponent.prototype, "firstDisplayed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideElement', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], RaceSelectModalComponent.prototype, "slideElement", void 0);
RaceSelectModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-race-select-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./race-select-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/race-select-modal/race-select-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./race-select-modal.component.scss */ "./src/app/race-select-modal/race-select-modal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], RaceSelectModalComponent);



/***/ }),

/***/ "./src/app/same-different/same-different.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/same-different/same-different.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".swipe-card {\n  background-color: gainsboro;\n  height: 310px;\n  width: 270px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.swipe-footer {\n  opacity: 0;\n  background: transparent;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BzeWNoLWNhcHN0b25lL3BzeWNoLWNhcHN0b25lL2Zyb250LWVuZC9zcmMvYXBwL3NhbWUtZGlmZmVyZW50L3NhbWUtZGlmZmVyZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zYW1lLWRpZmZlcmVudC9zYW1lLWRpZmZlcmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0MsVUFBQTtFQUNHLHVCQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2FtZS1kaWZmZXJlbnQvc2FtZS1kaWZmZXJlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpcGUtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xuICAgIGhlaWdodDogMzEwcHg7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN3aXBlLWZvb3RlciB7XG5cdG9wYWNpdHk6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG59IiwiLnN3aXBlLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG4gIGhlaWdodDogMzEwcHg7XG4gIHdpZHRoOiAyNzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zd2lwZS1mb290ZXIge1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/same-different/same-different.component.ts":
/*!************************************************************!*\
  !*** ./src/app/same-different/same-different.component.ts ***!
  \************************************************************/
/*! exports provided: SameDifferentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SameDifferentComponent", function() { return SameDifferentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/core */ "./node_modules/@ionic/core/dist/esm/index.mjs");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var Stage;
(function (Stage) {
    Stage[Stage["START"] = 0] = "START";
    Stage[Stage["MEMORIZE"] = 1] = "MEMORIZE";
    Stage[Stage["MASK"] = 2] = "MASK";
    Stage[Stage["SELECT"] = 3] = "SELECT";
    Stage[Stage["CORRECT"] = 4] = "CORRECT";
    Stage[Stage["INCORRECT"] = 5] = "INCORRECT";
})(Stage || (Stage = {}));
let SameDifferentComponent = class SameDifferentComponent {
    constructor() {
        this.finished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.Stage = Stage;
        this.mask = 'assets/background_imgs/mask1.png';
        this.memorizeTime = 3;
    }
    ngOnInit() {
        this.currentSlide = 0;
        this.progressPercent = 0;
        this.score = 0;
        this.fadeIn = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])();
        this.changeScore = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])();
        this.taskLength = this.facePaths.length;
        this.slideInfo = [];
        for (let i = 0; i < this.taskLength; i++) {
            let displayedFace = this.facePaths[i];
            if (Math.random() > .5) {
                displayedFace = this.facePaths[Math.floor(Math.random() * this.taskLength)];
            }
            this.slideInfo.push({
                correctFace: this.facePaths[i],
                displayedFace: displayedFace,
                selection: null,
                stage: Stage.START
            });
        }
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500).subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let fadeInOverlay = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                .addElement(document.querySelectorAll('.overlay'))
                .fill('none')
                .duration(500)
                .fromTo('opacity', '0', '.9');
            yield fadeInOverlay.play();
            if (this.slideInfo[this.currentSlide].stage == Stage.START) {
                Array.from(document.getElementsByClassName('overlay'))[0].style.opacity = '.9';
            }
        }));
    }
    ngAfterViewInit() {
        this.slideElement.lockSwipes(true);
    }
    ngOnDestroy() {
        if (this.interval) {
            this.interval.unsubscribe();
        }
        if (this.timer) {
            this.timer.unsubscribe();
        }
    }
    selectFace(sameFace) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.slideInfo[this.currentSlide].stage == Stage.SELECT) {
                if (sameFace) {
                    let swipeRight = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                        .addElement(document.querySelector('.swipe-card'))
                        .fill('none')
                        .duration(200)
                        .keyframes([
                        { offset: 0, transform: 'translateX(0%)' },
                        { offset: 1, transform: 'translateX(-100%)' }
                    ]);
                    yield swipeRight.play();
                }
                else {
                    let swipeLeft = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                        .addElement(document.querySelector('.swipe-card'))
                        .fill('none')
                        .duration(200)
                        .keyframes([
                        { offset: 0, transform: 'translateX(0%)' },
                        { offset: 1, transform: 'translateX(100%)' }
                    ]);
                    yield swipeLeft.play();
                }
                this.slideInfo[this.currentSlide].selection = sameFace;
                if (sameFace == (this.slideInfo[this.currentSlide].displayedFace == this.slideInfo[this.currentSlide].correctFace)) {
                    this.score++;
                    this.slideInfo[this.currentSlide].stage = Stage.CORRECT;
                    this.changeScore = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                        .addElement(document.querySelectorAll('.score-change'))
                        .fill('none')
                        .duration(2000)
                        .keyframes([
                        { offset: 0, transform: 'translateY(0%)' },
                        { offset: 0.05, transform: 'translateY(100%)' },
                        { offset: 0.1, transform: 'translateY(200%)' },
                        { offset: 0.3, transform: 'translateY(200%)' },
                        { offset: 0.5, transform: 'translateY(200%)' },
                        { offset: 0.7, transform: 'translateY(200%)' },
                        { offset: 0.9, transform: 'translateY(200%)' },
                        { offset: 0.95, transform: 'translateY(100%)' },
                        { offset: 1, transform: 'translateY(0%)' }
                    ]);
                    this.changeScore.play();
                }
                else {
                    this.slideInfo[this.currentSlide].stage = Stage.INCORRECT;
                }
                this.progressPercent = (this.currentSlide + 1) / this.taskLength;
                this.slideElement.lockSwipes(false);
                this.slideElement.lockSwipeToPrev(true);
                let slide = this.currentSlide;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.fadeIn = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                        .addElement(document.querySelectorAll('.footer'))
                        .fill('none')
                        .duration(500)
                        .fromTo('opacity', '0', '0.75');
                    if (slide == this.currentSlide) {
                        yield this.fadeIn.play();
                        Array.from(document.getElementsByClassName('footer'))[this.currentSlide].style.opacity = '.75';
                    }
                }));
            }
        });
    }
    startMemorizeTimer() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.currentSlide == 0) {
                let fadeOutOverlay = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                    .addElement(document.querySelectorAll('.overlay'))
                    .fill('none')
                    .duration(200)
                    .fromTo('opacity', '.9', '0');
                yield fadeOutOverlay.play();
            }
            this.timeRemaining = this.memorizeTime;
            this.slideInfo[this.currentSlide].stage = Stage.MEMORIZE;
            this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(this.timeRemaining * 1000).subscribe(() => {
                this.startMaskTimer();
            });
            this.interval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(this.timeRemaining * 1000)))
                .subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let first = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                    .addElement(document.querySelector('.time-left'))
                    .fill('none')
                    .duration(100)
                    .keyframes([
                    { offset: 0, transform: 'translateY(0%)', opacity: '1' },
                    { offset: 1, transform: 'translateY(100%)', opacity: '0' }
                ]);
                yield first.play();
                this.timeRemaining--;
                let second = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                    .addElement(document.querySelector('.time-left'))
                    .fill('none')
                    .duration(100)
                    .keyframes([
                    { offset: 0, transform: 'translateY(-100%)', opacity: '0' },
                    { offset: 1, transform: 'translateY(0%)', opacity: '1' }
                ]);
                yield second.play();
            }));
        });
    }
    startMaskTimer() {
        this.slideInfo[this.currentSlide].stage = Stage.MASK;
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(2000).subscribe(() => {
            this.slideInfo[this.currentSlide].stage = Stage.SELECT;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500).subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let fadeInSwipe = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                    .addElement(document.querySelector('.swipe-footer'))
                    .fill('none')
                    .duration(500)
                    .fromTo('opacity', '0', '1');
                yield fadeInSwipe.play();
                if (this.slideInfo[this.currentSlide].stage == Stage.SELECT) {
                    Array.from(document.getElementsByClassName('swipe-footer'))[0].style.opacity = '1';
                }
            }));
        });
    }
    getSrc(index) {
        if (this.slideInfo[index].stage == Stage.MEMORIZE) {
            return this.slideInfo[index].correctFace;
        }
        else if (this.slideInfo[index].stage == Stage.MASK) {
            return this.mask;
        }
        else {
            return this.slideInfo[index].displayedFace;
        }
    }
    showFeedback() {
        return !this.scoreCardDisplayed() && (this.slideInfo[this.currentSlide].stage == Stage.CORRECT || this.slideInfo[this.currentSlide].stage == Stage.INCORRECT);
    }
    scoreCardDisplayed() {
        return this.currentSlide >= this.taskLength;
    }
    changeSlide() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if ((yield this.slideElement.getActiveIndex()) > this.currentSlide) {
                this.currentSlide = yield this.slideElement.getActiveIndex();
                yield this.slideElement.lockSwipes(true);
                yield this.changeScore.stop();
                yield this.fadeIn.stop();
                let footers = Array.from(document.getElementsByClassName('footer'));
                for (let i = 0; i < footers.length; i++) {
                    footers[i].style.opacity = '0';
                }
                if (!this.scoreCardDisplayed()) {
                    this.startMemorizeTimer();
                }
            }
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], SameDifferentComponent.prototype, "facePaths", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SameDifferentComponent.prototype, "finished", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideElement', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])
], SameDifferentComponent.prototype, "slideElement", void 0);
SameDifferentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-same-different',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./same-different.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/same-different/same-different.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./same-different.component.scss */ "./src/app/same-different/same-different.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SameDifferentComponent);



/***/ }),

/***/ "./src/app/score-page/score-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/score-page/score-page.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  height: 8vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BzeWNoLWNhcHN0b25lL3BzeWNoLWNhcHN0b25lL2Zyb250LWVuZC9zcmMvYXBwL3Njb3JlLXBhZ2Uvc2NvcmUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2NvcmUtcGFnZS9zY29yZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2NvcmUtcGFnZS9zY29yZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA4dmg7XG59IiwiaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogOHZoO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/score-page/score-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/score-page/score-page.component.ts ***!
  \****************************************************/
/*! exports provided: ScorePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScorePageComponent", function() { return ScorePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScorePageComponent = class ScorePageComponent {
    constructor() {
        this.finished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.minTrainScore = 0.75; // Should be equal to minTrainScore in training
        this.replay_icon = "assets/icon/replay.svg";
        this.face_icon = "assets/icon/face.svg";
    }
    ngOnInit() { }
    failed() {
        return this.score < this.length * this.minTrainScore && !this.assessment;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ScorePageComponent.prototype, "score", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ScorePageComponent.prototype, "length", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ScorePageComponent.prototype, "assessment", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ScorePageComponent.prototype, "finished", void 0);
ScorePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-score-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./score-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/score-page/score-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./score-page.component.scss */ "./src/app/score-page/score-page.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ScorePageComponent);



/***/ }),

/***/ "./src/app/service/submit-scores.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/submit-scores.service.ts ***!
  \**************************************************/
/*! exports provided: SubmitScoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitScoresService", function() { return SubmitScoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let SubmitScoresService = class SubmitScoresService {
    constructor(http) {
        this.http = http;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendBaseUrl;
        this.scores_url = this.base_url + "tasks/";
        this.pre_url = this.base_url + "preassessment/";
        this.post_url = this.base_url + "postassessment/";
        this.shuffle = 0;
        this.memory = 0;
        this.whosnew = 0;
        this.nameface = 0;
        this.forcedchoice = 0;
        this.samedifferent = 0;
        //pre_assessment
        this.pre_score = 0;
        //post_assessment
        this.post_score = 0;
    }
    //scores array is like:
    //[nameface, whosnew, memory, shuffle, forcedchoice, samedifferent]
    /**********************************************
    TASKS
      To submit scores, inject this service into the component that needs to submit,
        then call this.submitScores.submitTaskScores(level, scores, race)
        where level is a number, scores is an array of scores in the order
        of the normal scores array, and race is a string defaulted to "Black".
    **********************************************/
    /**********************************************
    PRE and POST
      To submit scores, inject, then call either submitPreAssessment or submitPostAssessment
      Both functions take (score: number, race: string (optional, default "Black"))
    **********************************************/
    //TASKS
    setScores(level, scores, race = "black") {
        let promise = new Promise((resolve, reject) => {
            this.level = level;
            this.race = race;
            this.nameface = scores[0];
            this.whosnew = scores[1];
            this.memory = scores[2];
            this.shuffle = scores[3];
            this.forcedchoice = scores[4];
            this.samedifferent = scores[5];
            this.body = {
                "level": this.level,
                "race": this.race,
                "shuffle": this.shuffle,
                "memory": this.memory,
                "whosnew": this.whosnew,
                "nameface": this.nameface,
                "forcedchoice": this.forcedchoice,
                "samedifferent": this.samedifferent
            };
            resolve();
        });
        return promise;
    }
    putScores(level, scores, race = "black") {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                })
            };
            yield this.setScores(level, scores, race);
            console.log("Sent: ", JSON.stringify(this.body));
            this.http.post(this.scores_url, this.body, httpOptions).subscribe((response) => {
                console.log("Response: ", response);
            }, (err) => {
                console.log("Error: ", err);
            });
        });
    }
    submitTaskScores(level, scores, race = "black") {
        this.putScores(level, scores, race);
    }
    //PRE-ASSESSMENT
    setPre(score, race = "black") {
        let promise = new Promise((resolve, reject) => {
            this.pre_score = score;
            this.race = race;
            this.body = {
                "score": this.pre_score,
                "race": this.race
            };
            resolve();
        });
        return promise;
    }
    submitPreAssessment(score, race = "black") {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                })
            };
            yield this.setPre(score, race);
            console.log("Sent to pre: ", JSON.stringify(this.body));
            this.http.put(this.pre_url, this.body, httpOptions).subscribe((response) => {
                console.log("Response: ", response);
                console.log("status: ", response.status);
            }, (err) => {
                console.log("Error: ", err);
            });
        });
    }
    //POST-ASSESSMENT
    setPost(score, race = "black") {
        let promise = new Promise((resolve, reject) => {
            this.post_score = score;
            this.race = race;
            this.body = {
                "score": this.post_score,
                "race": this.race
            };
            resolve();
        });
        return promise;
    }
    submitPostAssessment(score, race = "black") {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                })
            };
            yield this.setPost(score, race);
            console.log("Sent to post: ", JSON.stringify(this.body));
            this.http.put(this.post_url, this.body, httpOptions).subscribe((response) => {
                console.log("Response: ", response);
                console.log("status: ", response.status);
            }, (err) => {
                console.log("Error: ", err);
            });
        });
    }
};
SubmitScoresService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SubmitScoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SubmitScoresService);



/***/ }),

/***/ "./src/app/shuffle/shuffle.component.scss":
/*!************************************************!*\
  !*** ./src/app/shuffle/shuffle.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrong-card {\n  background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BzeWNoLWNhcHN0b25lL3BzeWNoLWNhcHN0b25lL2Zyb250LWVuZC9zcmMvYXBwL3NodWZmbGUvc2h1ZmZsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2h1ZmZsZS9zaHVmZmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NodWZmbGUvc2h1ZmZsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cm9uZy1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufSIsIi53cm9uZy1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shuffle/shuffle.component.ts":
/*!**********************************************!*\
  !*** ./src/app/shuffle/shuffle.component.ts ***!
  \**********************************************/
/*! exports provided: ShuffleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShuffleComponent", function() { return ShuffleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/core */ "./node_modules/@ionic/core/dist/esm/index.mjs");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var Stage;
(function (Stage) {
    Stage[Stage["START"] = 0] = "START";
    Stage[Stage["MEMORIZE"] = 1] = "MEMORIZE";
    Stage[Stage["MASK"] = 2] = "MASK";
    Stage[Stage["SELECT"] = 3] = "SELECT";
    Stage[Stage["CORRECT"] = 4] = "CORRECT";
    Stage[Stage["INCORRECT"] = 5] = "INCORRECT";
})(Stage || (Stage = {}));
let ShuffleComponent = class ShuffleComponent {
    constructor() {
        this.finished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.Stage = Stage;
        this.numberOfOptions = 4;
        this.numberOfSlides = 4;
        this.mask = 'assets/background_imgs/mask1.png';
        this.memorizeTime = 10;
        this.taskLength = this.numberOfOptions * this.numberOfSlides; // 16
    }
    ngOnInit() {
        this.currentSlide = 0;
        this.progressPercent = 0;
        this.score = 0;
        this.fadeIn = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])();
        this.changeScore = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])();
        this.slideInfo = [];
        for (let i = 0; i < this.numberOfSlides; i++) {
            let correctFaces = this.getSlideFaces(i);
            this.slideInfo.push({
                correctOrder: correctFaces,
                shuffledOrder: this.shuffleFaces(correctFaces),
                stage: Stage.START,
                feedback: true,
                selectedFace: null
            });
        }
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500).subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let fadeInOverlay = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                .addElement(document.querySelectorAll('.overlay'))
                .fill('none')
                .duration(500)
                .fromTo('opacity', '0', '.9');
            yield fadeInOverlay.play();
            if (this.slideInfo[this.currentSlide].stage == Stage.START) {
                Array.from(document.getElementsByClassName('overlay'))[0].style.opacity = '.9';
            }
        }));
    }
    ngAfterViewInit() {
        this.slideElement.lockSwipes(true);
    }
    ngOnDestroy() {
        if (this.interval) {
            this.interval.unsubscribe();
        }
        if (this.timer) {
            this.timer.unsubscribe();
        }
    }
    finish(event) {
        this.finished.emit([this.score, event]);
        if (event == 0) { // Reload and retry
            this.ngOnInit();
            this.slideElement.lockSwipes(false);
            this.slideElement.slideTo(0);
            this.slideElement.lockSwipes(true);
        }
    }
    clickDone() {
        this.changeScoreValue = this.numberOfOptions;
        this.slideInfo[this.currentSlide].selectedFace = null;
        for (let i = 0; i < this.slideInfo[this.currentSlide].shuffledOrder.length; i++) {
            if (this.slideInfo[this.currentSlide].shuffledOrder[i] != this.slideInfo[this.currentSlide].correctOrder[i]) {
                this.changeScoreValue -= 1;
            }
        }
        this.score += this.changeScoreValue;
        if (this.changeScoreValue == this.numberOfOptions) {
            this.slideInfo[this.currentSlide].stage = Stage.CORRECT;
        }
        else {
            this.slideInfo[this.currentSlide].stage = Stage.INCORRECT;
        }
        this.progressPercent = (this.currentSlide + 1) / this.numberOfSlides;
        this.slideElement.lockSwipes(false);
        this.slideElement.lockSwipeToPrev(true);
        let slide = this.currentSlide;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.fadeIn = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                .addElement(document.querySelectorAll('.footer'))
                .fill('none')
                .duration(500)
                .fromTo('opacity', '0', '0.75');
            if (slide == this.currentSlide) {
                yield this.fadeIn.play();
                Array.from(document.getElementsByClassName('footer'))[this.currentSlide].style.opacity = '.75';
            }
        }));
        this.changeScore = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
            .addElement(document.querySelectorAll('.score-change'))
            .fill('none')
            .duration(2000)
            .keyframes([
            { offset: 0, transform: 'translateY(0%)' },
            { offset: 0.05, transform: 'translateY(100%)' },
            { offset: 0.1, transform: 'translateY(200%)' },
            { offset: 0.3, transform: 'translateY(200%)' },
            { offset: 0.5, transform: 'translateY(200%)' },
            { offset: 0.7, transform: 'translateY(200%)' },
            { offset: 0.9, transform: 'translateY(200%)' },
            { offset: 0.95, transform: 'translateY(100%)' },
            { offset: 1, transform: 'translateY(0%)' }
        ]);
        this.changeScore.play();
    }
    getSlideFaces(index) {
        let faces = [];
        for (let i = 0; i < this.numberOfOptions - 1; i++) { // Select five faces
            let j = Math.floor(Math.random() * this.facePaths.length);
            while (faces.indexOf(this.facePaths[j]) > -1 || this.facePaths[j] == this.facePaths[index]) { // Account for repeats
                j = Math.floor(Math.random() * this.facePaths.length);
            }
            faces.push(this.facePaths[j]);
        }
        let j = Math.floor(Math.random() * this.numberOfOptions);
        faces.splice(j, 0, this.facePaths[index]); // Add in current face
        return faces;
    }
    shuffleFaces(faces) {
        let randomFaceOrder = [];
        for (let i = 0; i < faces.length; i++) {
            randomFaceOrder.push(faces[i]);
        }
        for (let i = randomFaceOrder.length - 1; i > 0; i -= 1) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = randomFaceOrder[i];
            randomFaceOrder[i] = randomFaceOrder[j];
            randomFaceOrder[j] = temp;
        }
        return randomFaceOrder;
    }
    startMemorizeTimer() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.currentSlide == 0) {
                let fadeOutOverlay = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                    .addElement(document.querySelectorAll('.overlay'))
                    .fill('none')
                    .duration(300)
                    .fromTo('opacity', '.9', '0');
                yield fadeOutOverlay.play();
            }
            this.timeRemaining = this.memorizeTime;
            this.slideInfo[this.currentSlide].stage = Stage.MEMORIZE;
            this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(this.timeRemaining * 1000).subscribe(() => {
                this.startMaskTimer();
            });
            this.interval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(this.timeRemaining * 1000)))
                .subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let first = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                    .addElement(document.querySelector('.time-left'))
                    .fill('none')
                    .duration(100)
                    .keyframes([
                    { offset: 0, transform: 'translateY(0%)', opacity: '1' },
                    { offset: 1, transform: 'translateY(100%)', opacity: '0' }
                ]);
                yield first.play();
                this.timeRemaining--;
                let second = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                    .addElement(document.querySelector('.time-left'))
                    .fill('none')
                    .duration(100)
                    .keyframes([
                    { offset: 0, transform: 'translateY(-100%)', opacity: '0' },
                    { offset: 1, transform: 'translateY(0%)', opacity: '1' }
                ]);
                yield second.play();
            }));
        });
    }
    startMaskTimer() {
        this.slideInfo[this.currentSlide].stage = Stage.MASK;
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(2000).subscribe(() => {
            this.slideInfo[this.currentSlide].stage = Stage.SELECT;
        });
    }
    getSrc(index) {
        if (this.slideInfo[this.currentSlide].stage == Stage.MASK) {
            return this.mask;
        }
        else if (this.slideInfo[this.currentSlide].stage == Stage.SELECT || (this.slideInfo[this.currentSlide].stage == Stage.INCORRECT && this.slideInfo[this.currentSlide].feedback)) {
            return this.slideInfo[this.currentSlide].shuffledOrder[index];
        }
        else {
            return this.slideInfo[this.currentSlide].correctOrder[index];
        }
    }
    clickCard(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.slideInfo[this.currentSlide].stage == Stage.SELECT) {
                if (this.slideInfo[this.currentSlide].selectedFace == null) {
                    this.slideInfo[this.currentSlide].selectedFace = this.slideInfo[this.currentSlide].shuffledOrder[index];
                }
                else {
                    let index_selected = this.slideInfo[this.currentSlide].shuffledOrder.indexOf(this.slideInfo[this.currentSlide].selectedFace);
                    [this.slideInfo[this.currentSlide].shuffledOrder[index], this.slideInfo[this.currentSlide].shuffledOrder[index_selected]] = [this.slideInfo[this.currentSlide].shuffledOrder[index_selected], this.slideInfo[this.currentSlide].shuffledOrder[index]];
                    this.slideInfo[this.currentSlide].selectedFace = null;
                }
            }
            else if (this.showFeedback()) {
                yield this.animateCardChange();
                this.slideInfo[this.currentSlide].feedback = !this.slideInfo[this.currentSlide].feedback;
            }
        });
    }
    animateCardChange() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let animations = [];
            for (let i = 0; i < this.slideInfo[this.currentSlide].correctOrder.length; i++) {
                let shuffledIndex = this.slideInfo[this.currentSlide].shuffledOrder.indexOf(this.slideInfo[this.currentSlide].correctOrder[i]);
                let ampX = '0px';
                let ampY = '0px';
                if (i != shuffledIndex) {
                    if (Math.abs(i - shuffledIndex) == 1 || Math.abs(i - shuffledIndex) == 3) { // Left-Right
                        ampX = '-125px';
                        if ((i < shuffledIndex && !this.slideInfo[this.currentSlide].feedback) || (i > shuffledIndex && this.slideInfo[this.currentSlide].feedback)) { // Right
                            ampX = '125px';
                        }
                        if (((i == 1 && shuffledIndex == 2) || (i == 2 && shuffledIndex == 1))) { // Reversed for 1-2 and 2-1
                            ampX = ampX == '125px' ? '-125px' : '125px';
                        }
                    }
                    if (Math.abs(i - shuffledIndex) == 3 || Math.abs(i - shuffledIndex) == 2 || (Math.abs(i - shuffledIndex) == 1 && ((i == 1 && shuffledIndex == 2) || (i == 2 && shuffledIndex == 1)))) { // Up-Down
                        ampY = '-150px';
                        if ((i < shuffledIndex && !this.slideInfo[this.currentSlide].feedback) || (i > shuffledIndex && this.slideInfo[this.currentSlide].feedback)) { // Up
                            ampY = '150px';
                        }
                    }
                }
                let card = this.slideInfo[this.currentSlide].feedback ? shuffledIndex : i;
                let cardID = '#card-' + card;
                let animation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                    .addElement(document.querySelectorAll(cardID)[this.currentSlide])
                    .fill('none')
                    .duration(300)
                    .fromTo('transform', 'translate(0vw, 0vh)', 'translate(' + ampX + ', ' + ampY + ')');
                animations.push(animation);
            }
            for (let i = 0; i < animations.length; i++) {
                if (i == animations.length - 1) {
                    yield animations[i].play();
                }
                else {
                    animations[i].play();
                }
            }
        });
    }
    showFeedback() {
        return !this.scoreCardDisplayed() && (this.slideInfo[this.currentSlide].stage == Stage.CORRECT || this.slideInfo[this.currentSlide].stage == Stage.INCORRECT);
    }
    scoreCardDisplayed() {
        return this.currentSlide >= this.numberOfSlides;
    }
    changeSlide() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if ((yield this.slideElement.getActiveIndex()) > this.currentSlide) {
                this.currentSlide = yield this.slideElement.getActiveIndex();
                yield this.slideElement.lockSwipes(true);
                yield this.changeScore.stop();
                yield this.fadeIn.stop();
                let footers = Array.from(document.getElementsByClassName('footer'));
                for (let i = 0; i < footers.length; i++) {
                    footers[i].style.opacity = '0';
                }
                if (!this.scoreCardDisplayed()) {
                    this.startMemorizeTimer();
                }
            }
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ShuffleComponent.prototype, "facePaths", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ShuffleComponent.prototype, "finished", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideElement', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])
], ShuffleComponent.prototype, "slideElement", void 0);
ShuffleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shuffle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shuffle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shuffle/shuffle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shuffle.component.scss */ "./src/app/shuffle/shuffle.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ShuffleComponent);



/***/ }),

/***/ "./src/app/training/training.module.ts":
/*!*********************************************!*\
  !*** ./src/app/training/training.module.ts ***!
  \*********************************************/
/*! exports provided: MyHammerConfig, TrainingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingPageModule", function() { return TrainingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _training_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./training.page */ "./src/app/training/training.page.ts");
/* harmony import */ var _learning_task_learning_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../learning-task/learning-task.component */ "./src/app/learning-task/learning-task.component.ts");
/* harmony import */ var _name_face_name_face_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../name-face/name-face.component */ "./src/app/name-face/name-face.component.ts");
/* harmony import */ var _whos_new_whos_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../whos-new/whos-new.component */ "./src/app/whos-new/whos-new.component.ts");
/* harmony import */ var _memory_match_memory_match_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../memory-match/memory-match.component */ "./src/app/memory-match/memory-match.component.ts");
/* harmony import */ var _shuffle_shuffle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shuffle/shuffle.component */ "./src/app/shuffle/shuffle.component.ts");
/* harmony import */ var _forced_choice_forced_choice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../forced-choice/forced-choice.component */ "./src/app/forced-choice/forced-choice.component.ts");
/* harmony import */ var _same_different_same_different_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../same-different/same-different.component */ "./src/app/same-different/same-different.component.ts");
/* harmony import */ var _score_page_score_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../score-page/score-page.component */ "./src/app/score-page/score-page.component.ts");
/* harmony import */ var _help_modal_help_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../help-modal/help-modal.component */ "./src/app/help-modal/help-modal.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _race_select_modal_race_select_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../race-select-modal/race-select-modal.component */ "./src/app/race-select-modal/race-select-modal.component.ts");




















class MyHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            swipe: { direction: hammerjs__WEBPACK_IMPORTED_MODULE_16__["DIRECTION_ALL"] },
        };
    }
}
let TrainingPageModule = class TrainingPageModule {
};
TrainingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _training_page__WEBPACK_IMPORTED_MODULE_6__["TrainingPage"] }])
        ],
        declarations: [
            _training_page__WEBPACK_IMPORTED_MODULE_6__["TrainingPage"],
            _learning_task_learning_task_component__WEBPACK_IMPORTED_MODULE_7__["LearningTaskComponent"],
            _name_face_name_face_component__WEBPACK_IMPORTED_MODULE_8__["NameFaceComponent"],
            _whos_new_whos_new_component__WEBPACK_IMPORTED_MODULE_9__["WhosNewComponent"],
            _memory_match_memory_match_component__WEBPACK_IMPORTED_MODULE_10__["MemoryMatchComponent"],
            _shuffle_shuffle_component__WEBPACK_IMPORTED_MODULE_11__["ShuffleComponent"],
            _forced_choice_forced_choice_component__WEBPACK_IMPORTED_MODULE_12__["ForcedChoiceComponent"],
            _same_different_same_different_component__WEBPACK_IMPORTED_MODULE_13__["SameDifferentComponent"],
            _score_page_score_page_component__WEBPACK_IMPORTED_MODULE_14__["ScorePageComponent"],
            _help_modal_help_modal_component__WEBPACK_IMPORTED_MODULE_15__["HelpModalComponent"],
            _race_select_modal_race_select_modal_component__WEBPACK_IMPORTED_MODULE_19__["RaceSelectModalComponent"]
        ],
        providers: [
            {
                provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["HAMMER_GESTURE_CONFIG"],
                useClass: MyHammerConfig,
            },
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_18__["LocalNotifications"]
        ],
        entryComponents: [_help_modal_help_modal_component__WEBPACK_IMPORTED_MODULE_15__["HelpModalComponent"], _race_select_modal_race_select_modal_component__WEBPACK_IMPORTED_MODULE_19__["RaceSelectModalComponent"]]
    })
], TrainingPageModule);



/***/ }),

/***/ "./src/app/training/training.page.scss":
/*!*********************************************!*\
  !*** ./src/app/training/training.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".task-done {\n  --background: rgb(142, 207, 142) !important;\n  color: black;\n}\n\n.task-failed {\n  --background: rgb(201, 139, 139) !important;\n  color: black;\n}\n\n.blue-border {\n  border-bottom-width: medium;\n  border-bottom-style: solid;\n  border-bottom-color: #ceb77c;\n}\n\n.level {\n  display: inline-block;\n}\n\n.fade-in {\n  display: inline-block;\n  opacity: 0;\n}\n\nion-card {\n  --background: gainsboro;\n  color: #ceb77c;\n  border-radius: 6vh;\n  margin-top: 5vh;\n  margin-bottom: 5vh;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n  font-size: 2.2vh;\n  height: 11vh;\n}\n\nion-button {\n  text-transform: none !important;\n  height: 8vh;\n  font-size: 3vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BzeWNoLWNhcHN0b25lL3BzeWNoLWNhcHN0b25lL2Zyb250LWVuZC9zcmMvYXBwL3RyYWluaW5nL3RyYWluaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdHJhaW5pbmcvdHJhaW5pbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkNBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQ0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90cmFpbmluZy90cmFpbmluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzay1kb25lIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTQyLCAyMDcsIDE0MikgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udGFzay1mYWlsZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYigyMDEsIDEzOSwgMTM5KSAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5ibHVlLWJvcmRlciB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IG1lZGl1bTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYigyMDYsMTgzLDEyNCk7XG59XG5cbi5sZXZlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZhZGUtaW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG9wYWNpdHk6IDA7IFxufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogZ2FpbnNib3JvO1xuICBjb2xvcjogcmdiKDIwNiwxODMsMTI0KTtcbiAgYm9yZGVyLXJhZGl1czogNnZoO1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgcGFkZGluZy10b3A6IDF2aDtcbiAgcGFkZGluZy1ib3R0b206IDF2aDtcbiAgZm9udC1zaXplOiAyLjJ2aDtcbiAgaGVpZ2h0OiAxMXZoO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA4dmg7XG4gIGZvbnQtc2l6ZTogM3ZoO1xufSIsIi50YXNrLWRvbmUge1xuICAtLWJhY2tncm91bmQ6IHJnYigxNDIsIDIwNywgMTQyKSAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50YXNrLWZhaWxlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIwMSwgMTM5LCAxMzkpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmJsdWUtYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogbWVkaXVtO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NlYjc3Yztcbn1cblxuLmxldmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZmFkZS1pbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3BhY2l0eTogMDtcbn1cblxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IGdhaW5zYm9ybztcbiAgY29sb3I6ICNjZWI3N2M7XG4gIGJvcmRlci1yYWRpdXM6IDZ2aDtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gIHBhZGRpbmctdG9wOiAxdmg7XG4gIHBhZGRpbmctYm90dG9tOiAxdmg7XG4gIGZvbnQtc2l6ZTogMi4ydmg7XG4gIGhlaWdodDogMTF2aDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogOHZoO1xuICBmb250LXNpemU6IDN2aDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/training/training.page.ts":
/*!*******************************************!*\
  !*** ./src/app/training/training.page.ts ***!
  \*******************************************/
/*! exports provided: TrainingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingPage", function() { return TrainingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _help_modal_help_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../help-modal/help-modal.component */ "./src/app/help-modal/help-modal.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/core */ "./node_modules/@ionic/core/dist/esm/index.mjs");
/* harmony import */ var _service_get_progress_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/get-progress.service */ "./src/app/service/get-progress.service.ts");
/* harmony import */ var _service_submit_scores_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/submit-scores.service */ "./src/app/service/submit-scores.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _race_select_modal_race_select_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../race-select-modal/race-select-modal.component */ "./src/app/race-select-modal/race-select-modal.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");













var Race;
(function (Race) {
    Race[Race["BLACK"] = 0] = "BLACK";
    Race[Race["ASIAN"] = 1] = "ASIAN";
    Race[Race["LATINO"] = 2] = "LATINO";
    Race[Race["WHITE"] = 3] = "WHITE";
})(Race || (Race = {}));
var Stage;
(function (Stage) {
    Stage[Stage["START"] = 0] = "START";
    Stage[Stage["TRAINING"] = 1] = "TRAINING";
    Stage[Stage["ASSESSMENT"] = 2] = "ASSESSMENT";
    Stage[Stage["DONE"] = 3] = "DONE";
})(Stage || (Stage = {}));
var Task;
(function (Task) {
    Task[Task["NAME_FACE"] = 0] = "NAME_FACE";
    Task[Task["WHOS_NEW"] = 1] = "WHOS_NEW";
    Task[Task["MEMORY"] = 2] = "MEMORY";
    Task[Task["SHUFFLE"] = 3] = "SHUFFLE";
    Task[Task["FORCED_CHOICE"] = 4] = "FORCED_CHOICE";
    Task[Task["SAME_DIFFERENT"] = 5] = "SAME_DIFFERENT";
    Task[Task["PRETEST"] = 6] = "PRETEST";
    Task[Task["POSTTEST"] = 7] = "POSTTEST";
    Task[Task["LEARNING"] = 8] = "LEARNING";
})(Task || (Task = {}));
// let raceProperties = {
//   0: {
//     race: Race.BLACK,
//     //Change to initials.
//     namePool: {
//       1: ['J.S', 'O.N', 'R.T', 'M.A', 'W.L', 'D.D', 'R.C', 'J.I'],
//       2: ['T.S', 'C.H', 'C.S', 'D.A', 'M.W', 'A.Y', 'D.J', 'M.K'],
//       3: ['P.L', 'S.T', 'A.D', 'K.D', 'J.K', 'G.W', 'K.E', 'B.C'],
//       4: ['E.D', 'R.N', 'T.M', 'J.H', 'K.H', 'R.B', 'J.Y', 'G.C'],
//       5: ['N.C', 'E.B', 'S.V', 'J.F', 'L.T', 'J.B', 'S.B', 'B.H'],
//       6: ['F.Y', 'B.S', 'G.P', 'S.R', 'R.H', 'P.J', 'A.W', 'J.C'],
//       7: ['D.Q', 'J.N', 'T.W', 'A.G', 'J.M', 'H.K', 'D.L', 'A.P'],
//       8: ['P.P', 'N.S', 'Z.S', 'W.W', 'K.F', 'H.I', 'C.B', 'J.L']
//     }
//   },
//   1: {
//     race: Race.ASIAN,
//     //Change to initials.
//     namePool: {
//       1: ['J.S', 'O.N', 'R.T', 'M.A', 'W.L', 'D.D', 'R.C', 'J.I'],
//       2: ['T.S', 'C.H', 'C.S', 'D.A', 'M.W', 'A.Y', 'D.J', 'M.K'],
//       3: ['P.L', 'S.T', 'A.D', 'K.D', 'J.K', 'G.W', 'K.E', 'B.C'],
//       4: ['E.D', 'R.N', 'T.M', 'J.H', 'K.H', 'R.B', 'J.Y', 'G.C'],
//       5: ['N.C', 'E.B', 'S.V', 'J.F', 'L.T', 'J.B', 'S.B', 'B.H'],
//       6: ['F.Y', 'B.S', 'G.P', 'S.R', 'R.H', 'P.J', 'A.W', 'J.C'],
//       7: ['D.Q', 'J.N', 'T.W', 'A.G', 'J.M', 'H.K', 'D.L', 'A.P'],
//       8: ['P.P', 'N.S', 'Z.S', 'W.W', 'K.F', 'H.I', 'C.B', 'J.L']
//     }
//   },
//   2: {
//     race: Race.LATINO,
//     //Change to initials.
//     namePool: {
//       1: ['J.S', 'O.N', 'R.T', 'M.A', 'W.L', 'D.D', 'R.C', 'J.I'],
//       2: ['T.S', 'C.H', 'C.S', 'D.A', 'M.W', 'A.Y', 'D.J', 'M.K'],
//       3: ['P.L', 'S.T', 'A.D', 'K.D', 'J.K', 'G.W', 'K.E', 'B.C'],
//       4: ['E.D', 'R.N', 'T.M', 'J.H', 'K.H', 'R.B', 'J.Y', 'G.C'],
//       5: ['N.C', 'E.B', 'S.V', 'J.F', 'L.T', 'J.B', 'S.B', 'B.H'],
//       6: ['F.Y', 'B.S', 'G.P', 'S.R', 'R.H', 'P.J', 'A.W', 'J.C'],
//       7: ['D.Q', 'J.N', 'T.W', 'A.G', 'J.M', 'H.K', 'D.L', 'A.P'],
//       8: ['P.P', 'N.S', 'Z.S', 'W.W', 'K.F', 'H.I', 'C.B', 'J.L']
//     }
//   },
//   3: {
//     race: Race.WHITE,
//     //Change to initials.
//     namePool: {
//       1: ['J.S', 'O.N', 'R.T', 'M.A', 'W.L', 'D.D', 'R.C', 'J.I'],
//       2: ['T.S', 'C.H', 'C.S', 'D.A', 'M.W', 'A.Y', 'D.J', 'M.K'],
//       3: ['P.L', 'S.T', 'A.D', 'K.D', 'J.K', 'G.W', 'K.E', 'B.C'],
//       4: ['E.D', 'R.N', 'T.M', 'J.H', 'K.H', 'R.B', 'J.Y', 'G.C'],
//       5: ['N.C', 'E.B', 'S.V', 'J.F', 'L.T', 'J.B', 'S.B', 'B.H'],
//       6: ['F.Y', 'B.S', 'G.P', 'S.R', 'R.H', 'P.J', 'A.W', 'J.C'],
//       7: ['D.Q', 'J.N', 'T.W', 'A.G', 'J.M', 'H.K', 'D.L', 'A.P'],
//       8: ['P.P', 'N.S', 'Z.S', 'W.W', 'K.F', 'H.I', 'C.B', 'J.L']
//     }
//   }
// }
let namePool = {
    1: ['J.S', 'O.N', 'R.T', 'M.A', 'W.L', 'D.D', 'R.C', 'J.I'],
    2: ['T.S', 'C.H', 'C.S', 'D.A', 'M.W', 'A.Y', 'D.J', 'M.K'],
    3: ['P.L', 'S.T', 'A.D', 'K.D', 'J.K', 'G.W', 'K.E', 'B.C'],
    4: ['E.D', 'R.N', 'T.M', 'J.H', 'K.H', 'R.B', 'J.Y', 'G.C'],
    5: ['N.C', 'E.B', 'S.V', 'J.F', 'L.T', 'J.B', 'S.B', 'B.H'],
    6: ['F.Y', 'B.S', 'G.P', 'S.R', 'R.H', 'P.J', 'A.W', 'J.C'],
    7: ['D.Q', 'J.N', 'T.W', 'A.G', 'J.M', 'H.K', 'D.L', 'A.P'],
    8: ['P.P', 'N.S', 'Z.S', 'W.W', 'K.F', 'H.I', 'C.B', 'J.L']
};
let TrainingPage = class TrainingPage {
    constructor(alertController, modalController, routerOutlet, getProgress, submitScores, toastController, localNotifications, http) {
        this.alertController = alertController;
        this.modalController = modalController;
        this.routerOutlet = routerOutlet;
        this.getProgress = getProgress;
        this.submitScores = submitScores;
        this.toastController = toastController;
        this.localNotifications = localNotifications;
        this.http = http;
        this.Race = Race;
        this.Stage = Stage;
        this.Task = Task;
        this.stage = null;
        this.task = null;
        this.learningDone = false;
        this.scores = [-1, -1, -1, -1, -1, -1];
        this.minTrainScore = 0.75;
        this.taskLengths = [8, 8, 32, 16, 8, 8];
        this.numFaces = 8;
        this.assessmentPoolSize = 30;
        this.assessment_icon = "assets/icon/assessment.svg";
        this.replay_icon = "assets/icon/replay.svg";
        this.face_icon = "assets/icon/face.svg";
        this.routerOutlet.swipeGesture = false;
    }
    ionViewWillEnter() {
        this.stage = null;
        this.task = null;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500).subscribe(() => {
            // replace with user choice
            this.currentRace = Race.BLACK;
            this.initCurrentLevel();
        });
    }
    ionViewWillLeave() {
        Array.from(document.getElementsByClassName('fade-in'))[0].style.opacity = '0';
    }
    ngAfterViewInit() {
        if (this.userLevel == 0) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500).subscribe(() => {
                this.getHelp(true);
            });
        }
    }
    /**
     * trial starts
     * userRace : any;
     * trial ends
    */
    initCurrentLevel(race = Race.BLACK) {
        // console.log("raceName just before sumbit score:");
        // console.log(raceName);
        //this.showRaceSelect();
        /**
        * Option = User's choice
        * Option -> Database
        * let days = res['days'];
        * race = days[day]['race'];this.currentRace = race;
        */
        // this.currentRace = race;
        this.getProgress.getData().subscribe((res) => {
            // console.log(res);
            let days = res['days'];
            this.userLevel = res['level'];
            // this.currentRace = res['race'];
            /**
             * trial starts
             * this.userRace = res['race'];
             * this.userRace =
             * trial ends
            */
            let levelCompletedToday = false;
            if (this.userLevel == 0 || this.userLevel == 9) {
                this.getPrePostAssessmentFaces().then((faces) => {
                    this.assessmentFacePaths = faces;
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).subscribe(() => {
                        this.stage = Stage.START;
                    });
                });
            }
            else if (this.userLevel > 0 && this.userLevel < 9) {
                let today = new Date().toLocaleDateString();
                let lastDay = '';
                for (let day in days) {
                    if ([days[day]['nameface'], days[day]['whosnew'], days[day]['memory'], days[day]['shuffle'], days[day]['forcedchoice'], days[day]['samedifferent']].indexOf(-1) < 0) {
                        lastDay = new Date(days[day]['date']).toLocaleDateString();
                    }
                }
                if (today == lastDay) {
                    levelCompletedToday = true;
                }
                if (!levelCompletedToday) {
                    this.setNames = namePool[this.userLevel]; //raceProperties[this.currentRace].namePool[this.userLevel];
                    this.getTrainingFaces().then((faces) => {
                        this.trainingFacePaths = faces;
                        this.getWhosNewFaces().then((faces) => {
                            this.whosNewFacePaths = faces;
                            this.getDailyAssessmentFaces().then((faces) => {
                                this.assessmentFacePaths = faces;
                                if (days[this.userLevel - 1]) {
                                    this.scores = [days[this.userLevel - 1]['nameface'], days[this.userLevel - 1]['whosnew'], days[this.userLevel - 1]['memory'], days[this.userLevel - 1]['shuffle'], days[this.userLevel - 1]['forcedchoice'], days[this.userLevel - 1]['samedifferent']];
                                    this.learningDone = this.scores.indexOf(-1) > -1;
                                }
                                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).subscribe(() => {
                                    this.iterateStage();
                                });
                            });
                        });
                    });
                }
                else {
                    this.userLevel--;
                    this.finishLevel();
                }
            }
            else {
                this.stage = Stage.DONE;
            }
            let images = [];
            images.push(new Image());
            images[images.length - 1].src = 'assets/background_imgs/mask1.png';
        }, (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Something went wrong. Please try logging out and back in',
                color: 'danger',
                duration: 2000
            });
            toast.present();
        }));
    }
    iterateStage() {
        this.task = null;
        if (!this.learningDone) {
            this.stage = Stage.START;
        }
        else if (this.trainingNotDone()) {
            this.stage = Stage.TRAINING;
            if (this.scores[Task.NAME_FACE] == -1 && this.scores[Task.WHOS_NEW] == -1 && this.scores[Task.MEMORY] == -1 && this.scores[Task.SAME_DIFFERENT] == -1) {
                this.renderLevelOneHelp();
            }
        }
        else if (this.scores.includes(-1)) {
            this.stage = Stage.ASSESSMENT;
            if (this.scores[Task.FORCED_CHOICE] == -1 && this.scores[Task.SAME_DIFFERENT] == -1) {
                this.renderLevelOneHelp();
            }
        }
        else {
            this.finishLevel();
            this.scheduleNotification();
        }
    }
    getTitle() {
        switch (this.task) {
            case null:
                switch (this.stage) {
                    case Stage.START:
                        return 'Start';
                    case Stage.TRAINING:
                        return 'Training Tasks';
                    case Stage.ASSESSMENT:
                        return 'Assessment Tasks';
                    case Stage.DONE:
                        return 'Finish';
                    default:
                        return "Modules";
                }
            case Task.LEARNING:
                return 'Meet Today\'s Faces';
            case Task.NAME_FACE:
                return 'Name and Face';
            case Task.WHOS_NEW:
                return 'Who\'s New?';
            case Task.MEMORY:
                return 'Memory Match';
            case Task.SHUFFLE:
                return 'Shuffle';
            case Task.FORCED_CHOICE:
                return 'Forced Choice';
            case Task.SAME_DIFFERENT:
                return 'Same-Different';
            case Task.PRETEST:
                return 'Pre-Assessment';
            case Task.POSTTEST:
                return 'Post-Assessment';
            default:
                return "Modules";
        }
    }
    getHelp(displayFirst) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _help_modal_help_modal_component__WEBPACK_IMPORTED_MODULE_4__["HelpModalComponent"],
                componentProps: {
                    "paramTask": this.getTitle(),
                    "displayFirst": displayFirst
                }
            });
            yield modal.present();
        });
    }
    showRaceSelect() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let raceName = null;
            const modal = yield this.modalController.create({
                component: _race_select_modal_race_select_modal_component__WEBPACK_IMPORTED_MODULE_11__["RaceSelectModalComponent"],
                componentProps: {
                    race: this.currentRace
                } //componentProps: { users: this.users },
            });
            yield modal.present();
            yield modal.onWillDismiss().then(data => {
                console.log('data came back from modal');
                console.log(data);
                raceName = data['data'].toLowerCase();
                console.log("raceName is:");
                console.log(raceName);
                //this.submitScores.submitTaskScores(-1, [-1, -1, -1, -1, -1, -1], raceName); // what if user chooses to change race groups throughout the process
            });
            // console.log("Outside, and raceName now is:");
            // console.log(raceName);
            this.submitScores.submitTaskScores(-1, [-1, -1, -1, -1, -1, -1], raceName);
            return raceName;
        });
    }
    renderLevelOneHelp() {
        if (this.userLevel == 1) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500).subscribe(() => {
                this.getHelp(true);
            });
        }
    }
    getTrainingFaces() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let name = yield this.showRaceSelect();
            this.currentRace = name;
            console.log("name is:");
            console.log(name);
            // this.trainingFacePaths = name;
            console.log("passed.");
            let facePaths = [];
            let imagesAlreadyStored = true;
            for (let i = 0; i < 8; i++) {
                let image = sessionStorage.getItem(`training${i}`);
                if (!image) {
                    imagesAlreadyStored = false;
                    break;
                }
                else {
                    facePaths.push(image);
                }
            }
            // if (!imagesAlreadyStored) {
            if (true) {
                facePaths = [];
                const httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpHeaders"]({
                        'Content-Type': 'application/json; charset=utf-8',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    })
                };
                //await this.http.put(environment.backendBaseUrl + "getTrainingFaces/", {level: this.userLevel, race: this.currentRace}, httpOptions).subscribe((res) => {
                yield this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].backendBaseUrl + "getTrainingFaces/", { level: this.userLevel, race: name }, httpOptions).subscribe((res) => {
                    for (let i = 0; i < 8; i++) {
                        //clear stack
                        facePaths.push(`data:image/png;base64,${res['images'][i]}`);
                        sessionStorage.setItem(`training${i}`, `data:image/png;base64,${res['images'][i]}`);
                    }
                    console.log("photos updated.");
                });
            }
            return facePaths;
        });
    }
    getWhosNewFaces() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let facePaths = [];
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpHeaders"]({
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                })
            };
            yield this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].backendBaseUrl + "getWhosNewFaces/", { level: this.userLevel, race: this.currentRace }, httpOptions).subscribe((res) => {
                for (let i = 0; i < 8; i++) {
                    facePaths.push(`data:image/png;base64,${res['images'][i]}`);
                }
            });
            return facePaths;
        });
    }
    getDailyAssessmentFaces() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let facePaths = [];
            let imagesAlreadyStored = true;
            for (let i = 0; i < 8; i++) {
                let image = sessionStorage.getItem(`dailyAssessment${i}`);
                if (!image) {
                    imagesAlreadyStored = false;
                    break;
                }
                else {
                    facePaths.push(image);
                }
            }
            if (!imagesAlreadyStored) {
                facePaths = [];
                const httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpHeaders"]({
                        'Content-Type': 'application/json; charset=utf-8',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    })
                };
                yield this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].backendBaseUrl + "getDailyAssessmentFaces/", { race: this.currentRace }, httpOptions).subscribe((res) => {
                    for (let i = 0; i < 8; i++) {
                        facePaths.push(`data:image/jpg;base64,${res['images'][i]}`);
                        sessionStorage.setItem(`dailyAssessment${i}`, `data:image/jpg;base64,${res['images'][i]}`);
                    }
                });
            }
            return facePaths;
        });
    }
    getPrePostAssessmentFaces() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let facePaths = [];
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpHeaders"]({
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                })
            };
            yield this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].backendBaseUrl + "getPrePostAssessmentFaces/", { race: this.currentRace }, httpOptions).subscribe((res) => {
                for (let i = 0; i < 30; i++) {
                    facePaths.push(`data:image/jpg;base64,${res['images'][i]}`);
                }
            });
            return facePaths;
        });
    }
    finished(score, task) {
        console.log("this is finished.");
        this.scores[task] = Math.max(score[0], this.scores[task]);
        if (score[1] != 0) { // Not retrying
            if (score[1] == 1) { // Learning
                this.task = Task.LEARNING;
            }
            else { // Done
                this.task = null;
            }
            if (task == 4 || task == 5) { // Assessments automatically move on
                this.iterateStage();
            }
        }
        this.submitScores.submitTaskScores(this.userLevel, this.scores, "black");
    }
    // finished_setRaceName() {
    //   this.showRaceSelect();
    // }
    finishPrePost(score) {
        if (this.userLevel == 0) {
            this.submitScores.submitPreAssessment(score[0], "black");
        }
        else if (this.userLevel == 9) {
            this.submitScores.submitPostAssessment(score[0], "black");
        }
        this.finishLevel();
    }
    taskExitAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Quit',
                message: 'Do you want to quit? Your progress on this task will be lost.',
                buttons: [
                    {
                        text: 'Cancel'
                    },
                    {
                        text: 'Quit',
                        handler: () => {
                            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500).subscribe(() => {
                                this.task = null;
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    startAssessmentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Assessment',
                message: 'Do you want to move on to the assessment? You will not be able to come back to training today.',
                buttons: [
                    {
                        text: 'Cancel'
                    },
                    {
                        text: 'Go',
                        handler: () => {
                            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500).subscribe(() => {
                                this.iterateStage();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    clickStart() {
        /**
        if (this.userLevel == 0) {
          this.task = Task.PRETEST;
          timer(500).subscribe(() => {
            this.getHelp(true);
          });
        } else if (this.userLevel == 9) {
          this.task = Task.POSTTEST;
        } else if (this.userLevel > 0 && this.userLevel < 9) {
          this.task = Task.LEARNING;
          this.renderLevelOneHelp();
        }
        **/
        if (this.userLevel == 9) {
            this.task = Task.POSTTEST;
        }
        else if (this.userLevel >= 0 && this.userLevel < 9) {
            this.task = Task.LEARNING;
            this.renderLevelOneHelp();
        }
    }
    finishLevel() {
        this.stage = Stage.DONE;
        let currentTask = this.task;
        this.task = null;
        if (currentTask != Task.POSTTEST) {
            this.progress = 0;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1200).subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.userLevel++;
                let inflate = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_6__["createAnimation"])()
                    .addElement(document.querySelector('.level'))
                    .fill('none')
                    .duration(500)
                    .keyframes([
                    { offset: 0, transform: 'scale(1, 1)' },
                    { offset: 0.5, transform: 'scale(2, 2)' },
                    { offset: 1, transform: 'scale(1, 1)' }
                ]);
                yield inflate.play();
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500).subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    let fadeIn = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_6__["createAnimation"])()
                        .addElement(document.querySelector('.fade-in'))
                        .fill('none')
                        .duration(500)
                        .fromTo('opacity', '0', '1');
                    yield fadeIn.play();
                    Array.from(document.getElementsByClassName('fade-in'))[0].style.opacity = '1';
                }));
            }));
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(100)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1100)))
                .subscribe(() => {
                this.progress += .1;
            });
        }
        else {
            this.userLevel++;
        }
    }
    trainingNotDone() {
        return this.scores[Task.NAME_FACE] < this.taskLengths[Task.NAME_FACE] * this.minTrainScore ||
            this.scores[Task.WHOS_NEW] < this.taskLengths[Task.WHOS_NEW] * this.minTrainScore ||
            this.scores[Task.MEMORY] < this.taskLengths[Task.MEMORY] * this.minTrainScore ||
            this.scores[Task.SHUFFLE] < this.taskLengths[Task.SHUFFLE] * this.minTrainScore;
    }
    scheduleNotification() {
        let date = new Date();
        date.setMinutes(0);
        date.setSeconds(0);
        date.setHours(8);
        date.setDate(date.getDate() + 1);
        this.localNotifications.schedule({
            id: 1,
            text: 'You\'re next training is now available!',
            foreground: true,
            trigger: { at: date }
        });
    }
};
TrainingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"] },
    { type: _service_get_progress_service__WEBPACK_IMPORTED_MODULE_7__["GetProgressService"] },
    { type: _service_submit_scores_service__WEBPACK_IMPORTED_MODULE_8__["SubmitScoresService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["LocalNotifications"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] }
];
TrainingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-training',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./training.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/training/training.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./training.page.scss */ "./src/app/training/training.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"], _service_get_progress_service__WEBPACK_IMPORTED_MODULE_7__["GetProgressService"], _service_submit_scores_service__WEBPACK_IMPORTED_MODULE_8__["SubmitScoresService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["LocalNotifications"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]])
], TrainingPage);



/***/ }),

/***/ "./src/app/whos-new/whos-new.component.scss":
/*!**************************************************!*\
  !*** ./src/app/whos-new/whos-new.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dob3MtbmV3L3dob3MtbmV3LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/whos-new/whos-new.component.ts":
/*!************************************************!*\
  !*** ./src/app/whos-new/whos-new.component.ts ***!
  \************************************************/
/*! exports provided: WhosNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhosNewComponent", function() { return WhosNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/core */ "./node_modules/@ionic/core/dist/esm/index.mjs");





var Stage;
(function (Stage) {
    Stage[Stage["SELECT"] = 0] = "SELECT";
    Stage[Stage["CORRECT"] = 1] = "CORRECT";
    Stage[Stage["INCORRECT"] = 2] = "INCORRECT";
})(Stage || (Stage = {}));
let WhosNewComponent = class WhosNewComponent {
    constructor() {
        this.finished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.Stage = Stage;
        this.numberOfOptions = 4;
    }
    ngOnInit() {
        this.score = 0;
        this.currentSlide = 0;
        this.progressPercent = 0;
        this.fadeIn = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])();
        this.changeScore = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])();
        this.taskLength = this.newFacePaths.length;
        // Initialize shuffled face list
        this.shuffledFaces = [];
        for (let face = 0; face < this.taskLength; face++) {
            this.shuffledFaces.push(this.newFacePaths[face]);
        }
        // Shuffle Faces
        for (let i = this.taskLength - 1; i > 0; i -= 1) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.shuffledFaces[i];
            this.shuffledFaces[i] = this.shuffledFaces[j];
            this.shuffledFaces[j] = temp;
        }
        this.slideInfo = [];
        for (let i = 0; i < this.taskLength; i++) {
            this.slideInfo.push({
                correctFace: this.shuffledFaces[i],
                selectedFace: null,
                faces: this.getSlideFaces(i),
                stage: Stage.SELECT
            });
        }
    }
    ngAfterViewInit() {
        this.slideElement.lockSwipes(true);
    }
    finish(event) {
        this.finished.emit([this.score, event]);
        if (event == 0) { // Reload and retry
            this.ngOnInit();
            this.slideElement.lockSwipes(false);
            this.slideElement.slideTo(0);
            this.slideElement.lockSwipes(true);
        }
    }
    selectFace(face) {
        if (this.slideInfo[this.currentSlide].stage == Stage.SELECT) {
            this.slideInfo[this.currentSlide].selectedFace = face;
            if (face == this.slideInfo[this.currentSlide].correctFace) {
                this.score++;
                this.slideInfo[this.currentSlide].stage = Stage.CORRECT;
                this.changeScore = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                    .addElement(document.querySelectorAll('.score-change'))
                    .fill('none')
                    .duration(2000)
                    .keyframes([
                    { offset: 0, transform: 'translateY(0%)' },
                    { offset: 0.05, transform: 'translateY(100%)' },
                    { offset: 0.1, transform: 'translateY(200%)' },
                    { offset: 0.3, transform: 'translateY(200%)' },
                    { offset: 0.5, transform: 'translateY(200%)' },
                    { offset: 0.7, transform: 'translateY(200%)' },
                    { offset: 0.9, transform: 'translateY(200%)' },
                    { offset: 0.95, transform: 'translateY(100%)' },
                    { offset: 1, transform: 'translateY(0%)' }
                ]);
                this.changeScore.play();
            }
            else {
                this.slideInfo[this.currentSlide].stage = Stage.INCORRECT;
            }
            this.progressPercent = (this.currentSlide + 1) / this.taskLength;
            this.slideElement.lockSwipes(false);
            this.slideElement.lockSwipeToPrev(true);
            let slide = this.currentSlide;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1000).subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (slide == this.currentSlide) {
                    this.fadeIn = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
                        .addElement(document.querySelectorAll('.footer'))
                        .fill('none')
                        .duration(500)
                        .fromTo('opacity', '0', '0.75');
                    yield this.fadeIn.play();
                    Array.from(document.getElementsByClassName('footer'))[this.currentSlide].style.opacity = '.75';
                }
            }));
        }
    }
    getSlideFaces(index) {
        let faces = [];
        for (let i = 0; i < this.numberOfOptions - 1; i++) { // Select three faces from today's set
            let j = Math.floor(Math.random() * this.taskLength);
            while (faces.indexOf(this.facePaths[j]) > -1) { // Account for repeats
                j = Math.floor(Math.random() * this.taskLength);
            }
            faces.push(this.facePaths[j]);
        }
        let j = Math.floor(Math.random() * this.numberOfOptions);
        faces.splice(j, 0, this.shuffledFaces[index]); // Add in current face
        return faces;
    }
    showDisabled(face) {
        return this.showFeedback() && this.slideInfo[this.currentSlide].correctFace != this.slideInfo[this.currentSlide].faces[face];
    }
    showSelected(face) {
        return this.showFeedback() &&
            this.slideInfo[this.currentSlide].faces[face] != this.slideInfo[this.currentSlide].correctFace &&
            this.slideInfo[this.currentSlide].faces[face] == this.slideInfo[this.currentSlide].selectedFace;
    }
    showFeedback() {
        return !this.scoreCardDisplayed() && (this.slideInfo[this.currentSlide].stage == Stage.CORRECT || this.slideInfo[this.currentSlide].stage == Stage.INCORRECT);
    }
    scoreCardDisplayed() {
        return this.currentSlide >= this.taskLength;
    }
    changeSlide() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if ((yield this.slideElement.getActiveIndex()) > this.currentSlide) {
                this.currentSlide = yield this.slideElement.getActiveIndex();
                yield this.slideElement.lockSwipes(true);
                yield this.changeScore.stop();
                yield this.fadeIn.stop();
                let footers = Array.from(document.getElementsByClassName('footer'));
                for (let i = 0; i < footers.length; i++) {
                    footers[i].style.opacity = '0';
                }
            }
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], WhosNewComponent.prototype, "facePaths", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], WhosNewComponent.prototype, "newFacePaths", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], WhosNewComponent.prototype, "finished", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideElement', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], WhosNewComponent.prototype, "slideElement", void 0);
WhosNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-whos-new',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./whos-new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/whos-new/whos-new.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./whos-new.component.scss */ "./src/app/whos-new/whos-new.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WhosNewComponent);



/***/ })

}]);
//# sourceMappingURL=training-training-module-es2015.js.map