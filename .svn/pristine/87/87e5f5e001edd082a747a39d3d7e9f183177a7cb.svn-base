import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ViewProvider } from '../../providers/view/view';

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  
  UserDetails:any; 
  ID:number; 
  setCmts:any;
  Comments:any;
  voteIcon:boolean; 

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform, private socialSharing: SocialSharing,private viewservice:ViewProvider) {

   platform.registerBackButtonAction(() => {
   
         this.navCtrl.setRoot('HomePage');

   });
   this.UserDetails=JSON.parse(localStorage.getItem("ViewDetails"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
    this.getCmts();
    this.voteStatus();
  }
  
  musicjson:any = [
      { name: 'Jilles', age: 21 },
      { name: 'Lisa', age: 18 }
    ];

  back(){
    
    if(localStorage.getItem("previous") == "MyvotesPage")
          this.navCtrl.setRoot('MyvotesPage');
    else if(localStorage.getItem("previous") == "HomePage")
          this.navCtrl.setRoot('HomePage');
    else if(localStorage.getItem("previous") == "UploadPage")
          this.navCtrl.setRoot('UploadPage');
    else if(localStorage.getItem("previous") == "HistoryPage")
          this.navCtrl.setRoot('HistoryPage');
    
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
  }
*/
  updateVote(){
    let data={
              "user_id": this.UserDetails.user_id,
              "upload_id": this.UserDetails.id
             }
    this.viewservice.voteUpdate(data)
     .subscribe(res=>{
       this.voteIcon=true;
       console.log(res)
     },error=>{
       console.log(error)
     })
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
                "user_id": this.UserDetails.user_id,
                "upload_id": this.UserDetails.id,
                "message":this.Comments 
              };

     this.viewservice.uploadCmts(data)
     .subscribe(res=>{
       if(res.id!=null){
         console.log('Comments updated')
         this.Comments ="";
       }else{
         console.log('Comments updated is failed')
       }
     },error=>{
       console.log(error)
     })
   }

   voteStatus(){
     this.viewservice.Votestatus(this.UserDetails.user_id,this.UserDetails.id)
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
