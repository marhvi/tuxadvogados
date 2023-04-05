import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticarService } from '../service/autenticar.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private autenticar: AutenticarService, private routerControl: Router) {}

  canActivate():Promise<boolean>{ 
    return new Promise( results => {
      this.autenticar.detalesUser().onAuthStateChanged(user => {
        if (user) this.routerControl.navigate(['/home']);
        results(!user ? true : false);
      })
    })
  }
  
}
