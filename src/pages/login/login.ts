import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform, AlertController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { LoginProvider } from '../../providers/login/login';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  public unregisterBackButtonAction: any;
  
  isAvailable: Boolean = false;
  confirm:any;
  login_details:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:LoginProvider,public platform:Platform,public alertCtrl:AlertController) {
    platform.registerBackButtonAction(() => {
    if(!this.isAvailable){ //checking if it is false then dismiss() the no internet alert
        this.confirm.dismiss();
      }else{
       this.isAvailable =true;
       this.confirm = this.alertCtrl.create({
         title: 'Croon',
         message: 'Do you want to exit?',
         buttons: [
           {
             text: 'Cancel',
             handler: () => {
               console.log('Disagree clicked');
             }
           },
           {
             text: 'OK',
             handler: () => {
             platform.exitApp();
               console.log('Agree clicked');
             }
           }
         ]
       });
       this.confirm.present();
      }      
   });
  }

  ionViewDidLoad() {
    this.initializeBackButtonCustomHandler();
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewWillLeave() {
      // Unregister the custom back button action for this page
      this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }
 
  initializeBackButtonCustomHandler(): void {
      this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function(event){
          console.log('Prevent Back Button Page Change');
      }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
  }

  
  signup(){
    this.navCtrl.setRoot('SignupPage');
  }
  forgotpassword(){
    this.navCtrl.setRoot('ForgotpasswordPage');
  }

  login: any = {emailid:'',password:''};
   
    user:any;
    doLogin(){

    console.log(this.login.emailid)
    if(this.login.emailid == ''){
        alert("Please enter the email-id");
    }else if(this.login.password == ''){
        alert("Please enter the password");
    }else{      
      this.service.login(this.login.emailid, this.login.password)
            .subscribe(
            res => {

                this.login_details=res;
                if(this.login_details == false){
                  alert("Invaild email-id & password")
                }else if(this.login_details.id > 0){
                  this.navCtrl.setRoot('MenuPage');
                  this.navCtrl.push('MenuPage')
                  localStorage.setItem("user_id",this.login_details.id);
                //this.navCtrl.setRoot('ProfilePage');
                } 
            },
            error => {
                console.log(error);
            });
       }
    } 



}

