import { AdicionarCompromissoDto } from './models/adicionarCompromisso.dto';
import { GetCompromissoDto } from './models/getCompromisso.dto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GerenciarPlanejamentoService {

  compromissos: GetCompromissoDto[] = [
    // {
    //   id: 'fsdsfdsdf',
    //   titulo: 'Não havera aula',
    //   corpo: 'Algum corpo',
    //   data: new Date()
    // },
    // {
    //   id: 'sdga2',
    //   titulo: 'Não havera aula amanha',
    //   corpo: 'Algum corpo diferente',
    //   data: new Date()
    // }
  ]

  constructor() { }

  adicionarCompromisso(adicionarCompromisso: AdicionarCompromissoDto) {
    console.log(adicionarCompromisso.corpo)
    this.compromissos.push({
      titulo: adicionarCompromisso.titulo,
      corpo: adicionarCompromisso.corpo,
      data: adicionarCompromisso.data
    })
  }

  getCompromisso(_id: string): GetCompromissoDto | undefined {
    return this.compromissos.find(c => c.id === _id)
  }

  getCompromissos(): GetCompromissoDto[] {
    return this.compromissos
  }

}
