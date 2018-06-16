import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Globals } from '../../providers/global';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {

  constructor(public http: Http,public global:Globals) {
    console.log('Hello HomeProvider Provider');
  }

  homeGenre(id:any):Observable<any> {
  return this.http.get(this.global.baseUrl + '/users/toplist?genre_id='+id)
    .map((response:Response) =>response.json())
  }

  homeSearch(genreId:number,keyword:any):Observable<any> {
  return this.http.get(this.global.baseUrl + '/users/search_toplist?genre_id='+genreId+'&&keyword='+keyword)
    .map((response:Response) =>response.json())
  }


  home_type(){
    return this.http.get(this.global.baseUrl+'/users/genres');    
  }

}
