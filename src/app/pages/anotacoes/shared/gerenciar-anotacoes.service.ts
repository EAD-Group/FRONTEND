import { AdicionarAnotacoesDTO } from './models/adicionar-anotacoes.dto';
import { GetAnotacoesDto } from './models/get-anotacoes.dto';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'


@Injectable({
  providedIn: 'root'
})
export class GerenciarAnotacoesService {

  anotacoes: GetAnotacoesDto[] = [
    {
      id: '123',
      titulo: 'anotacao simples',
      corpo: 's',
      nome: 'PROFESSOR'
    },
    {
      id: 's13',
      titulo: 'Aluma ano',
      corpo: 'd',
      nome: 'DAVI'
    }
  ]

  constructor() { }

  adicionarAnotacao(adicionarAnotacao: AdicionarAnotacoesDTO) {
    this.anotacoes.push({
      id: uuid(),
      titulo: adicionarAnotacao.titulo,
      corpo: adicionarAnotacao.corpo,
      nome: adicionarAnotacao.nome
    })
  }

  getAnotacao(id: string): GetAnotacoesDto | undefined {
    const anotacao =  this.anotacoes.find(a => a.id === id)!
    anotacao.corpo = unescape(anotacao?.corpo!)
    return anotacao
  }

  getAnotacoes(nome: string): GetAnotacoesDto[] {
    return this.anotacoes.filter(a => a.nome === nome).map(a => {
      return {
        ...a, corpo: unescape(a.corpo)
      } 
    } )
  }
}
