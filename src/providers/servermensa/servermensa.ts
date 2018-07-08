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
  apiKey = '2487fadc0b46b34cc4c41359ad98b76627e95206';
  url: string = 'https://cors.io/?http://dashpro.aitech.vision/dashboard/api/devices/mensa/';
  log: Observable<any>;

  constructor(public http: HttpClient) {

  }

  public getConfigurationMensa(){
    console.log(this.url+'configuration/'+this.apiKey)
    return this.http.get(this.url+'configuration/'+this.apiKey).map(res => res)};

  public getSensorsMensa(){
    return this.http.get(this.url+'sensors/'+this.apiKey);
  }

  public getDataEnter(begin,end){
    console.log(this.url+'sensors/2/events/'+this.apiKey+'/?type=14&begin='+begin+'&end='+end)
    return this.http.get(this.url+'sensors/2/events/'+this.apiKey+'/?type=14&begin='+begin+'&end='+end);
  }

  public getDataExit(begin,end){
    console.log(this.url+'sensors/33/events/'+this.apiKey+'/?type=14&begin='+begin+'&end='+end)
    return this.http.get(this.url+'sensors/33/events/'+this.apiKey+'/?type=14&begin='+begin+'&end='+end);
  }


}
