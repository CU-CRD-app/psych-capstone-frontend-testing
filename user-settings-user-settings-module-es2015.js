(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-settings-user-settings-module"],{

/***/ "./node_modules/@ionic-native/open-native-settings/ngx/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic-native/open-native-settings/ngx/index.js ***!
  \**********************************************************************/
/*! exports provided: OpenNativeSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenNativeSettings", function() { return OpenNativeSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var OpenNativeSettings = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OpenNativeSettings, _super);
    function OpenNativeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenNativeSettings.prototype.open = function (setting) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "open", {}, arguments); };
    OpenNativeSettings.pluginName = "OpenNativeSettings";
    OpenNativeSettings.plugin = "cordova-open-native-settings";
    OpenNativeSettings.pluginRef = "cordova.plugins.settings";
    OpenNativeSettings.repo = "https://github.com/guyromb/Cordova-open-native-settings";
    OpenNativeSettings.platforms = ["Android", "iOS"];
    OpenNativeSettings.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return OpenNativeSettings;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL29wZW4tbmF0aXZlLXNldHRpbmdzL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW1HaEMsc0NBQWlCOzs7O0lBT3ZELGlDQUFJLGFBQUMsT0FBbUM7Ozs7Ozs7Z0JBUnpDLFVBQVU7OzZCQW5HWDtFQW9Hd0MsaUJBQWlCO1NBQTVDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIE9wZW4gTmF0aXZlIFNldHRpbmdzXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBsdWdpbiB0byBvcGVuIG5hdGl2ZSBzY3JlZW5zIG9mIGlPUy9hbmRyb2lkIHNldHRpbmdzXG4gKiBAdXNhZ2VcbiAqIFlvdSBjYW4gb3BlbiBhbnkgb2YgdGhlc2Ugc2V0dGluZ3M6XG4gKiBgYGBcbiAqICBcImFib3V0XCIsIC8vIGlvc1xuICogIFwiYWNjZXNzaWJpbGl0eVwiLCAvLyBpb3MsIGFuZHJvaWRcbiAqICBcImFjY291bnRcIiwgLy8gaW9zLCBhbmRyb2lkXG4gKiAgXCJhaXJwbGFuZV9tb2RlXCIsIC8vIGlvcywgYW5kcm9pZFxuICogIFwiYXBuXCIsIC8vIGFuZHJvaWRcbiAqICBcImFwcGxpY2F0aW9uX2RldGFpbHNcIiwgLy8gaW9zLCBhbmRyb2lkXG4gKiAgXCJhcHBsaWNhdGlvbl9kZXZlbG9wbWVudFwiLCAvLyBhbmRyb2lkXG4gKiAgXCJhcHBsaWNhdGlvblwiLCAvLyBhbmRyb2lkXG4gKiAgXCJhdXRvbG9ja1wiLCAvLyBpb3NcbiAqICBcImJhdHRlcnlfb3B0aW1pemF0aW9uXCIsIC8vIGFuZHJvaWRcbiAqICBcImJsdWV0b290aFwiLCAvLyBpb3MsIGFuZHJvaWRcbiAqICBcImNhc3RsZVwiLCAvLyBpb3NcbiAqICBcImNhcHRpb25pbmdcIiwgLy8gYW5kcm9pZFxuICogIFwiY2FzdFwiLCAvLyBhbmRyb2lkXG4gKiAgXCJjZWxsdWxhcl91c2FnZVwiLCAvLyBpb3NcbiAqICBcImNvbmZpZ3VyYXRpb25fbGlzdFwiLCAvLyBpb3NcbiAqICBcImRhdGFfcm9hbWluZ1wiLCAvLyBhbmRyb2lkXG4gKiAgXCJkYXRlXCIsIC8vIGlvcywgYW5kcm9pZFxuICogIFwiZGlzcGxheVwiLCAvLyBpb3MsIGFuZHJvaWRcbiAqICBcImRyZWFtXCIsIC8vIGFuZHJvaWRcbiAqICBcImZhY2V0aW1lXCIsIC8vIGlvc1xuICogIFwiaG9tZVwiLCAvLyBhbmRyb2lkXG4gKiAgXCJrZXlib2FyZFwiLCAvLyBpb3MsIGFuZHJvaWRcbiAqICBcImtleWJvYXJkX3N1YnR5cGVcIiwgLy8gYW5kcm9pZFxuICogIFwibG9jYWxlXCIsIC8vIGlvcywgYW5kcm9pZFxuICogXCJsb2NhdGlvblwiLCAvLyBpb3MsIGFuZHJvaWRcbiAqIFwibG9jYXRpb25zXCIsIC8vIGlvc1xuICogXCJtYW5hZ2VfYWxsX2FwcGxpY2F0aW9uc1wiLCAvLyBhbmRyb2lkXG4gKiBcIm1hbmFnZV9hcHBsaWNhdGlvbnNcIiwgLy8gYW5kcm9pZFxuICogXCJtZW1vcnlfY2FyZFwiLCAvLyBhbmRyb2lkXG4gKiBcIm11c2ljXCIsIC8vIGlvc1xuICogXCJtdXNpY19lcXVhbGl6ZXJcIiwgLy8gaW9zXG4gKiBcIm11c2ljX3ZvbHVtZVwiLCAvLyBpb3NcbiAqIFwibmV0d29ya1wiLCAvLyBpb3MsIGFuZHJvaWRcbiAqIFwibmlrZV9pcG9kXCIsIC8vIGlvc1xuICogXCJuZmNzaGFyaW5nXCIsIC8vIGFuZHJvaWRcbiAqIFwibmZjX3BheW1lbnRcIiwgLy8gYW5kcm9pZFxuICogXCJuZmNfc2V0dGluZ3NcIiwgLy8gYW5kcm9pZFxuICogXCJub3Rlc1wiLCAvLyBpb3NcbiAqIFwibm90aWZpY2F0aW9uX2lkXCIsIC8vIGlvc1xuICogXCJwYXNzYm9va1wiLCAvLyBpb3NcbiAqIFwicGhvbmVcIiwgLy8gaW9zXG4gKiBcInBob3Rvc1wiLCAvLyBpb3NcbiAqIFwicHJpbnRcIiwgLy8gYW5kcm9pZFxuICogXCJwcml2YWN5XCIsIC8vIGFuZHJvaWRcbiAqIFwicXVpY2tfbGF1bmNoXCIsIC8vIGFuZHJvaWRcbiAqIFwicmVzZXRcIiwgLy8gaW9zXG4gKiBcInJpbmd0b25lXCIsIC8vIGlvc1xuICogXCJicm93c2VyXCIsIC8vIGlvc1xuICogXCJzZWFyY2hcIiwgLy8gaW9zLCBhbmRyb2lkXG4gKiBcInNlY3VyaXR5XCIsIC8vIGFuZHJvaWRcbiAqIFwic2V0dGluZ3NcIiwgLy8gaW9zLCBhbmRyb2lkXG4gKiBcInNob3dfcmVndWxhdG9yeV9pbmZvXCIsXG4gKiBcInNvdW5kXCIsIC8vIGlvcywgYW5kcm9pZFxuICogXCJzb2Z0d2FyZV91cGRhdGVcIiwgLy8gaW9zXG4gKiBcInN0b3JhZ2VcIiwgLy8gaW9zLCBhbmRyb2lkXG4gKiBcInN0b3JlXCIsIC8vIGlvcywgYW5kcm9pZFxuICogXCJzeW5jXCIsIC8vIGFuZHJvaWRcbiAqIFwidGV0aGVyaW5nXCIsIC8vIGlvc1xuICogXCJ0d2l0dGVyXCIsIC8vIGlvc1xuICogXCJ0b3VjaFwiLCAvLyBpb3NcbiAqIFwidXNhZ2VcIiwgLy8gaW9zLCBhbmRyb2lkXG4gKiBcInVzZXJfZGljdGlvbmFyeVwiLCAvLyBhbmRyb2lkXG4gKiBcInZpZGVvXCIsIC8vIGlvc1xuICogXCJ2b2ljZV9pbnB1dFwiLCAvLyBhbmRyb2lkXG4gKiBcInZwblwiLCAvLyBpb3NcbiAqIFwid2FsbHBhcGVyXCIsIC8vIGlvc1xuICogXCJ3aWZpX2lwXCIsIC8vIGFuZHJvaWRcbiAqIFwid2lmaVwiLCAvLyBpb3MsIGFuZHJvaWRcbiAqIFwid2lyZWxlc3NcIiAvLyBhbmRyb2lkXG4gKiAgYGBgXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBPcGVuTmF0aXZlU2V0dGluZ3MgfSBmcm9tICdAaW9uaWMtbmF0aXZlL29wZW4tbmF0aXZlLXNldHRpbmdzL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgb3Blbk5hdGl2ZVNldHRpbmdzOiBPcGVuTmF0aXZlU2V0dGluZ3MpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdPcGVuTmF0aXZlU2V0dGluZ3MnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLW9wZW4tbmF0aXZlLXNldHRpbmdzJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLnNldHRpbmdzJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ndXlyb21iL0NvcmRvdmEtb3Blbi1uYXRpdmUtc2V0dGluZ3MnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3Blbk5hdGl2ZVNldHRpbmdzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbnMgYSBzZXR0aW5nIGRpYWxvZ1xuICAgKiBAcGFyYW0gc2V0dGluZyB7c3RyaW5nfGFycmF5fSBzZXR0aW5nIG5hbWVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcGVuKHNldHRpbmc6IHN0cmluZyB8IFtzdHJpbmcsIGJvb2xlYW5dKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-settings/user-settings.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-settings/user-settings.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color = \"dark\">\n    <ion-title>Settings</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background: rgb(34,31,32)\">\n\n  <div style=\"margin-top: 5%; margin-left: 5%; display: flex; align-items: center; justify-content: space-between\">\n    <div style=\"color: white\">Email Address:</div>\n    <ion-icon *ngIf=\"boundEmail != userEmail && !waitingForResponse\" style=\"align-self: flex-end; margin-right: 5%; font-size: 120%\" name=\"close-circle-outline\" (click)=\"boundEmail = userEmail\"></ion-icon>      \n  </div>\n\n  <ion-item lines=\"none\" [ngClass]=\"{'valid': validateEmail(), 'invalid': boundEmail != userEmail && !validateEmail()}\" disabled> <!--[disabled]=\"waitingForResponse\"-->\n    <ion-input type=\"email\" [(ngModel)]=\"boundEmail\" clearInput></ion-input>\n  </ion-item>\n  <div *ngIf=\"boundEmail != userEmail && !validateEmail()\" style=\"color: white; margin-top: 2%; margin-left: 7%; font-size: 4vw\">Must be valid email</div>\n\n  <div style=\"margin-top: 5%; margin-left: 5%; display: flex; align-items: center; justify-content: space-between\">\n    <div style=\"color: white\">Password:</div>\n    <ion-icon *ngIf=\"editingPassword && !waitingForResponse\" style=\"align-self: flex-end; margin-right: 5%; font-size: 120%\" name=\"close-circle-outline\" (click)=\"resetPasswordForm()\"></ion-icon>\n  </div>\n\n  <ion-item lines=\"none\" *ngIf=\"!editingPassword\" [disabled]=\"waitingForResponse\">\n    <ion-input type=\"password\" value={{placeholderPassword}} button (click)=\"editingPassword = !editingPassword\"></ion-input>\n  </ion-item>\n\n  <div *ngIf=\"editingPassword\">\n\n    <ion-item lines=\"none\" [ngClass]=\"{'valid': validatePassword(oldPassword), 'invalid': !validatePassword(oldPassword) && oldPassword != ''}\" [disabled]=\"waitingForResponse\">\n      <ion-input placeholder=\"Old Password\" type=\"password\" [(ngModel)]=\"oldPassword\" clearInput></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"none\" [ngClass]=\"{'valid': validatePassword(newPasswordFirst) && oldPassword != newPasswordFirst, 'invalid': newPasswordFirst != '' && (!validatePassword(newPasswordFirst) || oldPassword == newPasswordFirst)}\" [disabled]=\"waitingForResponse\">\n      <ion-input placeholder=\"New Password\" type=\"password\" [(ngModel)]=\"newPasswordFirst\" clearInput></ion-input>\n    </ion-item>\n    <div *ngIf=\"!validatePassword(newPasswordFirst) && newPasswordFirst != ''\" style=\"color: white; margin-top: 2%; margin-left: 7%; font-size: 4vw\">Must a new password with 1 uppercase letter, 1 lowercase letter, 1 number, no spaces, and 7-16 characters</div>\n    <div *ngIf=\"newPasswordFirst != '' && oldPassword == newPasswordFirst\" style=\"color: white; margin-top: 2%; margin-left: 7%; font-size: 4vw\">Matches new password</div>\n\n    <ion-item lines=\"none\" [ngClass]=\"{'valid': newPasswordFirst == newPasswordSecond && newPasswordFirst != '', 'invalid': newPasswordFirst != newPasswordSecond}\" [disabled]=\"waitingForResponse\">\n      <ion-input placeholder=\"Confirm Password\" type=\"password\" [(ngModel)]=\"newPasswordSecond\" clearInput></ion-input>\n    </ion-item>\n    <div *ngIf=\"newPasswordFirst != newPasswordSecond\" style=\"color: white; margin-top: 2%; margin-left: 7%; font-size: 4vw\">Must be match previous entry</div>\n      \n    <ion-item lines=\"none\" *ngIf=\"validateForm() || waitingForResponse\" style=\"--background: rgb(34,31,32); border-radius: 0px; margin-left: 0px; margin-right: 0px\">\n      <ion-button (click)=\"saveForm()\" style=\"height: 90%; width: 45%; margin-left: 50%\" [disabled]=\"waitingForResponse\">\n        <span *ngIf=\"!waitingForResponse\">Save</span>\n        <ion-spinner *ngIf=\"waitingForResponse\" name=\"dots\"></ion-spinner>\n      </ion-button>\n    </ion-item>\n  </div>\n\n  <div style=\"margin-top: 5%; margin-left: 5%\">\n    <div style=\"color: white\">Notifications:</div>\n  </div>\n  <ion-item button lines=\"none\" (click)=\"openSettings()\">\n    <ion-label *ngIf=\"notifications\">On</ion-label>\n    <ion-label *ngIf=\"!notifications\">Off</ion-label>\n  </ion-item>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/user-settings/user-settings-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/user-settings/user-settings-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: UserSettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsPageRoutingModule", function() { return UserSettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-settings.page */ "./src/app/user-settings/user-settings.page.ts");




const routes = [
    {
        path: '',
        component: _user_settings_page__WEBPACK_IMPORTED_MODULE_3__["UserSettingsPage"]
    }
];
let UserSettingsPageRoutingModule = class UserSettingsPageRoutingModule {
};
UserSettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserSettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/user-settings/user-settings.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/user-settings/user-settings.module.ts ***!
  \*******************************************************/
/*! exports provided: UserSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsPageModule", function() { return UserSettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-settings-routing.module */ "./src/app/user-settings/user-settings-routing.module.ts");
/* harmony import */ var _user_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-settings.page */ "./src/app/user-settings/user-settings.page.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/open-native-settings/ngx */ "./node_modules/@ionic-native/open-native-settings/ngx/index.js");









let UserSettingsPageModule = class UserSettingsPageModule {
};
UserSettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserSettingsPageRoutingModule"]
        ],
        declarations: [_user_settings_page__WEBPACK_IMPORTED_MODULE_6__["UserSettingsPage"]],
        providers: [_ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"], _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_8__["OpenNativeSettings"]]
    })
], UserSettingsPageModule);



/***/ }),

/***/ "./src/app/user-settings/user-settings.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/user-settings/user-settings.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-top: 5%;\n  border-radius: 10px;\n  background-color: white;\n}\n\n.invalid {\n  --background: rgb(255, 209, 209) ;\n}\n\n.valid {\n  --background: rgb(207, 253, 217) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BzeWNoLWNhcHN0b25lL3BzeWNoLWNhcHN0b25lL2Zyb250LWVuZC9zcmMvYXBwL3VzZXItc2V0dGluZ3MvdXNlci1zZXR0aW5ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL3VzZXItc2V0dGluZ3MvdXNlci1zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0MsaUNBQUE7QUNDRDs7QURFQTtFQUNDLGlDQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC91c2VyLXNldHRpbmdzL3VzZXItc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5pbnZhbGlkIHtcblx0LS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyMDksIDIwOSlcbn1cblxuLnZhbGlkIHtcblx0LS1iYWNrZ3JvdW5kOiByZ2IoMjA3LCAyNTMsIDIxNylcbn0iLCJpb24taXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uaW52YWxpZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjA5LCAyMDkpIDtcbn1cblxuLnZhbGlkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjA3LCAyNTMsIDIxNykgO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user-settings/user-settings.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-settings/user-settings.page.ts ***!
  \*****************************************************/
/*! exports provided: UserSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsPage", function() { return UserSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/open-native-settings/ngx */ "./node_modules/@ionic-native/open-native-settings/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");








let UserSettingsPage = class UserSettingsPage {
    constructor(toastController, localNotifications, openNativeSettings, http) {
        this.toastController = toastController;
        this.localNotifications = localNotifications;
        this.openNativeSettings = openNativeSettings;
        this.http = http;
        this.placeholderPassword = '12345678';
        this.oldPassword = '';
        this.newPasswordFirst = '';
        this.newPasswordSecond = '';
        this.emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
        this.editingPassword = false;
        this.waitingForResponse = false;
    }
    ngOnInit() {
        this.userEmail = localStorage.getItem('username');
        this.boundEmail = this.userEmail;
    }
    ionViewWillEnter() {
        this.updateNotification = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(2000).subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.notifications = yield this.localNotifications.hasPermission();
        }));
    }
    ionViewWillLeave() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.updateNotification.unsubscribe();
        });
    }
    validateEmail() {
        if (this.boundEmail != this.userEmail) {
            return this.emailPattern.test(this.boundEmail);
        }
        return null;
    }
    validatePasswords() {
        if (this.editingPassword) {
            let ret = true;
            ret = ret && this.validatePassword(this.newPasswordFirst);
            ret = ret && this.validatePassword(this.newPasswordSecond);
            ret = ret && this.validatePassword(this.oldPassword);
            return ret && this.newPasswordFirst == this.newPasswordSecond && this.oldPassword != '' && this.newPasswordFirst != '' && this.oldPassword != this.newPasswordFirst;
        }
        return null;
    }
    validatePassword(password) {
        return /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && password.length >= 7 && password.length <= 16 && password.indexOf(' ') < 0;
    }
    formTouched() {
        return this.boundEmail != this.userEmail || this.editingPassword;
    }
    validateForm() {
        return (this.validateEmail() || this.validateEmail() == null) && (this.validatePasswords() || this.validatePasswords() == null) && this.formTouched();
    }
    saveForm() {
        if (this.validateForm()) {
            let body = {
                "email": localStorage.getItem('username'),
                "oldpassword": this.oldPassword,
                "newpassword": this.newPasswordFirst
            };
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                })
            };
            this.waitingForResponse = true;
            this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].backendBaseUrl + 'changepassword/', body, httpOptions).subscribe(() => {
                this.waitingForResponse = false;
                this.resetPasswordForm();
                this.successToast('Your settings have been saved');
            }, (err) => {
                this.waitingForResponse = false;
                err["error"] == "Password does not match" ? this.dangerToast("Old password incorrect") : this.dangerToast("Something went wrong. Please try again later");
            });
        }
        else {
            this.dangerToast('Invalid fields');
        }
    }
    resetPasswordForm() {
        this.editingPassword = false;
        this.oldPassword = '';
        this.newPasswordFirst = '';
        this.newPasswordSecond = '';
    }
    dangerToast(toastMessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: toastMessage,
                color: 'danger',
                duration: 2000
            });
            toast.present();
        });
    }
    successToast(toastMessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: toastMessage,
                color: 'success',
                duration: 2000
            });
            toast.present();
        });
    }
    openSettings() {
        this.openNativeSettings.open('application_details');
    }
};
UserSettingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__["LocalNotifications"] },
    { type: _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_4__["OpenNativeSettings"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
UserSettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-settings/user-settings.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-settings.page.scss */ "./src/app/user-settings/user-settings.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__["LocalNotifications"], _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_4__["OpenNativeSettings"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
], UserSettingsPage);



/***/ })

}]);
//# sourceMappingURL=user-settings-user-settings-module-es2015.js.map