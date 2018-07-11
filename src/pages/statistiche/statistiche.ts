import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ServermensaProvider } from '../../providers/servermensa/servermensa'



/**
 * Generated class for the StatistichePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-statistiche',
  templateUrl: 'statistiche.html',
  providers: [ServermensaProvider],
})
export class StatistichePage {

  public tempoSpesoSingolaPersona: number = 5;
  public personeAltriReparti: number = 5;
  public ready: boolean = false;
  public users: any;
  public lineChartLegend: boolean = true;
  public lineChartData: Array<any> = [
    { data: [], label: '' }];
  public lineChartType: string = 'line';
  public lineChartLabels: Array<any> = [];

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
    }
  ];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mensaProvider: ServermensaProvider,
    public loadingController:LoadingController,
  ) {
  }

  ionViewDidLoad() {
  }

  // go to result page

  close() {
    this.ready = false;
  }

  doDate(mydate, value): any {

    if (value == 'Ricerca per anno') {

      let data: Date = new Date(mydate);
      let anno: String = data.getFullYear().toString();

      return anno;
    }
    if (value == 'Ricerca per mese') {

      let data: Date = new Date(mydate);
      let anno: String = data.getFullYear().toString();
      let mese: String = (data.getMonth() + 1).toString();

      return mese + "/" + anno;

    }
    if (value == 'Ricerca per giorno') {

      let data: Date = new Date(mydate);
      let anno: String = data.getFullYear().toString();
      let mese: String = (data.getMonth() + 1).toString();
      let giorno: String = data.getDate().toString();

      return giorno + "/" + mese + "/" + anno;
    }

  }

  public getUnixTime(data: Date, ora, minuti, secondi): string {
    data.setHours(ora)
    data.setMinutes(minuti)
    data.setSeconds(secondi)
    return (Math.ceil(data.getTime() / 1000)).toString()
  }

  public getLabel(): any {
    console.log(this.lineChartLabels)
    return this.lineChartLabels;
  }


  public getValori(): any {
    console.log(this.lineChartData)
    return this.lineChartData;
  }

  public getTempoAttesa(numeroPersone): any{
    if (numeroPersone<6)
      return (numeroPersone)*this.tempoSpesoSingolaPersona
    else
      return (numeroPersone - this.personeAltriReparti)*this.tempoSpesoSingolaPersona;
    
  }

  // in base ai dati scelti dall'utente si effettua una query ai dati storici
  public query: any;
  doSearch(value1, value, mydate) {

    if (value1 == null || value == null || mydate == null) {
      alert("Inserisci i valori")
    } else {

      if (value == 'Ricerca per anno') {

        let begin = this.getUnixTime(new Date('1/1/' + mydate), 10, 0, 0)
        let end = this.getUnixTime(new Date('12/31/' + mydate), 13, 0, 0)

        let loading = this.loadingController.create({content : "please wait..."});
        loading.present();
        this.mensaProvider.getDataQueueWeek(begin, end).subscribe((json: any) => {

          let index = 0;
          this.query = json.timeslots
          console.log(this.query)
          let len = this.query.length
          for (let x = 0; x < len; x = x + 1) {
            let aggregated_value = this.query[x].aggregated_value;
            let start_timestamp = this.query[x].start_timestamp;
            if (value1 == "Tempo d'attesa")
              this.lineChartData[0].data[index] = this.getTempoAttesa(Math.ceil(aggregated_value));
            else
              this.lineChartData[0].data[index]= Math.ceil(aggregated_value)

            let giorno = new Date(start_timestamp*1000).getDate()+1;
            let mese = new Date(start_timestamp*1000).getMonth()+1;
            this.lineChartLabels[index] = giorno+'/'+mese;

            index = index + 1;
          }

          if (value1 == "Tempo d'attesa")
            this.lineChartData[0].label = 'Tempo di attesa'
          else
            this.lineChartData[0].label = 'Numero di persone'
          
          this.ready = true;
          loading.dismiss();

        });;

      }

      if (value == 'Ricerca per mese') {

        let data: Date = new Date(mydate);
        let anno: String = data.getFullYear().toString();
        let mese: String = (data.getMonth() + 1).toString();

        let begin = this.getUnixTime(new Date(mese + '/1/' + anno), 10, 0, 0)
        let end = this.getUnixTime(new Date(mese + '/31/' + anno), 13, 0, 0)

        let loading = this.loadingController.create({content : "please wait..."});
        loading.present();
        this.mensaProvider.getDataQueueDay(begin, end).subscribe((json: any) => {

          let index = 0;
          this.query = json.timeslots
          console.log(this.query)
          let len = this.query.length
          for (let x = 0; x < len; x = x + 1) {
            let aggregated_value = this.query[x].aggregated_value;
            let start_timestamp = this.query[x].start_timestamp;
            if (value1 == "Tempo d'attesa")
              this.lineChartData[0].data[index] = this.getTempoAttesa(Math.ceil(aggregated_value));
            else
              this.lineChartData[0].data[index]= Math.ceil(aggregated_value)

            let giorno = new Date(start_timestamp*1000).getDate()+1;
            let mese = new Date(start_timestamp*1000).getMonth()+1;
            this.lineChartLabels[index] = giorno+'/'+mese;
            
            index = index + 1;
          }
          if (value1 == "Tempo d'attesa")
            this.lineChartData[0].label = 'Tempo di attesa'
          else
            this.lineChartData[0].label = 'Numero di persone'

          this.ready = true;
          loading.dismiss();


        });;


      }

      if (value == 'Ricerca per giorno') {

        let data: Date = new Date(mydate);
        let anno: String = data.getFullYear().toString();
        let mese: String = (data.getMonth() + 1).toString();
        let giorno: String = data.getDate().toString();


        let begin = this.getUnixTime(new Date(mese + '/'+ giorno+'/' + anno), 10, 0, 0)
        let end = this.getUnixTime(new Date(mese + '/'+ giorno+'/' + anno), 13, 0, 0)

        let loading = this.loadingController.create({content : "please wait..."});
        loading.present();
        this.mensaProvider.getDataQueueMinute(begin, end).subscribe((json: any) => {

          let index = 0;
          this.query = json.timeslots
          console.log(this.query)
          let len = this.query.length
          for (let x = 0; x < len; x = x + 1) {
            let aggregated_value = this.query[x].aggregated_value;
            let start_timestamp = this.query[x].start_timestamp;

            let ora = new Date(start_timestamp*1000).getHours();
            let minuto = new Date(start_timestamp*1000).getMinutes();

            console.log(minuto)

            if( minuto % 10 == 0 ){
              this.lineChartLabels[index] = ora+':'+minuto;

              if (value1 == "Tempo d'attesa")
                this.lineChartData[0].data[index] = this.getTempoAttesa(Math.ceil(aggregated_value));
              else
                this.lineChartData[0].data[index]= Math.ceil(aggregated_value)

              index = index + 1;

            }

          }

          if (value1 == "Tempo d'attesa")
            this.lineChartData[0].label = 'Tempo di attesa'
          else
            this.lineChartData[0].label = 'Numero di persone'

          this.ready = true;
          loading.dismiss();


        });;


      }


    }
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
