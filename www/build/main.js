webpackJsonp([1],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = (function () {
    function InfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPage');
    };
    return InfoPage;
}());
InfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-info',template:/*ion-inline-start:"/Users/vincenzodauria/Documents/GitHub/easymensa-app/src/pages/info/info.html"*/'<!--\n  Generated template for the InfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu">\n          UNISA Easy Mensa\n        </ion-icon>\n      </button>\n      <ion-title text-right>\n        <img alt="logo" width = 50 height= 50 src="assets/img/logo.png"> \n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n    <ion-grid class="card">\n\n      <ion-item>\n          <strong>Info</strong>\n      </ion-item>\n\n      <ion-item>\n        D\'Auria Vincenzo\n      </ion-item>\n\n      <ion-item>\n          Pepe Roberto\n      </ion-item>\n\n      <ion-item>\n          Davide Battaglia\n      </ion-item>\n\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/vincenzodauria/Documents/GitHub/easymensa-app/src/pages/info/info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], InfoPage);

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/info/info.module": [
		463,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(205);
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

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_weather__ = __webpack_require__(204);
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
    HomePage.prototype.getDay = function () {
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
        selector: 'page-home',template:/*ion-inline-start:"/Users/vincenzodauria/Documents/GitHub/easymensa-app/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu">\n          UNISA Easy Mensa\n        </ion-icon>\n      </button>\n      <ion-title text-right>\n        <img alt="logo" width = 50 height= 50 src="assets/img/logo.png"> \n      </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="common-bg">\n\n  <ion-grid class="card" padding *ngIf="weather">\n    <ion-list>\n    <ion-item>\n      <h1>\n        <strong> Enjoy your Time! </strong>\n      </h1>\n    </ion-item>\n    <ion-item>\n      <h2> L\'app di Ateneo consente di regolare e prevedere </h2>\n      <h2>l’affluenza in mensa. </h2>\n      <h2> Fatti furbo e pianifica il tuo pranzo.</h2>\n    </ion-item>\n    <ion-item>\n      <h1>\n        <strong>{{orario()}}</strong>\n      </h1>\n    </ion-item>\n  </ion-list>\n  </ion-grid>\n\n  <ion-grid class="card" padding>\n    <ion-list>\n\n      <ion-item>\n        <ion-label>\n          <strong> Organizza la tua visita </strong>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <ion-icon name="person"></ion-icon> Numero di persone in coda: {{getNumeroPersone()}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <ion-icon name="alarm"></ion-icon> Tempo di attesa previsto: {{getStimaTempo()}}\'</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <ion-icon name="alert"></ion-icon> Picco di attesa fino a\n          <strong>1h dalle 13:00 alle 14:00</strong>\n        </ion-label>\n      </ion-item>\n\n    </ion-list>\n  </ion-grid>\n\n\n  <ion-card>\n    <ion-slides pager="true" [initialSlide]="getGiorno()">\n      <ion-slide>\n        <div>\n          <div style="display: block">\n            <canvas baseChart [datasets]="barChartData" [colors]="chartColors" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n              [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div>\n          <div style="display: block">\n            <canvas baseChart [datasets]="barChartData2" [colors]="chartColors" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n              [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div>\n          <div style="display: block">\n            <canvas baseChart [datasets]="barChartData3" [colors]="chartColors" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n              [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div>\n          <div style="display: block">\n            <canvas baseChart [datasets]="barChartData" [colors]="chartColors" [labels]="barChartLabels" [options]="barChartOptions"\n              [legend]="barChartLegend" [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div>\n          <div style="display: block">\n            <canvas baseChart [datasets]="barChartData" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n              [colors]="chartColors" [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n          </div>\n        </div>\n      </ion-slide>\n    <ion-slide>\n      <div>\n        <div style="display: block">\n          <canvas baseChart [datasets]="barChartData" [colors]="chartColors" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n            [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n        </div>\n      </div>\n      </ion-slide>\n      <ion-slide>\n        <div>\n          <div style="display: block">\n            <canvas baseChart [datasets]="barChartData" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n              [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n\n  <ion-grid class="card" padding>\n      <ion-list>\n\n      <ion-item>\n        <h1>\n            <ion-icon name = \'ribbon\'> Top Time to eat on {{getDay()}} </ion-icon>\n        </h1>\n      </ion-item>\n      <ion-item>\n            <strong> from 14:00 to 15:00 </strong>\n      </ion-item>\n      \n    </ion-list>\n    </ion-grid>\n\n  <ion-grid class="card" padding>\n    <ion-list>\n      <ion-item>\n        <ion-label>\n          <strong> Informazioni </strong>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <ion-icon name="pin"></ion-icon> Via della Tecnica n. 1, 84084 Fisciano SA</ion-label>\n      </ion-item>\n      <ion-item *ngIf=\'aperto\'>\n        <ion-label>\n          <ion-icon name="time"></ion-icon>\n          <strong>Aperto</strong> chiude alle 15:00</ion-label>\n      </ion-item>\n      <ion-item *ngIf=\'!aperto\'>\n        <ion-label>\n          <ion-icon name="time"></ion-icon>\n          <strong>Chiuso</strong> riapre alle ore 12.00</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-grid>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/vincenzodauria/Documents/GitHub/easymensa-app/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_weather__["a" /* WeatherProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_weather__["a" /* WeatherProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
], HomePage);

var _a, _b, _c;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatistichePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servermensa_servermensa__ = __webpack_require__(208);
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
        selector: 'page-statistiche',template:/*ion-inline-start:"/Users/vincenzodauria/Documents/GitHub/easymensa-app/src/pages/statistiche/statistiche.html"*/'<!--\n  Generated template for the StatistichePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu">\n          UNISA Easy Mensa\n        </ion-icon>\n      </button>\n      <ion-title text-right>\n        <img alt="logo" width = 50 height= 50 src="assets/img/logo.png"> \n      </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h1>{{users}}</h1>\n\n  <ion-grid class="card">\n    <ion-list *ngIf = \'!ready\'>\n        <ion-item>\n            <ion-label>Personalizza il tipo di ricerca</ion-label>\n            <ion-select [(ngModel)]="value1">\n              <ion-option >Tempo d\'attesa</ion-option>\n              <ion-option>Numero di persone</ion-option>\n            </ion-select>\n          </ion-item>\n        <ion-item>\n            <ion-label>Seleziona tipo di ricerca</ion-label>\n            <ion-select [(ngModel)]="value">\n              <ion-option>Ricerca per anno</ion-option>\n              <ion-option>Ricerca per mese</ion-option>\n              <ion-option>Ricerca per giorno</ion-option>\n            </ion-select>\n          </ion-item>\n      <ion-item *ngIf = "value == \'Ricerca per anno\'">\n              <ion-label>Seleziona Anno</ion-label>\n              <ion-datetime displayFormat="YYYY" [(ngModel)]="myDate"></ion-datetime>\n      </ion-item>\n      <ion-item *ngIf = "value == \'Ricerca per mese\'">\n              <ion-label>Seleziona Mese</ion-label>\n              <ion-datetime displayFormat="MM/YYYY" pickerFormat="MM YYYY" [(ngModel)]="myDate"></ion-datetime>\n      </ion-item>\n      <ion-item *ngIf = "value == \'Ricerca per giorno\'">\n          <ion-label>Seleziona per giorno </ion-label>\n          <ion-datetime displayFormat="DD MM YYYY" [(ngModel)]="myDate" values = "YYYY"></ion-datetime>\n      </ion-item>\n    </ion-list>\n    <button ion-button *ngIf = \'!ready\' icon-start block no-margin color="primary" class="round" tappable (click)="doSearch(value1,value,myDate)">\n      <ion-icon name="search"></ion-icon> Cerca\n    </button>\n  </ion-grid>\n\n  <button ion-button *ngIf = \'ready\' tappable (click)="close()">\n    <ion-icon name="indietro"></ion-icon> Indietro \n  </button>\n\n  <ion-grid *ngIf = \'ready\' class="card" padding>\n    <ion-list>\n      <ion-item>\n        <ion-label> {{value1}} </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label> {{value}} </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label> {{doDate(myDate,value)}} </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-grid>\n\n  <ion-grid *ngIf = \'ready\' class="card" padding>\n    <ion-row>\n      <canvas baseChart width="300" height="200" [datasets]="lineChartData" [labels]="lineChartLabels" [options]="lineChartOptions"\n        [colors]="lineChartColors" [legend]="lineChartLegend" [chartType]="lineChartType" (chartHover)="chartHovered($event)"\n        (chartClick)="chartClicked($event)"></canvas>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/vincenzodauria/Documents/GitHub/easymensa-app/src/pages/statistiche/statistiche.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_servermensa_servermensa__["a" /* ServermensaProvider */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_servermensa_servermensa__["a" /* ServermensaProvider */]])
], StatistichePage);

//# sourceMappingURL=statistiche.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServermensaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(205);
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

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(356);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_weather__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_statistiche_statistiche__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_info_info__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_charts__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_servermensa_servermensa__ = __webpack_require__(208);
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
            __WEBPACK_IMPORTED_MODULE_12__pages_info_info__["a" /* InfoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_13_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {
                scrollPadding: false,
                scrollAssist: true,
                autoFocusAssist: false
            }, {
                links: [
                    { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] }
                ]
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
            __WEBPACK_IMPORTED_MODULE_12__pages_info_info__["a" /* InfoPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_8__services_weather__["a" /* WeatherProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_servermensa_servermensa__["a" /* ServermensaProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_statistiche_statistiche__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_info_info__ = __webpack_require__(111);
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
            { title: 'Statistiche', component: __WEBPACK_IMPORTED_MODULE_5__pages_statistiche_statistiche__["a" /* StatistichePage */], icon: 'person' },
            { title: 'Info', component: __WEBPACK_IMPORTED_MODULE_6__pages_info_info__["a" /* InfoPage */], icon: 'information-circle' }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/vincenzodauria/Documents/GitHub/easymensa-app/src/app/app.html"*/'<ion-menu side="left" id="authenticated" [content]="content">\n  <ion-header>\n    <ion-toolbar>\n            <ion-col width-50 offset-25>\n            <h3><img src="assets/img/logoMensa.jpeg"></h3>\n            </ion-col>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content color="primary">\n\n    <ion-list class="user-list">\n      <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon" color="primary"></ion-icon>\n        <span ion-text color="primary">{{menuItem.title}}</span>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/vincenzodauria/Documents/GitHub/easymensa-app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 215,
	"./af.js": 215,
	"./ar": 216,
	"./ar-dz": 217,
	"./ar-dz.js": 217,
	"./ar-kw": 218,
	"./ar-kw.js": 218,
	"./ar-ly": 219,
	"./ar-ly.js": 219,
	"./ar-ma": 220,
	"./ar-ma.js": 220,
	"./ar-sa": 221,
	"./ar-sa.js": 221,
	"./ar-tn": 222,
	"./ar-tn.js": 222,
	"./ar.js": 216,
	"./az": 223,
	"./az.js": 223,
	"./be": 224,
	"./be.js": 224,
	"./bg": 225,
	"./bg.js": 225,
	"./bm": 226,
	"./bm.js": 226,
	"./bn": 227,
	"./bn.js": 227,
	"./bo": 228,
	"./bo.js": 228,
	"./br": 229,
	"./br.js": 229,
	"./bs": 230,
	"./bs.js": 230,
	"./ca": 231,
	"./ca.js": 231,
	"./cs": 232,
	"./cs.js": 232,
	"./cv": 233,
	"./cv.js": 233,
	"./cy": 234,
	"./cy.js": 234,
	"./da": 235,
	"./da.js": 235,
	"./de": 236,
	"./de-at": 237,
	"./de-at.js": 237,
	"./de-ch": 238,
	"./de-ch.js": 238,
	"./de.js": 236,
	"./dv": 239,
	"./dv.js": 239,
	"./el": 240,
	"./el.js": 240,
	"./en-au": 241,
	"./en-au.js": 241,
	"./en-ca": 242,
	"./en-ca.js": 242,
	"./en-gb": 243,
	"./en-gb.js": 243,
	"./en-ie": 244,
	"./en-ie.js": 244,
	"./en-il": 245,
	"./en-il.js": 245,
	"./en-nz": 246,
	"./en-nz.js": 246,
	"./eo": 247,
	"./eo.js": 247,
	"./es": 248,
	"./es-do": 249,
	"./es-do.js": 249,
	"./es-us": 250,
	"./es-us.js": 250,
	"./es.js": 248,
	"./et": 251,
	"./et.js": 251,
	"./eu": 252,
	"./eu.js": 252,
	"./fa": 253,
	"./fa.js": 253,
	"./fi": 254,
	"./fi.js": 254,
	"./fo": 255,
	"./fo.js": 255,
	"./fr": 256,
	"./fr-ca": 257,
	"./fr-ca.js": 257,
	"./fr-ch": 258,
	"./fr-ch.js": 258,
	"./fr.js": 256,
	"./fy": 259,
	"./fy.js": 259,
	"./gd": 260,
	"./gd.js": 260,
	"./gl": 261,
	"./gl.js": 261,
	"./gom-latn": 262,
	"./gom-latn.js": 262,
	"./gu": 263,
	"./gu.js": 263,
	"./he": 264,
	"./he.js": 264,
	"./hi": 265,
	"./hi.js": 265,
	"./hr": 266,
	"./hr.js": 266,
	"./hu": 267,
	"./hu.js": 267,
	"./hy-am": 268,
	"./hy-am.js": 268,
	"./id": 269,
	"./id.js": 269,
	"./is": 270,
	"./is.js": 270,
	"./it": 271,
	"./it.js": 271,
	"./ja": 272,
	"./ja.js": 272,
	"./jv": 273,
	"./jv.js": 273,
	"./ka": 274,
	"./ka.js": 274,
	"./kk": 275,
	"./kk.js": 275,
	"./km": 276,
	"./km.js": 276,
	"./kn": 277,
	"./kn.js": 277,
	"./ko": 278,
	"./ko.js": 278,
	"./ky": 279,
	"./ky.js": 279,
	"./lb": 280,
	"./lb.js": 280,
	"./lo": 281,
	"./lo.js": 281,
	"./lt": 282,
	"./lt.js": 282,
	"./lv": 283,
	"./lv.js": 283,
	"./me": 284,
	"./me.js": 284,
	"./mi": 285,
	"./mi.js": 285,
	"./mk": 286,
	"./mk.js": 286,
	"./ml": 287,
	"./ml.js": 287,
	"./mn": 288,
	"./mn.js": 288,
	"./mr": 289,
	"./mr.js": 289,
	"./ms": 290,
	"./ms-my": 291,
	"./ms-my.js": 291,
	"./ms.js": 290,
	"./mt": 292,
	"./mt.js": 292,
	"./my": 293,
	"./my.js": 293,
	"./nb": 294,
	"./nb.js": 294,
	"./ne": 295,
	"./ne.js": 295,
	"./nl": 296,
	"./nl-be": 297,
	"./nl-be.js": 297,
	"./nl.js": 296,
	"./nn": 298,
	"./nn.js": 298,
	"./pa-in": 299,
	"./pa-in.js": 299,
	"./pl": 300,
	"./pl.js": 300,
	"./pt": 301,
	"./pt-br": 302,
	"./pt-br.js": 302,
	"./pt.js": 301,
	"./ro": 303,
	"./ro.js": 303,
	"./ru": 304,
	"./ru.js": 304,
	"./sd": 305,
	"./sd.js": 305,
	"./se": 306,
	"./se.js": 306,
	"./si": 307,
	"./si.js": 307,
	"./sk": 308,
	"./sk.js": 308,
	"./sl": 309,
	"./sl.js": 309,
	"./sq": 310,
	"./sq.js": 310,
	"./sr": 311,
	"./sr-cyrl": 312,
	"./sr-cyrl.js": 312,
	"./sr.js": 311,
	"./ss": 313,
	"./ss.js": 313,
	"./sv": 314,
	"./sv.js": 314,
	"./sw": 315,
	"./sw.js": 315,
	"./ta": 316,
	"./ta.js": 316,
	"./te": 317,
	"./te.js": 317,
	"./tet": 318,
	"./tet.js": 318,
	"./tg": 319,
	"./tg.js": 319,
	"./th": 320,
	"./th.js": 320,
	"./tl-ph": 321,
	"./tl-ph.js": 321,
	"./tlh": 322,
	"./tlh.js": 322,
	"./tr": 323,
	"./tr.js": 323,
	"./tzl": 324,
	"./tzl.js": 324,
	"./tzm": 325,
	"./tzm-latn": 326,
	"./tzm-latn.js": 326,
	"./tzm.js": 325,
	"./ug-cn": 327,
	"./ug-cn.js": 327,
	"./uk": 328,
	"./uk.js": 328,
	"./ur": 329,
	"./ur.js": 329,
	"./uz": 330,
	"./uz-latn": 331,
	"./uz-latn.js": 331,
	"./uz.js": 330,
	"./vi": 332,
	"./vi.js": 332,
	"./x-pseudo": 333,
	"./x-pseudo.js": 333,
	"./yo": 334,
	"./yo.js": 334,
	"./zh-cn": 335,
	"./zh-cn.js": 335,
	"./zh-hk": 336,
	"./zh-hk.js": 336,
	"./zh-tw": 337,
	"./zh-tw.js": 337
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
webpackContext.id = 444;

/***/ })

},[338]);
//# sourceMappingURL=main.js.map