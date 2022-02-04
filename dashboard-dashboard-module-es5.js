function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\" style=\"--background: rgb(34,31,32);\">\n\n  <ion-header>\n    <ion-toolbar color=\"dark\" style=\"border-bottom-width: medium; border-bottom-style: solid; border-bottom-color: rgb(206,183,124)\">\n      <ion-title>Dashboard</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <div *ngIf=\"waitingForResponse\" style=\"height: 90%; display: flex; justify-content: center; align-items: center\">\n    <ion-spinner name=\"crescent\" color=\"light\"></ion-spinner>\n  </div>\n\n  <div *ngIf=\"!waitingForResponse\" style=\"height: 90%; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center\">\n    <div style=\"color: rgb(255,255,255); font-size: 11vw; width: 100%; margin-left: 10%\">\n      <div *ngIf=\"level == 0\">Pre-Assessment</div>\n      <div *ngIf=\"level > 0 && level < 9\">Level {{level}}</div>\n      <div *ngIf=\"level == 9\">Post-Assessment</div>\n      <div *ngIf=\"level > 9\">Complete</div>\n    </div>\n\n    <div *ngIf=\"level > 0 && level < 9\" style=\"width: 100%; display: flex; justify-content: center; align-items: center\">\n      <div class=\"subheader\" style=\"width: 25%\">Today:</div>\n      <div style=\"text-align: center; width: 60%; margin-top: 9%\">\n        <ion-progress-bar style=\"width: 100%; margin: 0 auto\" value={{progressToday}}></ion-progress-bar>\n        <div style=\"color: rgb(255,255,255); margin-top: 3%\">{{progressToday * 100}}%</div>\n      </div>\n    </div>\n    <div style=\"width: 100%; display: flex; justify-content: center; align-items: center\">\n      <div class=\"subheader\" style=\"width: 25%\">Overall:</div>\n      <div style=\"text-align: center; width: 60%; margin-top: 9%\">\n        <ion-progress-bar style=\"width: 100%; margin: 0 auto\" value={{progressOverall}}></ion-progress-bar>\n        <div style=\"color: rgb(255,255,255); margin-top: 3%\">{{progressOverall * 100}}%</div>\n      </div>\n    </div>\n\n    <div style=\"text-align: center; width: 100%\">\n      <ion-button color=\"success\" routerLink=\"/train\" routerDirection=\"forward\">\n        <ion-label slot=\"start\">Train</ion-label>\n        <ion-icon slot=\"end\" name=\"fitness\"></ion-icon>\n      </ion-button>\n\n      <ion-button color=\"primary\" routerLink=\"/history\" routerDirection=\"forward\">\n        <ion-label slot=\"start\">History</ion-label>\n        <ion-icon slot=\"end\" name=\"analytics\"></ion-icon>\n      </ion-button>\n    </div>\n\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/dashboard/dashboard.page.ts");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/ngx/index.js");

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };

    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
      }])],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]],
      providers: [_ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"]]
    })], DashboardPageModule);
    "";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-button {\n  font-size: 150%;\n  border-radius: 10px;\n  margin-top: 3vh;\n  height: 20vh;\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BzeWNoLWNhcHN0b25lL3BzeWNoLWNhcHN0b25lL2Zyb250LWVuZC9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAzdmg7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIHdpZHRoOiA5NSU7XG59IiwiaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogM3ZoO1xuICBoZWlnaHQ6IDIwdmg7XG4gIHdpZHRoOiA5NSU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/dashboard/dashboard.page.ts ***!
    \*********************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
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


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/ngx/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DashboardPage = /*#__PURE__*/function () {
      function DashboardPage(getProgress, events, toastController, localNotifications) {
        _classCallCheck(this, DashboardPage);

        this.getProgress = getProgress;
        this.events = events;
        this.toastController = toastController;
        this.localNotifications = localNotifications;
      }

      _createClass(DashboardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.localNotifications.requestPermission();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.waitingForResponse = true;
          Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(1000).subscribe(function () {
            _this.getProgress.getData().subscribe(function (res) {
              _this.days = res['days'];
              _this.level = res['level'];
              var today = new Date().toLocaleDateString();
              var lastDay = '';

              for (var day in _this.days) {
                if ([_this.days[day]['nameface'], _this.days[day]['whosnew'], _this.days[day]['memory'], _this.days[day]['shuffle'], _this.days[day]['forcedchoice'], _this.days[day]['samedifferent']].indexOf(-1) < 0) {
                  lastDay = new Date(_this.days[day]['date']).toLocaleDateString();
                }
              }

              if (_this.level > 0 && _this.level < 9) {
                if (today == lastDay) {
                  _this.progressToday = 1;
                } else {
                  _this.progressToday = 0;

                  if (_this.days[_this.level - 1]) {
                    if (_this.days[_this.level - 1].nameface >= 6) {
                      _this.progressToday++;
                    }

                    if (_this.days[_this.level - 1].whosnew >= 6) {
                      _this.progressToday++;
                    }

                    if (_this.days[_this.level - 1].memory >= 24) {
                      _this.progressToday++;
                    }

                    if (_this.days[_this.level - 1].shuffle >= 12) {
                      _this.progressToday++;
                    }

                    if (_this.days[_this.level - 1].forcedchoice >= 6) {
                      _this.progressToday++;
                    }

                    if (_this.days[_this.level - 1].samedifferent >= 6) {
                      _this.progressToday++;
                    }
                  }

                  _this.progressToday = parseFloat((_this.progressToday / 6).toFixed(2));
                }
              }

              _this.progressOverall = _this.level / 10;
              _this.waitingForResponse = false;
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
      }]);

      return DashboardPage;
    }();

    DashboardPage.ctorParameters = function () {
      return [{
        type: _service_get_progress_service__WEBPACK_IMPORTED_MODULE_3__["GetProgressService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"]
      }];
    };

    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/dashboard/dashboard.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_get_progress_service__WEBPACK_IMPORTED_MODULE_3__["GetProgressService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"]])], DashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map