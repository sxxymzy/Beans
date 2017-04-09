import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackgroundGeolocation, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private backgroundGeolocation: BackgroundGeolocation) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      // this.startTrack();
    });
  }

  private startTrack() {
    this.backgroundGeolocation.configure({
      desiredAccuracy: 0,
      stationaryRadius: 0,
      distanceFilter: 0,
      debug: true, //  enable this hear sounds for background-geolocation life-cycle.
      notificationTitle: '行动中...',
      notificationText: 'Beans',
      notificationIconColor: '#939393',
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates
    })
      .subscribe((location: BackgroundGeolocationResponse) => {
        console.log(location);
        this.backgroundGeolocation.finish();

      });
    // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
    this.backgroundGeolocation.start();
  }
}
