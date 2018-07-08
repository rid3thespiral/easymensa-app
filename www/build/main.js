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
        selector: 'page-info',template:/*ion-inline-start:"/Users/vincenzodauria/Desktop/easymensa-app/src/pages/info/info.html"*/'<!--\n  Generated template for the InfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu">\n                UNISA Easy Mensa\n            </ion-icon>\n        </button>\n        <ion-title text-right>\n            <img alt="logo" width = 50 height= 50 src="assets/img/logo.png">\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="common-bg">\n\n    <ion-grid class="card" padding>\n        <ion-list>\n\n            <ion-item>\n                <ion-label>\n                    <strong> Info </strong>\n                </ion-label>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>\n                    <h2 ion-text color="darker"><strong ion-text color="darker">UNISA Easy Mensa</strong> è un progetto <br>sviluppato interamente nell\'ambito <br>del corso di <strong>\n                        Mobile Programming</strong>\n                        <br>nell’Anno Accademico 2017-2018.\n                    </h2>\n                </ion-label>\n            </ion-item>\n\n        </ion-list>\n    </ion-grid>\n\n    <ion-grid class="card" padding>\n        <ion-list>\n\n            <ion-item>\n                <ion-label>\n                    <strong>  Sviluppatori </strong>\n                </ion-label>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>\n                    Davide Battaglia\n                </ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label>\n                    Vincenzo D\'Auria\n                </ion-label>\n\n            </ion-item>\n            <ion-item>\n                <ion-label>\n                    Roberto Pepe\n                </ion-label>\n            </ion-item>\n\n        </ion-list>\n    </ion-grid>\n\n    <ion-grid class="card" padding>\n        <ion-list>\n\n            <ion-item>\n                <ion-label>\n                    <strong> Docente</strong>\n                </ion-label>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>\n                    Prof. Alessia Saggese\n                </ion-label>\n            </ion-item>\n        </ion-list>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/vincenzodauria/Desktop/easymensa-app/src/pages/info/info.html"*/,
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
		464,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(109);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_servermensa_servermensa__ = __webpack_require__(209);
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
    function HomePage(navCtrl, weatherProvider, mensaProvider, alertController, launchnavigator) {
        this.navCtrl = navCtrl;
        this.weatherProvider = weatherProvider;
        this.mensaProvider = mensaProvider;
        this.alertController = alertController;
        this.launchnavigator = launchnavigator;
        this.stimaTempoUnaPeronsa = 5;
        ////////////////////////////////////////////////////////////////////////
        // FUNZIONI GRAFICO 
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
            {
                backgroundColor: 'rgba(255,0,0,0.6)',
                borderColor: 'rgba(255,0,0,0.6)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['12.00', '12.30', '13.00', '13.30', '14.00', '14.30', '15.00'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData1 = [
            { data: [12, 15, 25, 30, 15, 20, 5], label: 'Tempo di attesa stimato' },
            { data: this.generateData(1), label: 'Media di questo mese' }
        ];
        this.barChartData2 = [
            { data: [12, 15, 25, 30, 15, 20, 5], label: 'Tempo di attesa stimato' },
            { data: this.generateData(2), label: 'Media di questo mese' }
        ];
        this.barChartData3 = [
            { data: [12, 15, 25, 30, 15, 20, 5], label: 'Tempo di attesa stimato' },
            { data: this.generateData(3), label: 'Media di questo mese' }
        ];
        this.barChartData4 = [
            { data: [12, 15, 25, 30, 15, 20, 5], label: 'Tempo di attesa stimato' },
            { data: this.generateData(4), label: 'Media di questo mese' }
        ];
        this.barChartData5 = [
            { data: [12, 15, 25, 30, 15, 20, 5], label: 'Tempo di attesa stimato' },
            { data: this.generateData(5), label: 'Media di questo mese' }
        ];
    }
    ////////////////////////////////////////////////////////////////////////
    // SET DI FUNZIONI CHE VENGONO ESEGUITE QUANDO SI ACCEDE ALLA PAGINA HOME
    HomePage.prototype.ionViewWillEnter = function () {
        this.utcTime();
        this.getWeather();
        this.getNumeroPersone();
    };
    HomePage.prototype.utcTime = function () {
        var _this = this;
        setInterval(function () {
            _this.todayDate = new Date();
        }, 1000);
    };
    HomePage.prototype.orario = function () {
        var ora = this.todayDate.getHours().toLocaleString();
        var minuti = this.todayDate.getMinutes().toLocaleString();
        var secondi = this.todayDate.getSeconds().toLocaleString();
        return ora + ":" + minuti + ":" + secondi;
    };
    HomePage.prototype.getWeather = function () {
        var _this = this;
        this.weatherProvider.getWeather('IT', 'Fisciano').subscribe(function (weather) {
            _this.weather = weather.current_observation;
        });
    };
    ////////////////////////////////////////////////////////////////////////
    // FUNZIONI CARD INFORMAZIONI
    HomePage.prototype.openMaps = function () {
        console.log('ciao');
        this.launchnavigator.navigate("Via della Tecnica n. 1, 84084 Fisciano SA");
    };
    HomePage.prototype.getNumeroPersone = function () {
        var _this = this;
        var d = new Date('7/6/2018');
        var ora = d.getHours();
        var minuti = d.getMinutes();
        var secondi = d.getSeconds();
        var end = this.getUnixTime(d);
        var begin;
        if (minuti > 10)
            begin = this.getUnixTime(this.setOrario(d, ora, minuti - 1, secondi));
        else
            begin = this.getUnixTime(this.setOrario(d, ora - 1, 10 + minuti, secondi));
        begin = this.getUnixTime(this.setOrario(new Date('7/4/2018'), 13, 15, 0));
        end = this.getUnixTime(this.setOrario(new Date('7/4/2018'), 13, 16, 0));
        this.mensaProvider.getDataEnter(begin, end).subscribe(function (data) {
            console.log(data.events);
            _this.realTimeCountPerson = data.events[data.events.length - 1].actual_count;
            _this.realTimeStimaTempo = _this.realTimeCountPerson * _this.stimaTempoUnaPeronsa;
        });
        ;
        /*
        this.mensaProvider.getDataExit(begin,end).subscribe((data2: any) => {
          console.log(data2.events)
          this.realTimeCountPerson = this.realTimeCountPerson - data2.events[data2.events.length-1].actual_count;
          this.realTimeStimaTempo = this.realTimeCountPerson*this.stimaTempoUnaPeronsa;
        });;*/
    };
    HomePage.prototype.maxAttesa = function () {
    };
    HomePage.prototype.getTopTime = function () {
    };
    HomePage.prototype.getGiorno = function () {
        var d = new Date();
        var n = d.getDay();
        return n - 1;
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
    HomePage.prototype.generateData = function (giorno) {
        var d = new Date();
        var n = d.getDay();
        if (n == giorno) {
            return [5, 5, 15, 20, 15, 25];
        }
        else {
            return [0, 0, 0, 0, 0, 0];
        }
    };
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
                if (value >= 10 && value < 20) {
                    this.titolo = 'Normalmente Affollato';
                }
                if (value > 20) {
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
    ////////////////////////////////////////////////////////////////
    // GET DAL SERVER 
    /** Prende in input un parametro Date e ne restituisce il corrrispondente valore Unix */
    HomePage.prototype.getUnixTime = function (data) {
        return (Math.ceil(data.getTime() / 1000)).toString();
    };
    HomePage.prototype.setOrario = function (data, ora, minuti, secondi) {
        data.setHours(ora);
        data.setMinutes(minuti);
        data.setSeconds(secondi);
        return data;
    };
    HomePage.prototype.testMensa = function () {
        var _this = this;
        var result = '';
        8;
        var begin = this.getUnixTime(this.setOrario(new Date('7/4/2018'), 13, 0, 0));
        var end = this.getUnixTime(this.setOrario(new Date('7/4/2018'), 13, 1, 0));
        console.log(begin);
        console.log(end);
        this.mensaProvider.getDataEnter(begin, end).subscribe(function (data) {
            console.log(data.events);
            _this.mensa = data.events[0].actual_count;
        });
        ;
        console.log(result);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/vincenzodauria/Desktop/easymensa-app/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu">\n          UNISA Easy Mensa\n        </ion-icon>\n      </button>\n      <ion-title text-right>\n        <img alt="logo" width = 50 height= 50 src="assets/img/logo.png"> \n      </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="common-bg">\n\n  <ion-grid>\n\n        <button ion-button (click)="testMensa()">\n            <ion-icon name="search"></ion-icon> Cerca\n        </button>\n        <ion-item>\n      <ion-label>{{mensa}}</ion-label>\n    </ion-item>\n  </ion-grid>\n\n  <ion-grid class="card" padding *ngIf="todayDate">\n    <ion-list>\n    <ion-item>\n      <h1>\n        <strong> Enjoy your Time! </strong>\n      </h1>\n    </ion-item>\n    <ion-item>\n      <h2> L\'app di Ateneo consente di regolare e prevedere </h2>\n      <h2>l’affluenza in mensa. </h2>\n      <h2> Fatti furbo e pianifica il tuo pranzo.</h2>\n    </ion-item>\n    <ion-item>\n      <h1>\n        <strong>{{orario()}}</strong>\n      </h1>\n    </ion-item>\n  </ion-list>\n  </ion-grid>\n\n  <ion-grid class="card" padding>\n    <ion-list>\n\n      <ion-item>\n        <ion-label>\n          <strong> Organizza la tua visita </strong>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <ion-icon name="person"></ion-icon> Numero di persone in coda: {{realTimeCountPerson}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <ion-icon name="alarm"></ion-icon> Tempo di attesa previsto: {{realTimeStimaTempo}} min</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <ion-icon name="alert"></ion-icon> Picco di attesa fino a\n          <strong>1h dalle 13:00 alle 14:00</strong>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>\n              <ion-icon name = \'ribbon\'></ion-icon><strong> Top Time on {{getDay()}} from 14:00 to 15:00 </strong>\n          </ion-label>\n        </ion-item>\n\n    </ion-list>\n  </ion-grid>\n\n\n  <ion-card>\n    <ion-slides pager="true" [initialSlide]="getGiorno()">\n      <ion-slide>\n        <div>\n          <div style="display: block">\n            <p>Lunedì</p>\n            <canvas baseChart  [datasets]="barChartData1" [colors]="chartColors" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n              [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div>\n          <div style="display: block">\n              <p>Martedì</p>\n            <canvas baseChart [datasets]="barChartData2" [colors]="chartColors" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n              [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div>\n          <div style="display: block">\n              <p>Mercoledì</p>\n            <canvas baseChart [datasets]="barChartData3" [colors]="chartColors" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n              [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div>\n          <div style="display: block">\n              <p>Giovedì</p>\n            <canvas baseChart [datasets]="barChartData4" [colors]="chartColors" [labels]="barChartLabels" [options]="barChartOptions"\n              [legend]="barChartLegend" [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div>\n          <div style="display: block">\n              <p>Venerdì</p>\n            <canvas baseChart [datasets]="barChartData5" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n              [colors]="chartColors" [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n\n  <ion-grid class="card" padding>\n    <ion-list>\n      <ion-item>\n        <ion-label>\n          <strong> Informazioni </strong>\n        </ion-label>\n      </ion-item>\n      <ion-item (click)=\'openMaps()\'> \n        <ion-label>\n          <ion-icon name="pin"></ion-icon> Via della Tecnica n. 1, 84084 Fisciano SA</ion-label>\n      </ion-item>\n      <ion-item *ngIf=\'aperto\'>\n        <ion-label>\n          <ion-icon name="time"></ion-icon>\n          <strong>Aperto</strong> chiude alle 15:00</ion-label>\n      </ion-item>\n      <ion-item *ngIf=\'!aperto\'>\n        <ion-label>\n          <ion-icon name="time"></ion-icon>\n          <strong>Chiuso</strong> riapre alle ore 12.00</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-grid>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/vincenzodauria/Desktop/easymensa-app/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_weather__["a" /* WeatherProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_weather__["a" /* WeatherProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_servermensa_servermensa__["a" /* ServermensaProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_servermensa_servermensa__["a" /* ServermensaProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */]) === "function" && _e || Object])
], HomePage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatistichePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servermensa_servermensa__ = __webpack_require__(209);
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
    };
    // go to result page
    StatistichePage.prototype.close = function () {
        this.ready = false;
    };
    /*
      //hello(){
        this.mensa.getExample().subscribe((data: any) => {
          console.log('data = '+ data)
          this.users = data[0].id;
        });
    
      }
    */
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
        selector: 'page-statistiche',template:/*ion-inline-start:"/Users/vincenzodauria/Desktop/easymensa-app/src/pages/statistiche/statistiche.html"*/'<!--\n  Generated template for the StatistichePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu">\n          UNISA Easy Mensa\n        </ion-icon>\n      </button>\n      <ion-title text-right>\n        <img alt="logo" width = 50 height= 50 src="assets/img/logo.png"> \n      </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h1>{{users}}</h1>\n\n  <ion-grid class="card">\n    <ion-list *ngIf = \'!ready\'>\n        <ion-item>\n            <ion-label>Personalizza il tipo di ricerca</ion-label>\n            <ion-select [(ngModel)]="value1">\n              <ion-option >Tempo d\'attesa</ion-option>\n              <ion-option>Numero di persone</ion-option>\n            </ion-select>\n          </ion-item>\n        <ion-item>\n            <ion-label>Seleziona tipo di ricerca</ion-label>\n            <ion-select [(ngModel)]="value">\n              <ion-option>Ricerca per anno</ion-option>\n              <ion-option>Ricerca per mese</ion-option>\n              <ion-option>Ricerca per giorno</ion-option>\n            </ion-select>\n          </ion-item>\n      <ion-item *ngIf = "value == \'Ricerca per anno\'">\n              <ion-label>Seleziona Anno</ion-label>\n              <ion-datetime displayFormat="YYYY" [(ngModel)]="myDate"></ion-datetime>\n      </ion-item>\n      <ion-item *ngIf = "value == \'Ricerca per mese\'">\n              <ion-label>Seleziona Mese</ion-label>\n              <ion-datetime displayFormat="MM/YYYY" pickerFormat="MM YYYY" [(ngModel)]="myDate"></ion-datetime>\n      </ion-item>\n      <ion-item *ngIf = "value == \'Ricerca per giorno\'">\n          <ion-label>Seleziona per giorno </ion-label>\n          <ion-datetime displayFormat="DD MM YYYY" [(ngModel)]="myDate" values = "YYYY"></ion-datetime>\n      </ion-item>\n    </ion-list>\n    <button ion-button *ngIf = \'!ready\' icon-start block no-margin color="primary" class="round" tappable (click)="doSearch(value1,value,myDate)">\n      <ion-icon name="search"></ion-icon> Cerca\n    </button>\n  </ion-grid>\n\n  <button ion-button *ngIf = \'ready\' tappable (click)="close()">\n    <ion-icon name="indietro"></ion-icon> Indietro \n  </button>\n\n  <ion-grid *ngIf = \'ready\' class="card" padding>\n    <ion-list>\n      <ion-item>\n        <ion-label> {{value1}} </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label> {{value}} </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label> {{doDate(myDate,value)}} </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-grid>\n\n  <ion-grid *ngIf = \'ready\' class="card" padding>\n    <ion-row>\n      <canvas baseChart width="300" height="200" [datasets]="lineChartData" [labels]="lineChartLabels" [options]="lineChartOptions"\n        [colors]="lineChartColors" [legend]="lineChartLegend" [chartType]="lineChartType" (chartHover)="chartHovered($event)"\n        (chartClick)="chartClicked($event)"></canvas>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/vincenzodauria/Desktop/easymensa-app/src/pages/statistiche/statistiche.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_servermensa_servermensa__["a" /* ServermensaProvider */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_servermensa_servermensa__["a" /* ServermensaProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_servermensa_servermensa__["a" /* ServermensaProvider */]) === "function" && _c || Object])
], StatistichePage);

var _a, _b, _c;
//# sourceMappingURL=statistiche.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServermensaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(109);
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
        this.apiKey = '2487fadc0b46b34cc4c41359ad98b76627e95206';
        this.url = 'https://cors.io/?http://dashpro.aitech.vision/dashboard/api/devices/mensa/';
    }
    ServermensaProvider.prototype.getConfigurationMensa = function () {
        console.log(this.url + 'configuration/' + this.apiKey);
        return this.http.get(this.url + 'configuration/' + this.apiKey).map(function (res) { return res; });
    };
    ;
    ServermensaProvider.prototype.getSensorsMensa = function () {
        return this.http.get(this.url + 'sensors/' + this.apiKey);
    };
    ServermensaProvider.prototype.getDataEnter = function (begin, end) {
        console.log(this.url + 'sensors/2/events/' + this.apiKey + '/?type=14&begin=' + begin + '&end=' + end);
        return this.http.get(this.url + 'sensors/2/events/' + this.apiKey + '/?type=14&begin=' + begin + '&end=' + end);
    };
    ServermensaProvider.prototype.getDataExit = function (begin, end) {
        console.log(this.url + 'sensors/33/events/' + this.apiKey + '/?type=14&begin=' + begin + '&end=' + end);
        return this.http.get(this.url + 'sensors/33/events/' + this.apiKey + '/?type=14&begin=' + begin + '&end=' + end);
    };
    return ServermensaProvider;
}());
ServermensaProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ServermensaProvider);

var _a;
//# sourceMappingURL=servermensa.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(357);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_weather__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_statistiche_statistiche__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_info_info__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_charts__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_servermensa_servermensa__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_launch_navigator__ = __webpack_require__(207);
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
            __WEBPACK_IMPORTED_MODULE_14__providers_servermensa_servermensa__["a" /* ServermensaProvider */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_launch_navigator__["a" /* LaunchNavigator */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_statistiche_statistiche__ = __webpack_require__(208);
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
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/vincenzodauria/Desktop/easymensa-app/src/app/app.html"*/'<ion-menu side="left" id="authenticated" [content]="content">\n  <ion-header>\n    <ion-toolbar>\n            <ion-col width-50 offset-25>\n            <h3><img src="assets/img/logoMensa.jpeg"></h3>\n            </ion-col>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content color="primary">\n\n    <ion-list class="user-list">\n      <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon" color="primary"></ion-icon>\n        <span ion-text color="primary">{{menuItem.title}}</span>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/vincenzodauria/Desktop/easymensa-app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
], MyApp);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 216,
	"./af.js": 216,
	"./ar": 217,
	"./ar-dz": 218,
	"./ar-dz.js": 218,
	"./ar-kw": 219,
	"./ar-kw.js": 219,
	"./ar-ly": 220,
	"./ar-ly.js": 220,
	"./ar-ma": 221,
	"./ar-ma.js": 221,
	"./ar-sa": 222,
	"./ar-sa.js": 222,
	"./ar-tn": 223,
	"./ar-tn.js": 223,
	"./ar.js": 217,
	"./az": 224,
	"./az.js": 224,
	"./be": 225,
	"./be.js": 225,
	"./bg": 226,
	"./bg.js": 226,
	"./bm": 227,
	"./bm.js": 227,
	"./bn": 228,
	"./bn.js": 228,
	"./bo": 229,
	"./bo.js": 229,
	"./br": 230,
	"./br.js": 230,
	"./bs": 231,
	"./bs.js": 231,
	"./ca": 232,
	"./ca.js": 232,
	"./cs": 233,
	"./cs.js": 233,
	"./cv": 234,
	"./cv.js": 234,
	"./cy": 235,
	"./cy.js": 235,
	"./da": 236,
	"./da.js": 236,
	"./de": 237,
	"./de-at": 238,
	"./de-at.js": 238,
	"./de-ch": 239,
	"./de-ch.js": 239,
	"./de.js": 237,
	"./dv": 240,
	"./dv.js": 240,
	"./el": 241,
	"./el.js": 241,
	"./en-au": 242,
	"./en-au.js": 242,
	"./en-ca": 243,
	"./en-ca.js": 243,
	"./en-gb": 244,
	"./en-gb.js": 244,
	"./en-ie": 245,
	"./en-ie.js": 245,
	"./en-il": 246,
	"./en-il.js": 246,
	"./en-nz": 247,
	"./en-nz.js": 247,
	"./eo": 248,
	"./eo.js": 248,
	"./es": 249,
	"./es-do": 250,
	"./es-do.js": 250,
	"./es-us": 251,
	"./es-us.js": 251,
	"./es.js": 249,
	"./et": 252,
	"./et.js": 252,
	"./eu": 253,
	"./eu.js": 253,
	"./fa": 254,
	"./fa.js": 254,
	"./fi": 255,
	"./fi.js": 255,
	"./fo": 256,
	"./fo.js": 256,
	"./fr": 257,
	"./fr-ca": 258,
	"./fr-ca.js": 258,
	"./fr-ch": 259,
	"./fr-ch.js": 259,
	"./fr.js": 257,
	"./fy": 260,
	"./fy.js": 260,
	"./gd": 261,
	"./gd.js": 261,
	"./gl": 262,
	"./gl.js": 262,
	"./gom-latn": 263,
	"./gom-latn.js": 263,
	"./gu": 264,
	"./gu.js": 264,
	"./he": 265,
	"./he.js": 265,
	"./hi": 266,
	"./hi.js": 266,
	"./hr": 267,
	"./hr.js": 267,
	"./hu": 268,
	"./hu.js": 268,
	"./hy-am": 269,
	"./hy-am.js": 269,
	"./id": 270,
	"./id.js": 270,
	"./is": 271,
	"./is.js": 271,
	"./it": 272,
	"./it.js": 272,
	"./ja": 273,
	"./ja.js": 273,
	"./jv": 274,
	"./jv.js": 274,
	"./ka": 275,
	"./ka.js": 275,
	"./kk": 276,
	"./kk.js": 276,
	"./km": 277,
	"./km.js": 277,
	"./kn": 278,
	"./kn.js": 278,
	"./ko": 279,
	"./ko.js": 279,
	"./ky": 280,
	"./ky.js": 280,
	"./lb": 281,
	"./lb.js": 281,
	"./lo": 282,
	"./lo.js": 282,
	"./lt": 283,
	"./lt.js": 283,
	"./lv": 284,
	"./lv.js": 284,
	"./me": 285,
	"./me.js": 285,
	"./mi": 286,
	"./mi.js": 286,
	"./mk": 287,
	"./mk.js": 287,
	"./ml": 288,
	"./ml.js": 288,
	"./mn": 289,
	"./mn.js": 289,
	"./mr": 290,
	"./mr.js": 290,
	"./ms": 291,
	"./ms-my": 292,
	"./ms-my.js": 292,
	"./ms.js": 291,
	"./mt": 293,
	"./mt.js": 293,
	"./my": 294,
	"./my.js": 294,
	"./nb": 295,
	"./nb.js": 295,
	"./ne": 296,
	"./ne.js": 296,
	"./nl": 297,
	"./nl-be": 298,
	"./nl-be.js": 298,
	"./nl.js": 297,
	"./nn": 299,
	"./nn.js": 299,
	"./pa-in": 300,
	"./pa-in.js": 300,
	"./pl": 301,
	"./pl.js": 301,
	"./pt": 302,
	"./pt-br": 303,
	"./pt-br.js": 303,
	"./pt.js": 302,
	"./ro": 304,
	"./ro.js": 304,
	"./ru": 305,
	"./ru.js": 305,
	"./sd": 306,
	"./sd.js": 306,
	"./se": 307,
	"./se.js": 307,
	"./si": 308,
	"./si.js": 308,
	"./sk": 309,
	"./sk.js": 309,
	"./sl": 310,
	"./sl.js": 310,
	"./sq": 311,
	"./sq.js": 311,
	"./sr": 312,
	"./sr-cyrl": 313,
	"./sr-cyrl.js": 313,
	"./sr.js": 312,
	"./ss": 314,
	"./ss.js": 314,
	"./sv": 315,
	"./sv.js": 315,
	"./sw": 316,
	"./sw.js": 316,
	"./ta": 317,
	"./ta.js": 317,
	"./te": 318,
	"./te.js": 318,
	"./tet": 319,
	"./tet.js": 319,
	"./tg": 320,
	"./tg.js": 320,
	"./th": 321,
	"./th.js": 321,
	"./tl-ph": 322,
	"./tl-ph.js": 322,
	"./tlh": 323,
	"./tlh.js": 323,
	"./tr": 324,
	"./tr.js": 324,
	"./tzl": 325,
	"./tzl.js": 325,
	"./tzm": 326,
	"./tzm-latn": 327,
	"./tzm-latn.js": 327,
	"./tzm.js": 326,
	"./ug-cn": 328,
	"./ug-cn.js": 328,
	"./uk": 329,
	"./uk.js": 329,
	"./ur": 330,
	"./ur.js": 330,
	"./uz": 331,
	"./uz-latn": 332,
	"./uz-latn.js": 332,
	"./uz.js": 331,
	"./vi": 333,
	"./vi.js": 333,
	"./x-pseudo": 334,
	"./x-pseudo.js": 334,
	"./yo": 335,
	"./yo.js": 335,
	"./zh-cn": 336,
	"./zh-cn.js": 336,
	"./zh-hk": 337,
	"./zh-hk.js": 337,
	"./zh-tw": 338,
	"./zh-tw.js": 338
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
webpackContext.id = 445;

/***/ })

},[339]);
//# sourceMappingURL=main.js.map