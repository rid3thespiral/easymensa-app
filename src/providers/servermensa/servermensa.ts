import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServermensaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServermensaProvider {
  apiKey = '1e4a0bdb251c64e4';
  url: string;
  log: Observable<any>;

  constructor(public http: HttpClient) {
    console.log('Hello ServermensaProvider Provider');
    this.url = 'https://jsonplaceholder.typicode.com/users';
  }

  public getExample() {
    return this.http.get('http://dashboard.aitech.vision:8080/api/devices/key=e0c54bcdf2e11d8a2b65a3a7b4212a63745f2a3c').map( res => res);
    
  }

}
