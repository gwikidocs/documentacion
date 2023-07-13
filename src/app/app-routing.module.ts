import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioRouterModule } from './inicio/inicio.routing.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
];

@NgModule({
  imports: [  RouterModule.forRoot(routes),
    InicioRouterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
