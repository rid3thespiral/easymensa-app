webpackJsonp([1],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServermensaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(206);
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
        this.apiKey = 'e5d2771d89306c93c264abd203751bd413d6cf28';
        this.urlBase = 'https://cors.io/?http://dashpro.aitech.vision/dashboard/api/devices/mensa10/';
    }
    ServermensaProvider.prototype.getConfigurationMensa = function () {
        console.log(this.urlBase + 'configuration/' + this.apiKey);
        return this.http.get(this.urlBase + 'configuration/' + this.apiKey).map(function (res) { return res; });
    };
    ;
    ServermensaProvider.prototype.getSensorsMensa = function () {
        return this.http.get(this.urlBase + 'sensors/' + this.apiKey);
    };
    ServermensaProvider.prototype.getDataQueue = function (begin, end) {
        var url = this.urlBase + 'sensors/129/events/' + this.apiKey + '/?type=11&begin=' + begin + '&end=' + end;
        console.log(url);
        return this.http.get(url);
    };
    ServermensaProvider.prototype.getDataQueueMinute = function (begin, end) {
        var url = this.urlBase + 'sensors/129/events/' + this.apiKey + '/?type=11&begin=' + begin + '&end=' + end + '&aggregation_mode=by_minute';
        console.log(url);
        return this.http.get(url);
    };
    ServermensaProvider.prototype.getDataQueueHour = function (begin, end) {
        var url = this.urlBase + 'sensors/129/events/' + this.apiKey + '/?type=11&begin=' + begin + '&end=' + end + '&aggregation_mode=by_hour';
        console.log(url);
        return this.http.get(url);
    };
    ServermensaProvider.prototype.getDataQueueDay = function (begin, end) {
        var url = this.urlBase + 'sensors/129/events/' + this.apiKey + '/?type=11&begin=' + begin + '&end=' + end + '&aggregation_mode=by_day';
        console.log(url);
        return this.http.get(url);
    };
    ServermensaProvider.prototype.getDataQueueWeek = function (begin, end) {
        var url = this.urlBase + 'sensors/129/events/' + this.apiKey + '/?type=11&begin=' + begin + '&end=' + end + '&aggregation_mode=by_week';
        console.log(url);
        return this.http.get(url);
    };
    return ServermensaProvider;
}());
ServermensaProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], ServermensaProvider);

//# sourceMappingURL=servermensa.js.map

/***/ }),

/***/ 112:
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
        selector: 'page-info',template:/*ion-inline-start:"C:\Users\asus\Desktop\EasyMensa\easymensa-app\src\pages\info\info.html"*/'<!--\n\n  Generated template for the InfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu">\n\n                UNISA Easy Mensa\n\n            </ion-icon>\n\n        </button>\n\n        <ion-title text-right>\n\n            <img alt="logo" width = 50 height= 50 src="assets/img/logo.png">\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="common-bg">\n\n\n\n    <ion-grid class="card" padding>\n\n        <ion-list>\n\n\n\n            <ion-item>\n\n                <ion-label>\n\n                    <strong> Info </strong>\n\n                </ion-label>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>\n\n                    <h2 ion-text color="darker"><strong ion-text color="darker">UNISA Easy Mensa</strong> è un progetto <br>sviluppato interamente nell\'ambito <br>del corso di <strong>\n\n                        Mobile Programming</strong>\n\n                        <br>nell’Anno Accademico 2017-2018.\n\n                    </h2>\n\n                </ion-label>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n    </ion-grid>\n\n\n\n    <ion-grid class="card" padding>\n\n        <ion-list>\n\n\n\n            <ion-item>\n\n                <ion-label>\n\n                    <strong>  Sviluppatori </strong>\n\n                </ion-label>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>\n\n                    Davide Battaglia\n\n                </ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>\n\n                    Vincenzo D\'Auria\n\n                </ion-label>\n\n\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>\n\n                    Roberto Pepe\n\n                </ion-label>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n    </ion-grid>\n\n\n\n    <ion-grid class="card" padding>\n\n        <ion-list>\n\n\n\n            <ion-item>\n\n                <ion-label>\n\n                    <strong> Docente</strong>\n\n                </ion-label>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>\n\n                    Prof. Alessia Saggese\n\n                </ion-label>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\asus\Desktop\EasyMensa\easymensa-app\src\pages\info\info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], InfoPage);

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
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
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(206);
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

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_weather__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_servermensa_servermensa__ = __webpack_require__(111);
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
        this.aperto = false;
        this.valoriMeseScorsoRT = [0, 0, 0, 0, 0, 0];
        this.tempoSpesoSingolaPersona = 5;
        this.personeAltriReparti = 5;
        this.lunedi = [0, 0, 0, 0, 0, 0];
        this.martedi = [0, 0, 0, 0, 0, 0];
        this.mercoledi = [0, 0, 0, 0, 0, 0];
        this.giovedi = [0, 0, 0, 0, 0, 0];
        this.venerdi = [0, 0, 0, 0, 0, 0];
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
        this.barChartLabels = ['12.00 - 12.30', '12.30 - 13.00', '13.00 - 13.00', '13.30 - 14.00', '14.00 - 14.30', '14.30 - 15.00'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.valoriMeseScorso = [0, 0, 0, 0, 0, 0];
    }
    ////////////////////////////////////////////////////////////////////////
    // SET DI FUNZIONI CHE VENGONO ESEGUITE QUANDO SI ACCEDE ALLA PAGINA HOME
    HomePage.prototype.ionViewWillEnter = function () {
        this.getWeather();
        this.inizializzaGrafi();
        this.getGrafoMeseScorso();
        this.utcTime();
        this.maxAttesa();
        this.getTimeConsigliato();
    };
    HomePage.prototype.utcTime = function () {
        var _this = this;
        setInterval(function () {
            _this.todayDate = new Date();
            var ora = _this.todayDate.getHours();
            if (ora > 11 && ora < 15)
                _this.aperto = true;
            else
                _this.aperto = false;
            //Query calcolo stima tempo e numero persone in real time
            var begin = _this.getUnixTimeGTM(_this.todayDate, 10, 0, 0);
            var end = _this.getUnixTimeGTM(_this.todayDate, 13, 0, 0);
            _this.mensaProvider.getDataQueueWeek(begin, end).subscribe(function (json) {
                _this.query = json.timeslots;
                if (json == NaN) {
                    _this.realTimeCountPerson = 0;
                    _this.realTimeStimaTempo = 0;
                }
                else {
                    var len = _this.query.length;
                    var aggregated_value = _this.query[len - 1].aggregated_value;
                    _this.realTimeCountPerson = aggregated_value;
                    _this.realTimeStimaTempo = _this.getTempoAttesa(Math.ceil(aggregated_value));
                }
            });
            ;
            //Query calcolo tempo massimo e tempo consigliato    
            _this.valoriMeseScorsoRT = _this.valoriMeseScorso;
            console.log(_this.valoriMeseScorsoRT);
            var l = _this.getMeseScorso().length;
            var indiceMin = 0;
            var min = _this.valoriMeseScorsoRT[0] / l;
            for (var i = 1; i < _this.valoriMeseScorsoRT.length; i++) {
                if ((Math.floor(_this.valoriMeseScorsoRT[i] / l)) < min) {
                    min = Math.floor(_this.valoriMeseScorsoRT[i] / l);
                    indiceMin = i;
                }
            }
            switch (indiceMin) {
                case 0: {
                    _this.tempoConsigliato = "12.00-12.30";
                    break;
                }
                case 1: {
                    _this.tempoConsigliato = "12.30-13.00";
                    break;
                }
                case 2: {
                    _this.tempoConsigliato = "13.00-13.30";
                    break;
                }
                case 3: {
                    _this.tempoConsigliato = "13.30-14.00";
                    break;
                }
                case 4: {
                    _this.tempoConsigliato = "14.00-14.30";
                    break;
                }
                case 5: {
                    _this.tempoConsigliato = "14.30-15.00";
                    break;
                }
            }
            var indiceMax = 0;
            var max = _this.valoriMeseScorsoRT[0] / l;
            for (var i = 1; i < _this.valoriMeseScorsoRT.length; i++) {
                if ((Math.floor(_this.valoriMeseScorsoRT[i] / l)) > max) {
                    max = Math.floor(_this.valoriMeseScorsoRT[i] / l);
                    indiceMax = i;
                }
            }
            switch (indiceMax) {
                case 0: {
                    _this.oraTempoMassimo = "12.00-12.30";
                    break;
                }
                case 1: {
                    _this.oraTempoMassimo = "12.30-13.00";
                    break;
                }
                case 2: {
                    _this.oraTempoMassimo = "13.00-13.30";
                    break;
                }
                case 3: {
                    _this.oraTempoMassimo = "13.30-14.00";
                    break;
                }
                case 4: {
                    _this.oraTempoMassimo = "14.00-14.30";
                    break;
                }
                case 5: {
                    _this.oraTempoMassimo = "14.30-15.00";
                    break;
                }
            }
            _this.tempoMassimo = max * 1.5;
        }, 10000);
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
        this.launchnavigator.navigate("Via della Tecnica n. 1, 84084 Fisciano SA");
    };
    HomePage.prototype.getUnixTimeGTM = function (data, ora, minuti, secondi) {
        data.setHours(ora);
        data.setMinutes(minuti);
        data.setSeconds(secondi);
        return (Math.ceil(data.getTime() / 1000)).toString();
    };
    HomePage.prototype.getTempoAttesa = function (numeroPersone) {
        if (numeroPersone < 6)
            return (numeroPersone) * this.tempoSpesoSingolaPersona;
        else
            return (numeroPersone - this.personeAltriReparti) * this.tempoSpesoSingolaPersona;
    };
    HomePage.prototype.maxAttesa = function () {
        return 1;
    };
    HomePage.prototype.getTimeConsigliato = function () {
        return 1;
    };
    HomePage.prototype.getGiorno = function () {
        var d = new Date();
        var n = d.getDay();
        return n - 1;
    };
    HomePage.prototype.getDay = function () {
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
    };
    /** Funzioni che uso nel file 'home.html' */
    HomePage.prototype.getValoriLunedi = function () {
        var barChartData1 = [
            { data: this.lunedi, label: 'Tempo di attesa stimato' },
            { data: this.getDatiMeseScorso(1), label: 'Media di questo mese' }
        ];
        return barChartData1;
    };
    HomePage.prototype.getValoriMartedi = function () {
        var barChartData2 = [
            { data: this.martedi, label: 'Tempo di attesa stimato' },
            { data: this.getDatiMeseScorso(2), label: 'Media di questo mese' }
        ];
        return barChartData2;
    };
    HomePage.prototype.getValoriMercoledi = function () {
        var barChartData3 = [
            { data: this.mercoledi, label: 'Tempo di attesa stimato' },
            { data: this.getDatiMeseScorso(3), label: 'Media di questo mese' }
        ];
        return barChartData3;
    };
    HomePage.prototype.getValoriGiovedi = function () {
        var barChartData4 = [
            { data: this.giovedi, label: 'Tempo di attesa stimato' },
            { data: this.getDatiMeseScorso(4), label: 'Media di questo mese' }
        ];
        return barChartData4;
    };
    HomePage.prototype.getValoriVenerdi = function () {
        var barChartData5 = [
            { data: this.venerdi, label: 'Tempo di attesa stimato' },
            { data: this.getDatiMeseScorso(5), label: 'Media di questo mese' }
        ];
        return barChartData5;
    };
    HomePage.prototype.getSettimana = function () {
        var oggi = new Date(); /** Mi calcolo la data di oggi */
        if (oggi.getDay() == 0) {
            var offeset = 6;
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
        return [lunedì, martedì, mercoledì, giovedì, venerdì];
    };
    /** FUNZIONE DA IGNORARE. ERA QUALLA CHE STAVO USANDO ALL'INIZIO, MA A QUANTO PARE MEGLIO USARE 30
     * VARIABILI GLOBALI
     */
    HomePage.prototype.getDatiMeseScorso = function (giorno) {
        var d = new Date();
        var n = d.getDay();
        var data = [0, 0, 0, 0, 0, 0];
        if (n == giorno) {
            var l = this.getMeseScorso().length;
            for (var i = 0; i < this.valoriMeseScorso.length; i++) {
                data[i] = Math.ceil(this.valoriMeseScorso[i] / l);
            }
            return data;
        }
        else {
            return [0, 0, 0, 0, 0, 0];
        }
    };
    HomePage.prototype.getGrafoMeseScorso = function () {
        var _this = this;
        var meseScorso = this.getMeseScorso();
        for (var i = 0; i < meseScorso.length; i++) {
            console.log(meseScorso[i]);
            var begin = this.getUnixTime(new Date(this.setOrario(meseScorso[i], 10, 0, 0)));
            var end = this.getUnixTime(new Date(this.setOrario(meseScorso[i], 13, 0, 0)));
            this.mensaProvider.getDataQueueMinute(begin, end).subscribe(function (data) {
                _this.json = data.timeslots;
                var l = _this.json.length;
                var passo = Math.floor(l / 6);
                if (l < passo) {
                    _this.valoriMeseScorso[i] = _this.valoriMeseScorso[indice] + 0;
                }
                else {
                    var indice = 0;
                    for (var x = 0; x < l; x = x + passo) {
                        var v = _this.json[x];
                        var j = v.aggregated_value;
                        _this.valoriMeseScorso[indice] = _this.valoriMeseScorso[indice] + j;
                        indice++;
                    }
                }
            });
            ;
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
    HomePage.prototype.giornoSettimana = function () {
        var oggi = new Date();
        var giornoSettimana;
        if (oggi.getDay() == 0) {
            giornoSettimana = 7;
        }
        else {
            giornoSettimana = oggi.getDay();
        }
        return giornoSettimana;
    };
    HomePage.prototype.getOffset = function (i) {
        var giornoSettimana = this.giornoSettimana();
        var offset;
        if (i >= giornoSettimana) {
            offset = 7;
        }
        else {
            offset = 0;
        }
        return offset;
    };
    HomePage.prototype.getQueryTimestamp = function (indice, offset) {
        var settimana = this.getSettimana();
        var giorno_corrente = new Date(settimana[indice]);
        var giorno_scorso_b = new Date(giorno_corrente.setDate(giorno_corrente.getDate() - offset));
        giorno_corrente = new Date(settimana[indice]);
        var giorno_scorso_e = new Date(giorno_corrente.setDate(giorno_corrente.getDate() - offset));
        giorno_scorso_b = this.setOrario(giorno_scorso_b, 10, 0, 0);
        giorno_scorso_e = this.setOrario(giorno_scorso_e, 13, 0, 0);
        var begin = this.getUnixTime(giorno_scorso_b);
        var end = this.getUnixTime(giorno_scorso_e);
        return [begin, end];
    };
    HomePage.prototype.getLunedi = function () {
        var _this = this;
        var offset = this.getOffset(1);
        var estremi = this.getQueryTimestamp(0, offset);
        var i = 0;
        this.mensaProvider.getDataQueueMinute(estremi[0], estremi[1]).subscribe(function (data) {
            _this.rest = data.timeslots;
            var l = _this.rest.length;
            var passo = Math.floor(l / 6);
            console.log(passo);
            if (l < passo) {
                _this.mercoledi = [0, 0, 0, 0, 0, 0];
            }
            else {
                var j = 0;
                for (var x = 0; x < l; x++) {
                    var v = _this.rest[x];
                    j = j + v.aggregated_value;
                    if (x == ((i + 1) * passo) - 1) {
                        _this.lunedi[i] = Math.ceil(j / (passo));
                        j = 0;
                        i++;
                    }
                }
            }
        });
        ;
    };
    HomePage.prototype.getMartedi = function () {
        var _this = this;
        var offset = this.getOffset(2);
        var estremi = this.getQueryTimestamp(1, offset);
        var i = 0;
        this.mensaProvider.getDataQueueMinute(estremi[0], estremi[1]).subscribe(function (data) {
            _this.rest = data.timeslots;
            var l = _this.rest.length;
            var passo = Math.floor(l / 6);
            if (l < passo) {
                _this.martedi = [0, 0, 0, 0, 0, 0];
            }
            else {
                var j = 0;
                for (var x = 0; x < l; x++) {
                    var v = _this.rest[x];
                    j = j + v.aggregated_value;
                    if (x == ((i + 1) * passo) - 1) {
                        _this.martedi[i] = Math.ceil(j / (passo));
                        j = 0;
                        i++;
                    }
                }
            }
        });
        ;
    };
    HomePage.prototype.getMercoledi = function () {
        var _this = this;
        var offset = this.getOffset(3);
        var estremi = this.getQueryTimestamp(2, offset);
        var i = 0;
        this.mensaProvider.getDataQueueMinute(estremi[0], estremi[1]).subscribe(function (data) {
            _this.rest = data.timeslots;
            var l = _this.rest.length;
            var passo = Math.floor(l / 6);
            if (l < passo) {
                _this.mercoledi = [0, 0, 0, 0, 0, 0];
            }
            else {
                var j = 0;
                for (var x = 0; x < l; x++) {
                    var v = _this.rest[x];
                    j = j + v.aggregated_value;
                    if (x == ((i + 1) * passo) - 1) {
                        _this.mercoledi[i] = Math.ceil(j / (passo));
                        j = 0;
                        i++;
                    }
                }
            }
        });
        ;
    };
    HomePage.prototype.getGiovedi = function () {
        var _this = this;
        var offset = this.getOffset(4);
        var estremi = this.getQueryTimestamp(3, offset);
        var i = 0;
        this.mensaProvider.getDataQueueMinute(estremi[0], estremi[1]).subscribe(function (data) {
            _this.rest = data.timeslots;
            var l = _this.rest.length;
            var passo = Math.floor(l / 6);
            if (l < passo) {
                _this.giovedi = [0, 0, 0, 0, 0, 0];
            }
            else {
                var j = 0;
                for (var x = 0; x < l; x++) {
                    var v = _this.rest[x];
                    j = j + v.aggregated_value;
                    if (x == ((i + 1) * passo) - 1) {
                        _this.giovedi[i] = Math.ceil(j / (passo));
                        j = 0;
                        i++;
                    }
                }
            }
        });
        ;
    };
    HomePage.prototype.getVenerdi = function () {
        var _this = this;
        var offset = this.getOffset(5);
        var estremi = this.getQueryTimestamp(4, offset);
        var i = 0;
        this.mensaProvider.getDataQueueMinute(estremi[0], estremi[1]).subscribe(function (data) {
            _this.rest = data.timeslots;
            var l = _this.rest.length;
            var passo = Math.floor(l / 6);
            if (l < passo) {
                _this.venerdi = [0, 0, 0, 0, 0, 0];
            }
            else {
                var j = 0;
                for (var x = 0; x < l; x++) {
                    var v = _this.rest[x];
                    j = j + v.aggregated_value;
                    if (x == ((i + 1) * passo) - 1) {
                        _this.venerdi[i] = Math.ceil(j / (passo));
                        j = 0;
                        i++;
                    }
                }
            }
        });
        ;
    };
    HomePage.prototype.getMeseScorso = function () {
        var oggi = new Date();
        var giorno = oggi.getDay();
        var meseScorso = oggi.getMonth() - 1;
        if (oggi.getMonth() == 0) {
            var anno = oggi.getFullYear() - 1;
            var meseScorso = 11;
        }
        else {
            var meseScorso = oggi.getMonth() - 1;
            var anno = oggi.getFullYear();
        }
        var date = new Date(anno, meseScorso, 1); /** Parto dal primo giorno del mese */
        var days = [];
        while (date.getMonth() === meseScorso) {
            if (date.getDay() == giorno) {
                days.push(new Date(date));
            }
            date.setDate(date.getDate() + 1); /** Passo al giorno successivo */
        }
        return days;
    };
    HomePage.prototype.inizializzaGrafi = function () {
        this.getLunedi();
        this.getMartedi();
        this.getMercoledi();
        this.getGiovedi();
        this.getVenerdi();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\asus\Desktop\EasyMensa\easymensa-app\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu">\n\n          UNISA Easy Mensa\n\n        </ion-icon>\n\n      </button>\n\n      <ion-title text-right>\n\n        <img alt="logo" width = 50 height= 50 src="assets/img/logo.png"> \n\n      </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="common-bg">\n\n\n\n  <ion-grid class="card" padding *ngIf="todayDate">\n\n    <ion-row>\n\n        <ion-col col-12>\n\n    <ion-list>\n\n\n\n        <ion-item *ngIf=\'aperto\'>\n\n            <ion-label>\n\n              <ion-icon name="pizza"><strong> Mensa Aperta </strong></ion-icon>\n\n            </ion-label>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf=\'!aperto\'>\n\n            <ion-label>\n\n              <ion-icon name="close-circle"> <strong> Mensa Chiusa </strong> </ion-icon> \n\n            </ion-label>\n\n        </ion-item>\n\n\n\n      <ion-item *ngIf=\'aperto\'>\n\n          <ion-label>\n\n            Chiude alle ore 15:00\n\n          </ion-label>\n\n      </ion-item>\n\n\n\n      <ion-item *ngIf=\'!aperto\'>\n\n          <ion-label>\n\n            Riapre alle ore 12.00\n\n          </ion-label>\n\n      </ion-item>\n\n\n\n  </ion-list>\n\n  </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid class="card" padding>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label>\n\n              <ion-icon name="person"> <strong>{{realTimeCountPerson}}</strong> </ion-icon>  </ion-label>\n\n          </ion-item>\n\n          <ion-item>\n\n            Persone in coda\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label>\n\n              <ion-icon name="alarm"> <strong>{{realTimeStimaTempo}} min</strong></ion-icon> </ion-label>\n\n          </ion-item>\n\n          <ion-item>\n\n            Tempo di attesa\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n  </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid class="card" padding>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label class="my-font">\n\n                <ion-icon name="alert"> <strong>{{tempoMassimo}}</strong> </ion-icon> </ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n                Picco di attesa alle {{oraTempoMassimo}}\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label>\n\n                <ion-icon name="ribbon"> <strong> {{tempoConsigliato}} </strong></ion-icon> </ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n                <strong> Orario consigliato per {{getDay()}}</strong>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n\n\n  <ion-card>\n\n    <ion-slides pager="true" [initialSlide]="getGiorno()">\n\n      <ion-slide>\n\n        <div>\n\n          <div style="display: block">\n\n            <p>Lunedì</p>\n\n            <canvas baseChart  [datasets]="getValoriLunedi()" [colors]="chartColors" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n\n              [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n\n          </div>\n\n        </div>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <div>\n\n          <div style="display: block">\n\n              <p>Martedì</p>\n\n            <canvas baseChart [datasets]="getValoriMartedi()" [colors]="chartColors" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n\n              [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n\n          </div>\n\n        </div>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <div>\n\n          <div style="display: block">\n\n              <p>Mercoledì</p>\n\n            <canvas baseChart [datasets]="getValoriMercoledi()" [colors]="chartColors" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n\n              [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n\n          </div>\n\n        </div>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <div>\n\n          <div style="display: block">\n\n              <p>Giovedì</p>\n\n            <canvas baseChart [datasets]="getValoriGiovedi()" [colors]="chartColors" [labels]="barChartLabels" [options]="barChartOptions"\n\n              [legend]="barChartLegend" [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n\n          </div>\n\n        </div>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <div>\n\n          <div style="display: block">\n\n              <p>Venerdì</p>\n\n            <canvas baseChart [datasets]="getValoriVenerdi()" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n\n              [colors]="chartColors" [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n\n          </div>\n\n        </div>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </ion-card>\n\n\n\n  <ion-grid class="card" padding>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>\n\n            <ion-icon name="pin"><strong> Dove Siamo </strong></ion-icon>\n\n        </ion-label>\n\n      </ion-item>\n\n      <ion-item (click)=\'openMaps()\'> \n\n        <ion-label>\n\n            <strong> Via della Tecnica n°1, Fisciano (SA)</strong>\n\n        </ion-label>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-grid>\n\n\n\n<ion-grid class="card" padding *ngIf="weather">\n\n    <ion-list>\n\n\n\n      <ion-row>\n\n        <ion-item>\n\n            <ion-icon name="umbrella"><strong> METEO {{weather.display_location.full}}</strong></ion-icon>\n\n        </ion-item>\n\n       </ion-row>\n\n\n\n    <ion-row>\n\n\n\n      <ion-col width-50 offset-25>\n\n            <ion-item>\n\n              <div class="icon">\n\n                <img src="{{weather.icon_url}}" alt="weather">\n\n              </div>\n\n              <h1 class="temp">{{weather.temp_c}}&deg;</h1>\n\n            </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col width-100>\n\n          <ion-item>\n\n            <strong>Umidità:</strong> {{weather.relative_humidity}}\n\n          </ion-item>\n\n          <ion-item>\n\n            <strong>Visibilità:</strong> {{weather.visibility_km}}\n\n          </ion-item>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n\n\n  </ion-list>\n\n\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\asus\Desktop\EasyMensa\easymensa-app\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_weather__["a" /* WeatherProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_weather__["a" /* WeatherProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_servermensa_servermensa__["a" /* ServermensaProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_servermensa_servermensa__["a" /* ServermensaProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */]) === "function" && _e || Object])
], HomePage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatistichePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servermensa_servermensa__ = __webpack_require__(111);
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
    function StatistichePage(navCtrl, navParams, mensaProvider, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mensaProvider = mensaProvider;
        this.loadingController = loadingController;
        this.tempoSpesoSingolaPersona = 5;
        this.personeAltriReparti = 5;
        this.ready = false;
        this.lineChartLegend = true;
        this.lineChartData = [
            { data: [], label: '' }
        ];
        this.lineChartType = 'line';
        this.lineChartLabels = [];
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
    StatistichePage.prototype.getUnixTime = function (data, ora, minuti, secondi) {
        data.setHours(ora);
        data.setMinutes(minuti);
        data.setSeconds(secondi);
        return (Math.ceil(data.getTime() / 1000)).toString();
    };
    StatistichePage.prototype.getLabel = function () {
        console.log(this.lineChartLabels);
        return this.lineChartLabels;
    };
    StatistichePage.prototype.getValori = function () {
        console.log(this.lineChartData);
        return this.lineChartData;
    };
    StatistichePage.prototype.getTempoAttesa = function (numeroPersone) {
        if (numeroPersone < 6)
            return (numeroPersone) * this.tempoSpesoSingolaPersona;
        else
            return (numeroPersone - this.personeAltriReparti) * this.tempoSpesoSingolaPersona;
    };
    StatistichePage.prototype.doSearch = function (value1, value, mydate) {
        var _this = this;
        if (value1 == null || value == null || mydate == null) {
            alert("Inserisci i valori");
        }
        else {
            if (value == 'Ricerca per anno') {
                var begin = this.getUnixTime(new Date('1/1/' + mydate), 10, 0, 0);
                var end = this.getUnixTime(new Date('12/31/' + mydate), 13, 0, 0);
                var loading_1 = this.loadingController.create({ content: "please wait..." });
                loading_1.present();
                this.mensaProvider.getDataQueueWeek(begin, end).subscribe(function (json) {
                    var index = 0;
                    _this.query = json.timeslots;
                    console.log(_this.query);
                    var len = _this.query.length;
                    for (var x = 0; x < len; x = x + 1) {
                        var aggregated_value = _this.query[x].aggregated_value;
                        var start_timestamp = _this.query[x].start_timestamp;
                        if (value1 == "Tempo d'attesa")
                            _this.lineChartData[0].data[index] = _this.getTempoAttesa(Math.ceil(aggregated_value));
                        else
                            _this.lineChartData[0].data[index] = Math.ceil(aggregated_value);
                        var giorno = new Date(start_timestamp * 1000).getDate() + 1;
                        var mese = new Date(start_timestamp * 1000).getMonth() + 1;
                        _this.lineChartLabels[index] = giorno + '/' + mese;
                        index = index + 1;
                    }
                    if (value1 == "Tempo d'attesa")
                        _this.lineChartData[0].label = 'Tempo di attesa';
                    else
                        _this.lineChartData[0].label = 'Numero di persone';
                    _this.ready = true;
                    loading_1.dismiss();
                });
                ;
            }
            if (value == 'Ricerca per mese') {
                var data = new Date(mydate);
                var anno = data.getFullYear().toString();
                var mese = (data.getMonth() + 1).toString();
                var begin = this.getUnixTime(new Date(mese + '/1/' + anno), 10, 0, 0);
                var end = this.getUnixTime(new Date(mese + '/31/' + anno), 13, 0, 0);
                var loading_2 = this.loadingController.create({ content: "please wait..." });
                loading_2.present();
                this.mensaProvider.getDataQueueDay(begin, end).subscribe(function (json) {
                    var index = 0;
                    _this.query = json.timeslots;
                    console.log(_this.query);
                    var len = _this.query.length;
                    for (var x = 0; x < len; x = x + 1) {
                        var aggregated_value = _this.query[x].aggregated_value;
                        var start_timestamp = _this.query[x].start_timestamp;
                        if (value1 == "Tempo d'attesa")
                            _this.lineChartData[0].data[index] = _this.getTempoAttesa(Math.ceil(aggregated_value));
                        else
                            _this.lineChartData[0].data[index] = Math.ceil(aggregated_value);
                        var giorno = new Date(start_timestamp * 1000).getDate() + 1;
                        var mese_1 = new Date(start_timestamp * 1000).getMonth() + 1;
                        _this.lineChartLabels[index] = giorno + '/' + mese_1;
                        index = index + 1;
                    }
                    if (value1 == "Tempo d'attesa")
                        _this.lineChartData[0].label = 'Tempo di attesa';
                    else
                        _this.lineChartData[0].label = 'Numero di persone';
                    _this.ready = true;
                    loading_2.dismiss();
                });
                ;
            }
            if (value == 'Ricerca per giorno') {
                var data = new Date(mydate);
                var anno = data.getFullYear().toString();
                var mese = (data.getMonth() + 1).toString();
                var giorno = data.getDate().toString();
                var begin = this.getUnixTime(new Date(mese + '/' + giorno + '/' + anno), 10, 0, 0);
                var end = this.getUnixTime(new Date(mese + '/' + giorno + '/' + anno), 13, 0, 0);
                var loading_3 = this.loadingController.create({ content: "please wait..." });
                loading_3.present();
                this.mensaProvider.getDataQueueMinute(begin, end).subscribe(function (json) {
                    var index = 0;
                    _this.query = json.timeslots;
                    console.log(_this.query);
                    var len = _this.query.length;
                    for (var x = 0; x < len; x = x + 1) {
                        var aggregated_value = _this.query[x].aggregated_value;
                        var start_timestamp = _this.query[x].start_timestamp;
                        var ora = new Date(start_timestamp * 1000).getHours();
                        var minuto = new Date(start_timestamp * 1000).getMinutes();
                        console.log(minuto);
                        if (minuto % 10 == 0) {
                            _this.lineChartLabels[index] = ora + ':' + minuto;
                            if (value1 == "Tempo d'attesa")
                                _this.lineChartData[0].data[index] = _this.getTempoAttesa(Math.ceil(aggregated_value));
                            else
                                _this.lineChartData[0].data[index] = Math.ceil(aggregated_value);
                            index = index + 1;
                        }
                    }
                    if (value1 == "Tempo d'attesa")
                        _this.lineChartData[0].label = 'Tempo di attesa';
                    else
                        _this.lineChartData[0].label = 'Numero di persone';
                    _this.ready = true;
                    loading_3.dismiss();
                });
                ;
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
        selector: 'page-statistiche',template:/*ion-inline-start:"C:\Users\asus\Desktop\EasyMensa\easymensa-app\src\pages\statistiche\statistiche.html"*/'<!--\n\n  Generated template for the StatistichePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu">\n\n          UNISA Easy Mensa\n\n        </ion-icon>\n\n      </button>\n\n      <ion-title text-right>\n\n        <img alt="logo" width = 50 height= 50 src="assets/img/logo.png"> \n\n      </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h1>{{users}}</h1>\n\n\n\n  <ion-grid class="card">\n\n    <ion-list *ngIf = \'!ready\'>\n\n        <ion-item>\n\n            <ion-label>Personalizza il tipo di ricerca</ion-label>\n\n            <ion-select [(ngModel)]="value1">\n\n              <ion-option >Tempo d\'attesa</ion-option>\n\n              <ion-option>Numero di persone</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        <ion-item>\n\n            <ion-label>Seleziona tipo di ricerca</ion-label>\n\n            <ion-select [(ngModel)]="value">\n\n              <ion-option>Ricerca per anno</ion-option>\n\n              <ion-option>Ricerca per mese</ion-option>\n\n              <ion-option>Ricerca per giorno</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n      <ion-item *ngIf = "value == \'Ricerca per anno\'">\n\n              <ion-label>Seleziona Anno</ion-label>\n\n              <ion-datetime displayFormat="YYYY" [(ngModel)]="myDate"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item *ngIf = "value == \'Ricerca per mese\'">\n\n              <ion-label>Seleziona Mese</ion-label>\n\n              <ion-datetime displayFormat="MM/YYYY" pickerFormat="MM YYYY" [(ngModel)]="myDate"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item *ngIf = "value == \'Ricerca per giorno\'">\n\n          <ion-label>Seleziona per giorno </ion-label>\n\n          <ion-datetime displayFormat="DD MM YYYY" [(ngModel)]="myDate" values = "YYYY"></ion-datetime>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button *ngIf = \'!ready\' icon-start block no-margin color="primary" class="round" tappable (click)="doSearch(value1,value,myDate)">\n\n      <ion-icon name="search"></ion-icon> Cerca\n\n    </button>\n\n  </ion-grid>\n\n\n\n  <button ion-button *ngIf = \'ready\' tappable (click)="close()">\n\n    <ion-icon name="indietro"></ion-icon> Indietro \n\n  </button>\n\n\n\n  <ion-grid *ngIf = \'ready\' class="card" padding>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label> {{value1}} </ion-label>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label> {{value}} </ion-label>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label> {{doDate(myDate,value)}} </ion-label>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-grid>\n\n\n\n  <ion-grid *ngIf = \'ready\' class="card" padding>\n\n    <ion-item>\n\n      <canvas baseChart width="300" height="200" [datasets]="getValori()" [labels]="getLabel()" [options]="lineChartOptions"\n\n        [colors]="lineChartColors" [legend]="lineChartLegend" [chartType]="lineChartType" (chartHover)="chartHovered($event)"\n\n        (chartClick)="chartClicked($event)"></canvas>\n\n    </ion-item>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\asus\Desktop\EasyMensa\easymensa-app\src\pages\statistiche\statistiche.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_servermensa_servermensa__["a" /* ServermensaProvider */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_servermensa_servermensa__["a" /* ServermensaProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], StatistichePage);

//# sourceMappingURL=statistiche.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_weather__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_statistiche_statistiche__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_info_info__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_charts__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_servermensa_servermensa__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_launch_navigator__ = __webpack_require__(208);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_statistiche_statistiche__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_info_info__ = __webpack_require__(112);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\asus\Desktop\EasyMensa\easymensa-app\src\app\app.html"*/'<ion-menu side="left" id="authenticated" [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n            <ion-col width-50 offset-25>\n\n            <h3><img src="assets/img/logoMensa.jpeg"></h3>\n\n            </ion-col>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content color="primary">\n\n\n\n    <ion-list class="user-list">\n\n      <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n\n        <ion-icon item-left [name]="menuItem.icon" color="primary"></ion-icon>\n\n        <span ion-text color="primary">{{menuItem.title}}</span>\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\asus\Desktop\EasyMensa\easymensa-app\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

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