import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {ServermensaProvider} from '../../providers/servermensa/servermensa'


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

  ready: boolean = false;
  public users: any;
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  public lineChartLabels: Array<any> = [];
  public lineChartData: Array<any> = [
    { data: [], label: '' }];
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
    public mensa: ServermensaProvider,
  ) {
  }

  ionViewDidLoad() {
  }

  // go to result page

  close() {
    this.ready = false;
  }
/*
  //hello(){
    this.mensa.getExample().subscribe((data: any) => {
      console.log('data = '+ data)
      this.users = data[0].id;
    });

  }
*/

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

  // in base ai dati scelti dall'utente si effettua una query ai dati storici
  doSearch(value1, value, mydate) {

    if (value1 == null || value == null || mydate == null) {
      alert("Inserisci i valori")
    } else {

      this.ready = true;

      if (value == 'Ricerca per anno') {

        let data: Date = new Date(mydate);
        let anno: String = data.getFullYear().toString();

        this.lineChartLabels = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic',];

        if (value1 == "Tempo d'attesa") {
          this.lineChartData = [
            { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: "Tempo d'attesa" }
          ];
        }
        if (value1 == "Numero di persone") {
          this.lineChartData = [
            { data: [10, 20, 80, 70, 50, 60, 70, 70, 70, 60, 50, 10], label: "Numero di persone" }
          ];
        }

      }

      if (value == 'Ricerca per mese') {

        let data: Date = new Date(mydate);
        let anno: String = data.getFullYear().toString();
        let mese: String = (data.getMonth() + 1).toString();

        this.lineChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',];

        if (value1 == "Tempo d'attesa") {
          this.lineChartData = [
            { data: [10, 20, 80, 70, 50, 60, 70, 70, 70, 60, 50, 10], label: "Tempo d'attesa" }
          ];
        }
        if (value1 == "Numero di persone") {
          this.lineChartData = [
            { data: [10, 20, 80, 70, 50, 60, 70, 70, 70, 60, 50, 10], label: "Numero di persone" }
          ];
        }

      }

      if (value == 'Ricerca per giorno') {

        let data: Date = new Date(mydate);
        let anno: String = data.getFullYear().toString();
        let mese: String = (data.getMonth() + 1).toString();
        let giorno: String = data.getDate().toString();

        this.lineChartLabels = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',];

        if (value1 == "Tempo d'attesa") {
          this.lineChartData = [
            { data: [10, 20, 80, 70, 50, 60, 70, 70, 70, 60, 50, 10], label: "Tempo d'attesa" }
          ];
        }
        if (value1 == "Numero di persone") {
          this.lineChartData = [
            { data: [10, 20, 80, 70, 50, 60, 70, 70, 70, 60, 50, 10], label: "Numero di persone" }
          ];
        }

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
