import { Router } from '@angular/router';
import { GetAvaliacaoDto } from './../../shared/models/get-avaliacao.dto';
import { Component, OnInit } from '@angular/core';
import { AvaliacoesService } from '../../shared/avaliacoes.service';
import { AutenticacaoService } from 'src/app/autenticacao/shared/autenticacao.service';

@Component({
  selector: 'app-avaliacoes-pendentes',
  templateUrl: './avaliacoes-pendentes.component.html',
  styleUrls: ['./avaliacoes-pendentes.component.scss']
})
export class AvaliacoesPendentesComponent implements OnInit {

  avaliacoes: GetAvaliacaoDto[] = []

  constructor(private autenticacaoService: AutenticacaoService, private avaliacaoService: AvaliacoesService, private router: Router) { }

  ngOnInit(): void {
    this.avaliacoes = this.avaliacaoService.getAvaliacoesPendentes(this.autenticacaoService.usuarioAtual?.nome!)
  }

  redirecionarParaAtividade(id: string) {
    this.router.navigate(['avaliacoes', id])
  }

}
