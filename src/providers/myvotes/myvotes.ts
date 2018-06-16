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
export class VotesProvider {

  constructor(public http: Http,public global:Globals) {
    console.log('Hello VotesProvider Provider');
  }

  votedisp(id:any):Observable<any> {
  return this.http.get(this.global.baseUrl + '/users/myvotes?user_id='+id)
    .map((response:Response) =>response.json())
  }

  uploaddisp(id:any):Observable<any> {
  return this.http.get(this.global.baseUrl + '/users/myuploads?user_id='+id)
    .map((response:Response) =>response.json())
  }

}