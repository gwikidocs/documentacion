import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InicioMainPageComponent } from './pages/inicio-main-page/inicio-main-page.component';
import { LoginModule } from '../login/login.module';
import { SalidasComponent } from './components/salidas/salidas.component';
import { ProximasSalidasComponent } from './components/proximas-salidas/proximas-salidas.component';
import { MaterialModule } from '../costom-module/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InicioMainPageComponent,
    SalidasComponent,
    ProximasSalidasComponent
  ],
  imports: [
    CommonModule,
    LoginModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    InicioMainPageComponent
  ]
})
export class InicioModule { }
