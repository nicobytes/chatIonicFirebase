import { Component } from '@angular/core';
import { Platform, LoadingController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage } from '../pages/login/login';
import { ChatPage } from '../pages/chat/chat';

import { AngularFireAuth } from 'angularfire2';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(
    public platform: Platform,
    public loadCtrl: LoadingController,
    public auth: AngularFireAuth
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.listenAuth();
    });
  }

  private listenAuth(){
    let load = this.loadCtrl.create({
      dismissOnPageChange: true
    });
    load.present();
    this.auth.subscribe(user => {
      if(user){
        this.rootPage = ChatPage;
      }else{
        this.rootPage = LoginPage;
      }
      load.dismiss();
    })
  }
}
