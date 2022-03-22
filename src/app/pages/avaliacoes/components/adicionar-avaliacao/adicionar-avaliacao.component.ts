import { Router } from '@angular/router';
import { AvaliacoesService } from './../../shared/avaliacoes.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-adicionar-avaliacao',
  templateUrl: './adicionar-avaliacao.component.html',
  styleUrls: ['./adicionar-avaliacao.component.scss']
})
export class AdicionarAvaliacaoComponent implements OnInit {

  titulo: string = ''
  descricao: string = ''
  avaliacao: string = ''
  peso: number = 7

  constructor(private avaliacoesService: AvaliacoesService, private router: Router) { }

  ngOnInit(): void {
  }

  salvar() {
    this.avaliacoesService.adicionarAvaliacao({
      titulo: this.titulo,
      descricao: this.descricao,
      avaliacao: this.avaliacao,
      peso: this.peso
    })

    this.router.navigateByUrl('avaliacoes')

  }

  onChangeEditor(event: any) {
    this.avaliacao = escape(event['html'])
  }

}
