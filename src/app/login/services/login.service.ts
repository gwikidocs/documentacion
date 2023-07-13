import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public logueado: boolean = false;
  
  constructor() { }
}
