webpackJsonp([0],{

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherProvider = (function () {
    function WeatherProvider(http) {
        this.http = http;
        this.apiKey = '1e4a0bdb251c64e4';
        console.log('Hello WeatherProvider Provider');
        this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/';
    }
    WeatherProvider.prototype.getWeather = function (state, city) {
        return this.http.get(this.url + state + '/' + city + '.json').map(function (res) { return res; });
    };
    return WeatherProvider;
}());
WeatherProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], WeatherProvider);

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_weather__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, weatherProvider, alertController) {
        this.navCtrl = navCtrl;
        this.weatherProvider = weatherProvider;
        this.alertController = alertController;
        // search condition
        this.aperto = true;
        this.index = 0;
        this.lineChartData = [
            { data: [], label: 'Numero di Persone in coda' }
        ];
        this.lineChartLabels = ['12:00', '12:15', '12:30', '12:45', '13:00', '13:15', '13:30', '13:45', '14:00', '14:15', '14:30', '14:45', '15:00'];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
        ];
        this.chartColors = [
            {
                backgroundColor: 'rgba(0,0,255,0.6)',
                borderColor: 'rgba(0,0,255,0.6)',
                pointBackgroundColor: 'rgba(225,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(225,10,24,0.2)',
                hoverBackgroundColor: 'rgba(30,144,255,0.6)',
                hoverdBorderColor: 'rgba(30,144,255,0.6)'
            },
        ];
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [12, 15, 25, 30, 15, 20, 5], label: 'Tempo di attesa stimato' }
        ];
        this.barChartData2 = [
            { data: [12, 15, 25, 30, 15, 20, 5], label: 'Tempo di attesa stimato' }
        ];
        this.barChartData3 = [
            { data: [12, 15, 25, 30, 15, 20, 5], label: 'Tempo di attesa stimato' }
        ];
    }
    ;
    HomePage.prototype.chartClicked = function (e) {
        if (e.active.length > 0) {
            var chart = e.active[0]._chart;
            var activePoints = chart.getElementAtEvent(e.event);
            if (activePoints.length > 0) {
                // get the internal index of slice in pie chart
                var clickedElementIndex = activePoints[0]._index;
                var label = chart.data.labels[clickedElementIndex];
                // get value by index
                var value = chart.data.datasets[0].data[clickedElementIndex];
                if (value < 10) {
                    this.titolo = 'Poco affollato';
                }
                if (value >= 20 && value < 25) {
                    this.titolo = 'Affollato';
                }
                if (value > 25) {
                    this.titolo = 'Molto affollato';
                }
                this.mostraAlert(this.titolo, label, value);
                console.log(clickedElementIndex, label, value);
            }
        }
    };
    HomePage.prototype.mostraAlert = function (titolo, orario, value) {
        var alert = this.alertController.create({
            title: 'Ore : ' + orario + " " + titolo,
            subTitle: "Fino a " + value + " persone in attesa",
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.utcTime();
        this.getWeather();
        this.check();
        this.updateLineChartData();
    };
    HomePage.prototype.getGiorno = function () {
        var d = new Date();
        var n = d.getDay();
        return n - 1;
    };
    //grazie al metodo set interval ogni 1000ms viene aggiornata l'ora
    HomePage.prototype.utcTime = function () {
        var _this = this;
        setInterval(function () {
            _this.todayDate = new Date();
        }, 1000);
    };
    //grazie al metodo set interval ogni 1000ms viene aggiornato il meteo
    HomePage.prototype.getWeather = function () {
        var _this = this;
        setInterval(function () {
            _this.weatherProvider.getWeather('IT', 'Fisciano').subscribe(function (weather) {
                _this.weather = weather.current_observation;
            });
        }, 1000);
    };
    //grazie al metodo set interval ogni 1000ms viene aggiornata la variabile
    //ready per visulizzare solo dopo mezzoggiorno (apertura mensa) il grafico
    HomePage.prototype.check = function () {
        var _this = this;
        setInterval(function () {
            var ora = _this.todayDate.getHours();
            if (ora > 11 && ora < 15) {
                _this.aperto = true;
            }
            else {
                _this.aperto = false;
            }
            if (ora >= 9) {
                _this.ready = true;
            }
            else {
                _this.ready = false;
            }
        }, 1000);
    };
    //grazie al metodo set interval ogni 15 min vengono aggiornati i dati
    //provenienti dalle telecamere in real time e visualizzati sul grafico
    HomePage.prototype.updateLineChartData = function () {
        var _this = this;
        setInterval(function () {
            var ora = _this.todayDate.getHours();
            var minuti = _this.todayDate.getMinutes();
            var secondi = _this.todayDate.getSeconds();
            // qui si deve fare la get al server
            _this.lineChartData = [
                { data: [minuti, 0, 0, secondi, 0, 0, ora, 0, 0, secondi, 0, 0, minuti], label: 'Numero di Persone in coda' }
            ];
        }, 1000);
    };
    HomePage.prototype.orario = function () {
        var ora = this.todayDate.getHours().toLocaleString();
        var minuti = this.todayDate.getMinutes().toLocaleString();
        var secondi = this.todayDate.getSeconds().toLocaleString();
        return ora + ":" + minuti + ":" + secondi;
    };
    HomePage.prototype.getStimaTempo = function () {
        //Qui si deve calcolare la stima del tempo
        return '15';
    };
    HomePage.prototype.getNumeroPersone = function () {
        //Qui si deve calcolare la stima del tempo
        return '1005';
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\asus\Desktop\easymensa-app\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <strong>UNISA</strong> Easy Mensa\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="common-bg">\n\n\n\n  <ion-grid class="card" padding *ngIf="weather">\n\n    <ion-item>\n\n      <h1>\n\n        <strong> Enjoy your Time! </strong>\n\n      </h1>\n\n    </ion-item>\n\n    <ion-item>\n\n      <h2> L\'app di Ateneo consente di regolare e prevedere </h2>\n\n      <h2>l’affluenza in mensa. </h2>\n\n      <h2> Fatti furbo e pianifica il tuo pranzo.</h2>\n\n    </ion-item>\n\n    <ion-item>\n\n      <h1>\n\n        <strong>{{orario()}}</strong>\n\n      </h1>\n\n    </ion-item>\n\n  </ion-grid>\n\n\n\n  <ion-grid class="card" padding>\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label>\n\n          <strong> Organizza la tua visita </strong>\n\n        </ion-label>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="person"></ion-icon> Numero di persone in coda: {{getNumeroPersone()}}</ion-label>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="alarm"></ion-icon> Tempo di attesa previsto: {{getStimaTempo()}}\'</ion-label>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="alert"></ion-icon> Picco di attesa fino a\n\n          <strong>1h dalle 13:00 alle 14:00</strong>\n\n        </ion-label>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </ion-grid>\n\n\n\n\n\n  <ion-card>\n\n    <ion-slides pager="true" [initialSlide]="getGiorno()">\n\n      <ion-slide>\n\n        <div>\n\n          <div style="display: block">\n\n            <canvas baseChart [datasets]="barChartData" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n\n              [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n\n          </div>\n\n        </div>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <div>\n\n          <div style="display: block">\n\n            <canvas baseChart [datasets]="barChartData2" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n\n              [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n\n          </div>\n\n        </div>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <div>\n\n          <div style="display: block">\n\n            <canvas baseChart [datasets]="barChartData3" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n\n              [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n\n          </div>\n\n        </div>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <div>\n\n          <div style="display: block">\n\n            <canvas baseChart [datasets]="barChartData" [colors]="chartColors" [labels]="barChartLabels" [options]="barChartOptions"\n\n              [legend]="barChartLegend" [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n\n          </div>\n\n        </div>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <div>\n\n          <div style="display: block">\n\n            <canvas baseChart [datasets]="barChartData" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n\n              [colors]="chartColors" [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n\n          </div>\n\n        </div>\n\n      </ion-slide>\n\n    <ion-slide>\n\n      <div>\n\n        <div style="display: block">\n\n          <canvas baseChart [datasets]="barChartData" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n\n            [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n\n        </div>\n\n      </div>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <div>\n\n          <div style="display: block">\n\n            <canvas baseChart [datasets]="barChartData" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n\n              [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n\n          </div>\n\n        </div>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </ion-card>\n\n\n\n\n\n\n\n  <ion-grid class="card" padding>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>\n\n          <strong> Informazioni </strong>\n\n        </ion-label>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="pin"></ion-icon> Via della Tecnica n. 1, 84084 Fisciano SA</ion-label>\n\n      </ion-item>\n\n      <ion-item *ngIf=\'aperto\'>\n\n        <ion-label>\n\n          <ion-icon name="time"></ion-icon>\n\n          <strong>Aperto</strong> chiude alle 15:00</ion-label>\n\n      </ion-item>\n\n      <ion-item *ngIf=\'!aperto\'>\n\n        <ion-label>\n\n          <ion-icon name="time"></ion-icon>\n\n          <strong>Chiuso</strong> riapre alle ore 12.00</ion-label>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-grid>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\asus\Desktop\easymensa-app\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_weather__["a" /* WeatherProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatistichePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servermensa_servermensa__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StatistichePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatistichePage = (function () {
    function StatistichePage(navCtrl, navParams, mensa) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mensa = mensa;
        this.ready = false;
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartLabels = [];
        this.lineChartData = [
            { data: [], label: '' }
        ];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
    }
    StatistichePage.prototype.ionViewDidLoad = function () {
        this.hello();
    };
    // go to result page
    StatistichePage.prototype.close = function () {
        this.ready = false;
    };
    StatistichePage.prototype.hello = function () {
        var _this = this;
        this.mensa.getExample().subscribe(function (data) {
            console.log('data = ' + data);
            _this.users = data[0].id;
        });
    };
    StatistichePage.prototype.doDate = function (mydate, value) {
        if (value == 'Ricerca per anno') {
            var data = new Date(mydate);
            var anno = data.getFullYear().toString();
            return anno;
        }
        if (value == 'Ricerca per mese') {
            var data = new Date(mydate);
            var anno = data.getFullYear().toString();
            var mese = (data.getMonth() + 1).toString();
            return mese + "/" + anno;
        }
        if (value == 'Ricerca per giorno') {
            var data = new Date(mydate);
            var anno = data.getFullYear().toString();
            var mese = (data.getMonth() + 1).toString();
            var giorno = data.getDate().toString();
            return giorno + "/" + mese + "/" + anno;
        }
    };
    // in base ai dati scelti dall'utente si effettua una query ai dati storici
    StatistichePage.prototype.doSearch = function (value1, value, mydate) {
        if (value1 == null || value == null || mydate == null) {
            alert("Inserisci i valori");
        }
        else {
            this.ready = true;
            if (value == 'Ricerca per anno') {
                var data = new Date(mydate);
                var anno = data.getFullYear().toString();
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
                var data = new Date(mydate);
                var anno = data.getFullYear().toString();
                var mese = (data.getMonth() + 1).toString();
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
                var data = new Date(mydate);
                var anno = data.getFullYear().toString();
                var mese = (data.getMonth() + 1).toString();
                var giorno = data.getDate().toString();
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
    };
    // events
    StatistichePage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    StatistichePage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return StatistichePage;
}());
StatistichePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-statistiche',template:/*ion-inline-start:"C:\Users\asus\Desktop\easymensa-app\src\pages\statistiche\statistiche.html"*/'<!--\n\n  Generated template for the StatistichePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <strong>Statistiche</strong>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h1>{{users}}</h1>\n\n\n\n  <ion-grid class="card">\n\n    <ion-list *ngIf = \'!ready\'>\n\n        <ion-item>\n\n            <ion-label>Personalizza il tipo di ricerca</ion-label>\n\n            <ion-select [(ngModel)]="value1">\n\n              <ion-option >Tempo d\'attesa</ion-option>\n\n              <ion-option>Numero di persone</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        <ion-item>\n\n            <ion-label>Seleziona tipo di ricerca</ion-label>\n\n            <ion-select [(ngModel)]="value">\n\n              <ion-option>Ricerca per anno</ion-option>\n\n              <ion-option>Ricerca per mese</ion-option>\n\n              <ion-option>Ricerca per giorno</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n      <ion-item *ngIf = "value == \'Ricerca per anno\'">\n\n              <ion-label>Seleziona Anno</ion-label>\n\n              <ion-datetime displayFormat="YYYY" [(ngModel)]="myDate"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item *ngIf = "value == \'Ricerca per mese\'">\n\n              <ion-label>Seleziona Mese</ion-label>\n\n              <ion-datetime displayFormat="MM/YYYY" pickerFormat="MM YYYY" [(ngModel)]="myDate"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item *ngIf = "value == \'Ricerca per giorno\'">\n\n          <ion-label>Seleziona per giorno </ion-label>\n\n          <ion-datetime displayFormat="DD MM YYYY" [(ngModel)]="myDate" values = "YYYY"></ion-datetime>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button *ngIf = \'!ready\' icon-start block no-margin color="primary" class="round" tappable (click)="doSearch(value1,value,myDate)">\n\n      <ion-icon name="search"></ion-icon> Cerca\n\n    </button>\n\n  </ion-grid>\n\n\n\n  <button ion-button *ngIf = \'ready\' tappable (click)="close()">\n\n    <ion-icon name="indietro"></ion-icon> Indietro \n\n  </button>\n\n\n\n  <ion-grid *ngIf = \'ready\' class="card" padding>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label> {{value1}} </ion-label>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label> {{value}} </ion-label>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label> {{doDate(myDate,value)}} </ion-label>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-grid>\n\n\n\n  <ion-grid *ngIf = \'ready\' class="card" padding>\n\n    <ion-row>\n\n      <canvas baseChart width="300" height="200" [datasets]="lineChartData" [labels]="lineChartLabels" [options]="lineChartOptions"\n\n        [colors]="lineChartColors" [legend]="lineChartLegend" [chartType]="lineChartType" (chartHover)="chartHovered($event)"\n\n        (chartClick)="chartClicked($event)"></canvas>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\asus\Desktop\easymensa-app\src\pages\statistiche\statistiche.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_servermensa_servermensa__["a" /* ServermensaProvider */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_servermensa_servermensa__["a" /* ServermensaProvider */]])
], StatistichePage);

//# sourceMappingURL=statistiche.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServermensaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ServermensaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServermensaProvider = (function () {
    function ServermensaProvider(http) {
        this.http = http;
        this.apiKey = '1e4a0bdb251c64e4';
        console.log('Hello ServermensaProvider Provider');
        this.url = 'https://jsonplaceholder.typicode.com/users';
    }
    ServermensaProvider.prototype.getExample = function () {
        return this.http.get('http://dashboard.aitech.vision:8080/api/devices/key=e0c54bcdf2e11d8a2b65a3a7b4212a63745f2a3c').map(function (res) { return res; });
    };
    return ServermensaProvider;
}());
ServermensaProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], ServermensaProvider);

//# sourceMappingURL=servermensa.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(355);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_weather__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_statistiche_statistiche__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_charts__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_servermensa_servermensa__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import services
// end import services
// end import services
// import pages
// end import pages
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_statistiche_statistiche__["a" /* StatistichePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_12_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {
                scrollPadding: false,
                scrollAssist: true,
                autoFocusAssist: false
            }, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__ionic3_start_theme',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_statistiche_statistiche__["a" /* StatistichePage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_8__services_weather__["a" /* WeatherProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_servermensa_servermensa__["a" /* ServermensaProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_statistiche_statistiche__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Statistiche', component: __WEBPACK_IMPORTED_MODULE_5__pages_statistiche_statistiche__["a" /* StatistichePage */], icon: 'person' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            //*** Control Splash Screen
            // this.splashScreen.show();
            // this.splashScreen.hide();
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\asus\Desktop\easymensa-app\src\app\app.html"*/'<ion-menu side="left" id="authenticated" [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n            <ion-col width-50 offset-25>\n\n            <h3><img src="assets/img/logoMensa.jpeg"></h3>\n\n            </ion-col>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content color="primary">\n\n\n\n    <ion-list class="user-list">\n\n      <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n\n        <ion-icon item-left [name]="menuItem.icon" color="primary"></ion-icon>\n\n        <span ion-text color="primary">{{menuItem.title}}</span>\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\asus\Desktop\easymensa-app\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 214,
	"./af.js": 214,
	"./ar": 215,
	"./ar-dz": 216,
	"./ar-dz.js": 216,
	"./ar-kw": 217,
	"./ar-kw.js": 217,
	"./ar-ly": 218,
	"./ar-ly.js": 218,
	"./ar-ma": 219,
	"./ar-ma.js": 219,
	"./ar-sa": 220,
	"./ar-sa.js": 220,
	"./ar-tn": 221,
	"./ar-tn.js": 221,
	"./ar.js": 215,
	"./az": 222,
	"./az.js": 222,
	"./be": 223,
	"./be.js": 223,
	"./bg": 224,
	"./bg.js": 224,
	"./bm": 225,
	"./bm.js": 225,
	"./bn": 226,
	"./bn.js": 226,
	"./bo": 227,
	"./bo.js": 227,
	"./br": 228,
	"./br.js": 228,
	"./bs": 229,
	"./bs.js": 229,
	"./ca": 230,
	"./ca.js": 230,
	"./cs": 231,
	"./cs.js": 231,
	"./cv": 232,
	"./cv.js": 232,
	"./cy": 233,
	"./cy.js": 233,
	"./da": 234,
	"./da.js": 234,
	"./de": 235,
	"./de-at": 236,
	"./de-at.js": 236,
	"./de-ch": 237,
	"./de-ch.js": 237,
	"./de.js": 235,
	"./dv": 238,
	"./dv.js": 238,
	"./el": 239,
	"./el.js": 239,
	"./en-au": 240,
	"./en-au.js": 240,
	"./en-ca": 241,
	"./en-ca.js": 241,
	"./en-gb": 242,
	"./en-gb.js": 242,
	"./en-ie": 243,
	"./en-ie.js": 243,
	"./en-il": 244,
	"./en-il.js": 244,
	"./en-nz": 245,
	"./en-nz.js": 245,
	"./eo": 246,
	"./eo.js": 246,
	"./es": 247,
	"./es-do": 248,
	"./es-do.js": 248,
	"./es-us": 249,
	"./es-us.js": 249,
	"./es.js": 247,
	"./et": 250,
	"./et.js": 250,
	"./eu": 251,
	"./eu.js": 251,
	"./fa": 252,
	"./fa.js": 252,
	"./fi": 253,
	"./fi.js": 253,
	"./fo": 254,
	"./fo.js": 254,
	"./fr": 255,
	"./fr-ca": 256,
	"./fr-ca.js": 256,
	"./fr-ch": 257,
	"./fr-ch.js": 257,
	"./fr.js": 255,
	"./fy": 258,
	"./fy.js": 258,
	"./gd": 259,
	"./gd.js": 259,
	"./gl": 260,
	"./gl.js": 260,
	"./gom-latn": 261,
	"./gom-latn.js": 261,
	"./gu": 262,
	"./gu.js": 262,
	"./he": 263,
	"./he.js": 263,
	"./hi": 264,
	"./hi.js": 264,
	"./hr": 265,
	"./hr.js": 265,
	"./hu": 266,
	"./hu.js": 266,
	"./hy-am": 267,
	"./hy-am.js": 267,
	"./id": 268,
	"./id.js": 268,
	"./is": 269,
	"./is.js": 269,
	"./it": 270,
	"./it.js": 270,
	"./ja": 271,
	"./ja.js": 271,
	"./jv": 272,
	"./jv.js": 272,
	"./ka": 273,
	"./ka.js": 273,
	"./kk": 274,
	"./kk.js": 274,
	"./km": 275,
	"./km.js": 275,
	"./kn": 276,
	"./kn.js": 276,
	"./ko": 277,
	"./ko.js": 277,
	"./ky": 278,
	"./ky.js": 278,
	"./lb": 279,
	"./lb.js": 279,
	"./lo": 280,
	"./lo.js": 280,
	"./lt": 281,
	"./lt.js": 281,
	"./lv": 282,
	"./lv.js": 282,
	"./me": 283,
	"./me.js": 283,
	"./mi": 284,
	"./mi.js": 284,
	"./mk": 285,
	"./mk.js": 285,
	"./ml": 286,
	"./ml.js": 286,
	"./mn": 287,
	"./mn.js": 287,
	"./mr": 288,
	"./mr.js": 288,
	"./ms": 289,
	"./ms-my": 290,
	"./ms-my.js": 290,
	"./ms.js": 289,
	"./mt": 291,
	"./mt.js": 291,
	"./my": 292,
	"./my.js": 292,
	"./nb": 293,
	"./nb.js": 293,
	"./ne": 294,
	"./ne.js": 294,
	"./nl": 295,
	"./nl-be": 296,
	"./nl-be.js": 296,
	"./nl.js": 295,
	"./nn": 297,
	"./nn.js": 297,
	"./pa-in": 298,
	"./pa-in.js": 298,
	"./pl": 299,
	"./pl.js": 299,
	"./pt": 300,
	"./pt-br": 301,
	"./pt-br.js": 301,
	"./pt.js": 300,
	"./ro": 302,
	"./ro.js": 302,
	"./ru": 303,
	"./ru.js": 303,
	"./sd": 304,
	"./sd.js": 304,
	"./se": 305,
	"./se.js": 305,
	"./si": 306,
	"./si.js": 306,
	"./sk": 307,
	"./sk.js": 307,
	"./sl": 308,
	"./sl.js": 308,
	"./sq": 309,
	"./sq.js": 309,
	"./sr": 310,
	"./sr-cyrl": 311,
	"./sr-cyrl.js": 311,
	"./sr.js": 310,
	"./ss": 312,
	"./ss.js": 312,
	"./sv": 313,
	"./sv.js": 313,
	"./sw": 314,
	"./sw.js": 314,
	"./ta": 315,
	"./ta.js": 315,
	"./te": 316,
	"./te.js": 316,
	"./tet": 317,
	"./tet.js": 317,
	"./tg": 318,
	"./tg.js": 318,
	"./th": 319,
	"./th.js": 319,
	"./tl-ph": 320,
	"./tl-ph.js": 320,
	"./tlh": 321,
	"./tlh.js": 321,
	"./tr": 322,
	"./tr.js": 322,
	"./tzl": 323,
	"./tzl.js": 323,
	"./tzm": 324,
	"./tzm-latn": 325,
	"./tzm-latn.js": 325,
	"./tzm.js": 324,
	"./ug-cn": 326,
	"./ug-cn.js": 326,
	"./uk": 327,
	"./uk.js": 327,
	"./ur": 328,
	"./ur.js": 328,
	"./uz": 329,
	"./uz-latn": 330,
	"./uz-latn.js": 330,
	"./uz.js": 329,
	"./vi": 331,
	"./vi.js": 331,
	"./x-pseudo": 332,
	"./x-pseudo.js": 332,
	"./yo": 333,
	"./yo.js": 333,
	"./zh-cn": 334,
	"./zh-cn.js": 334,
	"./zh-hk": 335,
	"./zh-hk.js": 335,
	"./zh-tw": 336,
	"./zh-tw.js": 336
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 443;

/***/ })

},[337]);
//# sourceMappingURL=main.js.map