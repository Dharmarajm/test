import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';

 import { LoginPage } from './../login/login';


@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }

  goto_login(){
		this.navCtrl.setRoot(LoginPage);
	}
 
  back(){
    this.navCtrl.setRoot(LoginPage);
  }
}