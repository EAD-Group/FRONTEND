import { GetAnotacoesDto } from './../models/get-anotacoes.dto';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarAnotacao'
})
export class FiltrarAnotacaoPipe implements PipeTransform {

  transform(anotacoes: GetAnotacoesDto[], busca: string): GetAnotacoesDto[] {
    return anotacoes.filter(anotacao => anotacao.titulo.toLowerCase().startsWith(busca.toLowerCase()))

  }

}
