import { GetAlunoDto } from './../../shared/models/getAlunos.dto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GerenciarAlunoService } from '../../shared/gerenciar-aluno.service';

@Component({
  selector: 'app-adicionar-aluno-aluno',
  templateUrl: './adicionar-aluno-aluno.component.html',
  styleUrls: ['./adicionar-aluno-aluno.component.scss']
})
export class AdicionarAlunoAlunoComponent {

  aluno!: GetAlunoDto
  _id: string = 'a'

  constructor(private gerenciarAlunoService: GerenciarAlunoService,private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this._id = params['id']
    this.aluno = this.gerenciarAlunoService.getAluno(this._id)!
    })
  }

}
