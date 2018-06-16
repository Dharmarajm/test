webpackJsonp([9],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistoryPageModule = /** @class */ (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */]),
            ],
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());

//# sourceMappingURL=history.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
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




var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.music = true;
        this.musicjson = [
            { name: 'Jilles', age: 21 },
            { name: 'Todd', age: 24 },
            { name: 'Lisa', age: 18 }
        ];
        this.query = 'slide1';
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HistoryPage.prototype.showdata = function () {
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
    HistoryPage.prototype.slideChanged = function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], HistoryPage.prototype, "slides", void 0);
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/home/it/HSENGIV/CROON-ANDROID/src/pages/history/history.html"*/'<ion-header>\n  <ion-toolbar color="dark-blue">\n    <span>\n      <button menuToggle ion-button icon-only clear>\n        <ion-icon name="md-menu"></ion-icon>\n      </button>\n    </span>\n    <img src="assets/imgs/header-logo.png">\n    <span>\n      <button ion-button icon-only clear>\n        <ion-icon name="ios-notifications-outline"></ion-icon>\n      </button>\n      <button ion-button icon-only clear (click)="logout()">\n        <ion-icon name="ios-power"></ion-icon>\n      </button>\n    </span>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class="subheader">\n    <h3>History<span>06 JUNE 2018 - 06 JUNE 2018</span></h3>\n    <ion-icon name="search"></ion-icon>\n  </div>\n  <div class="button-group">\n      <button ion-button color="dark-blue">Previous</button>\n      <button ion-button color="dark-blue">current</button>\n      <button ion-button color="dark-blue">Next</button>\n  </div>\n  <ion-toolbar class="segment">\n    <ion-segment [(ngModel)]="query" (ionChange)="showdata()">\n      <ion-segment-button value="slide1">\n        Music\n      </ion-segment-button>\n      <ion-segment-button value="slide2">\n         Sports\n      </ion-segment-button>\n      <ion-segment-button value="slide3">\n         Dance\n      </ion-segment-button>\n    </ion-segment> \n  </ion-toolbar>\n<ion-slides (ionSlideDidChange)="slideChanged()">\n  <ion-slide>\n    <ion-list class="user_list">\n      <ion-item *ngFor="let user of musicjson">\n        <ion-avatar item-start>\n          <img src="assets/imgs/person.jpg">\n        </ion-avatar>\n        <h2>{{user.name}}</h2>\n        <p><span><ion-icon name="ios-person-outline"></ion-icon>James</span><span><ion-icon name="ios-star-outline"></ion-icon>274 votes</span><span><ion-icon name="ios-trophy-outline"></ion-icon>Rank1</span></p>\n        <button ion-button icon-only clear (click)="view()">\n          <ion-icon name="ios-arrow-forward"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n  </ion-slide>\n  <ion-slide>\n    <ion-list class="user_list">\n      <ion-item *ngFor="let user of musicjson">\n        <ion-avatar item-start>\n          <img src="assets/imgs/person.jpg">\n        </ion-avatar>\n        <h2>ABC Music</h2>\n        <p><span><ion-icon name="ios-person-outline"></ion-icon>James</span><span><ion-icon name="ios-star-outline"></ion-icon>274 votes</span><span><ion-icon name="ios-trophy-outline"></ion-icon>Rank1</span></p>\n        <button ion-button icon-only clear (click)="view()">\n          <ion-icon name="ios-arrow-forward"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>    \n  </ion-slide>\n  <ion-slide>\n    <ion-list class="user_list">\n      <ion-item *ngFor="let user of musicjson">\n        <ion-avatar item-start>\n          <img src="assets/imgs/person.jpg">\n        </ion-avatar>\n        <h2>ABC Music</h2>\n        <p><span><ion-icon name="ios-person-outline"></ion-icon>James</span><span><ion-icon name="ios-star-outline"></ion-icon>274 votes</span><span><ion-icon name="ios-trophy-outline"></ion-icon>Rank1</span></p>\n        <button ion-button icon-only clear (click)="view()">\n          <ion-icon name="ios-arrow-forward"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n  </ion-slide>\n</ion-slides>  \n</ion-content>\n\n\n\n<!-- <ion-header class="bg"> \n  <ion-grid>\n    <ion-row>\n      <ion-col col-1>\n        <ion-icon menuToggle class="ti ti-menu icon_header" ></ion-icon>\n      </ion-col>\n      <ion-col col-9>\n        <img src="assets/imgs/logo.png" class="images_header">\n      </ion-col>\n      <ion-col col-1>\n        <i class="ti ti-bell icon_header"></i>\n      </ion-col>\n      <ion-col col-1>\n        <i class="ti ti-power-off icon_header" (click)="logout()" ></i>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<ion-content>   \n  <ion-searchbar></ion-searchbar> \n\n  <div class="row tabs">\n    <button ion-button color="light" class="btn_detalis">Previous</button>\n    <button ion-button color="light" class="btn_detalis">Current</button>\n    <button ion-button color="light" class="btn_detalis">Next</button>\n  </div>\n\n   \n\n  <div class="row tabs">\n    <button ion-button color="light" class="btn_tab" (click)="music= true;sports= false;dance= false">MUSIC</button>\n    <button ion-button color="light" class="btn_tab" (click)="music= false;sports= true;dance= false">SPORTS</button>\n    <button ion-button color="light" class="btn_tab" (click)="music= false;sports= false;dance= true">DANCE</button>\n  </div>\n\n  <div *ngIf="music">\n    <ion-grid>\n          <ion-row *ngFor="let user of musicjson">\n            <ion-col>\n               <img src="assets/imgs/person.jpg" class="images">\n            </ion-col>\n            <ion-col col-9>\n                <a class="name">{{user.name}}</a><br><i class="ti ti-user ionc_color"></i>&nbsp;&nbsp;<a class="sub_name">Altius</a>&nbsp;&nbsp;<i class="ti ti-star ionc_color" name="star"></i>&nbsp;&nbsp;<a class="sub_name">213 Votes</a>&nbsp;&nbsp;<ion-icon class="ionc_color" name="trophy"></ion-icon>&nbsp;&nbsp;<a class="sub_name">Rank 1</a>\n            </ion-col>\n            <ion-col>\n              <ion-icon name="star-outline"></ion-icon> vote\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n  </div>\n\n  <div *ngIf="sports">\n    <ion-grid>\n          <ion-row *ngFor="let user of musicjson">\n            <ion-col>\n               <img src="assets/imgs/person.jpg" class="images">\n            </ion-col>\n            <ion-col col-9>\n                <a class="name">{{user.name}}</a><br><i class="ti ti-user ionc_color"></i>&nbsp;&nbsp;<a class="sub_name">Altius</a>&nbsp;&nbsp;<i class="ti ti-star ionc_color" name="star"></i>&nbsp;&nbsp;<a class="sub_name">213 Votes</a>&nbsp;&nbsp;<ion-icon class="ionc_color" name="trophy"></ion-icon>&nbsp;&nbsp;<a class="sub_name">Rank 1</a>\n            </ion-col>\n            <ion-col>\n              <ion-icon name="star-outline"></ion-icon> vote\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n  </div>\n\n\n  <div *ngIf="dance">\n    <ion-grid>\n          <ion-row *ngFor="let user of musicjson">\n            <ion-col>\n               <img src="assets/imgs/person.jpg" class="images">\n            </ion-col>\n            <ion-col col-9>\n                <a class="name">{{user.name}}</a><br><i class="ti ti-user ionc_color"></i>&nbsp;&nbsp;<a class="sub_name">Altius</a>&nbsp;&nbsp;<i class="ti ti-star ionc_color" name="star"></i>&nbsp;&nbsp;<a class="sub_name">213 Votes</a>&nbsp;&nbsp;<ion-icon class="ionc_color" name="trophy"></ion-icon>&nbsp;&nbsp;<a class="sub_name">Rank 1</a>\n            </ion-col>\n            <ion-col>\n              <ion-icon name="star-outline"></ion-icon> vote\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n  </div>\n\n\n</ion-content>\n -->'/*ion-inline-end:"/home/it/HSENGIV/CROON-ANDROID/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ })

});
//# sourceMappingURL=9.js.map