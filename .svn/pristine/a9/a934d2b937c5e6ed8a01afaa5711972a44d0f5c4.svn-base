import { Component, ViewChild } from '@angular/core'; /*AfterViewInit, Renderer*/
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';
/*import { ScrollHideDirective } from './scroll-hide';
import { ScrollHideConfig } from './app/scroll-hide';*/
import { ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../../providers/global';

/*import { ViewPage } from './../view/view';*/

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   
  //headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 44 };

   //@ViewChild('input') myInput ;
   
   @ViewChild('myContent') myContent;

   public queryhome : string = 'music';

   public unregisterBackButtonAction: any;
   types:any;
   ID:any;

   
   musicjson:any = [
      { name: 'Jilles', age: 21 },
      { name: 'Todd', age: 24 },
      { name: 'Lisa', age: 18 },
      { name: 'Jilles', age: 21 },
      { name: 'Todd', age: 24 },
      { name: 'Lisa', age: 18 },
      { name: 'Jilles', age: 21 },
      { name: 'Todd', age: 24 },
      { name: 'Lisa', age: 18 }
  ];

  isAvailable: Boolean = false;
  confirm:any;
  toggled: Boolean = false;
  someValue:any;
  //ID:number=1;
  setGenre:any[]=[];
  itemlength:number;
  enableRefresh:any;
  loadingMap:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform,public alertCtrl:AlertController, public modalCtrl : ModalController, public http: HttpClient,private Homeservice:HomeProvider,public global:Globals) {
   platform.registerBackButtonAction(() => {
    /*if(!this.isAvailable){ //checking if it is false then dismiss() the no internet alert
      this.isAvailable =true;*/
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
       
      /*}else{
       this.confirm.dismiss();
      } */     
   });
  }

  
  ionViewDidLoad() {
    this.initializeBackButtonCustomHandler();
   // this.getGenre();

     this.Homeservice.home_type()
            .subscribe(
            res => {
                this.types=res.json();
                for(let i=0; i < Object.keys(this.types).length;i++){          
                  if(this.types[i].genre_type == 'Music'){
                    this.ID=this.types[i].id;
                    this.getGenre();
                  }
                }
            },
            error => {
                console.log(error);
            });
  }

  /*ngAfterViewInit() {
   setTimeout(()=>{
      this.loadingMap = true;
      if (this.loadingMap == true) {
        this.renderer.listen(this.myContent.nativeElement, 'scroll', (event) => {
         let scrollTop = event.target.scrollTop;
          console.log(scrollTop)
          if (scrollTop > 0) {
            this.enableRefresh = false;
          } else {
            this.enableRefresh = true;
          }
      
         });
      }
    },3000);
  }*/

 
  ionViewWillLeave() {
      // Unregister the custom back button action for this page
      this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }

 
  initializeBackButtonCustomHandler(): void {
      this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function(event){
          console.log('Prevent Back Button Page Change');
      }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
  }
  
  public openModal(user,id){
    localStorage.setItem("ViewDetails",JSON.stringify(user));
    localStorage.setItem("Rank",id);
    var data = { message : 'hello world' };
    var modalPage = this.modalCtrl.create('ModalPage',data);
    modalPage.present();
    localStorage.setItem("pageNav",this.navCtrl.last().name)
    /*localStorage.setItem("previous", this.navCtrl.last().name)*/
   /* localStorage.setItem("ViewDetails",JSON.stringify(user));
    this.navCtrl.push('ViewPage');
    localStorage.setItem("previous", this.navCtrl.last().name)*/
  }
  
	
  notification(){
    this.navCtrl.setRoot('NotificationPage');
  }

 
  music_to_sports(e){
     if (e.direction == 2) {      
      this.queryhome = 'sports';
            this.Homeservice.home_type()
            .subscribe(
            res => {
                this.types=res.json();
                for(let i=0; i < Object.keys(this.types).length;i++){          
                  if(this.types[i].genre_type == 'Sports'){
                    this.ID=this.types[i].id;
                    this.getGenre();
                  }
                }
            },
            error => {
                console.log(error);
            });     
    }
  }

  sports_to_dance(e){
    if (e.direction == 2) {      
      this.queryhome = 'dance';
            this.Homeservice.home_type()
            .subscribe(
            res => {
                this.types=res.json();
                for(let i=0; i < Object.keys(this.types).length;i++){          
                  if(this.types[i].genre_type == 'Dance'){
                    this.ID=this.types[i].id;
                    this.getGenre();
                  }
                }
            },
            error => {
                console.log(error);
            });
    }
    if (e.direction == 4) {      
      this.queryhome = 'music';
            this.Homeservice.home_type()
            .subscribe(
            res => {
                this.types=res.json();
                for(let i=0; i < Object.keys(this.types).length;i++){          
                  if(this.types[i].genre_type == 'Music'){
                    this.ID=this.types[i].id;
                    this.getGenre();                    
                  }
                }
            },
            error => {
                console.log(error);
            });
    }
  }

  dance_to_sports(e){
    if (e.direction == 4) {
      this.queryhome = 'sports';
            this.Homeservice.home_type()
            .subscribe(
            res => {
                this.types=res.json();
                for(let i=0; i < Object.keys(this.types).length;i++){          
                  if(this.types[i].genre_type == 'Sports'){
                    this.ID=this.types[i].id;
                    this.getGenre();                    
                  }
                }
            },
            error => {
                console.log(error);
            });
    }
  } 

  
   
  cancelSearch(event){
   this.someValue="";
   this.toggled = false;
   this.getGenre();
  }

  /*clearSearch(event){
   // set val to the value of the searchbar
    let val = event.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.setGenre = this.setGenre.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }*/

  public toggle(): void {
     //this.toggled = this.toggled ? false : true;
     /*setTimeout(() => {
       this.myInput.setFocus();
     },150);*/
     this.navCtrl.push('SearchPage')
  }

  getGenre(){
    this.Homeservice.homeGenre(this.ID)
     .subscribe(res=>{
       this.setGenre=res;
       console.log(this.setGenre)
     },error=>{
       console.log(error)
     })
  }


  
  genreClick(id){
    this.ID=id;
    this.getGenre();
  }



  /*doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }  */

  searchHome(){
   if(this.someValue!=undefined){
     this.toggled = false;
     this.Homeservice.homeSearch(this.ID,this.someValue)
     .subscribe(res=>{
       this.someValue="";
       this.setGenre=res;
       console.log(this.setGenre)
     },error=>{
       console.log(error)
     })
   } 
  }
/*
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getGenre();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }*/


}




