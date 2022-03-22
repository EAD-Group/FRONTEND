import { Router } from '@angular/router';
import { GetAvaliacaoDto } from './../../shared/models/get-avaliacao.dto';
import { AvaliacoesService } from './../../shared/avaliacoes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.scss']
})
export class AvaliacoesComponent implements OnInit {

  avaliacoes: GetAvaliacaoDto[] = []

  constructor(private avaliacaoService: AvaliacoesService, private router: Router) { }

  ngOnInit(): void {
    this.avaliacoes = this.avaliacaoService.getAvaliacoes()
  }

  redirecionarParaCorrecao(id: string) {
    this.router.navigate(['avaliacoes/correcao', id])
  }

}
