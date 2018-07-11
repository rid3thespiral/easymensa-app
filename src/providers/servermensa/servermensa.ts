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
  apiKey = 'e5d2771d89306c93c264abd203751bd413d6cf28';
  urlBase: string = 'https://cors.io/?http://dashpro.aitech.vision/dashboard/api/devices/mensa10/';
  log: Observable<any>;

  constructor(public http: HttpClient) {

  }

  public getConfigurationMensa(){
    console.log(this.urlBase+'configuration/'+this.apiKey)
    return this.http.get(this.urlBase+'configuration/'+this.apiKey).map(res => res)};

  public getSensorsMensa(){
    return this.http.get(this.urlBase+'sensors/'+this.apiKey);
  }

  public getDataQueue(begin,end){
    let url = this.urlBase+'sensors/129/events/'+this.apiKey+'/?type=11&begin='+begin+'&end='+end;
    console.log(url);
    return this.http.get(url);
  }

  public getDataQueueMinute(begin,end){
    let url = this.urlBase+'sensors/129/events/'+this.apiKey+'/?type=11&begin='+begin+'&end='+end+'&aggregation_mode=by_minute';
    console.log(url);
    return this.http.get(url);
  }


  public getDataQueueHour(begin,end){
    let url = this.urlBase+'sensors/129/events/'+this.apiKey+'/?type=11&begin='+begin+'&end='+end+'&aggregation_mode=by_hour';
    console.log(url);
    return this.http.get(url);
  }

  public getDataQueueDay(begin,end){
    let url = this.urlBase+'sensors/129/events/'+this.apiKey+'/?type=11&begin='+begin+'&end='+end+'&aggregation_mode=by_day';
    console.log(url);
    return this.http.get(url);
  }

  public getDataQueueWeek(begin,end){
    let url = this.urlBase+'sensors/129/events/'+this.apiKey+'/?type=11&begin='+begin+'&end='+end+'&aggregation_mode=by_week';
    console.log(url);
    return this.http.get(url);
  }



}
