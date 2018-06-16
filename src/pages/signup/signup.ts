import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';

import { LoginPage } from './../login/login';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform) {
   /*  platform.registerBackButtonAction(() => {   
          this.navCtrl.setRoot(LoginPage);          
   });*/

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  gotologin(){
  	this.navCtrl.setRoot(LoginPage);
  }
  back(){
    this.navCtrl.setRoot(LoginPage);
  }
}
