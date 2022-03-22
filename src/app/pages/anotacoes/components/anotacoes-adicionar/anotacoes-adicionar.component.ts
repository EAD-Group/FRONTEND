import { AutenticacaoService } from './../../../../autenticacao/shared/autenticacao.service';
import { Router } from '@angular/router';
import { GerenciarAnotacoesService } from './../../shared/gerenciar-anotacoes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anotacoes-adicionar',
  templateUrl: './anotacoes-adicionar.component.html',
  styleUrls: ['./anotacoes-adicionar.component.scss']
})
export class AnotacoesAdicionarComponent implements OnInit {

  titulo = ''
  corpo = ''

  constructor(private autenticacaoService: AutenticacaoService, private anotacaoService: GerenciarAnotacoesService, private router: Router) { }

  ngOnInit(): void {
  }

  onChangeEditor(event: any) {
    this.corpo = escape(event['html'])
  }

  salvar() {
    this.anotacaoService.adicionarAnotacao({ titulo: this.titulo , corpo: this.corpo , nome: this.autenticacaoService.usuarioAtual?.nome! })
    this.router.navigateByUrl('/anotacoes')
  }

  

}
