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
  url: string = 'https://cors.io/?http://dashpro.aitech.vision/dashboard/api/devices/mensa10/';
  log: Observable<any>;

  constructor(public http: HttpClient) {

  }

  public getConfigurationMensa(){
    console.log(this.url+'configuration/'+this.apiKey)
    return this.http.get(this.url+'configuration/'+this.apiKey).map(res => res)};

  public getSensorsMensa(){
    return this.http.get(this.url+'sensors/'+this.apiKey);
  }

  public getDataQueue(begin,end){
    console.log(this.url+'sensors/129/events/'+this.apiKey+'/?type=11&begin='+begin+'&end='+end)
    return this.http.get(this.url+'sensors/129/events/'+this.apiKey+'/?type=11&begin='+begin+'&end='+end);
  }

  public getDataQueueMinute(begin,end){
    console.log(this.url+'sensors/129/events/'+this.apiKey+'/?type=11&begin='+begin+'&end='+end)
    return this.http.get(this.url+'sensors/129/events/'+this.apiKey+'/?type=11&begin='+begin+'&end='+end+'&aggregation_mode=by_minute');
  }


  public getDataQueueHour(begin,end){
    console.log(this.url+'sensors/129/events/'+this.apiKey+'/?type=11&begin='+begin+'&end='+end)
    return this.http.get(this.url+'sensors/129/events/'+this.apiKey+'/?type=11&begin='+begin+'&end='+end+'&aggregation_mode=by_hour');
  }

  public getDataQueueDay(begin,end){
    console.log(this.url+'sensors/129/events/'+this.apiKey+'/?type=11&begin='+begin+'&end='+end)
    return this.http.get(this.url+'sensors/129/events/'+this.apiKey+'/?type=11&begin='+begin+'&end='+end+'&aggregation_mode=by_day');
  }

  public getDataQueueWeek(begin,end){
    console.log(this.url+'sensors/129/events/'+this.apiKey+'/?type=11&begin='+begin+'&end='+end)
    return this.http.get(this.url+'sensors/129/events/'+this.apiKey+'/?type=11&begin='+begin+'&end='+end+'&aggregation_mode=by_week');
  }



}
