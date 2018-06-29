import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../services/weather';
import { AlertController } from 'ionic-angular';
import { LaunchNavigator} from '@ionic-native/launch-navigator';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  // search condition
  public aperto: boolean = true;
  public index: number = 0;
  public ready: boolean;
  public todayDate: Date;
  public weather: any;
  public lineChartData: Array<any> = [
    { data: [], label: 'Numero di Persone in coda' }
  ];;
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

  public chartColors: Array<any> = [
    { // first color
      backgroundColor: 'rgba(0,0,255,0.6)',
      borderColor: 'rgba(0,0,255,0.6)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)',
      hoverBackgroundColor: 'rgba(30,144,255,0.6)',
      hoverdBorderColor: 'rgba(30,144,255,0.6)'
    },];

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [12, 15, 25, 30, 15, 20, 5], label: 'Tempo di attesa stimato' }
  ];

  public barChartData2: any[] = [
    { data: [12, 15, 25, 30, 15, 20, 5], label: 'Tempo di attesa stimato' }
  ];

  public barChartData3: any[] = [
    { data: [12, 15, 25, 30, 15, 20, 5], label: 'Tempo di attesa stimato' }
  ];


  // events
  public sottotitolo: string;
  public titolo: string;
  public chartClicked(e: any): void {
    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
      if (activePoints.length > 0) {
        // get the internal index of slice in pie chart
        const clickedElementIndex = activePoints[0]._index;
        const label = chart.data.labels[clickedElementIndex];
        // get value by index
        const value = chart.data.datasets[0].data[clickedElementIndex];
        if (value < 10) {
          this.titolo = 'Poco affollato'
        }
        if (value >= 10 && value < 20) {
          this.titolo = 'Normalmente Affollato'
        }
        if (value > 20) {
          this.titolo = 'Molto affollato'
        }
        this.mostraAlert(this.titolo, label, value);

        console.log(clickedElementIndex, label, value)
      }
    }

  }

  public mostraAlert(titolo, orario, value): void {
    let alert = this.alertController.create({
      title: 'Ore : ' + orario + " " + titolo,
      subTitle: "Fino a " + value + " persone in attesa",
      buttons: ['OK']
    });

    alert.present();


  }

  public openMaps(){
    console.log('ciao');
    this.launchnavigator.navigate("Via della Tecnica n. 1, 84084 Fisciano SA");
  }


  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherProvider,
    private alertController: AlertController,
    private launchnavigator: LaunchNavigator
  ) {
  }

  ionViewWillEnter() {
    this.utcTime();
    this.getWeather();
    this.check();
    this.updateLineChartData();
  }

  public getGiorno(): any {
    var d = new Date();
    var n = d.getDay()
    return n - 1;
  }

  //grazie al metodo set interval ogni 1000ms viene aggiornata l'ora
  public utcTime() {
    setInterval(() => {
      this.todayDate = new Date()
    }, 1000);
  }

  //grazie al metodo set interval ogni 1000ms viene aggiornato il meteo
  public getWeather() {
    setInterval(() => {
      this.weatherProvider.getWeather('IT', 'Fisciano').subscribe((weather: any) => {
        this.weather = weather.current_observation;
      });
    }, 1000);
  }

  //grazie al metodo set interval ogni 1000ms viene aggiornata la variabile
  //ready per visulizzare solo dopo mezzoggiorno (apertura mensa) il grafico
  public check() {
    setInterval(() => {
      let ora = this.todayDate.getHours();

      if (ora > 11 && ora < 15) {
        this.aperto = true;
      } else {
        this.aperto = false;
      }

      if (ora >= 9) {
        this.ready = true;
      } else {
        this.ready = false;
      }
    }, 1000);
  }

  //grazie al metodo set interval ogni 15 min vengono aggiornati i dati
  //provenienti dalle telecamere in real time e visualizzati sul grafico
  public updateLineChartData() {

    setInterval(() => {

      let ora = this.todayDate.getHours();
      let minuti = this.todayDate.getMinutes();
      let secondi = this.todayDate.getSeconds();

      // qui si deve fare la get al server
      this.lineChartData = [
        { data: [minuti, 0, 0, secondi, 0, 0, ora, 0, 0, secondi, 0, 0, minuti], label: 'Numero di Persone in coda' }
      ];


    }, 1000);
  }

  public getDay(): any {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[d.getDay()];
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

  public getNumeroPersone(): any {
    //Qui si deve calcolare la stima del tempo
    return '1005';
  }

}

