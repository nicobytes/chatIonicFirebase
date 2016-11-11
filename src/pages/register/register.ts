import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from 'ionic-native';

import { AuthService } from '../../providers/auth';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  registerForm: FormGroup;
  image: string = 'assets/imgs/avatar.png';

  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder,
    public authService: AuthService
  ) {
    this.registerForm = this.makeRegisterForm;
  }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  doRegister(){
    let email = this.registerForm.value.email;
    let password = this.registerForm.value.password;
    let image = this.registerForm.value.image;
    this.authService.register(email, password, image);
  }

  getPicture(){
    let options = {
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100,
      allowEdit: true,
      cameraDirection: Camera.Direction.FRONT
    }
    Camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
      this.registerForm.get('image').setValue(`data:image/jpeg;base64,${imageData}`);
    })
    .catch(error =>{
      console.error( error );
    });
  }

  private get makeRegisterForm(){
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirm: ['', Validators.required],
      image: ['']
    })
  }

}
