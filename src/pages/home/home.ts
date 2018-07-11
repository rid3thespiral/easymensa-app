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
    private launchnavigator: LaunchNavigator,
  ) {
  }

  ////////////////////////////////////////////////////////////////////////
  // SET DI FUNZIONI CHE VENGONO ESEGUITE QUANDO SI ACCEDE ALLA PAGINA HOME
  ionViewWillEnter() {
    this.getWeather();
    this.inizializzaGrafi();
    this.getGrafoMeseScorso();
    this.utcTime();
    this.maxAttesa();
    this.getTimeConsigliato();
  }

  ////////////////////////////////////////////////////////////////////////
  //FUNZIONI PER GENERARE ORARIO REAL TIME
  public todayDate: Date;
  public aperto = false;

  public realTimeCountPerson;
  public realTimeStimaTempo;

  public tempoConsigliato;
  public tempoMassimo;
  public oraTempoMassimo;

  public valoriMeseScorsoRT: any[] = [0, 0, 0, 0, 0, 0];

  public utcTime() {
    setInterval(() => {
      this.todayDate = new Date();
      let ora = this.todayDate.getHours();
      if (ora > 11 && ora < 15)
        this.aperto = true;
      else
        this.aperto = false;
      //Query calcolo stima tempo e numero persone in real time
      let begin = this.getUnixTimeGTM(this.todayDate, 10, 0, 0);
      let end = this.getUnixTimeGTM(this.todayDate, 13, 0, 0)

      this.mensaProvider.getDataQueueWeek(begin, end).subscribe((json: any) => {
        this.query = json.timeslots;
        if (json == NaN) {
          this.realTimeCountPerson = 0;
          this.realTimeStimaTempo = 0;
        } else {
          let len = this.query.length;
          let aggregated_value = this.query[len - 1].aggregated_value;
          this.realTimeCountPerson = aggregated_value;
          this.realTimeStimaTempo = this.getTempoAttesa(Math.ceil(aggregated_value));
        }
      });;
      //Query calcolo tempo massimo e tempo consigliato    
      this.valoriMeseScorsoRT=this.valoriMeseScorso
      console.log(this.valoriMeseScorsoRT)
      var l = this.getMeseScorso().length
      var indiceMin=0
      var min=this.valoriMeseScorsoRT[0]/l
      for (var i = 1; i < this.valoriMeseScorsoRT.length; i++) {
        if((Math.floor(this.valoriMeseScorsoRT[i]/l))<min){
          min=Math.floor(this.valoriMeseScorsoRT[i]/l)
          indiceMin=i
        }
      }
      switch(indiceMin){
        case 0 : {this.tempoConsigliato="12.00-12.30"
        break;}
        case 1 : {this.tempoConsigliato="12.30-13.00"
        break;}
        case 2 : {this.tempoConsigliato="13.00-13.30"
        break;}
        case 3 : {this.tempoConsigliato="13.30-14.00"
        break;}
        case 4 : {this.tempoConsigliato="14.00-14.30"
        break;}
        case 5 : {this.tempoConsigliato="14.30-15.00"
        break;}

      }
      var indiceMax=0
      var max=this.valoriMeseScorsoRT[0]/l
      for (var i = 1; i < this.valoriMeseScorsoRT.length; i++) {
        if((Math.floor(this.valoriMeseScorsoRT[i]/l))>max){
          max=Math.floor(this.valoriMeseScorsoRT[i]/l)
          indiceMax=i
        }
      }
      switch(indiceMax){
        case 0 : {this.oraTempoMassimo="12.00-12.30"
        break;}
        case 1 : {this.oraTempoMassimo="12.30-13.00"
        break;}
        case 2 : {this.oraTempoMassimo="13.00-13.30"
        break;}
        case 3 : {this.oraTempoMassimo="13.30-14.00"
        break;}
        case 4 : {this.oraTempoMassimo="14.00-14.30"
        break;}
        case 5 : {this.oraTempoMassimo="14.30-15.00"
        break;}

      }
      this.tempoMassimo=max*1.5
    }, 10000);
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
  public query: any;

  public tempoSpesoSingolaPersona: number = 5;
  public personeAltriReparti: number = 5;


  public getUnixTimeGTM(data: Date, ora, minuti, secondi): string {
    data.setHours(ora)
    data.setMinutes(minuti)
    data.setSeconds(secondi)
    return (Math.ceil(data.getTime() / 1000)).toString()
  }

  public getTempoAttesa(numeroPersone): any {
    if (numeroPersone < 6)
      return (numeroPersone) * this.tempoSpesoSingolaPersona
    else
      return (numeroPersone - this.personeAltriReparti) * this.tempoSpesoSingolaPersona;

  }


  public maxAttesa(): any {

    return 1;

  }


  public getTimeConsigliato(): any {

    return 1;

  }

  public getGiorno(): any {
    var d = new Date();
    var n = d.getDay()
    return n - 1;
  }

  public getDay(): any {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Domenica";
    weekday[1] = "Lunedì";
    weekday[2] = "Martedì";
    weekday[3] = "Mercoledì";
    weekday[4] = "Giovedì";
    weekday[5] = "Venerdì";
    weekday[6] = "Sabato";
    return weekday[d.getDay()];
  }


  ////////////////////////////////////////////////////////////////////////
  // FUNZIONI GRAFICO 

  public vettore;
  public enter;
  public exit;
  public lunedi: any[] = [0, 0, 0, 0, 0, 0];
  public martedi: any[] = [0, 0, 0, 0, 0, 0];
  public mercoledi: any[] = [0, 0, 0, 0, 0, 0];
  public giovedi: any[] = [0, 0, 0, 0, 0, 0];
  public venerdi: any[] = [0, 0, 0, 0, 0, 0];
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

  public barChartLabels: string[] = ['12.00 - 12.30', '12.30 - 13.00', '13.00 - 13.00', '13.30 - 14.00', '14.00 - 14.30', '14.30 - 15.00'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  /** Funzioni che uso nel file 'home.html' */
  public getValoriLunedi() {
    var barChartData1: any[] = [
      { data: this.lunedi, label: 'Tempo di attesa stimato' },
      { data: this.getDatiMeseScorso(1), label: 'Media di questo mese' }
    ];
    return barChartData1;
  }

  public getValoriMartedi() {
    var barChartData2: any[] = [
      { data: this.martedi, label: 'Tempo di attesa stimato' },
      { data: this.getDatiMeseScorso(2), label: 'Media di questo mese' }
    ];
    return barChartData2;
  }
  public getValoriMercoledi() {
    var barChartData3: any[] = [
      { data: this.mercoledi, label: 'Tempo di attesa stimato' },
      { data: this.getDatiMeseScorso(3), label: 'Media di questo mese' }
    ];
    return barChartData3;
  }

  public getValoriGiovedi() {
    var barChartData4: any[] = [
      { data: this.giovedi, label: 'Tempo di attesa stimato' },
      { data: this.getDatiMeseScorso(4), label: 'Media di questo mese' }
    ];
    return barChartData4;
  }

  public getValoriVenerdi() {
    var barChartData5: any[] = [
      { data: this.venerdi, label: 'Tempo di attesa stimato' },
      { data: this.getDatiMeseScorso(5), label: 'Media di questo mese' }
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


  public valoriMeseScorso: any[] = [0, 0, 0, 0, 0, 0];
  public json;

  /** FUNZIONE DA IGNORARE. ERA QUALLA CHE STAVO USANDO ALL'INIZIO, MA A QUANTO PARE MEGLIO USARE 30
   * VARIABILI GLOBALI
   */

  public getDatiMeseScorso(giorno: any): any[] {
    var d = new Date();
    var n = d.getDay()
    var data = [0,0,0,0,0,0]
    if (n == giorno) {
      var l = this.getMeseScorso().length
      for (var i = 0; i < this.valoriMeseScorso.length; i++) {
        data[i] = Math.ceil(this.valoriMeseScorso[i] / l)
      }
      return data
    }
    else {
      return [0,0,0,0,0,0]
    }
  }

  public getGrafoMeseScorso() {
    var meseScorso = this.getMeseScorso()
    for (var i = 0; i < meseScorso.length; i++) {
      console.log(meseScorso[i])
      var begin = this.getUnixTime(new Date(this.setOrario(meseScorso[i], 10, 0, 0)))
      var end = this.getUnixTime(new Date(this.setOrario(meseScorso[i], 13, 0, 0)))
      this.mensaProvider.getDataQueueMinute(begin, end).subscribe((data: any) => {
        this.json = data.timeslots
        let l = this.json.length
        var passo = Math.floor(l / 6)
        if (l < passo) {
          this.valoriMeseScorso[i] = this.valoriMeseScorso[indice] + 0
        }
        else {
          var indice = 0
          for (let x = 0; x < l; x = x + passo) {
            let v = this.json[x]
            let j = v.aggregated_value;
            this.valoriMeseScorso[indice] = this.valoriMeseScorso[indice] + j
            indice++
          }
        }
      });;
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

  public giornoSettimana(): any {
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

  public getOffset(i): any {
    var giornoSettimana = this.giornoSettimana()
    var offset
    if (i >= giornoSettimana) {
      offset = 7
    }
    else {
      offset = 0
    }
    return offset
  }


  public getQueryTimestamp(indice, offset): string[] {
    var settimana = this.getSettimana()
    var giorno_corrente = new Date(settimana[indice])
    var giorno_scorso_b = new Date(giorno_corrente.setDate(giorno_corrente.getDate() - offset))
    giorno_corrente = new Date(settimana[indice])
    var giorno_scorso_e = new Date(giorno_corrente.setDate(giorno_corrente.getDate() - offset))
    giorno_scorso_b = this.setOrario(giorno_scorso_b, 10, 0, 0)
    giorno_scorso_e = this.setOrario(giorno_scorso_e, 13, 0, 0)
    var begin = this.getUnixTime(giorno_scorso_b)
    var end = this.getUnixTime(giorno_scorso_e)
    return [begin, end]
  }
  public rest;

  public getLunedi() {
    var offset = this.getOffset(1)
    var estremi = this.getQueryTimestamp(0, offset);
    var i = 0;
    this.mensaProvider.getDataQueueMinute(estremi[0], estremi[1]).subscribe((data: any) => {
      this.rest = data.timeslots
      let l = this.rest.length
      var passo = Math.floor(l / 6)
      console.log(passo)
      if (l < passo) {
        this.mercoledi = [0, 0, 0, 0, 0, 0]
      }
      else {
        let j=0
        for (let x = 0; x < l; x++) {
          let v = this.rest[x]
          j = j +v.aggregated_value;
          if(x==((i+1)*passo)-1){
          this.lunedi[i] = Math.ceil(j/(passo))
          j=0
          i++}
        }
      }
    });;
  }

  public getMartedi() {
    var offset = this.getOffset(2)
    var estremi = this.getQueryTimestamp(1, offset);
    var i = 0;
    this.mensaProvider.getDataQueueMinute(estremi[0], estremi[1]).subscribe((data: any) => {
      this.rest = data.timeslots
      let l = this.rest.length
      var passo = Math.floor(l / 6)
      if (l < passo) {
        this.martedi = [0, 0, 0, 0, 0, 0]
      }
      else {
        let j=0
        for (let x = 0; x < l; x++) {
          let v = this.rest[x]
          j = j +v.aggregated_value;
          if(x==((i+1)*passo)-1){
          this.martedi[i] = Math.ceil(j/(passo))
          j=0
          i++}
        }
      }
    });;
  }

  public getMercoledi() {
    var offset = this.getOffset(3)
    var estremi = this.getQueryTimestamp(2, offset);
    var i = 0;
    this.mensaProvider.getDataQueueMinute(estremi[0], estremi[1]).subscribe((data: any) => {
      this.rest = data.timeslots
      let l = this.rest.length
      var passo = Math.floor(l / 6)
      if (l < passo) {
        this.mercoledi = [0, 0, 0, 0, 0, 0]
      }
      else {
        let j=0
        for (let x = 0; x < l; x++) {
          let v = this.rest[x]
          j = j +v.aggregated_value;
          if(x==((i+1)*passo)-1){
          this.mercoledi[i] = Math.ceil(j/(passo))
          j=0
          i++}
        }
      }
    });;
  }

  public getGiovedi() {
    var offset = this.getOffset(4)
    var estremi = this.getQueryTimestamp(3, offset);
    var i = 0;
    this.mensaProvider.getDataQueueMinute(estremi[0], estremi[1]).subscribe((data: any) => {
      this.rest = data.timeslots
      let l = this.rest.length
      var passo = Math.floor(l / 6)
      if (l < passo) {
        this.giovedi = [0, 0, 0, 0, 0, 0]
      }
      else {
        let j=0
        for (let x = 0; x < l; x++) {
          let v = this.rest[x]
          j = j +v.aggregated_value;
          if(x==((i+1)*passo)-1){
          this.giovedi[i] = Math.ceil(j/(passo))
          j=0
          i++}
        }
      }
    });;
  }

  public getVenerdi() {
    var offset = this.getOffset(5)
    var estremi = this.getQueryTimestamp(4, offset);
    var i = 0;
    this.mensaProvider.getDataQueueMinute(estremi[0], estremi[1]).subscribe((data: any) => {
      this.rest = data.timeslots
      let l = this.rest.length
      var passo = Math.floor(l / 6)
      if (l < passo) {
        this.venerdi = [0, 0, 0, 0, 0, 0]
      }
      else {
        let j=0
        for (let x = 0; x < l; x++) {
          let v = this.rest[x]
          j = j +v.aggregated_value;
          if(x==((i+1)*passo)-1){
          this.venerdi[i] = Math.ceil(j/(passo))
          j=0
          i++}
        }
      }
    });;
  }

  public getMeseScorso(): Date[] {
    var oggi = new Date()
    var giorno = oggi.getDay()
    var meseScorso = oggi.getMonth() - 1
    if (oggi.getMonth() == 0) { /** Se siamo a Gennaio il mese scorso è Dicembre dell'anno prima */
      var anno = oggi.getFullYear() - 1
      var meseScorso = 11
    }
    else { /** Altrimenti il mese scorso è il mese corrente -2, perchè Gennaio è 0 */
      var meseScorso = oggi.getMonth() - 1
      var anno = oggi.getFullYear()
    }
    var date = new Date(anno, meseScorso, 1);/** Parto dal primo giorno del mese */
    var days = [];
    while (date.getMonth() === meseScorso) { /** Controllo se fa parte ancora del mese che mi interessa */
      if (date.getDay() == giorno) { /** Se è dello stesso giorno di oggi la salvo nel vettore */
        days.push(new Date(date));
      }
      date.setDate(date.getDate() + 1); /** Passo al giorno successivo */
    }
    return days;
  }

  public inizializzaGrafi() {
    this.getLunedi();
    this.getMartedi();
    this.getMercoledi();
    this.getGiovedi();
    this.getVenerdi();
  }

}

