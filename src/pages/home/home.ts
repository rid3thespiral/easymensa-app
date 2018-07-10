import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../services/weather';
import { AlertController } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
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
  public openMaps() {
    this.launchnavigator.navigate("Via della Tecnica n. 1, 84084 Fisciano SA");
  }

  ////////////////////////////////////////////////////////////////////////
  // FUNZIONI CARD ORGANIZZA LA TUA VISITA

  public vettore;
  public enter;
  public exit;
  public stimaTempoUnaPeronsa = 5;
  public realTimeCountPerson;
  public realTimeStimaTempo;
  /** Variabili globali inevitabili a quanto pare. Corrispondono agli intervalli di tempo di ogni giorno
   * Es. In Lunedì_1 ci andrà il valore corrispondente all'intervallo 12.00 - 12.30
   */
  public lunedì_1;
  public lunedì_2;
  public lunedì_3;
  public lunedì_4;
  public lunedì_5;
  public lunedì_6;
  public martedì_1;
  public martedì_2;
  public martedì_3;
  public martedì_4;
  public martedì_5;
  public martedì_6;
  public mercoledì_1;
  public mercoledì_2;
  public mercoledì_3;
  public mercoledì_4;
  public mercoledì_5;
  public mercoledì_6;
  public giovedì_1;
  public giovedì_2;
  public giovedì_3;
  public giovedì_4;
  public giovedì_5;
  public giovedì_6;
  public venerdì_1;
  public venerdì_2;
  public venerdì_3;
  public venerdì_4;
  public venerdì_5;
  public venerdì_6;



  public maxAttesa(): any {

  }


  public getTopTime(): any {

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

  public barChartLabels: string[] = ['12.00', '12.30', '13.00', '13.30', '14.00', '14.30'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  /** Funzioni che uso nel file 'home.html' */
  public getValoriLunedi(){
    var barChartData1: any[] = [
      { data: [this.lunedì_1,this.lunedì_2,this.lunedì_3,this.lunedì_4,this.lunedì_5,this.lunedì_6], label: 'Tempo di attesa stimato' },
      { data: this.generateData(1), label: 'Media di questo mese' }
    ];
    return barChartData1;
  }

  public getValoriMartedi(){
    var barChartData2: any[] = [
      { data: [this.martedì_1,this.martedì_2,this.martedì_3,this.martedì_4,this.martedì_5,this.martedì_6], label: 'Tempo di attesa stimato' },
      { data: this.generateData(2), label: 'Media di questo mese' }
    ];
    return barChartData2;
  }
  public getValoriMercoledi(){
    var barChartData3: any[] = [
      { data: [this.mercoledì_1,this.mercoledì_2,this.mercoledì_3,this.mercoledì_4,this.mercoledì_5,this.mercoledì_6], label: 'Tempo di attesa stimato' },
      { data: this.generateData(3), label: 'Media di questo mese' }
    ];
    return barChartData3;
  }

  public getValoriGiovedi(){
    var barChartData4: any[] = [
      { data: [this.giovedì_1,this.giovedì_2,this.giovedì_3,this.giovedì_4,this.giovedì_5], label: 'Tempo di attesa stimato' },
      { data: this.generateData(4), label: 'Media di questo mese' }
    ];
    return barChartData4;
  }

  public getValoriVenerdi(){
    var barChartData5: any[] = [
      { data: [this.venerdì_1,this.venerdì_2,this.venerdì_3,this.venerdì_4,this.venerdì_5], label: 'Tempo di attesa stimato' },
      { data: this.generateData(5), label: 'Media di questo mese' }
    ];
    return barChartData5;
  }

  public sottotitolo: string;
  public titolo: string;

  public getSettimana(): Date[] {
    var oggi = new Date(); /** Mi calcolo la data di oggi */
    if (oggi.getDay() == 0) {
      var offeset = 6
    }
    else {
      var offeset = oggi.getDay() - 1;
    }
    var dataIniziale = oggi.getDate() - offeset; /** Mi calcolo la data di inizio settimana sottraendo alla data
                                                      odierna l'offset*/

    /** E incrementandola mi calcolo tutte le altre */
    var lunedì = new Date(oggi.setDate(dataIniziale));
    var martedì = new Date(oggi.setDate(dataIniziale + 1));
    var mercoledì = new Date(oggi.setDate(dataIniziale + 2));
    var giovedì = new Date(oggi.setDate(dataIniziale + 3));
    var venerdì = new Date(oggi.setDate(dataIniziale + 4));

    return [lunedì, martedì, mercoledì, giovedì, venerdì]
  }

  public valore;
  public cosa;

  /** FUNZIONE DA IGNORARE. ERA QUALLA CHE STAVO USANDO ALL'INIZIO, MA A QUANTO PARE MEGLIO USARE 30
   * VARIABILI GLOBALI
   */

  public generateData(giorno: any): any[] {
    var d = new Date();
    var n = d.getDay()
    if (n == giorno) {
      return [5, 5, 15, 20, 15, 25];
    }
    else {
      return [0, 0, 0, 0, 0, 0];
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

  public giornoSettimana():any{
    var oggi = new Date()
    var giornoSettimana;
    if (oggi.getDay() == 0) {
      giornoSettimana = 7
    }
    else {
      giornoSettimana = oggi.getDay()
    }
    return giornoSettimana
  }

  public getOffset(i):any{
    var giornoSettimana=this.giornoSettimana()
    var offset
    if (i > giornoSettimana) {
      offset = 7
    }
    else {
      offset = 0
    }
    return offset
  }

  public getQueryTimestamp(indice,offset): string[]{
    var settimana = this.getSettimana()
    var giorno_corrente = new Date(settimana[indice])
    var lunedì_scorso_b = new Date(giorno_corrente.setDate(giorno_corrente.getDate() - offset))
    giorno_corrente = new Date(settimana[0])
    var lunedì_scorso_e = new Date(giorno_corrente.setDate(giorno_corrente.getDate() - offset))
    lunedì_scorso_b = this.setOrario(lunedì_scorso_b, 12, 0, 0)
    lunedì_scorso_e = this.setOrario(lunedì_scorso_e, 12, 29, 59)
    var begin = this.getUnixTime(lunedì_scorso_b)
    var end = this.getUnixTime(lunedì_scorso_e)
    return [begin,end]
  }

  public lunedi:any[]=[0,0,0,0,0,0];
  public app;
  public rest;
  public getLunedi(){
    var offeset=this.getOffset(1)
    var begin=this.getUnixTime(this.setOrario(new Date('7/9/2018'),10,0,0))
    var end=this.getUnixTime(this.setOrario(new Date('7/9/2018'),13,0,0))
    var i=0;
    this.mensaProvider.getDataQueueMinute(begin, end).subscribe((data: any) => {
      this.rest=data.timeslots
      console.log(this.rest)
      let l =this.rest.length
      for (let x=0; x<l;x=x+1){
        let v=this.rest[x]
        let j =v.aggregated_value;
        this.lunedi[i]=j
        i++
      }
      console.log(this.lunedi)


    });;

  }
}

