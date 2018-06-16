import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform, AlertController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ModalController } from 'ionic-angular';
import { VotesProvider } from '../../providers/myvotes/myvotes';
import { Globals } from '../../providers/global';

@IonicPage()
@Component({
  selector: 'page-myvotes',
  templateUrl: 'myvotes.html',
})
export class MyvotesPage {
  
  @ViewChild('input') myInput ;

  public queryhistory : string = 'music';
  today:any;
  ID:number=8;
  votesdetails:any;
  user_id:any;

  /*musicjson:any = [
      { name: 'Jilles', age: 21 },
      { name: 'Todd', age: 24 },
      { name: 'Lisa', age: 18 },
      { name: 'Jilles', age: 21 },
      { name: 'Todd', age: 24 },
      { name: 'Lisa', age: 18 },
      { name: 'Jilles', age: 21 },
      { name: 'Todd', age: 24 },
      { name: 'Lisa', age: 18 }
    ];*/
  
  toggled: Boolean = false;
  someValue:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform,public alertCtrl:AlertController, private socialSharing: SocialSharing, public modalCtrl : ModalController, public votes: VotesProvider,public global:Globals) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyvotesPage');
     this.myvotesget();
     this.user_id = localStorage.getItem("user_id");
  }

  compilemsg(index):string{
      //var msg = this.quotes[index].content + "-" + this.quotes[index].title ;
      var msg = "Hi i am Crooner";
      return msg.concat(" \n Sent from Croon App !");
  }

  regularShare(index){
    var msg = this.compilemsg(index);
    this.socialSharing.share(msg, null, null, null);
  }


  cancelSearch(event){
   this.someValue="";
   this.toggled = false;
   this.myvotesget();
  }


  public toggle(): void {
     this.toggled = this.toggled ? false : true;
     setTimeout(() => {
       this.myInput.setFocus();
     },150);
  }

   goto_login(){
      this.navCtrl.setRoot('LoginPage');
      let elements = document.querySelectorAll(".tabbar");

      if (elements != null) {
          Object.keys(elements).map((key) => {
              elements[key].style.display = 'none';
          });
      }
    }
  
  public openModal(user,id){
    localStorage.setItem("ViewDetails",JSON.stringify(user));
    localStorage.setItem("Rank",id);
    var data = { message : 'hello world' };
    var modalPage = this.modalCtrl.create('ModalPage',data);
    modalPage.present();
   /* localStorage.setItem("ViewDetails",JSON.stringify(user));
    this.navCtrl.push('ViewPage');
    localStorage.setItem("previous", this.navCtrl.last().name)*/
  }

  notification(){
    this.navCtrl.setRoot('NotificationPage');
  }

  myvotesget(){
    this.votes.votedisp(this.ID)
     .subscribe(res=>{
       this.votesdetails=res;
     },error=>{
       console.log(error)
     })
  }

  /*view(){
    this.navCtrl.setRoot('ViewPage');
    localStorage.setItem("previous", this.navCtrl.last().name)
  }*/
}
