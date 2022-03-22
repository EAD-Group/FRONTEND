import { AutenticacaoService } from 'src/app/autenticacao/shared/autenticacao.service';
import { GetAvaliacoesFeitasDto } from './../../shared/models/get-avaliacoes-feitas.dto';
import { FazerAvaliacaoDto } from './../../shared/models/fazer-avaliacao.dto';
import { GetAvaliacaoDto } from './../../shared/models/get-avaliacao.dto';
import { Component, OnInit } from '@angular/core';
import { AvaliacoesService } from '../../shared/avaliacoes.service';

@Component({
  selector: 'app-notas-avaliacao',
  templateUrl: './notas-avaliacao.component.html',
  styleUrls: ['./notas-avaliacao.component.scss']
})
export class NotasAvaliacaoComponent implements OnInit {

  avaliacoes: GetAvaliacaoDto[] = []

  constructor(private autenticacaoService: AutenticacaoService,private avaliacoesService: AvaliacoesService) { }

  ngOnInit(): void {
    this.avaliacoes = this.avaliacoesService.getNotas(this.autenticacaoService.usuarioAtual?.nome!)
  }

  getMinhaAvaliacao(index: number): number {
    return this.avaliacoes[index].enviadas.findIndex(a => a.aluno === this.autenticacaoService.usuarioAtual?.nome)!
  }

  getAvaliacaoFeita(index: number): GetAvaliacoesFeitasDto {
    const numero = this.getMinhaAvaliacao(index)
    return this.avaliacoes[index].enviadas[numero]
  }

}
