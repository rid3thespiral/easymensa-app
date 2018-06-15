import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";
import {HomePage} from "../pages/home/home";
import { StatistichePage } from "../pages/statistiche/statistiche";

import { ChartsModule } from 'ng2-charts';


// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StatistichePage,
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StatistichePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    WeatherProvider
  ]
})

export class AppModule {
}
