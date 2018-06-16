webpackJsonp([0],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPageModule", function() { return UploadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UploadPageModule = /** @class */ (function () {
    function UploadPageModule() {
    }
    UploadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__upload__["a" /* UploadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__upload__["a" /* UploadPage */]),
            ],
        })
    ], UploadPageModule);
    return UploadPageModule;
}());

//# sourceMappingURL=upload.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
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
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadPage = /** @class */ (function () {
    function UploadPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.musicjson = [
            { name: 'Jilles', age: 21 },
            { name: 'Todd', age: 24 },
            { name: 'Lisa', age: 18 }
        ];
    }
    UploadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadPage');
    };
    UploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload',template:/*ion-inline-start:"/home/it/HSENGIV/CROON-ANDROID/src/pages/upload/upload.html"*/'<ion-header class="bg"> \n  <ion-grid>\n    <ion-row>\n      <ion-col col-1>\n        <ion-icon menuToggle class="icon_header" name="menu"></ion-icon>\n      </ion-col>\n      <ion-col col-9>\n        <img src="assets/imgs/logo.png" class="images_header">\n      </ion-col>\n      <ion-col col-1>\n        <ion-icon class="icon_header" name="notifications-outline"></ion-icon>\n      </ion-col>\n      <ion-col col-1>\n        <ion-icon class="icon_header" name="power"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<ion-content>\n  <h4 class="upload_title">Upload</h4>\n\n  <div class="row tabs">\n    <button ion-button color="light" class="btn_tab" (click)="new= true;myupload= false;">NEW</button>\n    <button ion-button color="light" class="btn_tab" (click)="new= false;myupload= true;">MY UPLOAD</button>\n  </div>\n\n  <div *ngIf="new">\n    <ion-grid>\n        <ion-row class="tabs">          \n          <ion-col>\n            <ion-icon class="icon_upload" name="mic"></ion-icon>\n          </ion-col>\n          <ion-col>\n              <ion-icon class="icon_upload" name="videocam"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-icon class="icon_upload" name="folder"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row class="tabs">          \n          <ion-col>\n            Record\n          </ion-col>\n          <ion-col>\n              Record\n          </ion-col>\n          <ion-col>\n            upload\n          </ion-col>\n        </ion-row>\n    </ion-grid> \n\n    <ion-item>\n      <ion-label floating>Title</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <h6 class="sub_content">Genre</h6>\n\n    <ion-grid>\n      <ion-row class="tabs">          \n        <ion-col>\n          <input type="radio" name="Music">Music\n        </ion-col>\n        <ion-col>\n          <input type="radio" name="Sports">Sports\n        </ion-col>\n        <ion-col>\n           <input type="radio" name="Video">Video\n        </ion-col>\n        <ion-col>\n           <input type="radio" name="VideoGame">Video Game\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class="groupButton">\n      <button ion-button color="light" ng-click="Languages()" id="languages" class="btn_languages">\n        Select Languages&nbsp;&nbsp;&nbsp;<ion-icon name="arrow-dropright" class="group-icon_right"></ion-icon>\n      </button>\n    </div>\n\n    <h6 class="sub_content">Description</h6>\n    <textarea class="upload_textarea">\n      \n    </textarea>\n      \n\n\n  </div>\n\n  <div *ngIf="myupload">\n      <ion-grid>\n        <ion-row *ngFor="let user of musicjson">\n          <ion-col>\n             <img src="assets/imgs/person.jpg" class="images">\n          </ion-col>\n          <ion-col col-9 >\n              <a class="name">{{user.name}}</a><br><ion-icon class="ionc_color" name="person"></ion-icon>&nbsp;&nbsp;<a class="sub_name">Altius</a>&nbsp;&nbsp;<ion-icon class="ionc_color" name="star"></ion-icon>&nbsp;&nbsp;<a class="sub_name">213 Votes</a>&nbsp;&nbsp;<ion-icon class="ionc_color" name="trophy"></ion-icon>&nbsp;&nbsp;<a class="sub_name">Rank 1</a>\n          </ion-col>\n          <ion-col>\n            <br><ion-icon class="vote_icon" name="share"></ion-icon>\n          </ion-col>\n        </ion-row>\n    </ion-grid> \n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/it/HSENGIV/CROON-ANDROID/src/pages/upload/upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UploadPage);
    return UploadPage;
}());

//# sourceMappingURL=upload.js.map

/***/ })

});
//# sourceMappingURL=0.js.map