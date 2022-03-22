import { Pipe, PipeTransform } from '@angular/core';
import { GetCompromissoDto } from '../models/getCompromisso.dto';

@Pipe({
  name: 'filtrarCompromisso'
})
export class FiltrarCompromissoPipe implements PipeTransform {

  transform(compromissos: GetCompromissoDto[]): GetCompromissoDto[] {
    return compromissos.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
  }

}
