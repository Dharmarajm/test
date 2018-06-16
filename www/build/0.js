webpackJsonp([0],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPageModule", function() { return ViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewPageModule = /** @class */ (function () {
    function ViewPageModule() {
    }
    ViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view__["a" /* ViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view__["a" /* ViewPage */]),
            ],
        })
    ], ViewPageModule);
    return ViewPageModule;
}());

//# sourceMappingURL=view.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewPage = /** @class */ (function () {
    function ViewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewPage');
    };
    ViewPage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view',template:/*ion-inline-start:"/home/it/HSENGIV/CROON-ANDROID/src/pages/view/view.html"*/'<ion-header class="bg"> \n  <ion-grid>\n    <ion-row>\n      <ion-col col-1>\n        <ion-icon menuToggle class="ti ti-menu icon_header" ></ion-icon>\n      </ion-col>\n      <ion-col col-9>\n        <img src="assets/imgs/logo.png" class="images_header">\n      </ion-col>\n      <ion-col col-1>\n        <i class="ti ti-bell icon_header"></i>\n      </ion-col>\n      <ion-col col-1>\n        <i class="ti ti-power-off icon_header" (click)="logout()" ></i>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<ion-content>\n	<img src="assets/imgs/music.jpg" class="vote_images">\n\n  <ion-grid>\n      <ion-row>     \n        <ion-col col-8>\n        <h3 class="vote_title">Jilles</h3>\n      <i class="ti ti-user ionc_color" ></i>&nbsp;<a class="sub_name">Altius</a>&nbsp;<i class="ti ti-star ionc_color"></i>&nbsp;<a class="sub_name">213 Votes</a>&nbsp;<ion-icon class="ionc_color" name="trophy"></ion-icon>&nbsp;<a class="sub_name">Rank 1</a>\n        </ion-col>\n        <ion-col col-2>\n          <i class="ti ti-star vote_icon"></i>vote\n        </ion-col>\n        <ion-col col-2>\n          <i class="ti ti-sharethis-alt  vote_icon"></i>share\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <input type="text" name="command">\n\n  <ion-grid>\n        <ion-row>\n          <ion-col col-2>\n             <img src="assets/imgs/person.jpg" class="images">\n          </ion-col>\n          <ion-col col-10>\n              <a class="name">I Like this song</a><br><a class="sub_name">Altius</a>&nbsp;&nbsp;<a class="sub_name">1 min ago</a>\n          </ion-col>         \n        </ion-row>\n        <ion-row>\n          <ion-col col-2>\n             <img src="assets/imgs/person.jpg" class="images">\n          </ion-col>\n          <ion-col col-10>\n              <a class="name">I Like this song</a><br><a class="sub_name">Altius</a>&nbsp;&nbsp;<a class="sub_name">1 min ago</a>\n          </ion-col>         \n        </ion-row>\n        <ion-row>\n          <ion-col col-2>\n             <img src="assets/imgs/person.jpg" class="images">\n          </ion-col>\n          <ion-col col-10>\n              <a class="name">I Like this song</a><br><a class="sub_name">Altius</a>&nbsp;&nbsp;<a class="sub_name">1 min ago</a>\n          </ion-col>         \n        </ion-row>\n    </ion-grid> \n\n  \n</ion-content>\n'/*ion-inline-end:"/home/it/HSENGIV/CROON-ANDROID/src/pages/view/view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ViewPage);
    return ViewPage;
}());

//# sourceMappingURL=view.js.map

/***/ })

});
//# sourceMappingURL=0.js.map