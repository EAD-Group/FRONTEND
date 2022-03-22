import { FazerAvaliacaoDto } from './models/fazer-avaliacao.dto';
import { GetAvaliacaoDto } from './models/get-avaliacao.dto';
import { Injectable } from '@angular/core';
import { AdicionarAvaliacaoDto } from './models/adicionar-avaliacao.dto';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class AvaliacoesService {

  avaliacoes: GetAvaliacaoDto[] = []

  constructor() { }

  adicionarAvaliacao(adicionarAvaliacaoDto: AdicionarAvaliacaoDto) {
    this.avaliacoes.splice(0,0, {
      id: uuid(),
      titulo: adicionarAvaliacaoDto.titulo,
      descricao: adicionarAvaliacaoDto.descricao,
      peso: adicionarAvaliacaoDto.peso,
      avaliacao: adicionarAvaliacaoDto.avaliacao,
      enviadas: []
    })
  }

  getAvaliacoes() {
    return this.avaliacoes
  }

  getAvaliacao(id: string) {
    const avaliacao = this.avaliacoes.find(a => a.id === id)!
    avaliacao.avaliacao = unescape(avaliacao.avaliacao)
    avaliacao.enviadas  = avaliacao.enviadas.map(a => {
      return {...a, avaliacaoFeita: unescape(a.avaliacaoFeita)}
    })
    return avaliacao
  }

  getNotas(aluno: string) {
    const avaliacoesFeitas = this.avaliacoes.filter(a => a.enviadas.find(b => b.aluno === aluno) !== undefined )
    return avaliacoesFeitas
  }

  getAvaliacoesPendentes(aluno: string): GetAvaliacaoDto[] {
    if (aluno === 'PROFESSOR') {
      return []
    } 
    const avaliacoes =  this.avaliacoes.filter(a => a.enviadas.find(b => b.aluno === aluno) == undefined  )
    return avaliacoes
  }

  corrigirAvaliacao(avaliacaoId: string , avaliacaoFeitaId: string , nota: number  ) {
    const avaliacao = this.avaliacoes.find(a => a.id === avaliacaoId)
    const avaliacaoFeita = avaliacao?.enviadas.find(a => a.id === avaliacaoFeitaId)
    avaliacaoFeita!.corrigida = true
    avaliacaoFeita!.nota = nota
  }

  fazerAvaliacao(fazerAvaliacao: FazerAvaliacaoDto) {
    const avaliacao = this.avaliacoes.find(a => a.id === fazerAvaliacao.avaliacao)
    avaliacao?.enviadas.push({
      id: uuid(),
      aluno: fazerAvaliacao.aluno,
      corrigida: false,
      nota: 0,
      avaliacaoFeita: fazerAvaliacao.avaliacaoFeita
    })
  }
}
