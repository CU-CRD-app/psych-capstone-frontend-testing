function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHistoryHistoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content style=\"--background: rgb(34,31,32)\">\n\n\t<ion-header>\n\t\t<ion-toolbar color = \"dark\">\n\t\t\t<ion-title>\n\t\t\t\tHistory\n      \t\t</ion-title>\n\t\t\t<ion-buttons slot=\"start\">\n\t\t\t\t<ion-menu-button autoHide=\"false\"></ion-menu-button>\n\t\t\t</ion-buttons>\n\t\t</ion-toolbar>\n\t</ion-header>\n\n\t<div *ngIf=\"waitingForResponse\" style=\"height: 90%; display: flex; justify-content: center; align-items: center\">\n\t\t<ion-spinner name=\"crescent\" color=\"light\"></ion-spinner>\n\t</div>\n\n\t<div *ngIf=\"!waitingForResponse\" class=\"center-col\" style=\"height: 100%; width: 100%; margin-top: 10%\">\n\n\t\t<div style=\"height: 15%; width: 100%; text-align: center\">\n\t\t\t<div class=\"header\" style=\"color:white\">\n\t\t\t\t<div *ngIf=\"currentCard == 0\">Pre-Assessment</div>\n\t\t\t\t<div *ngIf=\"currentCard > 0 && currentCard < 9\">Level {{currentCard}}</div>\n\t\t\t\t<div *ngIf=\"currentCard == 9\">Post-Assessment</div>\n\t\t\t</div>\n\t\t\t<ion-item style=\"width: 100%; --background: rgb(34,31,32); margin-top: 5%\" lines=\"none\">\n\t\t\t\t<ion-range #rangeElement min=\"0\" max=\"9\" step=\"1\" snaps=\"true\" ticks=\"false\" (ionChange)=\"slide($event.detail.value)\" [(ngModel)]=\"currentCard\"></ion-range>\n\t\t\t</ion-item>\n\t\t</div>\n\n\t\t<ion-slides #slideElement style=\"width: 100%; height: 55%; margin-top: 10%\" (ionSlideWillChange)=\"setCurrent()\">\n\n\t\t\t<ion-slide>\n\n\t\t\t\t<ion-card class=\"center-col\" style=\"justify-content: center; height: 100%; width: 100%\" [ngClass]=\"{'not-completed': !pre_post[0].date}\">\n\t\t\t\t\n\t\t\t\t\t<div class=\"center-col\" *ngIf=\"pre_post[0].date\" style=\"height: 100%; width: 100%; justify-content: space-evenly;\">\n\t\t\t\t\t\t<div style=\"text-align: center; font-size: 10vw; color: rgb(206,183,124)\">\n\t\t\t\t\t\t\t<div>{{pre_post[0].date}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ion-item style=\"--background: gainsboro; color: black\" lines=\"none\">\n\t\t\t\t\t\t\t<ion-icon slot=\"start\" name=\"clipboard\" style=\"font-size: 24vw\" color=\"primary\"></ion-icon>\n\t\t\t\t\t\t\t<span style=\"font-size: 16vw\">{{pre_post[0].score}}</span>\n\t\t\t\t\t\t\t<span style=\"font-size: 6vw\">/30</span>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"!pre_post[0].date\">\n\t\t\t\t\t\t<span style=\"font-size: 8vw\">Not yet completed</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ion-card>\n\n\t\t\t</ion-slide>\n\n\t\t\t<ion-slide *ngFor=\"let day of days; let i = index\">\n\n\t\t\t\t<ion-card class=\"center-col\" style=\"justify-content: center; height: 100%; width: 100%\" [ngClass]=\"{'not-completed': !day.date}\">\n\n\t\t\t\t\t<div *ngIf=\"day.date\" class=\"center-col\" style=\"height: 100%; width: 100%; justify-content: space-evenly\">\n\t\t\t\t\t\t<div style=\"text-align: center; font-size: 10vw; color: rgb(206,183,124); margin: 5%\">\n\t\t\t\t\t\t\t<div>{{day.date}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div style=\"display: flex; align-items: center\">\n\t\t\t\t\t\t\t<ion-item style=\"--background: gainsboro; color: black\" lines=\"none\">\n\t\t\t\t\t\t\t\t<ion-icon slot=\"start\" name=\"happy\" style=\"font-size: 18vw\" color=\"primary\"></ion-icon>\n\t\t\t\t\t\t\t\t<span style=\"font-size: 10vw\">{{day.nameface}}</span>\n\t\t\t\t\t\t\t\t<span style=\"font-size: 4vw\">/8</span>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<ion-item style=\"--background: gainsboro; color: black\" lines=\"none\">\n\t\t\t\t\t\t\t\t<ion-icon slot=\"start\" name=\"person-add\" style=\"font-size: 18vw\" color=\"primary\"></ion-icon>\n\t\t\t\t\t\t\t\t<span style=\"font-size: 10vw\">{{day.whosnew}}</span>\n\t\t\t\t\t\t\t\t<span style=\"font-size: 4vw\">/8</span>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div style=\"display: flex; align-items: center\">\n\t\t\t\t\t\t\t<ion-item style=\"--background: gainsboro; color: black\" lines=\"none\">\n\t\t\t\t\t\t\t\t<ion-icon slot=\"start\" name=\"grid\" style=\"font-size: 18vw\" color=\"primary\"></ion-icon>\n\t\t\t\t\t\t\t\t<span style=\"font-size: 9vw\">{{day.memory}}</span>\n\t\t\t\t\t\t\t\t<span style=\"font-size: 3.5vw\">/32</span>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<ion-item style=\"--background: gainsboro; color: black\" lines=\"none\">\n\t\t\t\t\t\t\t\t<ion-icon slot=\"start\" name=\"swap\" style=\"font-size: 18vw\" color=\"primary\"></ion-icon>\n\t\t\t\t\t\t\t\t<span style=\"font-size: 9vw\">{{day.shuffle}}</span>\n\t\t\t\t\t\t\t\t<span style=\"font-size: 3vw\">/16</span>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div style=\"display: flex; align-items: center\">\n\t\t\t\t\t\t\t<ion-item style=\"--background: gainsboro; color: black\" lines=\"none\">\n\t\t\t\t\t\t\t\t<ion-icon slot=\"start\" name=\"contacts\" style=\"font-size: 18vw\" color=\"primary\"></ion-icon>\n\t\t\t\t\t\t\t\t<span style=\"font-size: 10vw\">{{day.forcedchoice}}</span>\n\t\t\t\t\t\t\t\t<span style=\"font-size: 4vw\">/8</span>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<ion-item style=\"--background: gainsboro; color: black\" lines=\"none\">\n\t\t\t\t\t\t\t\t<ion-icon slot=\"start\" name=\"checkmark-circle\" style=\"font-size: 18vw\" color=\"primary\"></ion-icon>\n\t\t\t\t\t\t\t\t<span style=\"font-size: 10vw\">{{day.samedifferent}}</span>\n\t\t\t\t\t\t\t\t<span style=\"font-size: 4vw\">/8</span>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"!day.date\">\n\t\t\t\t\t\t<span style=\"font-size: 8vw\">Not yet completed</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ion-card>\n\n\t\t\t</ion-slide>\n\n\t\t\t<ion-slide>\n\n\t\t\t\t<ion-card class=\"center-col\" style=\"justify-content: center; height: 100%; width: 100%\" [ngClass]=\"{'not-completed': !pre_post[1].date}\">\n\n\t\t\t\t\t<div *ngIf=\"pre_post[1].date\" class=\"center-col\" style=\"height: 100%; width: 100%; justify-content: space-evenly;\">\n\t\t\t\t\t\t<div style=\"text-align: center; font-size: 10vw; color: rgb(206,183,124)\">\n\t\t\t\t\t\t\t<div>{{pre_post[1].date}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ion-item style=\"--background: gainsboro; color: black\" lines=\"none\">\n\t\t\t\t\t\t\t<ion-icon slot=\"start\" name=\"clipboard\" style=\"font-size: 24vw\" color=\"primary\"></ion-icon>\n\t\t\t\t\t\t\t<span style=\"font-size: 16vw\">{{pre_post[1].score}}</span>\n\t\t\t\t\t\t\t<span style=\"font-size: 6vw\">/30</span>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"!pre_post[1].date\">\n\t\t\t\t\t\t<span style=\"font-size: 8vw\">Not yet completed</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ion-card>\n\n\t\t\t</ion-slide>\n\n\t\t</ion-slides>\n\n\t</div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/history/history.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/history/history.module.ts ***!
    \*******************************************/

  /*! exports provided: HistoryPageModule */

  /***/
  function srcAppHistoryHistoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function () {
      return HistoryPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./history.page */
    "./src/app/history/history.page.ts");

    var HistoryPageModule = function HistoryPageModule() {
      _classCallCheck(this, HistoryPageModule);
    };

    HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]
      }])],
      declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })], HistoryPageModule);
    /***/
  },

  /***/
  "./src/app/history/history.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/history/history.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHistoryHistoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  --background: gainsboro;\n}\n\n.not-completed {\n  --background: rgb(185, 185, 185);\n  opacity: 0.8;\n}\n\n.center-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BzeWNoLWNhcHN0b25lL3BzeWNoLWNhcHN0b25lL2Zyb250LWVuZC9zcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx1QkFBQTtBQ0NEOztBREVBO0VBQ0MsZ0NBQUE7RUFDQSxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcblx0LS1iYWNrZ3JvdW5kOiBnYWluc2Jvcm87XG59XG5cbi5ub3QtY29tcGxldGVkIHtcblx0LS1iYWNrZ3JvdW5kOiByZ2IoMTg1LCAxODUsIDE4NSk7XG5cdG9wYWNpdHk6IDAuODtcbn1cblxuLmNlbnRlci1jb2wge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufSIsImlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiBnYWluc2Jvcm87XG59XG5cbi5ub3QtY29tcGxldGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTg1LCAxODUsIDE4NSk7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmNlbnRlci1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/history/history.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/history/history.page.ts ***!
    \*****************************************/

  /*! exports provided: HistoryPage */

  /***/
  function srcAppHistoryHistoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPage", function () {
      return HistoryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _service_get_progress_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/get-progress.service */
    "./src/app/service/get-progress.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var HistoryPage = /*#__PURE__*/function () {
      function HistoryPage(toastController, getProgress) {
        _classCallCheck(this, HistoryPage);

        this.toastController = toastController;
        this.getProgress = getProgress;
        this.days = [{}, {}, {}, {}, {}, {}, {}, {}];
        this.pre_post = [{}, {}];
        this.currentCard = 0;
      }

      _createClass(HistoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.waitingForResponse = true;
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000).subscribe(function () {
            _this.getProgress.getData().subscribe(function (res) {
              for (var i = 0; i < res['days'].length; i++) {
                if (res['days'][i]['nameface'] != -1 && res['days'][i]['whosnew'] != -1 && res['days'][i]['memory'] != -1 && res['days'][i]['shuffle'] != -1 && res['days'][i]['forcedchoice'] != -1 && res['days'][i]['samedifferent'] != -1) {
                  _this.days[i] = res['days'][i];
                  _this.days[i]['date'] = new Date(_this.days[i]['date']).toLocaleDateString();
                }
              }

              _this.level = res['level'];

              if (_this.level > 0) {
                _this.level--;
              }

              if (res['pre']['score']) {
                _this.pre_post[0] = {
                  score: res['pre']['score'],
                  date: new Date(res['pre']['date']).toLocaleDateString()
                };
              }

              if (res['post']['score']) {
                _this.pre_post[1] = {
                  score: res['post']['score'],
                  date: new Date(res['post']['date']).toLocaleDateString()
                };
              }

              _this.waitingForResponse = false;
              Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000).subscribe(function () {
                _this.slide(_this.level);
              });
            }, function (err) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var toast;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return this.toastController.create({
                          message: 'Something went wrong. Please try logging out and back in',
                          color: 'danger',
                          duration: 2000
                        });

                      case 2:
                        toast = _context.sent;
                        toast.present();

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          });
        }
      }, {
        key: "slide",
        value: function slide(index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.slideElement.slideTo(index);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "setCurrent",
        value: function setCurrent() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.slideElement.getActiveIndex();

                  case 2:
                    this.currentCard = _context3.sent;

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return HistoryPage;
    }();

    HistoryPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _service_get_progress_service__WEBPACK_IMPORTED_MODULE_3__["GetProgressService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideElement', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], HistoryPage.prototype, "slideElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rangeElement', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], HistoryPage.prototype, "rangeElement", void 0);
    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./history.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./history.page.scss */
      "./src/app/history/history.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _service_get_progress_service__WEBPACK_IMPORTED_MODULE_3__["GetProgressService"]])], HistoryPage);
    /***/
  }
}]);
//# sourceMappingURL=history-history-module-es5.js.map