import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform, AlertController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureAudioOptions, CaptureVideoOptions } from '@ionic-native/media-capture';
import { Storage } from '@ionic/storage';
import { Media, MediaObject } from '@ionic-native/media';
import { FileChooser } from '@ionic-native/file-chooser';
import { ModalController } from 'ionic-angular';
import { VotesProvider } from '../../providers/myvotes/myvotes';
//import { IOSFilePicker } from '@ionic-native/file-picker';
import { Globals } from '../../providers/global';


const MEDIA_FILES_KEY = 'mediaFiles';

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {
  
  @ViewChild('input') myInput ;
  @ViewChild('myvideo') myVideo: any;
  ID:number=8;
  uploaddeatils:any;
  user_id:any;

  public queryupload : string = 'new';
  
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
  mediaFiles = [];

  toggled: Boolean = false;
  someValue:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform,public alertCtrl:AlertController, private socialSharing: SocialSharing, private mediaCapture: MediaCapture, private storage: Storage, private media: Media,private fileChooser: FileChooser, public modalCtrl : ModalController, public upload: VotesProvider,public global:Globals){
  /*platform.registerBackButtonAction(() => {
    let confirm = this.alertCtrl.create({
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
    confirm.present();
          
   });*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      this.mediaFiles = JSON.parse(res) || [];
    })
    this.uploadget();
    this.user_id = localStorage.getItem("user_id");
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

  
  notification(){
    this.navCtrl.setRoot('NotificationPage');
  }

  public openModal(user,id){
    localStorage.setItem("ViewDetails",JSON.stringify(user));
    localStorage.setItem("Rank",id);
    var data = { message : 'hello world' };
    var modalPage = this.modalCtrl.create('ModalPage',data);
    modalPage.present();
  }

  new_to_myupload(e){
    if (e.direction == 2) {
      this.queryupload = 'myupload';     
    }
  }
  myupload_to_new(e){
    if (e.direction == 4) {
      this.queryupload = 'new';     
    }
  }

  compilemsg(index):string{
      //var msg = this.quotes[index].content + "-" + this.quotes[index].title ;
      var msg = "Hi iam  Crooner";
      return msg.concat(" \n Sent from Croon App !");
  }

  regularShare(index){
    var msg = this.compilemsg(index);
    this.socialSharing.share(msg, null, null, null);
  }


  Image(){
    let options: CaptureImageOptions = { limit: 3 };
    this.mediaCapture.captureImage(options)
    .then(res => {
      this.storeMediaFiles(res);
    }, (err: CaptureError) => console.error(err));
  }
  
  Audio(){
    let options: CaptureAudioOptions = { limit: 1,duration: 60};
    this.mediaCapture.captureAudio(options)
    .then(
      (data: MediaFile[]) => console.log(data),
      (err: CaptureError) => console.error(err)
    );
  }
  
  Video(){
    let options: CaptureVideoOptions = { limit: 1,duration: 60};
    this.mediaCapture.captureVideo(options)
    .then((res: MediaFile[]) => {
      /*let capturedFile = res[0];
      let fileName = capturedFile.name;
      let dir = capturedFile['localURL'].split('/');
      dir.pop();
      let fromDirectory = dir.join('/');      
      var toDirectory = this.file.dataDirectory;
      
      this.file.copyFile(fromDirectory , fileName , toDirectory , fileName).then((res) => {
        this.storeMediaFiles([{name: fileName, size: capturedFile.size}]);
      },err => {
        console.log('err: ', err);
      });*/
     },
     (err: CaptureError) => console.error(err));  
  }

  play(myFile) {
    if (myFile.name.indexOf('.wav') > -1) {
      /*const audioFile: MediaObject = this.media.create(myFile.localURL);
      audioFile.play();*/
    } else {
      /*let path = this.file.dataDirectory + myFile.name;
      let url = path.replace(/^file:\/\//, '');
      let video = this.myVideo.nativeElement;
      video.src = url;
      video.play();*/
    }
  }

  storeMediaFiles(files) {
    /*this.storage.get(MEDIA_FILES_KEY).then(res => {
      if (res) {
        let arr = JSON.parse(res);
        arr = arr.concat(files);
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
      } else {
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files))
      }
      this.mediaFiles = this.mediaFiles.concat(files);
    })*/
  }


  cancelSearch(event){
   this.someValue="";
   this.toggled = false;
   this.queryupload = 'new';
  }


  public toggle(): void {
     this.toggled = this.toggled ? false : true;
     this.queryupload = 'myupload';
     setTimeout(() => {
       this.myInput.setFocus();
     },150);
  }

  segmentClick(event){
   this.queryupload=event;
  }

  /*view(){
    this.navCtrl.setRoot('ViewPage');
    localStorage.setItem("previous", this.navCtrl.last().name)
  }*/

  Upload(){
   //Android
   this.fileChooser.open()
   .then(uri => console.log(uri))
   .catch(e => console.log(e));

   //iOS

   /*this.filePicker.pickFile()
  .then(uri => console.log(uri))
  .catch(err => console.log('Error', err));*/
  }

  uploadget(){
    this.upload.uploaddisp(this.ID)
     .subscribe(res=>{
       this.uploaddeatils=res;
     },error=>{
       console.log(error)
     })
  }
  
}
