/* import { ChangepasswordPage } from './../changepassword/changepassword';
import { AboutPage } from './../about/about';
import { SettingsPage } from './../settings/settings';
import { HomePage } from './../home/home'; */


import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon?: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

	rootPage = 'TabsPage';
  user_id:any;

	@ViewChild(Nav) nav: Nav; 

	pages: PageInterface[] = [
        { title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0,icon: 'ios-home-outline'},
        { title: 'Settings', pageName: 'SettingsPage',icon: 'ios-settings-outline'},
        { title: 'About', pageName: 'AboutPage',icon: 'ios-information-circle-outline'},
        { title: 'Login', pageName: 'LoginPage',icon: 'ios-log-in-outline'}
        /*,
        { title: 'Change Password', pageName: 'ChangepasswordPage',icon: 'ios-unlock-outline'} ,
        { title: 'Logout', pageName: 'LoginPage',icon: 'ios-power'}*/
  ];

  constructor(public navCtrl: NavController, public navParams: Nav) {
  }

  ionViewDidLoad() {
      this.user_id = localStorage.getItem("user_id");
      console.log(this.user_id)
  }

  openPage(page: PageInterface) {
    let params = {};
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    } 
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

}
