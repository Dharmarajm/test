import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,,Platform } from 'ionic-angular';
import { LoginPage } from './../login/login';
import { MenuPage } from '../menu/menu';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform) {
   /*let backAction =  platform.registerBackButtonAction(() => {
        this.navCtrl.pop();
        backAction();
      },2) */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  
  dashboard(){
  	this.navCtrl.setRoot(MenuPage);
  }

  back(){
    this.navCtrl.setRoot(LoginPage);
  }

}
