import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/services/login.service';

@Injectable()
export class AuthGuard {

  constructor( private router: Router, private loginService: LoginService ) {}

  canActivate(): boolean {
    
    if( this.loginService.logueado) {
      return true;
    } else {
      this.router.navigate(['/login'])
      return false;
    }
  }
}
