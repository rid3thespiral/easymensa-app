import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../services/weather';
import { AlertController } from 'ionic-angular';
import { LaunchNavigator} from '@ionic-native/launch-navigator';
import { ServermensaProvider } from '../../providers/servermensa/servermensa';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherProvider,
    private mensaProvider: ServermensaProvider,
    private alertController: AlertController,
    private launchnavigator: LaunchNavigator
  ) {
  }

  ////////////////////////////////////////////////////////////////////////
  // SET DI FUNZIONI CHE VENGONO ESEGUITE QUANDO SI ACCEDE ALLA PAGINA HOME
  ionViewWillEnter() {
    this.utcTime();
    this.getWeather();
    this.getNumeroPersone();
  }

  ////////////////////////////////////////////////////////////////////////
  //FUNZIONI PER GENERARE ORARIO REAL TIME
  public todayDate: Date;

  public utcTime() {
    setInterval(() => {
      this.todayDate = new Date();
    }, 1000);
  }

  public orario(): any {
    let ora = this.todayDate.getHours().toLocaleString();
    let minuti = this.todayDate.getMinutes().toLocaleString();
    let secondi = this.todayDate.getSeconds().toLocaleString();
    return ora + ":" + minuti + ":" + secondi;
  }

  ////////////////////////////////////////////////////////////////////////
  //FUNZIONI PER GENERARE METEO
  public weather: any;
  public getWeather() {
      this.weatherProvider.getWeather('IT', 'Fisciano').subscribe((weather: any) => {
        this.weather = weather.current_observation;
      });
  }

  ////////////////////////////////////////////////////////////////////////
  // FUNZIONI CARD INFORMAZIONI
  public openMaps(){
    console.log('ciao');
    this.launchnavigator.navigate("Via della Tecnica n. 1, 84084 Fisciano SA");
  }

  ////////////////////////////////////////////////////////////////////////
  // FUNZIONI CARD ORGANIZZA LA TUA VISITA

  public enter;
  public exit;
  public stimaTempoUnaPeronsa = 5;
  public realTimeCountPerson;
  public realTimeStimaTempo;

  public getNumeroPersone(){
    var d = new Date('7/6/2018');

    let ora = d.getHours();
    let minuti = d.getMinutes();
    let secondi = d.getSeconds();
    
    let end = this.getUnixTime(d);
    let begin;

    if(minuti > 10)
     begin = this.getUnixTime(this.setOrario(d,ora,minuti-1,secondi))
    else
     begin = this.getUnixTime(this.setOrario(d,ora-1,10+minuti,secondi))

    begin = this.getUnixTime(this.setOrario(new Date('7/4/2018'),13,15,0));
    end = this.getUnixTime(this.setOrario(new Date('7/4/2018'),13,16,0)); 

    this.mensaProvider.getDataEnter(begin,end).subscribe((data: any) => {
      console.log(data.events)
      this.realTimeCountPerson  = data.events[data.events.length-1].actual_count;
      this.realTimeStimaTempo = this.realTimeCountPerson*this.stimaTempoUnaPeronsa;
    });;

    /*
    this.mensaProvider.getDataExit(begin,end).subscribe((data2: any) => {
      console.log(data2.events)
      this.realTimeCountPerson = this.realTimeCountPerson - data2.events[data2.events.length-1].actual_count;
      this.realTimeStimaTempo = this.realTimeCountPerson*this.stimaTempoUnaPeronsa;
    });;*/


    
  }

  public maxAttesa(): any {

  }


  public getTopTime(): any{

  }

  public getGiorno(): any {
      var d = new Date();
      var n = d.getDay()
      return n - 1;
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
    
  ////////////////////////////////////////////////////////////////////////
  // FUNZIONI GRAFICO 
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
    },
    { // grey
      backgroundColor: 'rgba(255,0,0,0.6)',
      borderColor: 'rgba(255,0,0,0.6)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData1: any[] = [
    { data: [12, 15, 25, 30, 15, 20, 5], label: 'Tempo di attesa stimato'},
    { data: this.generateData(1), label: 'Media di questo mese' }
  ];
  public barChartData2: any[] = [
    { data: [12, 15, 25, 30, 15, 20, 5], label: 'Tempo di attesa stimato' },
    { data: this.generateData(2), label: 'Media di questo mese' }
  ];
  public barChartData3: any[] = [
    { data: [12, 15, 25, 30, 15, 20, 5], label: 'Tempo di attesa stimato' },
    { data: this.generateData(3), label: 'Media di questo mese' }
  ];
  public barChartData4: any[] = [
    { data: [12, 15, 25, 30, 15, 20, 5], label: 'Tempo di attesa stimato' },
    { data: this.generateData(4), label: 'Media di questo mese' }
  ];
  public barChartData5: any[] = [
    { data: [12, 15, 25, 30, 15, 20, 5], label: 'Tempo di attesa stimato' },
    { data: this.generateData(5), label: 'Media di questo mese' }
  ];
  public sottotitolo: string;
  public titolo: string;

  public generateData(giorno : any):any[]{
    var d = new Date();
    var n = d.getDay()
    if (n == giorno){
      return [5,5,15,20,15,25];
    }
    else{
      return [0,0,0,0,0,0];
    }
  }
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

  ////////////////////////////////////////////////////////////////
  // GET DAL SERVER 

  /** Prende in input un parametro Date e ne restituisce il corrrispondente valore Unix */
  public getUnixTime(data: Date): string {
    return (Math.ceil(data.getTime() / 1000)).toString()
  }

  public setOrario(data: Date, ora, minuti, secondi): Date {
      data.setHours(ora)
      data.setMinutes(minuti)
      data.setSeconds(secondi)
      return data
  }


  public mensa: any;
  public testMensa(){

    var result: String = '';
8
    let begin: any = this.getUnixTime(this.setOrario(new Date('7/4/2018'),13,0,0));
    let end: any = this.getUnixTime(this.setOrario(new Date('7/4/2018'),13,1,0));

    console.log(begin)
    console.log(end)

    this.mensaProvider.getDataEnter(begin,end).subscribe((data: any) => {
      console.log(data.events)
      this.mensa  = data.events[0].actual_count;
    });;


    console.log(result)

  }

}

