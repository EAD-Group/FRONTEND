import { AutenticacaoService } from './../../../autenticacao/shared/autenticacao.service';
import { GetAlunoDto } from './models/getAlunos.dto';
import { AdicionarAlunoDto } from './models/adicionarAluno.dto';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class GerenciarAlunoService {


  constructor(private autenticacaoService: AutenticacaoService) { }

  adicionarAluno(adicionarAlunoDto: AdicionarAlunoDto): void {
    this.autenticacaoService.registrar(
      adicionarAlunoDto.nome.toUpperCase(),
      adicionarAlunoDto.email,
      adicionarAlunoDto.senha
    )
  }

  removerAluno(_id: string): void {
    this.autenticacaoService.usuarios = this.autenticacaoService.usuarios.filter(a => a.id !== _id)
  }

  getAluno(_id: string): GetAlunoDto | undefined {
    return this.autenticacaoService.usuarios.find(a => a.id == _id)
  }

  getAlunos(): GetAlunoDto[] {
    return this.autenticacaoService.usuarios.filter(a => a.role === 'ALUNO')
  }

}
