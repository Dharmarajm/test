webpackJsonp([4],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyvotesPageModule", function() { return MyvotesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myvotes__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyvotesPageModule = /** @class */ (function () {
    function MyvotesPageModule() {
    }
    MyvotesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myvotes__["a" /* MyvotesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myvotes__["a" /* MyvotesPage */]),
            ],
        })
    ], MyvotesPageModule);
    return MyvotesPageModule;
}());

//# sourceMappingURL=myvotes.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyvotesPage; });
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
 * Generated class for the MyvotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyvotesPage = /** @class */ (function () {
    function MyvotesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyvotesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyvotesPage');
    };
    MyvotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myvotes',template:/*ion-inline-start:"/home/it/HSENGIV/CROON-ANDROID/src/pages/myvotes/myvotes.html"*/'<ion-header class="bg"> \n  <ion-grid>\n    <ion-row>\n      <ion-col col-1>\n        <ion-icon menuToggle class="icon_header" name="menu"></ion-icon>\n      </ion-col>\n      <ion-col col-9>\n        <img src="assets/imgs/logo.png" class="images_header">\n      </ion-col>\n      <ion-col col-1>\n        <ion-icon class="icon_header" name="notifications-outline"></ion-icon>\n      </ion-col>\n      <ion-col col-1>\n        <ion-icon class="icon_header" name="power"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<ion-content>\n	<img src="assets/imgs/music.jpg" class="vote_images">\n\n	<ion-grid>\n	    <ion-row>     \n	      <ion-col col-8>\n	    	<h3 class="vote_title">Jilles</h3>\n			<ion-icon class="ionc_color" name="person"></ion-icon>&nbsp;<a class="sub_name">Altius</a>&nbsp;<ion-icon class="ionc_color" name="star"></ion-icon>&nbsp;<a class="sub_name">213 Votes</a>&nbsp;<ion-icon class="ionc_color" name="trophy"></ion-icon>&nbsp;<a class="sub_name">Rank 1</a>\n	      </ion-col>\n	      <ion-col col-2>\n	        <br><br><ion-icon class="vote_icon" name="star-outline"></ion-icon>vote\n	      </ion-col>\n	      <ion-col col-2>\n	        <br><br><ion-icon class="vote_icon" name="share"></ion-icon>share\n	      </ion-col>\n	    </ion-row>\n    </ion-grid>\n\n	<ion-grid>\n        <ion-row>\n          <ion-col col-2>\n             <img src="assets/imgs/person.jpg" class="images">\n          </ion-col>\n          <ion-col col-10>\n              <a class="name">I Like this song</a><br><a class="sub_name">Altius</a>&nbsp;&nbsp;<a class="sub_name">1 min ago</a>\n          </ion-col>         \n        </ion-row>\n        <ion-row>\n          <ion-col col-2>\n             <img src="assets/imgs/person.jpg" class="images">\n          </ion-col>\n          <ion-col col-10>\n              <a class="name">I Like this song</a><br><a class="sub_name">Altius</a>&nbsp;&nbsp;<a class="sub_name">1 min ago</a>\n          </ion-col>         \n        </ion-row>\n        <ion-row>\n          <ion-col col-2>\n             <img src="assets/imgs/person.jpg" class="images">\n          </ion-col>\n          <ion-col col-10>\n              <a class="name">I Like this song</a><br><a class="sub_name">Altius</a>&nbsp;&nbsp;<a class="sub_name">1 min ago</a>\n          </ion-col>         \n        </ion-row>\n    </ion-grid> \n\n  \n</ion-content>\n'/*ion-inline-end:"/home/it/HSENGIV/CROON-ANDROID/src/pages/myvotes/myvotes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MyvotesPage);
    return MyvotesPage;
}());

//# sourceMappingURL=myvotes.js.map

/***/ })

});
//# sourceMappingURL=4.js.map