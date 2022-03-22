import { Router } from '@angular/router';
import { AutenticacaoService } from './../../../autenticacao/shared/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private auteticacaoService: AutenticacaoService) { }

  ngOnInit(): void {
  }

  estaAutenticado() {
    return this.auteticacaoService.autenticado
  }

  logout() {
    this.auteticacaoService.logout()
    this.router.navigateByUrl('autenticacao/login')
  }

  eAluno() {
    return this.auteticacaoService.eAluno()
  }

  eProfessor() {
    return this.auteticacaoService.eProfessor()
  }

}
