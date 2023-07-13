import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../common/helpers/auth.guard';
import { LoginMainPageComponent } from '../login/pages/login-main-page.component';

export const routes: Routes = [
    { 
        path: "salidas", 
        loadChildren: () => import('./router-child.module').then(m => m.RouterChildModule),
        // canActivate: [AuthGuard]
    },
    // { path: 'login', component: LoginMainPageComponent },
    { path: "", redirectTo: "/salidas", pathMatch:"full" },
    { path: "**", redirectTo: "/salidas", pathMatch:"full" }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InicioRouterModule { }