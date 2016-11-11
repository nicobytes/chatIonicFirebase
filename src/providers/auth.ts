import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(
    public auth: AngularFireAuth
  ) {}

  register(email: string, password: string, image: string){
    return this.auth.createUser({
      email: email,
      password: password,
    })
    .then(data =>{
      return this.auth.getAuth().auth.updateProfile({
        displayName: '',
        photoURL: image
      })
    })
  }

  login(email: string, password: string){
    return this.auth.login({
      email: email,
      password: password
    })
  }

  getUser(){
    return this.auth.getAuth().auth;
  }

  logout(){
    this.auth.logout();
  }

}
