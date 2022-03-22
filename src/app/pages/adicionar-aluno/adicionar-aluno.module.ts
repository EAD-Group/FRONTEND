import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdicionarAlunoRoutingModule } from './adicionar-aluno-routing.module';
import { AdicionarAlunoComponent } from './components/adicionar-aluno/adicionar-aluno.component';
import { AdicionarAlunoListaComponent } from './components/adicionar-aluno-lista/adicionar-aluno-lista.component';
import { AdicionarAlunoFormComponent } from './components/adicionar-aluno-form/adicionar-aluno-form.component';
import { AdicionarAlunoEmptyComponent } from './components/adicionar-aluno-empty/adicionar-aluno-empty.component';
import { AdicionarAlunoAlunoComponent } from './components/adicionar-aluno-aluno/adicionar-aluno-aluno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltrarAlunoPipe } from './shared/pipes/filtrar-aluno.pipe';


@NgModule({
  declarations: [
    AdicionarAlunoComponent,
    AdicionarAlunoListaComponent,
    AdicionarAlunoFormComponent,
    AdicionarAlunoEmptyComponent,
    AdicionarAlunoAlunoComponent,
    FiltrarAlunoPipe
  ],
  imports: [
    CommonModule,
    AdicionarAlunoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdicionarAlunoModule { }
