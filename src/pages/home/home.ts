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
    this.createVettore();/** Appena si carica la view calcolo i valori delle query e riempi i grafi */
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

  public getNumeroPersone() {
    var d = new Date('7/6/2018');

    let ora = d.getHours();
    let minuti = d.getMinutes();
    let secondi = d.getSeconds();

    let end = this.getUnixTime(d);
    let begin;

    if (minuti > 10)
      begin = this.getUnixTime(this.setOrario(d, ora, minuti - 1, secondi))
    else
      begin = this.getUnixTime(this.setOrario(d, ora - 1, 10 + minuti, secondi))

    begin = this.getUnixTime(this.setOrario(new Date('7/4/2018'), 13, 15, 0));
    end = this.getUnixTime(this.setOrario(new Date('7/4/2018'), 14, 16, 0));

    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.realTimeCountPerson = data.events[data.events.length - 1].actual_count;
      this.realTimeStimaTempo = this.realTimeCountPerson * this.stimaTempoUnaPeronsa;
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

  public getValori(i, ora_b, minuti_b, secondi_b, ora_e, minuti_e, secondi_e): any {
    var oggi = new Date()
    if (oggi.getDay() == 0) {
      var giornoSettimana = 7
    }
    else {
      var giornoSettimana = oggi.getDay()
    }
    if (i < giornoSettimana) {
      var offset = 0
    }
    else {
      var offset = 7
    }
    var giorno = this.getSettimana()[i]
    var giornoScorso_b = new Date(giorno)
    var giornoScorso_e = new Date(giorno)
    giornoScorso_b = new Date(giornoScorso_b.setDate(giornoScorso_b.getDate() - offset))
    giornoScorso_e = new Date(giornoScorso_e.setDate(giornoScorso_e.getDate() - offset))
    giornoScorso_b = this.setOrario(giornoScorso_b, ora_b, minuti_b, secondi_b)
    giornoScorso_e = this.setOrario(giornoScorso_e, ora_e, minuti_e, secondi_e)
    var Unix_giornoScorso_b = this.getUnixTime(giornoScorso_b)
    var Unix_giornoScorso_e = this.getUnixTime(giornoScorso_e)
    this.mensaProvider.getDataEnter(Unix_giornoScorso_b, Unix_giornoScorso_e).subscribe((data: any) => {
      this.valore = data.events;
    });;
    return this.valore
  }

  /** Funzione che fa le 30 query */
  public createVettore() {
    var oggi = new Date()
    if (oggi.getDay() == 0) {
      var giornoSettimana = 7
    }
    else {
      var giornoSettimana = oggi.getDay()
    }
    /** SLIDE DEL LUNEDI */
    if (1 > giornoSettimana) {
      var offset = 7
    }
    else {
      var offset = 0
    }
    var settimana = this.getSettimana()
    var lunedì_corrente = new Date(settimana[0])
    var lunedì_scorso_b = new Date(lunedì_corrente.setDate(lunedì_corrente.getDate() - offset))
    lunedì_corrente = new Date(settimana[0])
    var lunedì_scorso_e = new Date(lunedì_corrente.setDate(lunedì_corrente.getDate() - offset))
    lunedì_scorso_b = this.setOrario(lunedì_scorso_b, 12, 0, 0)
    lunedì_scorso_e = this.setOrario(lunedì_scorso_e, 12, 29, 59)
    var begin = this.getUnixTime(lunedì_scorso_b)
    var end = this.getUnixTime(lunedì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.lunedì_1=5
      }
      else{
        this.lunedì_1=data.events[0].actual_count;
      }
    });;
    lunedì_scorso_b = this.setOrario(lunedì_scorso_b, 12, 30, 0)
    lunedì_scorso_e = this.setOrario(lunedì_scorso_e, 12, 59, 59)
    begin = this.getUnixTime(lunedì_scorso_b)
    end = this.getUnixTime(lunedì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.lunedì_2=5
      }
      else{
        this.lunedì_2=data.events[0].actual_count;
      }
    });;
    lunedì_scorso_b = this.setOrario(lunedì_scorso_b, 13, 0, 0)
    lunedì_scorso_e = this.setOrario(lunedì_scorso_e, 13, 29, 59)
    begin = this.getUnixTime(lunedì_scorso_b)
    end = this.getUnixTime(lunedì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.lunedì_3=5
      }
      else{
        this.lunedì_3=data.events[0].actual_count;
      }
    });;
    lunedì_scorso_b = this.setOrario(lunedì_scorso_b, 13, 30, 0)
    lunedì_scorso_e = this.setOrario(lunedì_scorso_e, 13, 59, 59)
    begin = this.getUnixTime(lunedì_scorso_b)
    end = this.getUnixTime(lunedì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.lunedì_4=5
      }
      else{
        this.lunedì_4=data.events[0].actual_count;
      }
    });;
    lunedì_scorso_b = this.setOrario(lunedì_scorso_b, 14, 0, 0)
    lunedì_scorso_e = this.setOrario(lunedì_scorso_e, 14, 29, 59)
    begin = this.getUnixTime(lunedì_scorso_b)
    end = this.getUnixTime(lunedì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.lunedì_5=5
      }
      else{
        this.lunedì_5=data.events[0].actual_count;
      }
    });;
    lunedì_scorso_b = this.setOrario(lunedì_scorso_b, 14, 30, 0)
    lunedì_scorso_e = this.setOrario(lunedì_scorso_e, 15, 0, 0)
    begin = this.getUnixTime(lunedì_scorso_b)
    end = this.getUnixTime(lunedì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.lunedì_6=5
      }
      else{
        this.lunedì_6=data.events[0].actual_count;
      }
    });;
        /** SLIDE DEL MARTEDI */

    if (2 > giornoSettimana) {
      offset = 7
    }
    else {
      offset = 0
    }
    var settimana = this.getSettimana()
    var martedì_corrente = new Date(settimana[1])
    var martedì_scorso_b = new Date(martedì_corrente.setDate(martedì_corrente.getDate() - offset))
    martedì_corrente = new Date(settimana[1])
    var martedì_scorso_e = new Date(martedì_corrente.setDate(martedì_corrente.getDate() - offset))
    martedì_scorso_b = this.setOrario(martedì_scorso_b, 12, 0, 0)
    martedì_scorso_e = this.setOrario(martedì_scorso_e, 12, 29, 59)
    var begin = this.getUnixTime(martedì_scorso_b)
    var end = this.getUnixTime(martedì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.martedì_1=5
      }
      else{
        this.martedì_1=data.events[0].actual_count;
      }
    });;
    martedì_scorso_b = this.setOrario(martedì_scorso_b, 12, 30, 0)
    martedì_scorso_e = this.setOrario(martedì_scorso_e, 12, 59, 59)
    begin = this.getUnixTime(martedì_scorso_b)
    end = this.getUnixTime(martedì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.martedì_2=5
      }
      else{
        this.martedì_2=data.events[0].actual_count;
      }
    });;
    martedì_scorso_b = this.setOrario(martedì_scorso_b, 13, 0, 0)
    martedì_scorso_e = this.setOrario(martedì_scorso_e, 13, 29, 59)
    begin = this.getUnixTime(martedì_scorso_b)
    end = this.getUnixTime(martedì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.martedì_3=5
      }
      else{
        this.martedì_3=data.events[0].actual_count;
      }
    });;
    martedì_scorso_b = this.setOrario(martedì_scorso_b, 13, 30, 0)
    martedì_scorso_e = this.setOrario(martedì_scorso_e, 13, 59, 59)
    begin = this.getUnixTime(martedì_scorso_b)
    end = this.getUnixTime(martedì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.martedì_4=5
      }
      else{
        this.martedì_4=data.events[0].actual_count;
      }
    });;
    martedì_scorso_b = this.setOrario(martedì_scorso_b, 14, 0, 0)
    martedì_scorso_e = this.setOrario(martedì_scorso_e, 14, 29, 59)
    begin = this.getUnixTime(martedì_scorso_b)
    end = this.getUnixTime(martedì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.martedì_5=5
      }
      else{
        this.martedì_5=data.events[0].actual_count;
      }
    });;
    martedì_scorso_b = this.setOrario(martedì_scorso_b, 14, 30, 0)
    martedì_scorso_e = this.setOrario(martedì_scorso_e, 15, 0, 0)
    begin = this.getUnixTime(martedì_scorso_b)
    end = this.getUnixTime(martedì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.martedì_6=5
      }
      else{
        this.martedì_6=data.events[0].actual_count;
      }
    });;
        /** SLIDE DEL MERCOLEDI */

    if (3 > giornoSettimana) {
      var offset = 7
    }
    else {
      var offset = 0
    }
    var mercoledì_corrente = new Date(settimana[2])
    var mercoledì_scorso_b = new Date(mercoledì_corrente.setDate(mercoledì_corrente.getDate() - offset))
    mercoledì_corrente = new Date(settimana[2])
    var mercoledì_scorso_e = new Date(mercoledì_corrente.setDate(mercoledì_corrente.getDate() - offset))
    mercoledì_scorso_b = this.setOrario(mercoledì_scorso_b, 12, 0, 0)
    mercoledì_scorso_e = this.setOrario(mercoledì_scorso_e, 12, 29, 59)
    var begin = this.getUnixTime(mercoledì_scorso_b)
    var end = this.getUnixTime(mercoledì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.mercoledì_1=5
      }
      else{
        this.mercoledì_1=data.events[0].actual_count;
      }
    });;
    mercoledì_scorso_b = this.setOrario(mercoledì_scorso_b, 12, 30, 0)
    mercoledì_scorso_e = this.setOrario(mercoledì_scorso_e, 12, 59, 59)
    var begin = this.getUnixTime(mercoledì_scorso_b)
    var end = this.getUnixTime(mercoledì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.mercoledì_2=5
      }
      else{
        this.mercoledì_2=data.events[0].actual_count;
      }
    });;
    mercoledì_scorso_b = this.setOrario(mercoledì_scorso_b, 13, 0, 0)
    mercoledì_scorso_e = this.setOrario(mercoledì_scorso_e, 13, 29, 59)
    var begin = this.getUnixTime(mercoledì_scorso_b)
    var end = this.getUnixTime(mercoledì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.mercoledì_3=5
      }
      else{
        this.mercoledì_3=data.events[0].actual_count;
      }
    });;
    mercoledì_scorso_b = this.setOrario(mercoledì_scorso_b, 13, 30, 0)
    mercoledì_scorso_e = this.setOrario(mercoledì_scorso_e, 13, 59, 59)
    var begin = this.getUnixTime(mercoledì_scorso_b)
    var end = this.getUnixTime(mercoledì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.mercoledì_4=5
      }
      else{
        this.mercoledì_4=data.events[0].actual_count;
      }
    });;
    mercoledì_scorso_b = this.setOrario(mercoledì_scorso_b, 14, 0, 0)
    mercoledì_scorso_e = this.setOrario(mercoledì_scorso_e, 14, 29, 59)
    var begin = this.getUnixTime(mercoledì_scorso_b)
    var end = this.getUnixTime(mercoledì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.mercoledì_5=5
      }
      else{
        this.mercoledì_5=data.events[0].actual_count;
      }
    });;
    mercoledì_scorso_b = this.setOrario(mercoledì_scorso_b, 14, 30, 0)
    mercoledì_scorso_e = this.setOrario(mercoledì_scorso_e, 14, 59, 59)
    var begin = this.getUnixTime(mercoledì_scorso_b)
    var end = this.getUnixTime(mercoledì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.mercoledì_6=5
      }
      else{
        this.mercoledì_6=data.events[0].actual_count;
      }
    });;
        /** SLIDE DEL GIOVEDI */

    if (4 > giornoSettimana) {
      var offset = 7
    }
    else {
      var offset = 0
    }
    var giovedì_corrente = new Date(settimana[3])
    var giovedì_scorso_b = new Date(giovedì_corrente.setDate(giovedì_corrente.getDate() - offset))
    giovedì_corrente = new Date(settimana[3])
    var giovedì_scorso_e = new Date(giovedì_corrente.setDate(giovedì_corrente.getDate() - offset))
    giovedì_scorso_b = this.setOrario(giovedì_scorso_b, 12, 0, 0)
    giovedì_scorso_e = this.setOrario(giovedì_scorso_e, 12, 29, 59)
    var begin = this.getUnixTime(giovedì_scorso_b)
    var end = this.getUnixTime(giovedì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.giovedì_1=5
      }
      else{
        this.giovedì_1=data.events[0].actual_count;
      }
    });;
    giovedì_scorso_b = this.setOrario(giovedì_scorso_b, 12, 30, 0)
    giovedì_scorso_e = this.setOrario(giovedì_scorso_e, 12, 59, 59)
    var begin = this.getUnixTime(giovedì_scorso_b)
    var end = this.getUnixTime(giovedì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.giovedì_2=5
      }
      else{
        this.giovedì_2=data.events[0].actual_count;
      }
    });;
    giovedì_scorso_b = this.setOrario(giovedì_scorso_b, 13, 0, 0)
    giovedì_scorso_e = this.setOrario(giovedì_scorso_e, 13, 29, 59)
    var begin = this.getUnixTime(giovedì_scorso_b)
    var end = this.getUnixTime(giovedì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.giovedì_3=5
      }
      else{
        this.giovedì_3=data.events[0].actual_count;
      }
    });;
    giovedì_scorso_b = this.setOrario(giovedì_scorso_b, 13, 30, 0)
    giovedì_scorso_e = this.setOrario(giovedì_scorso_e, 13, 59, 59)
    var begin = this.getUnixTime(giovedì_scorso_b)
    var end = this.getUnixTime(giovedì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.giovedì_4=5
      }
      else{
        this.giovedì_4=data.events[0].actual_count;
      }
    });;
    giovedì_scorso_b = this.setOrario(giovedì_scorso_b, 14, 0, 0)
    giovedì_scorso_e = this.setOrario(giovedì_scorso_e, 14, 29, 59)
    var begin = this.getUnixTime(giovedì_scorso_b)
    var end = this.getUnixTime(giovedì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.giovedì_5=5
      }
      else{
        this.giovedì_5=data.events[0].actual_count;
      }
    });;
    giovedì_scorso_b = this.setOrario(giovedì_scorso_b, 14, 30, 0)
    giovedì_scorso_e = this.setOrario(giovedì_scorso_e, 14, 59, 59)
    var begin = this.getUnixTime(giovedì_scorso_b)
    var end = this.getUnixTime(giovedì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.giovedì_6=5
      }
      else{
        this.giovedì_6=data.events[0].actual_count;
      }
    });;
        /** SLIDE DEL VENERDI */

    if (5 > giornoSettimana) {
      var offset = 7
    }
    else {
      var offset = 0
    }
    var venerdì_corrente = new Date(settimana[4])
    var venerdì_scorso_b = new Date(venerdì_corrente.setDate(venerdì_corrente.getDate() - offset))
    venerdì_corrente = new Date(settimana[4])
    var venerdì_scorso_e = new Date(venerdì_corrente.setDate(venerdì_corrente.getDate() - offset))
    venerdì_scorso_b = this.setOrario(venerdì_scorso_b, 12, 0, 0)
    venerdì_scorso_e = this.setOrario(venerdì_scorso_e, 12, 29, 59)
    var begin = this.getUnixTime(venerdì_scorso_b)
    var end = this.getUnixTime(venerdì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.venerdì_1=5
      }
      else{
        this.venerdì_1=data.events[0].actual_count;
      }
    });;
    venerdì_scorso_b = this.setOrario(venerdì_scorso_b, 12, 30, 0)
    venerdì_scorso_e = this.setOrario(venerdì_scorso_e, 12, 59, 59)
    var begin = this.getUnixTime(venerdì_scorso_b)
    var end = this.getUnixTime(venerdì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.venerdì_2=5
      }
      else{
        this.venerdì_2=data.events[0].actual_count;
      }
    });;
    venerdì_scorso_b = this.setOrario(venerdì_scorso_b, 13, 0, 0)
    venerdì_scorso_e = this.setOrario(venerdì_scorso_e, 13, 29, 59)
    var begin = this.getUnixTime(venerdì_scorso_b)
    var end = this.getUnixTime(venerdì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.venerdì_3=5
      }
      else{
        this.venerdì_3=data.events[0].actual_count;
      }
    });;
    venerdì_scorso_b = this.setOrario(venerdì_scorso_b, 13, 30, 0)
    venerdì_scorso_e = this.setOrario(venerdì_scorso_e, 13, 59, 59)
    var begin = this.getUnixTime(venerdì_scorso_b)
    var end = this.getUnixTime(venerdì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.venerdì_4=5
      }
      else{
        this.venerdì_4=data.events[0].actual_count;
      }
    });;
    venerdì_scorso_b = this.setOrario(venerdì_scorso_b, 14, 0, 0)
    venerdì_scorso_e = this.setOrario(venerdì_scorso_e, 14, 29, 59)
    var begin = this.getUnixTime(venerdì_scorso_b)
    var end = this.getUnixTime(venerdì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.venerdì_5=5
      }
      else{
        this.venerdì_5=data.events[0].actual_count;
      }
    });;
    venerdì_scorso_b = this.setOrario(venerdì_scorso_b, 14, 30, 0)
    venerdì_scorso_e = this.setOrario(venerdì_scorso_e, 15, 0, 0)
    var begin = this.getUnixTime(venerdì_scorso_b)
    var end = this.getUnixTime(venerdì_scorso_e)
    console.log("begin : "+begin+" end : "+end)
    this.mensaProvider.getDataEnter(begin, end).subscribe((data: any) => {
      this.vettore = data.events;
      if(this.vettore.length==0){
        this.venerdì_6=5
      }
      else{
        this.venerdì_6=data.events[0].actual_count;
      }
    });;
  }

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
}

