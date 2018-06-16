import { Component , ViewChild } from '@angular/core';
import { Platform , App, AlertController,NavController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HockeyApp } from 'ionic-hockeyapp';


//import { LoginPage } from '../pages/login/login';
//import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MenuPage;
  @ViewChild('myNav') nav: NavController
  constructor(public platform: Platform, statusBar: StatusBar,public splashScreen: SplashScreen, hockeyapp:HockeyApp, app:App, public alertCtrl: AlertController) {
    platform.ready().then(() => {	 

        // The Android ID of the app as provided by the HockeyApp portal. Can be null if for iOS only.
    let androidAppId = '3f6000180b044597b1f44364fef8b3a0';
    // The iOS ID of the app as provided by the HockeyApp portal. Can be null if for android only.
    let iosAppId = 'cdbaa6ede0d94964bb6c443bd2accce3';
    // Specifies whether you would like crash reports to be automatically sent to the HockeyApp server when the end user restarts the app.
    let autoSendCrashReports = false;
    // Specifies whether you would like to display the standard dialog when the app is about to crash. This parameter is only relevant on Android.
    let ignoreCrashDialog = true;
 
    hockeyapp.start(androidAppId, iosAppId, autoSendCrashReports, ignoreCrashDialog);   
      /*statusBar.styleDefault();*/
      statusBar.styleLightContent()
      statusBar.backgroundColorByHexString('#01222d');
      splashScreen.hide();
    
    platform.registerBackButtonAction(() => {
 
      /*let nav = app.getRootNav();
      let view = this.nav.getActive();
      if (nav.canGoBack()) {
        nav.pop();
      } else if (view.component.name == "HomePage") {
        if (nav.canGoBack()) {
         nav.pop();
        }else{
          this.platform.exitApp();
        }
      }else{
        nav.setRoot(this.rootPage);
      }*/
    })
   })
    this.initializeApp();
 
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // do whatever you need to do here.
      setTimeout(() => {
        this.splashScreen.hide();
      }, 100);
    });
  }


}

