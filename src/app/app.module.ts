import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ChatPage } from '../pages/chat/chat';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';

import { AuthService } from '../providers/auth';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyAzCa_ln4xFu50Azk7EEq95MDmnsRAw52Q",
  authDomain: "chat-12b2e.firebaseapp.com",
  databaseURL: "https://chat-12b2e.firebaseio.com",
  storageBucket: "chat-12b2e.appspot.com",
  messagingSenderId: "70646797274"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    ChatPage,
    RegisterPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    RegisterPage,
    LoginPage
  ],
  providers: [
    AuthService
  ]
})
export class AppModule {}
