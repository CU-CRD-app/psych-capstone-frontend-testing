(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content id=\"login-view\">\n\n  <div *ngIf=\"popup == Popup.HOME\" id=\"row-with-default-card\">\n    <ion-button (click)=Login() fill=\"clear\" style=\"height: 6%; width: 60%;color: rgb(206,183,124);\">Login</ion-button>\n    <ion-button (click)=Register() fill=\"clear\" style=\"height: 6%; width: 60%; color: rgb(206,183,124)\">Register</ion-button>\n  </div>\n\n  <div *ngIf=\"popup == Popup.LOGIN\" style=\"height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: rgb(34,31,32)\">\n    <form [formGroup]=\"loginForm\" style=\"width: 100%\">\n      <ion-item lines=\"none\"><!-- [ngClass]=\"{'valid': fieldNotEmpty(loginForm.value.username) && !loginForm.controls.username.errors && validEmail(loginForm.value.username), 'invalid': fieldNotEmpty(loginForm.value.username) && (loginForm.controls.username.errors || !validEmail(loginForm.value.username))}\"-->\n        <ion-input formControlName=\"username\" placeholder=\"Email\" type=\"email\"></ion-input>\n      </ion-item>\n      <br>\n      <ion-item lines=\"none\"><!--[ngClass]=\"{'valid': fieldNotEmpty(loginForm.value.password) && !loginForm.controls.password.errors && validPassword(loginForm.value.password), 'invalid': fieldNotEmpty(loginForm.value.password) && (loginForm.controls.password.errors || !validPassword(loginForm.value.password))}\"-->\n        <ion-input formControlName=\"password\" placeholder=\"Password\" type=\"password\"></ion-input>\n      </ion-item>\n    </form>\n    <br><br><br>\n    <div style=\"display: flex; justify-content: space-evenly; width: 100%\">\n      <ion-button (click)=\"BackHome()\" fill=\"clear\" style=\"width: 45%; color: rgb(206,183,124)\" [disabled]=\"awaitLoginHTTP\">Back</ion-button>\n      <ion-button (click)=\"SubmitLogin()\" fill=\"clear\" style=\"width: 45%; height: 2rem;color: rgb(206,183,124)\" [disabled]=\"awaitLoginHTTP\">\n        <span *ngIf=\"!awaitLoginHTTP\">Login</span>\n        <ion-spinner *ngIf=\"awaitLoginHTTP\" slot=\"end\" name=\"dots\" style=\"size: 50%\"></ion-spinner>\n      </ion-button>\n    </div>\n    <div style=\"display: flex; justify-content: space-evenly; width: 100%\">\n      <ion-button (click)=\"ForgetPassword()\" fill=\"clear\" style=\"width: 65%; height: 2rem; color: dodgerblue\" [disabled]=\"awaitLoginHTTP\">Forgot Password?</ion-button>\n    </div>\n  </div>\t\n\n  <div *ngIf=\"popup == Popup.REGISTER\" style=\"height: 100%; background-color: rgb(34,31,32)\">\n    <form [formGroup]=\"registerForm\" style=\"height: 100%; width: 100%; display: flex; flex-direction: column; justify-content: space-evenly\">\n      <div>\n        <!--USERNAME-->\n        <ion-item lines=\"none\" [ngClass]=\"{'valid': fieldNotEmpty(registerForm.value.username) && !registerForm.controls.username.errors && validEmail(registerForm.value.username), 'invalid': fieldNotEmpty(registerForm.value.username) && (registerForm.controls.username.errors || !validEmail(registerForm.value.username))}\">\n          <ion-input formControlName=\"username\" placeholder=\"Email\" type=\"email\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"fieldNotEmpty(registerForm.value.username) && (registerForm.controls.username.errors || !validEmail(registerForm.value.username))\" style=\"color: red; margin-left: 3%; font-size: 4vw\">Must be valid email</div>\n        <!--PASSWORD-->\n        <ion-item lines=\"none\" [ngClass]=\"{'valid': fieldNotEmpty(registerForm.value.password) && !registerForm.controls.password.errors && validPassword(registerForm.value.password), 'invalid': fieldNotEmpty(registerForm.value.password) && (registerForm.controls.password.errors || !validPassword(registerForm.value.password))}\">\n          <ion-input formControlName=\"password\" placeholder=\"Password\" type=\"password\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"fieldNotEmpty(registerForm.value.password) && (registerForm.controls.password.errors || !validPassword(registerForm.value.password))\" style=\"color: red; margin-left: 3%; font-size: 4vw\">Must contain 1 uppercase letter, 1 lowercase letter, 1 number, no spaces, and be 7-16 characters</div>\n        <!--CONFIRM PASSWORD-->\n        <ion-item lines=\"none\" [ngClass]=\"{'valid': fieldNotEmpty(registerForm.value.password_check) && !registerForm.controls.password_check.errors && registerForm.value.password_check == registerForm.value.password, 'invalid': (fieldNotEmpty(registerForm.value.password) || fieldNotEmpty(registerForm.value.password_check)) && (registerForm.controls.password_check.errors || registerForm.value.password_check != registerForm.value.password)}\">\n          <ion-input formControlName=\"password_check\" placeholder=\"Confirm Password\" type=\"password\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"(fieldNotEmpty(registerForm.value.password) || fieldNotEmpty(registerForm.value.password_check)) && (registerForm.controls.password_check.errors || registerForm.value.password_check != registerForm.value.password)\" style=\"color: red; margin-left: 3%; font-size: 4vw\">Must match previous entry</div>\n      </div>\n      <div>\n        <!--AGE-->\n        <ion-item lines=\"none\" [ngClass]=\"{'valid': fieldNotEmpty(registerForm.value.age) && !registerForm.controls.age.errors, 'invalid': fieldNotEmpty(registerForm.value.age) && registerForm.controls.age.errors}\">\n          <ion-input formControlName=\"age\" type=\"number\" placeholder=\"Age\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"fieldNotEmpty(registerForm.value.age) && registerForm.controls.age.errors\" style=\"color: red; margin-left: 3%; font-size: 4vw\">You must be 18 years or older to participate</div>\n        <!--RACE-->\n        <ion-item lines=\"none\" [ngClass]=\"{'valid': fieldNotEmpty(registerForm.value.race) && !registerForm.controls.race.errors, 'invalid': fieldNotEmpty(registerForm.value.race) && registerForm.controls.race.errors}\">\n          <ion-label>Ethnicity</ion-label>\n          <ion-select placeholder=\"Ethnicity\" formControlName=\"race\">\n            <ion-select-option *ngFor=\"let race of raceList\" value={{race}}>{{race}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <!--NATIONALITY-->\n        <ion-item lines=\"none\" [ngClass]=\"{'valid': fieldNotEmpty(registerForm.value.nationality) && !registerForm.controls.nationality.errors, 'invalid': fieldNotEmpty(registerForm.value.nationality) && registerForm.controls.nationality.errors}\">\n          <ion-label>Nationality</ion-label>\n          <ion-select placeholder=\"Nationality\" formControlName=\"nationality\">\n            <ion-select-option *ngFor=\"let nation of nationList\" value={{nation}}>{{nation}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <!--GENDER-->\n        <ion-item lines=\"none\" [ngClass]=\"{'valid': fieldNotEmpty(registerForm.value.gender) && !registerForm.controls.gender.errors, 'invalid': fieldNotEmpty(registerForm.value.gender) && registerForm.controls.gender.errors}\">\n          <ion-label>Gender</ion-label>\n          <ion-select placeholder=\"Gender\" formControlName=\"gender\">\n            <ion-select-option *ngFor=\"let gender of genderList\" value={{gender}}>{{gender}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </div>\n      <ion-item button lines=\"none\" style=\"display: flex; justify-content: space-evenly\" [ngClass]=\"{'valid': registerForm.value.agree == true, 'invalid': registerForm.value.agree == false && termsOpened}\" (click)=\"openTermsAndConditions()\">\n        <ion-label>Terms and conditions</ion-label>\n      </ion-item>\n      <div style=\"display: flex; justify-content: space-evenly; width: 100%\">\n        <ion-button (click)=\"BackHome()\" fill=\"clear\" style=\"width: 45%; height: 2rem; color: rgb(206,183,124)\" [disabled]=\"awaitLoginHTTP\">Back</ion-button>\n        <ion-button (click)=\"SubmitRegister()\" fill=\"clear\" style=\"width: 45%; height: 2rem ;color:rgb(206,183,124);\" [disabled]=\"awaitLoginHTTP\">\n          <span *ngIf=\"!awaitRegisterHTTP\">Register</span>\n          <ion-spinner *ngIf=\"awaitRegisterHTTP\" slot=\"end\" name=\"dots\" style=\"size: 50%\"></ion-spinner>\n        </ion-button>\n      </div>\n    </form>\n  </div>\n\n  <div *ngIf=\"popup == Popup.FORGOT\" style=\"height: 100%; background-color: rgb(#221F20)\">\n    <form [formGroup]=\"registerForm\" style=\"height: 100%; width: 100%; display: flex; flex-direction: column; justify-content: space-evenly\">\n      <div>\n        <ion-item lines=\"none\" [ngClass]=\"{'valid': fieldNotEmpty(registerForm.value.username) && !registerForm.controls.username.errors && validEmail(registerForm.value.username), 'invalid': fieldNotEmpty(registerForm.value.username) && (registerForm.controls.username.errors || !validEmail(registerForm.value.username))}\">\n          <ion-input formControlName=\"username\" placeholder=\"Email\" type=\"email\"></ion-input>\n        </ion-item>\n        <!-- <div *ngIf=\"fieldNotEmpty(registerForm.value.username) && (registerForm.controls.username.errors || !validEmail(registerForm.value.username))\" style=\"color: red; margin-left: 3%; font-size: 4vw\">Must be valid password</div> -->\n        <!--PASSWORD-->\n        <ion-item lines=\"none\" [ngClass]=\"{'valid': fieldNotEmpty(registerForm.value.password) && !registerForm.controls.password.errors && validPassword(registerForm.value.password), 'invalid': fieldNotEmpty(registerForm.value.password) && (registerForm.controls.password.errors || !validPassword(registerForm.value.password))}\">\n          <ion-input formControlName=\"password\" placeholder=\"New Password\" type=\"password\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"fieldNotEmpty(registerForm.value.password) && (registerForm.controls.password.errors || !validPassword(registerForm.value.password))\" style=\"color: red; margin-left: 3%; font-size: 4vw\">Must contain 1 uppercase letter, 1 lowercase letter, 1 number, no spaces, and be 7-16 characters</div>\n        <!--CONFIRM PASSWORD-->\n        <ion-item lines=\"none\" [ngClass]=\"{'valid': fieldNotEmpty(registerForm.value.password_check) && !registerForm.controls.password_check.errors && registerForm.value.password_check == registerForm.value.password, 'invalid': (fieldNotEmpty(registerForm.value.password) || fieldNotEmpty(registerForm.value.password_check)) && (registerForm.controls.password_check.errors || registerForm.value.password_check != registerForm.value.password)}\">\n          <ion-input formControlName=\"password_check\" placeholder=\"Confirm Password\" type=\"password\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"(fieldNotEmpty(registerForm.value.password) || fieldNotEmpty(registerForm.value.password_check)) && (registerForm.controls.password_check.errors || registerForm.value.password_check != registerForm.value.password)\" style=\"color: red; margin-left: 3%; font-size: 4vw\">Must match previous entry</div>\n      </div>\n      <div>\n        <!--AGE-->\n        <ion-item lines=\"none\" [ngClass]=\"{'valid': fieldNotEmpty(registerForm.value.age) && !registerForm.controls.age.errors, 'invalid': fieldNotEmpty(registerForm.value.age) && registerForm.controls.age.errors}\">\n          <ion-input formControlName=\"age\" type=\"number\" placeholder=\"Age\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"fieldNotEmpty(registerForm.value.age) && registerForm.controls.age.errors\" style=\"color: red; margin-left: 3%; font-size: 4vw\">You must be 18 years or older to participate</div>\n        <!--RACE-->\n        <ion-item lines=\"none\" [ngClass]=\"{'valid': fieldNotEmpty(registerForm.value.race) && !registerForm.controls.race.errors, 'invalid': fieldNotEmpty(registerForm.value.race) && registerForm.controls.race.errors}\">\n          <ion-label>Ethnicity</ion-label>\n          <ion-select placeholder=\"Ethnicity\" formControlName=\"race\">\n            <ion-select-option *ngFor=\"let race of raceList\" value={{race}}>{{race}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <!--NATIONALITY-->\n        <ion-item lines=\"none\" [ngClass]=\"{'valid': fieldNotEmpty(registerForm.value.nationality) && !registerForm.controls.nationality.errors, 'invalid': fieldNotEmpty(registerForm.value.nationality) && registerForm.controls.nationality.errors}\">\n          <ion-label>Nationality</ion-label>\n          <ion-select placeholder=\"Nationality\" formControlName=\"nationality\">\n            <ion-select-option *ngFor=\"let nation of nationList\" value={{nation}}>{{nation}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <!--GENDER-->\n        <ion-item lines=\"none\" [ngClass]=\"{'valid': fieldNotEmpty(registerForm.value.gender) && !registerForm.controls.gender.errors, 'invalid': fieldNotEmpty(registerForm.value.gender) && registerForm.controls.gender.errors}\">\n          <ion-label>Gender</ion-label>\n          <ion-select placeholder=\"Gender\" formControlName=\"gender\">\n            <ion-select-option *ngFor=\"let gender of genderList\" value={{gender}}>{{gender}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </div>\n      <div style=\"display: flex; justify-content: space-evenly; width: 100%\">\n        <ion-button (click)=\"BackHome()\" fill=\"clear\" style=\"width: 45%; height: 2rem; color: dodgerblue\" [disabled]=\"awaitLoginHTTP\">Back</ion-button>\n        <ion-button (click)=\"SubmitRegister()\" style=\"width: 45%; height: 2rem\" [disabled]=\"awaitLoginHTTP\">\n          <span *ngIf=\"!awaitRegisterHTTPTwo\">Register</span>\n          <ion-spinner *ngIf=\"awaitRegisterHTTPTwo\" slot=\"end\" name=\"dots\" style=\"size: 50%\"></ion-spinner>\n        </ion-button>\n      </div>\n    </form>\n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/terms-conditions/terms-conditions.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/terms-conditions/terms-conditions.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  \n  <div style=\"display: flex; flex-direction: column; justify-content: center; height: 100%\">\n\n    <h2 style=\"text-align: center\">Terms and Conditions</h2>\n\n    <div>\n      <div style=\"margin: 5%\">\n        This app is a research project approved by the Institutional Review Board at the University of Colorado Boulder.\n      </div>\n\n      <div style=\"margin: 5%\">\n        The app is designed to build your personal expertise with faces of other races. The goal of this research is to understand how, when and for whom this training is effective.\n      </div>\n\n      <div style=\"margin: 5%\">\n        To participate, all participants must read and provide consent.\n      </div>\n\n      <div style=\"margin: 5%\">\n        Please read and download the consent form <a style=\"color: rgb(206,183,124); text-decoration: none\" href=\"http://psych.colorado.edu/~jclab/app_consent\"><b>here</b></a>.\n      </div>\n\n      <div style=\"margin: 5%\">\n        By clicking “I consent,” you indicate that your are at least 18 years of age and that you consent to participate in this research.\n      </div>\n    </div>\n\n    <br>\n\n    <div>\n      <ion-item lines=\"none\">\n        <ion-label>I consent</ion-label>\n        <ion-checkbox slot=\"start\" (click)=\"closeModal(true)\" [checked]=\"consent == true\"></ion-checkbox>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>I do not consent</ion-label>\n        <ion-checkbox slot=\"start\" (click)=\"closeModal(false)\" [checked]=\"consent == false\"></ion-checkbox>\n      </ion-item>\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/auth/login/login-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/auth/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/login/login.page.ts");
/* harmony import */ var _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../terms-conditions/terms-conditions.component */ "./src/app/auth/terms-conditions/terms-conditions.component.ts");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"], _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_7__["TermsConditionsComponent"]],
        entryComponents: [_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_7__["TermsConditionsComponent"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/auth/login/login.page.scss":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#login-view {\n  --height: 100vh;\n  --width: auto;\n  --background: rgb(34,31,32) url('splash.png') no-repeat center center / contain;\n  background-repeat: no-repeat;\n}\n\n#row-with-default-card {\n  height: 96%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n}\n\nion-item {\n  margin: 5px;\n  margin: 5px;\n  border-radius: 5px;\n}\n\n.invalid {\n  --background: rgb(255, 209, 209) ;\n}\n\n.valid {\n  --background: rgb(207, 253, 217) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3BzeWNoLWNhcHN0b25lL3BzeWNoLWNhcHN0b25lL2Zyb250LWVuZC9zcmMvYXBwL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQUE7RUFDQSxhQUFBO0VBQ0EsK0VBQUE7RUFDQSw0QkFBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDRDs7QURFQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRDs7QURFQTtFQUNDLGlDQUFBO0FDQ0Q7O0FERUE7RUFDQyxpQ0FBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9naW4tdmlldyB7XG5cdC0taGVpZ2h0OiAxMDB2aDtcblx0LS13aWR0aDogYXV0bztcblx0LS1iYWNrZ3JvdW5kOiByZ2IoMzQsMzEsMzIpIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kX2ltZ3Mvc3BsYXNoLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvbnRhaW47XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbiNyb3ctd2l0aC1kZWZhdWx0LWNhcmQge1xuXHRoZWlnaHQ6IDk2JTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0ge1xuXHRtYXJnaW46IDVweDtcblx0bWFyZ2luOiA1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmludmFsaWQge1xuXHQtLWJhY2tncm91bmQ6IHJnYigyNTUsIDIwOSwgMjA5KVxufVxuXG4udmFsaWQge1xuXHQtLWJhY2tncm91bmQ6IHJnYigyMDcsIDI1MywgMjE3KVxufSIsIiNsb2dpbi12aWV3IHtcbiAgLS1oZWlnaHQ6IDEwMHZoO1xuICAtLXdpZHRoOiBhdXRvO1xuICAtLWJhY2tncm91bmQ6IHJnYigzNCwzMSwzMikgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmRfaW1ncy9zcGxhc2gucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuI3Jvdy13aXRoLWRlZmF1bHQtY2FyZCB7XG4gIGhlaWdodDogOTYlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW52YWxpZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjA5LCAyMDkpIDtcbn1cblxuLnZhbGlkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjA3LCAyNTMsIDIxNykgO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/login/login.page.ts":
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../terms-conditions/terms-conditions.component */ "./src/app/auth/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");

var LoginPage_1;








var Popup;
(function (Popup) {
    Popup[Popup["HOME"] = 0] = "HOME";
    Popup[Popup["LOGIN"] = 1] = "LOGIN";
    Popup[Popup["REGISTER"] = 2] = "REGISTER";
    Popup[Popup["FORGOT"] = 3] = "FORGOT";
})(Popup || (Popup = {}));
let LoginPage = LoginPage_1 = class LoginPage {
    constructor(router, formBuilder, http, nativeStorage, toastController, modalController) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.toastController = toastController;
        this.modalController = modalController;
        this.debugMode = true;
        this.Popup = Popup;
        this.login = "assets/icon/log-in.svg";
        this.help = "help-circle-outline";
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].backendBaseUrl;
        this.login_url = this.base_url + "login/";
        this.register_url = this.base_url + "register/";
        this.nationList = ["United States of America (USA)", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic (CAR)", "Chad", "Chile", "China", "Colombia", "Comoros", "Democratic Republic of the Congo", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates (UAE)", "United Kingdom (UK)", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
        this.genderList = ["Male", "Female", "Other"];
        this.raceList = ["Caucasian", "Black", "Hispanic", "East Asian", "South Asian", "Middle Eastern", "Pacific Islander", "American Indian/Alaska Native", "Multi-racial", "Other"];
        this.loginForm = formBuilder.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16)])]
        }, { validator: LoginPage_1.loginFormCheck });
        this.registerForm = formBuilder.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16)])],
            password_check: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16)])],
            race: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            nationality: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            gender: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            age: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)])],
            agree: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        }, { validator: LoginPage_1.registerFormCheck });
    }
    ngOnInit() {
        this.router.navigate(['/dashboard']);
        this.popup = Popup.HOME;
        this.clickedSubmit = false;
    }
    Login() {
        this.popup = Popup.LOGIN;
        this.resetForms();
    }
    Register() {
        this.popup = Popup.REGISTER;
        this.resetForms();
    }
    BackHome() {
        this.popup = Popup.HOME;
        this.resetForms();
    }
    ForgetPassword() {
        this.popup = Popup.FORGOT;
        this.resetForms();
    }
    SubmitLogin() {
        if (!this.awaitLoginHTTP) {
            this.clickedSubmit = true;
            if (this.loginForm.invalid) {
                this.dangerToast("Invalid email or password");
                this.resetForms();
            }
            else {
                let body = {
                    "email": this.loginForm.value.username,
                    "password": this.loginForm.value.password
                };
                const httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                        'Content-Type': 'application/json; charset=utf-8'
                    }),
                    responseType: 'text'
                };
                this.awaitLoginHTTP = true;
                this.http.post(this.login_url, body, httpOptions).subscribe((response) => {
                    /*this.nativeStorage.setItem("token", response["token"])
                      .then(
                        () => console.log("token stored"),
                        error => console.log("Error storing token: ", error)
                      );*/
                    localStorage.setItem("token", response);
                    localStorage.setItem("username", this.loginForm.value.username);
                    this.awaitLoginHTTP = false;
                    this.BackHome();
                    this.router.navigate(['/dashboard']);
                }, (err) => {
                    err["error"] == "Account not found" ? this.dangerToast("Invalid email or password") : this.dangerToast("Something went wrong. Please try again later");
                    this.awaitLoginHTTP = false;
                    this.resetForms();
                });
            }
        }
    }
    SubmitRegister() {
        if (!this.awaitRegisterHTTPTwo) {
            this.clickedSubmit = true;
            // if (this.registerForm.invalid) {
            //   this.dangerToast("Billy Bob");
            // } else {
            let body = {
                "email": this.registerForm.value.username,
                "password": this.registerForm.value.password,
                "race": this.registerForm.value.race,
                "nationality": this.registerForm.value.nationality,
                "gender": this.registerForm.value.gender,
                "age": this.registerForm.value.age,
                "question": this.registerForm.value.question,
                "agree": this.registerForm.value.agree
            };
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                    'Content-Type': 'application/json; charset=utf-8'
                })
            };
            this.awaitRegisterHTTP = true;
            this.http.put(this.register_url, body, httpOptions).subscribe((response) => {
                this.awaitRegisterHTTP = false;
                this.Login();
                this.successToast("Account creation successful!");
            }, (err) => {
                this.awaitRegisterHTTP = false;
                this.successToast("Account creation failed!");
                this.resetForms();
            });
            // }
        }
        if (!this.awaitRegisterHTTP) {
            this.clickedSubmit = true;
            if (this.registerForm.invalid) {
                this.dangerToast("Invalid fields");
            }
            else {
                let body = {
                    "email": this.registerForm.value.username,
                    "password": this.registerForm.value.password,
                    "race": this.registerForm.value.race,
                    "nationality": this.registerForm.value.nationality,
                    "gender": this.registerForm.value.gender,
                    "age": this.registerForm.value.age,
                    "question": this.registerForm.value.question,
                    "agree": this.registerForm.value.agree
                };
                const httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                        'Content-Type': 'application/json; charset=utf-8'
                    })
                };
                this.awaitRegisterHTTP = true;
                this.http.put(this.register_url, body, httpOptions).subscribe((response) => {
                    this.awaitRegisterHTTP = false;
                    this.Login();
                    this.successToast("Account registration successful!");
                }, (err) => {
                    this.awaitRegisterHTTP = false;
                    err["error"] == "Email already used" ? this.dangerToast("Account already exists") : this.dangerToast("Something went wrong. Please try again later");
                    this.resetForms();
                });
            }
        }
    }
    validEmail(email) {
        return /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(email);
    }
    validPassword(password) {
        return /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && password.indexOf(' ') < 0 && password != 'Passw0rd' && password != 'Password123';
    }
    static loginFormCheck(form) {
        let email = form.get('username');
        let password = form.get('password');
        if (!/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(email.value)) {
            return { "INVALID_EMAIL": true };
        }
        if (!(/[a-z]/.test(password.value) && /[A-Z]/.test(password.value) && /[0-9]/.test(password.value) && password.value.indexOf(' ') < 0 && password.value != 'Passw0rd' && password.value != 'Password123')) {
            return { "PASSWORD_INVALID": true };
        }
        return null;
    }
    static registerFormCheck(form) {
        let email = form.get('username');
        let password = form.get('password');
        let password_confirm = form.get('password_check');
        let race = form.value['race'];
        let nationality = form.value['nationality'];
        let gender = form.value['gender'];
        let agreement = form.value['agree'];
        let question = form.value['question'];
        if (race == '' || nationality == '' || gender == '' || question == '') {
            return { "EMPTY_RESPONSES": true };
        }
        if (!/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(email.value)) {
            return { "INVALID_EMAIL": true };
        }
        if (password.value != password_confirm.value) {
            return { "PASSWORD_MISMATCH": true };
        }
        if (!(/[a-z]/.test(password.value) && /[A-Z]/.test(password.value) && /[0-9]/.test(password.value) && password.value.indexOf(' ') < 0 && password.value != 'Passw0rd' && password.value != 'Password123')) {
            return { "PASSWORD_INVALID": true };
        }
        if (!(/[a-z]/.test(password_confirm.value) && /[A-Z]/.test(password_confirm.value) && /[0-9]/.test(password_confirm.value) && password_confirm.value.indexOf(' ') < 0 && password_confirm.value != 'Passw0rd' && password_confirm.value != 'Password123')) {
            return { "PASSWORD_CONFIRM_INVALID": true };
        }
        if (!agreement) {
            return { "AGREEMENT_FALSE": true };
        }
        return null;
    }
    resetForms() {
        this.loginForm.reset();
        this.registerForm.reset();
        this.clickedSubmit = false;
        this.termsOpened = false;
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
    fieldNotEmpty(field) {
        return (field != null && field != '') || this.clickedSubmit;
    }
    openTermsAndConditions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let consent = null;
            if (this.termsOpened) {
                if (this.registerForm.value.agree) {
                    consent = true;
                }
                else {
                    consent = false;
                }
            }
            const modal = yield this.modalController.create({
                component: _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_7__["TermsConditionsComponent"],
                componentProps: {
                    'consent': consent
                }
            });
            yield modal.present();
            let { data } = yield modal.onWillDismiss();
            this.termsOpened = true;
            if (data == true) {
                this.registerForm.get('agree').setValue(true);
            }
            else {
                this.registerForm.get('agree').setValue(false);
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
LoginPage = LoginPage_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/auth/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], LoginPage);



/***/ }),

/***/ "./src/app/auth/terms-conditions/terms-conditions.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/auth/terms-conditions/terms-conditions.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvdGVybXMtY29uZGl0aW9ucy90ZXJtcy1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/auth/terms-conditions/terms-conditions.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/auth/terms-conditions/terms-conditions.component.ts ***!
  \*********************************************************************/
/*! exports provided: TermsConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsComponent", function() { return TermsConditionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let TermsConditionsComponent = class TermsConditionsComponent {
    constructor(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
    }
    ngOnInit() {
        this.consent = this.navParams.data.consent;
    }
    closeModal(consent) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.modalController.dismiss(consent);
        });
    }
};
TermsConditionsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
TermsConditionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms-conditions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./terms-conditions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/terms-conditions/terms-conditions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./terms-conditions.component.scss */ "./src/app/auth/terms-conditions/terms-conditions.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], TermsConditionsComponent);



/***/ })

}]);
//# sourceMappingURL=auth-login-login-module-es2015.js.map