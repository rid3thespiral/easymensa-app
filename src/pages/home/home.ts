import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../services/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  // search condition
  public ready: boolean;
  public todayDate: Date;
  public weather: any;
  public lineChartData: Array<any>;
  public lineChartLabels: Array<any> = ['12:00', '12:15', '12:30', '12:45', '13:00', '13:15', '13:30', '13:45', '14:00', '14:15', '14:30', '14:45', '15:00'];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];

  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherProvider,
  ) {
  }

  ionViewWillEnter() {
    this.getWeather();
    this.utcTime();
    this.check();
    this.updateLineChartData();
  }

  public utcTime(){
    setInterval(() => {
      this.todayDate = new Date()
    }, 1000);
  }

  public getWeather(){
    setInterval(() => {
      this.weatherProvider.getWeather('IT', 'Fisciano').subscribe((weather: any) => {
        this.weather = weather.current_observation;
      });
    }, 1000);
  }

  public check(){
    setInterval(() => {
      let ora = this.todayDate.getHours();

      if (ora > 11 && ora < 15) {
        this.ready = true;
      } else {
        this.ready = false;
      }
    }, 1000);
  }

  public updateLineChartData(){
    setInterval(() => {
      // qui si deve fare la get al server
      this.lineChartData = [
        { data: [10, 20, 80, 70, 50, 60, 70, 70, 70, 60, 50, 10], label: 'Numero di Persone in coda' }
      ];
    }, 1000);
  }

  public orario(): any {
    let ora = this.todayDate.getHours().toLocaleString();
    let minuti = this.todayDate.getMinutes().toLocaleString();
    let secondi = this.todayDate.getSeconds().toLocaleString();
    return ora + ":" + minuti + ":" + secondi;
  }

  public getStimaTempo(): any {
    //Qui si deve calcolare la stima del tempo
    return '15';
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }


}

