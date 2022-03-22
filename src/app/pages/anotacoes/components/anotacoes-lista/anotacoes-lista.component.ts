import { AutenticacaoService } from './../../../../autenticacao/shared/autenticacao.service';
import { Router } from '@angular/router';
import { GerenciarAnotacoesService } from './../../shared/gerenciar-anotacoes.service';
import { Component, OnInit } from '@angular/core';
import { GetAnotacoesDto } from '../../shared/models/get-anotacoes.dto';

@Component({
  selector: 'app-anotacoes-lista',
  templateUrl: './anotacoes-lista.component.html',
  styleUrls: ['./anotacoes-lista.component.scss']
})
export class AnotacoesListaComponent implements OnInit {

  busca = ''
  anotacoes: GetAnotacoesDto[] = []

  constructor(private autenticacaoService: AutenticacaoService,private anotacaoService: GerenciarAnotacoesService, private router: Router) { }

  ngOnInit(): void {
    this.anotacoes = this.anotacaoService.getAnotacoes(this.autenticacaoService.usuarioAtual?.nome!)
  }

  redirecionarAnotacao(id: string) {
    this.router.navigate(['anotacoes', id])
  }

}
