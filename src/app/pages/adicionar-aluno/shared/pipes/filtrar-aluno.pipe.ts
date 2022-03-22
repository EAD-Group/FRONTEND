import { GetAlunoDto } from './../models/getAlunos.dto';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarAluno'
})
export class FiltrarAlunoPipe implements PipeTransform {

  transform(alunos: GetAlunoDto[] , busca: string ): GetAlunoDto[] {
    return alunos.filter(aluno => aluno.nome.toLowerCase().startsWith(busca.toLowerCase()))
  }

}
