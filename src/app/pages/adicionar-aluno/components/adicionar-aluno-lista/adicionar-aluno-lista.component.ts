import { Router } from '@angular/router';
import { GerenciarAlunoService } from './../../shared/gerenciar-aluno.service';
import { GetAlunoDto } from './../../shared/models/getAlunos.dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-aluno-lista',
  templateUrl: './adicionar-aluno-lista.component.html',
  styleUrls: ['./adicionar-aluno-lista.component.scss']
})
export class AdicionarAlunoListaComponent implements OnInit {

  alunos: GetAlunoDto[] = []
  busca: string = ''

  constructor(private gerenciarAlunosService: GerenciarAlunoService, private router: Router) { }

  ngOnInit(): void {
    this.alunos = this.gerenciarAlunosService.getAlunos()
    console.log(this.alunos)
  }

  redirecionarAluno(_id: string) {
    this.router.navigateByUrl(`alunos/${_id}`)
  }

}
