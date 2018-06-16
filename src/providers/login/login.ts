import { Injectable } from '@angular/core';
import { Globals } from '../../providers/global';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginProvider {

  constructor(public global:Globals,public http:HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

 login(emailid: string, password: string){
        return this.http.post(this.global.baseUrl+'/users/login', { "email_id" : emailid, "password" : password });
    
  }
}
