import { GerenciarAlunoService } from './../../shared/gerenciar-aluno.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-aluno-form',
  templateUrl: './adicionar-aluno-form.component.html',
  styleUrls: ['./adicionar-aluno-form.component.scss']
})
export class AdicionarAlunoFormComponent implements OnInit {

  alunoFormulario!: FormGroup

  constructor(private gerenciarAlunoService: GerenciarAlunoService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.alunoFormulario = this.fb.group({
      nome: [ '' , [] ],
      sobrenome: ['', []],
      email: ['', []],
      senha: ['', []]
    })
  }

  adicionarAluno() {
    const { nome , sobrenome , email , senha } = this.alunoFormulario.value
    this.gerenciarAlunoService.adicionarAluno({ nome , email , senha })
    this.router.navigateByUrl('alunos')
  }

}
