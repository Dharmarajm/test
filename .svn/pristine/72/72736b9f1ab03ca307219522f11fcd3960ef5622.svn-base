webpackJsonp([1],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPageModule", function() { return UploadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload__ = __webpack_require__(293);
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

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
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




var UploadPage = /** @class */ (function () {
    function UploadPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.new = true;
        this.musicjson = [
            { name: 'Jilles', age: 21 },
            { name: 'Todd', age: 24 },
            { name: 'Lisa', age: 18 }
        ];
        this.query = 'slide1';
    }
    UploadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadPage');
    };
    UploadPage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    UploadPage.prototype.showdata = function () {
        if (this.query == 'slide1') {
            this.slides.slideTo(0, 0);
        }
        if (this.query == 'slide2') {
            this.slides.slideTo(1, 0);
        }
    };
    // showdata() function ends here !!!
    UploadPage.prototype.slideChanged = function () {
        if (this.slides._activeIndex == 0) {
            this.query = 'slide1';
        }
        if (this.slides._activeIndex == 1) {
            this.query = 'slide2';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], UploadPage.prototype, "slides", void 0);
    UploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload',template:/*ion-inline-start:"/home/it/HSENGIV/CROON-ANDROID/src/pages/upload/upload.html"*/'<ion-header>\n  <ion-toolbar color="dark-blue">\n    <span>\n      <button menuToggle ion-button icon-only clear>\n        <ion-icon name="md-menu"></ion-icon>\n      </button>\n    </span>\n    <img src="assets/imgs/header-logo.png">\n    <span>\n      <button ion-button icon-only clear>\n        <ion-icon name="ios-notifications-outline"></ion-icon>\n      </button>\n      <button ion-button icon-only clear (click)="logout()">\n        <ion-icon name="ios-power"></ion-icon>\n      </button>\n    </span>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class="subheader">\n    <h3>Upload</h3>\n    <ion-icon name="search"></ion-icon>\n  </div>\n  <ion-toolbar class="segment">\n    <ion-segment [(ngModel)]="query" (ionChange)="showdata()">\n      <ion-segment-button value="slide1">\n        New\n      </ion-segment-button>\n      <ion-segment-button value="slide2">\n         My Upload<span>20</span>\n      </ion-segment-button>\n    </ion-segment> \n  </ion-toolbar>\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n    <ion-slide>\n      <div class="new-up">\n      <div class="button_group">\n        <div class="btn-label">\n          <button ion-button icon-only>\n            <ion-icon name="mic"></ion-icon>\n          </button>\n          <p>Record</p>\n        </div>\n        <div class="btn-label">\n          <button ion-button icon-only>\n            <ion-icon name="videocam"></ion-icon>\n          </button>\n          <p>Record</p>\n        </div>\n        <div class="btn-label">\n          <button ion-button icon-only>\n            <ion-icon name="folder"></ion-icon>\n          </button>\n          <p>Upload</p>\n        </div>\n      </div>\n      <div class="input-group">\n        <label>Title</label>\n        <input type="text" name="">\n      </div>\n      <div class="input-group">\n        <label>Genre</label>\n        <div class="input-radio">\n          <label><input type="radio" name="genre">Music</label>\n          <label><input type="radio" name="genre">Sports</label>\n          <label><input type="radio" name="genre">Video</label>\n          <label><input type="radio" name="genre">Video Game</label>\n        </div>\n      </div>\n<!--       <ion-list>\n        <ion-item>\n          <ion-label>Gaming</ion-label>\n          <ion-select [(ngModel)]="gaming">\n            <ion-option value="nes">NES</ion-option>\n            <ion-option value="n64">Nintendo64</ion-option>\n            <ion-option value="ps">PlayStation</ion-option>\n            <ion-option value="genesis">Sega Genesis</ion-option>\n            <ion-option value="saturn">Sega Saturn</ion-option>\n            <ion-option value="snes">SNES</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>   -->\n      <div class="input-group">\n        <label>Select Languages</label>\n        <button ion-button block color="light" ng-click="Languages()" id="languages">\n          Languages\n        </button>\n        <ion-icon name="ios-arrow-forward"></ion-icon>\n      </div>\n      <div class="input-group">\n        <label>Description</label>\n        <textarea class="upload_textarea"></textarea>\n      </div>\n      <button ion-button block class="button-blue-upload"> UPLOAD</button>\n<!--       <h4 class="sub_content">Genre</h4>\n        <ion-grid>\n            <ion-row class="tabs">          \n              <ion-col>\n                <ion-icon class="icon_upload" name="mic"></ion-icon>\n              </ion-col>\n              <ion-col>\n                  <ion-icon class="icon_upload" name="videocam"></ion-icon>\n              </ion-col>\n              <ion-col>\n                <ion-icon class="icon_upload" name="folder"></ion-icon>\n              </ion-col>\n            </ion-row>\n            <ion-row class="tabs">          \n              <ion-col>\n                Record\n              </ion-col>\n              <ion-col>\n                  Record\n              </ion-col>\n              <ion-col>\n                upload\n              </ion-col>\n            </ion-row>\n        </ion-grid> \n\n        <ion-item>\n          <ion-label floating>Title</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n\n        <h6 class="sub_content">Genre</h6>\n\n        <ion-grid>\n          <ion-row class="tabs">          \n            <ion-col>\n              <input type="radio" name="Music">Music\n            </ion-col>\n            <ion-col>\n              <input type="radio" name="Sports">Sports\n            </ion-col>\n            <ion-col>\n               <input type="radio" name="Video">Video\n            </ion-col>\n            <ion-col>\n               <input type="radio" name="VideoGame">Video Game\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <div class="groupButton">\n        </div>\n\n        <h6 class="sub_content">Description</h6>\n        <textarea class="upload_textarea"></textarea>\n\n        <div class="group1">       \n              <button ion-button block class="button-blue-upload"> UPLOAD</button>\n        </div> -->\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <ion-list class="user_list">\n        <ion-item *ngFor="let user of musicjson">\n          <ion-avatar item-start>\n            <img src="assets/imgs/person.jpg">\n          </ion-avatar>\n          <h2>{{user.name}}</h2>\n          <p><span><ion-icon name="ios-person-outline"></ion-icon>James</span><span><ion-icon name="ios-star-outline"></ion-icon>274 votes</span><span><ion-icon name="ios-trophy-outline"></ion-icon>Rank1</span></p>\n          <button ion-button icon-only clear (click)="view()">\n            <ion-icon name="ios-arrow-forward"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-list>\n    </ion-slide>\n  </ion-slides>\n<!--   <h4 class="upload_title">Upload</h4>\n\n  <div class="row tabs">\n    <button ion-button color="light" class="btn_tab" (click)="new= true;myupload= false;">NEW</button>\n    <button ion-button color="light" class="btn_tab" (click)="new= false;myupload= true;">MY UPLOAD</button>\n  </div>\n\n  <div *ngIf="new">\n    <ion-grid>\n        <ion-row class="tabs">          \n          <ion-col>\n            <ion-icon class="icon_upload" name="mic"></ion-icon>\n          </ion-col>\n          <ion-col>\n              <ion-icon class="icon_upload" name="videocam"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-icon class="icon_upload" name="folder"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row class="tabs">          \n          <ion-col>\n            Record\n          </ion-col>\n          <ion-col>\n              Record\n          </ion-col>\n          <ion-col>\n            upload\n          </ion-col>\n        </ion-row>\n    </ion-grid> \n\n    <ion-item>\n      <ion-label floating>Title</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <h6 class="sub_content">Genre</h6>\n\n    <ion-grid>\n      <ion-row class="tabs">          \n        <ion-col>\n          <input type="radio" name="Music">Music\n        </ion-col>\n        <ion-col>\n          <input type="radio" name="Sports">Sports\n        </ion-col>\n        <ion-col>\n           <input type="radio" name="Video">Video\n        </ion-col>\n        <ion-col>\n           <input type="radio" name="VideoGame">Video Game\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class="groupButton">\n      <button ion-button color="light" ng-click="Languages()" id="languages" class="btn_languages">\n        Select Languages&nbsp;&nbsp;&nbsp;<ion-icon name="arrow-dropright" class="group-icon_right"></ion-icon>\n      </button>\n    </div>\n\n    <h6 class="sub_content">Description</h6>\n    <textarea class="upload_textarea">\n      \n    </textarea>\n\n    <div class="group1">       \n          <button ion-button block class="button-blue-upload"> UPLOAD</button>\n    </div>\n  </div>\n\n  <div *ngIf="myupload">\n      <ion-grid>\n        <ion-row *ngFor="let user of musicjson">\n          <ion-col>\n             <img src="assets/imgs/person.jpg" class="images">\n          </ion-col>\n          <ion-col col-9 >\n              <a class="name">{{user.name}}</a><br><ion-icon class="ionc_color" name="person"></ion-icon>&nbsp;&nbsp;<a class="sub_name">Altius</a>&nbsp;&nbsp;<ion-icon class="ionc_color" name="star"></ion-icon>&nbsp;&nbsp;<a class="sub_name">213 Votes</a>&nbsp;&nbsp;<ion-icon class="ionc_color" name="trophy"></ion-icon>&nbsp;&nbsp;<a class="sub_name">Rank 1</a>\n          </ion-col>\n          <ion-col>\n            <br><ion-icon class="vote_icon" name="share"></ion-icon>\n          </ion-col>\n        </ion-row>\n    </ion-grid> \n  </div> -->\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/it/HSENGIV/CROON-ANDROID/src/pages/upload/upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UploadPage);
    return UploadPage;
}());

//# sourceMappingURL=upload.js.map

/***/ })

});
//# sourceMappingURL=1.js.map