webpackJsonp([8],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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




/*import { ViewPage } from './../view/view';*/
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.musicjson = [
            { name: 'Jilles', age: 21 },
            { name: 'Todd', age: 24 },
            { name: 'Lisa', age: 18 }
        ];
        this.music = true;
        this.query = 'slide1';
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.showdata = function () {
        if (this.query == 'slide1') {
            this.slides.slideTo(0, 0);
        }
        if (this.query == 'slide2') {
            this.slides.slideTo(1, 0);
        }
        if (this.query == 'slide3') {
            this.slides.slideTo(2, 0);
        }
    };
    // showdata() function ends here !!!
    HomePage.prototype.slideChanged = function () {
        if (this.slides._activeIndex == 0) {
            this.query = 'slide1';
        }
        if (this.slides._activeIndex == 1) {
            this.query = 'slide2';
        }
        if (this.slides._activeIndex == 2) {
            this.query = 'slide3';
        }
    };
    HomePage.prototype.view = function () {
        this.navCtrl.setRoot('ViewPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/it/HSENGIV/CROON-ANDROID/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar color="dark-blue">\n    <span>\n      <button menuToggle ion-button icon-only clear>\n        <ion-icon name="md-menu"></ion-icon>\n      </button>\n    </span>\n    <img src="assets/imgs/header-logo.png">\n    <span>\n      <button ion-button icon-only clear>\n        <ion-icon name="ios-notifications-outline"></ion-icon>\n      </button>\n      <button ion-button icon-only clear (click)="logout()">\n        <ion-icon name="ios-power"></ion-icon>\n      </button>\n    </span>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n	<div class="subheader">\n    <h3>Top 10</h3>\n    <ion-icon name="search"></ion-icon>\n  </div>\n  <ion-toolbar class="segment">\n    <ion-segment [(ngModel)]="query" (ionChange)="showdata()">\n      <ion-segment-button value="slide1">\n        Music\n      </ion-segment-button>\n      <ion-segment-button value="slide2">\n         Sports\n      </ion-segment-button>\n      <ion-segment-button value="slide3">\n         Dance\n      </ion-segment-button>\n    </ion-segment> \n  </ion-toolbar>\n<ion-slides (ionSlideDidChange)="slideChanged()">\n  <ion-slide>\n    <ion-list class="user_list" (click)="view()">\n      <ion-item *ngFor="let user of musicjson">\n        <ion-avatar item-start>\n          <img src="assets/imgs/person.jpg">\n        </ion-avatar>\n        <h2>{{user.name}}</h2>\n        <p><span><ion-icon name="ios-person-outline"></ion-icon>James</span><span><ion-icon name="ios-star-outline"></ion-icon>274 votes</span><span><ion-icon name="ios-trophy-outline"></ion-icon>Rank1</span></p>\n        <button ion-button icon-only clear (click)="view()">\n          <ion-icon name="ios-arrow-forward"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n  </ion-slide>\n  <ion-slide>\n    <ion-list class="user_list" (click)="view()">\n      <ion-item *ngFor="let user of musicjson">\n        <ion-avatar item-start>\n          <img src="assets/imgs/person.jpg">\n        </ion-avatar>\n        <h2>ABC Music</h2>\n        <p><span><ion-icon name="ios-person-outline"></ion-icon>James</span><span><ion-icon name="ios-star-outline"></ion-icon>274 votes</span><span><ion-icon name="ios-trophy-outline"></ion-icon>Rank1</span></p>\n        <button ion-button icon-only clear (click)="view()">\n          <ion-icon name="ios-arrow-forward"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>    \n  </ion-slide>\n  <ion-slide>\n    <ion-list class="user_list" (click)="view()">\n      <ion-item *ngFor="let user of musicjson">\n        <ion-avatar item-start>\n          <img src="assets/imgs/person.jpg">\n        </ion-avatar>\n        <h2>ABC Music</h2>\n        <p><span><ion-icon name="ios-person-outline"></ion-icon>James</span><span><ion-icon name="ios-star-outline"></ion-icon>274 votes</span><span><ion-icon name="ios-trophy-outline"></ion-icon>Rank1</span></p>\n        <button ion-button icon-only clear (click)="view()">\n          <ion-icon name="ios-arrow-forward"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n  </ion-slide>\n</ion-slides>  \n</ion-content>\n'/*ion-inline-end:"/home/it/HSENGIV/CROON-ANDROID/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=8.js.map