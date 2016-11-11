import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { AuthService } from '../../providers/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder,
    public authService: AuthService
  ) {
    this.loginForm = this.makeLoginForm;
  }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  doLogin(){
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }

  goToRegisterPage(){
    this.navCtrl.push( RegisterPage );
  }

  private get makeLoginForm(){
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
