import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { LoginMainPageComponent } from './pages/login-main-page.component';
import { MaterialModule } from '../costom-module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormLoginComponent,
    LoginMainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    FormLoginComponent,
    LoginMainPageComponent
  ]
})
export class LoginModule { }
