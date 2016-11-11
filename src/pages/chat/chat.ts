import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';

import { AuthService } from '../../providers/auth';

@Component({
  selector: 'chat-home',
  templateUrl: 'chat.html'
})
export class ChatPage {

  messages: FirebaseListObservable<any>;
  newMessage: any = {};

  constructor(
    public navCtrl: NavController,
    public database: AngularFireDatabase,
    public authService: AuthService
  ) {
    this.messages = this.database.list('/messages');
  }

  logout(){
    this.authService.logout();
  }

  sendMessage(){
    this.newMessage.user = {
      email: this.authService.getUser().email,
      image: this.authService.getUser().photoURL
    }
    this.messages.push( this.newMessage );
    this.newMessage = {};
  }

}
