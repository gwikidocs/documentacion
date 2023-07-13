import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'login-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {

  public authForm: FormGroup;

  constructor( private loginService: LoginService, private router: Router,
               private fb: FormBuilder ){

    this.authForm = this.fb.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required]
    });
  }

  login(){

    const { usuario, clave } = this.authForm.value;

      if(usuario === '0' && clave === '0') {
        this.loginService.logueado = true;

        this.redireccionar();
      }
  }

  private redireccionar():void {
    this.router.navigate(["/salidas"])
  }
}
