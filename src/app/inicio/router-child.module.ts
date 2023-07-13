import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { InicioMainPageComponent } from './pages/inicio-main-page/inicio-main-page.component';
import { ProximasSalidasComponent } from './components/proximas-salidas/proximas-salidas.component';

const childRoutes: Routes = [
    { path: '', component: InicioMainPageComponent },
    { path: 'proximaSalidas', component: ProximasSalidasComponent },
]   

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule],
})
export class RouterChildModule { }