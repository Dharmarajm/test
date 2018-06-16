webpackJsonp([6],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.musicjson = [
            { name: 'Jilles', age: 21 },
            { name: 'Todd', age: 24 },
            { name: 'Lisa', age: 18 }
        ];
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/home/it/HSENGIV/CROON-ANDROID/src/pages/history/history.html"*/'<ion-header class="bg"> \n  <ion-grid>\n    <ion-row>\n      <ion-col col-1>\n        <ion-icon menuToggle class="icon_header" name="menu"></ion-icon>\n      </ion-col>\n      <ion-col col-9>\n        <img src="assets/imgs/logo.png" class="images_header">\n      </ion-col>\n      <ion-col col-1>\n        <ion-icon class="icon_header" name="notifications-outline"></ion-icon>\n      </ion-col>\n      <ion-col col-1>\n        <ion-icon class="icon_header" name="power"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<ion-content>   \n  <ion-searchbar></ion-searchbar> \n\n  <div class="row tabs">\n    <button ion-button color="light" class="btn_detalis">Previous</button>\n    <button ion-button color="light" class="btn_detalis">Current</button>\n    <button ion-button color="light" class="btn_detalis">Next</button>\n  </div>\n\n   \n\n  <div class="row tabs">\n    <button ion-button color="light" class="btn_tab" (click)="music= true;sports= false;dance= false">MUSIC</button>\n    <button ion-button color="light" class="btn_tab" (click)="music= false;sports= true;dance= false">SPORTS</button>\n    <button ion-button color="light" class="btn_tab" (click)="music= false;sports= false;dance= true">DANCE</button>\n  </div>\n\n  <div *ngIf="music">\n    <ion-grid>\n          <ion-row *ngFor="let user of musicjson">\n            <ion-col>\n               <img src="assets/imgs/person.jpg" class="images">\n            </ion-col>\n            <ion-col col-9 >\n                <a class="name">{{user.name}}</a><br><ion-icon class="ionc_color" name="person"></ion-icon>&nbsp;&nbsp;<a class="sub_name">Altius</a>&nbsp;&nbsp;<ion-icon class="ionc_color" name="star"></ion-icon>&nbsp;&nbsp;<a class="sub_name">213 Votes</a>&nbsp;&nbsp;<ion-icon class="ionc_color" name="trophy"></ion-icon>&nbsp;&nbsp;<a class="sub_name">Rank 1</a>\n            </ion-col>\n            <ion-col>\n              <ion-icon name="star-outline"></ion-icon> vote\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n  </div>\n\n  <div *ngIf="sports">\n    <ion-grid>\n          <ion-row *ngFor="let user of musicjson">\n            <ion-col>\n               <img src="assets/imgs/person.jpg" class="images">\n            </ion-col>\n            <ion-col col-9 >\n                <a class="name">{{user.name}}</a><br><ion-icon class="ionc_color" name="person"></ion-icon>&nbsp;&nbsp;<a class="sub_name">Altius</a>&nbsp;&nbsp;<ion-icon class="ionc_color" name="star"></ion-icon>&nbsp;&nbsp;<a class="sub_name">213 Votes</a>&nbsp;&nbsp;<ion-icon class="ionc_color" name="trophy"></ion-icon>&nbsp;&nbsp;<a class="sub_name">Rank 1</a>\n            </ion-col>\n            <ion-col>\n              <ion-icon name="star-outline"></ion-icon> vote\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n  </div>\n\n\n  <div *ngIf="dance">\n    <ion-grid>\n          <ion-row *ngFor="let user of musicjson">\n            <ion-col>\n               <img src="assets/imgs/person.jpg" class="images">\n            </ion-col>\n            <ion-col col-9 >\n                <a class="name">{{user.name}}</a><br><ion-icon class="ionc_color" name="person"></ion-icon>&nbsp;&nbsp;<a class="sub_name">Altius</a>&nbsp;&nbsp;<ion-icon class="ionc_color" name="star"></ion-icon>&nbsp;&nbsp;<a class="sub_name">213 Votes</a>&nbsp;&nbsp;<ion-icon class="ionc_color" name="trophy"></ion-icon>&nbsp;&nbsp;<a class="sub_name">Rank 1</a>\n            </ion-col>\n            <ion-col>\n              <ion-icon name="star-outline"></ion-icon> vote\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/it/HSENGIV/CROON-ANDROID/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ })

});
//# sourceMappingURL=6.js.map