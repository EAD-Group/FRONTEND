import { AdicionarAlunoAlunoComponent } from './components/adicionar-aluno-aluno/adicionar-aluno-aluno.component';
import { AdicionarAlunoFormComponent } from './components/adicionar-aluno-form/adicionar-aluno-form.component';
import { AdicionarAlunoEmptyComponent } from './components/adicionar-aluno-empty/adicionar-aluno-empty.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdicionarAlunoEmptyComponent
  },
  {
    path: 'add',
    component: AdicionarAlunoFormComponent
  },
  {
    path: ':id',
    component: AdicionarAlunoAlunoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdicionarAlunoRoutingModule { }
