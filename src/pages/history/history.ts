import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { HistoryProvider } from '../../providers/history/history';
import { Globals } from '../../providers/global';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage{


  @ViewChild('input') myInput ;
  
  public queryhistory : string = 'music';
  toggled: Boolean = false;
  someValue:any;
  Current:any;
  start_end_dates:any;
  start_date:any;
  end_date:any;
  history_music_values:any;
  types:any;
  genre_id:any;
  dates_id:any;
  history_music_Result:any;

  isenabled:boolean=false;

  btnColor_pre: string = '#002b3d';
  btnColor_current: string = '#fccb2b';
  btnColor_next: string = '#002b3d';

  colors_pre:string='#ffffff';
  colors_current:string='#002b3d';
  colors_next:string='#ffffff';

  constructor(public navCtrl: NavController,public service:HistoryProvider,public navParams: NavParams,public modalCtrl : ModalController,public global:Globals) {   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage'); 
    this.function_switch(1);  
  }


        function_switch(grade){
          switch(grade) { 
             case 1: {              
               // getting the dates of id 
                this.service.history_dates()
                .subscribe(
                res => {
                      this.start_end_dates=res;
                      this.Current=Object.keys(this.start_end_dates).length;
                      for(let i=0; i < Object.keys(this.start_end_dates).length;i++){
                        if(this.start_end_dates[i].current_status == 1){
                          this.start_date=this.start_end_dates[i].start_date;
                          this.end_date=this.start_end_dates[i].end_date;
                          this.dates_id=this.start_end_dates[i].id;

                          this.function_switch(2);
                        }
                      }
                },
                error => {
                    console.log(error);
                });              

                break; 
             } 
             case 2: {              
                  // getting the type of id
                  this.service.history_type()
                    .subscribe(
                    res => {
                        this.types=res;
                        for(let i=0; i < Object.keys(this.types).length;i++){          
                          if(this.types[i].genre_type == 'Music'){
                            this.genre_id=this.types[i].id;
                            
                            this.function_switch(3);
                          }
                        }
                    },
                    error => {
                        console.log(error);
                    });
                break; 
             } 
             case 3:{
                 // getting details
                 this.service.history_music_details(this.dates_id,this.genre_id)
                  .subscribe(
                    res => {         
                    console.log(res)             
                      this.history_music_values=res;          
                      if(Object.keys(this.history_music_values).length == 0){
                        this.history_music_Result=Object.keys(this.history_music_values).length;
                      }else{
                        this.history_music_Result=Object.keys(this.history_music_values).length;
                      }       
                    },
                    error => {
                        console.log(error);
                    });
                break;
             }    
             default: { 
                console.log("Invalid choice"); 
                break;              
             } 
          }
        }


         previous(name){

      this.btnColor_pre = '#fccb2b';
      this.btnColor_current = '#002b3d';
      this.btnColor_next = '#002b3d';

      this.colors_pre = '#002b3d';
      this.colors_current = '#ffffff';
      this.colors_next = '#ffffff';

      this.isenabled=true;



      this.service.history_paticular_dates(name,this.start_date)
      .subscribe(
        res => {   
          this.start_end_dates=res;
          if(this.start_end_dates!= null){    
            this.start_date=this.start_end_dates.start_date;
            this.end_date=this.start_end_dates.end_date; 
            this.dates_id=this.start_end_dates.id; 

                  this.service.history_music_details(this.dates_id,this.genre_id)
                  .subscribe(
                    res => {  
                      this.history_music_values=res;          
                      if(Object.keys(this.history_music_values).length == 0){
                        this.history_music_Result=Object.keys(this.history_music_values).length;
                      }else{
                        this.history_music_Result=Object.keys(this.history_music_values).length;
                      }     
                    },
                    error => {
                        console.log(error);
                    });
          }            
        },
        error => {
            console.log(error);
        });     

          
  }

  current(){   

      this.btnColor_pre = '#002b3d';
      this.btnColor_current = '#fccb2b';
      this.btnColor_next = '#002b3d'; 

      this.colors_pre = '#ffffff';
      this.colors_current = '#002b3d';
      this.colors_next = '#ffffff';

        this.service.history_dates()
                .subscribe(
                res => {
                      this.start_end_dates=res;
                      this.Current=Object.keys(this.start_end_dates).length;
                      for(let i=0; i < Object.keys(this.start_end_dates).length;i++){
                        if(this.start_end_dates[i].current_status == 1){
                          this.start_date=this.start_end_dates[i].start_date;
                          this.end_date=this.start_end_dates[i].end_date;
                          this.dates_id=this.start_end_dates[i].id;

                            this.isenabled=false;

                                this.service.history_music_details(this.dates_id,this.genre_id)
                                .subscribe(
                                  res => {   
                                    this.history_music_values=res;  
                                    if(Object.keys(this.history_music_values).length == 0){
                                      this.history_music_Result=Object.keys(this.history_music_values).length;
                                    }else{
                                      this.history_music_Result=Object.keys(this.history_music_values).length;
                                    }          
                                  },
                                  error => {
                                      console.log(error);
                                  });
                        }
                      }
                },
                error => {
                    console.log(error);
                });        
  }

  next(name){

      this.btnColor_pre = '#002b3d';
      this.btnColor_current = '#002b3d';
      this.btnColor_next = '#fccb2b'; 

      this.colors_pre = '#ffffff';
      this.colors_current = '#ffffff';
      this.colors_next = '#002b3d';

      this.service.history_paticular_dates(name,this.start_date)
      .subscribe(
        res => {           
          this.start_end_dates=res;    
          if(this.start_end_dates!= null){
            this.start_date=this.start_end_dates.start_date;
            this.end_date=this.start_end_dates.end_date;
            this.dates_id=this.start_end_dates.id; 

                     this.service.history_music_details(this.dates_id,this.genre_id)
                      .subscribe(
                        res => {   
                            this.history_music_values=res;          
                            if(Object.keys(this.history_music_values).length == 0){
                              this.history_music_Result=Object.keys(this.history_music_values).length;
                            }else{
                              this.history_music_Result=Object.keys(this.history_music_values).length;
                            }          
                        },
                        error => {
                            console.log(error);
                        });
          }             
        },
        error => {
            console.log(error);
        }); 

       
  }

 
  type(status){ 
    this.service.history_type()
      .subscribe(
      res => {
          this.types=res;
          for(let i=0; i < Object.keys(this.types).length;i++){          
            if(this.types[i].genre_type == status){
              this.genre_id=this.types[i].id;

                       this.service.history_music_details(this.dates_id,this.genre_id)
                      .subscribe(
                        res => {   
                          this.history_music_values=res;          
                          if(Object.keys(this.history_music_values).length == 0){
                            this.history_music_Result=Object.keys(this.history_music_values).length;
                          }else{
                            this.history_music_Result=Object.keys(this.history_music_values).length;
                          }         
                        },
                        error => {
                            console.log(error);
                        });  
            }
          }
      },
      error => {
          console.log(error);
      });

        

  }   





  music_sports(e){
     if (e.direction == 2) {      
      this.queryhistory = 'sports';
            this.service.history_type()
            .subscribe(
            res => {
                this.types=res;
                for(let i=0; i < Object.keys(this.types).length;i++){          
                  if(this.types[i].genre_type == 'Sports'){
                    this.genre_id=this.types[i].id;
                    
                    this.function_switch(3);
                  }
                }
            },
            error => {
                console.log(error);
            });     
    }
  }

  sports_dance(e){
    if (e.direction == 2) {      
      this.queryhistory = 'dance';
            this.service.history_type()
            .subscribe(
            res => {
                this.types=res;
                for(let i=0; i < Object.keys(this.types).length;i++){          
                  if(this.types[i].genre_type == 'Dance'){
                    this.genre_id=this.types[i].id;
                    
                    this.function_switch(3);
                  }
                }
            },
            error => {
                console.log(error);
            });
    }
    if (e.direction == 4) {      
      this.queryhistory = 'music';
            this.service.history_type()
            .subscribe(
            res => {
                this.types=res;
                for(let i=0; i < Object.keys(this.types).length;i++){          
                  if(this.types[i].genre_type == 'Music'){
                    this.genre_id=this.types[i].id;
                    
                    this.function_switch(3);
                  }
                }
            },
            error => {
                console.log(error);
            });
    }
  }

  dance_sports(e){
    if (e.direction == 4) {
      this.queryhistory = 'sports';
            this.service.history_type()
            .subscribe(
            res => {
                this.types=res;
                for(let i=0; i < Object.keys(this.types).length;i++){          
                  if(this.types[i].genre_type == 'Sports'){
                    this.genre_id=this.types[i].id;
                    
                    this.function_switch(3);
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
   this.function_switch(1);
  }


  public toggle(): void {
     this.toggled = this.toggled ? false : true;
     setTimeout(() => {
       this.myInput.setFocus();
     },150);
  }
 

  public openModal(user,id){
    localStorage.setItem("ViewDetails",JSON.stringify(user));
    localStorage.setItem("Rank",id);
    var data = { message : 'hello world' };
    var modalPage = this.modalCtrl.create('ModalPage',data);
    modalPage.present();
  }

  notification(){
    this.navCtrl.setRoot('NotificationPage');
  }

   /*view(user){
    localStorage.setItem("ViewDetails",JSON.stringify(user));
    this.navCtrl.push('ViewPage');
    localStorage.setItem("previous", this.navCtrl.last().name)
  }*/


}
 
  

