import { AutenticacaoService } from './../autenticacao/shared/autenticacao.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticadoGuard implements CanActivate {

  constructor(private autenticacaoService: AutenticacaoService , private router: Router){}

  canActivate() {
    if(this.autenticacaoService.autenticado) {
      return true
    } 
    this.router.navigateByUrl('/autenticacao')
    return false
  }
  
}
