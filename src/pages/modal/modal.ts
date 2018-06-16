import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ModalController, ViewController } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { ViewProvider } from '../../providers/view/view';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  UserDetails:any; 
  ID:number; 
  setCmts:any;
  Comments:any;
  voteIcon:boolean; 
  userId:any;
  rank:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform, private socialSharing: SocialSharing, public viewCtrl : ViewController, public modalCtrl : ModalController,private viewservice:ViewProvider,private toast: Toast) {

  	/*platform.registerBackButtonAction(() => {
   
         this.navCtrl.setRoot('HomePage');

   });*/
    this.UserDetails=JSON.parse(localStorage.getItem("ViewDetails"));
    this.rank=localStorage.getItem("Rank");
    if(localStorage.getItem("user_id")!=null){
     this.userId=localStorage.getItem("user_id");
    }else{
     this.userId=null; 
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
    this.getCmts();
    this.voteStatus();
  }

  /*musicjson:any = [
      { name: 'Jilles', age: 21 },
      { name: 'Lisa', age: 18 }
  ];*/


  public closeModal(){
    let page=localStorage.getItem("pageNav");
    /*if(page=='HomePage'){
     this.navCtrl.push('HomePage');
    }else if(page=='UploadPage'){
      this.navCtrl.push('UploadPage');
    }else if(page=='MyvotesPage'){
      this.navCtrl.push('MyvotesPage');
    }else if(page=='HistoryPage'){
      this.navCtrl.push('HistoryPage');
    }*/
    this.viewCtrl.dismiss();
    /*this.appCtrl.getRootNav().push(SecondPage);*/

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

  /*starClick(){
    this.visible = this.visible ? false : true;
  }*/

  updateVote(){
    if(localStorage.getItem("user_id")!=null){
      let data={
              "user_id": this.userId,
              "upload_id": this.UserDetails.id
             }
    this.viewservice.voteUpdate(data)
     .subscribe(res=>{
         if(res._body=='vote'){
          this.voteIcon=true;  
          this.UserDetails.votes.length=this.UserDetails.votes.length+1; 
         }else if(res._body=='unvote'){
          this.voteIcon=false;
          this.UserDetails.votes.length=this.UserDetails.votes.length-1;     
         }else{

         }
     },error=>{
       console.log(error)
     })  
    }else{
      /*console.log('test')
      let toast = this.toastCtrl.create({
       message: 'You need to login to vote',
       duration: 3000,
       position: 'top'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });*/
      this.toast.show('You need to login to vote', '3000', 'bottom').subscribe(
        toast => {
          console.log(toast);
        }
      );
    }
  }

  getCmts(){
    this.viewservice.getComments(this.UserDetails.id)
     .subscribe(res=>{
       if(res==null || res==[]){
         this.setCmts=[];
       }else{
         this.setCmts=res;  
       }
       console.log(this.setCmts)
     },error=>{
       console.log(error)
     })
   }

   uploadCmts(){
     let data={
                "user_id": this.userId,
                "upload_id": this.UserDetails.id,
                "message":this.Comments 
              };

     this.viewservice.uploadCmts(data)
     .subscribe(res=>{
       if(res.id!=null){
         console.log(res)
         this.Comments ="";
         this.getCmts();
       }else{
         console.log('Comments updated is failed')
       }
     },error=>{
       console.log(error)
     })
   }

   voteStatus(){
     this.viewservice.Votestatus(this.userId,this.UserDetails.id)
     .subscribe(res=>{
       if(res==true){
          this.voteIcon=true;
       }else{
          this.voteIcon=false;
       }
       console.log(res)
     },error=>{
       console.log(error)
     })
   }

}
